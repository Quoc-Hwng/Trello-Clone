import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { isEmpty } from 'lodash'
import authorizedAxiosInstance from '~/utils/authorizeAxios'
import { API_ROOT } from '~/utils/constants'
import { generatePlaceholderCard } from '~/utils/formatter'
import { mapOrder } from '~/utils/sort'

const initialState = {
  currentActiveBoard: null
}

export const fetchBoardDetailsAPI = createAsyncThunk('activeBoard/fetchBoardDetailsAPI', async (boardId) => {
  const response = await authorizedAxiosInstance.get(`${API_ROOT}/v1/boards/${boardId}`)
  return response.data
})

export const activeBoardSlice = createSlice({
  name: 'activeBoard',
  initialState,
  reducers: {
    updateCurrentActiveBoard: (state, action) => {
      const board = action.payload

      state.currentActiveBoard = board
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBoardDetailsAPI.fulfilled, (state, action) => {
      //action.payload == response.data
      let board = action.payload
      board.columns = mapOrder(board.columns, board.columnOrderIds, '_id')
      board.columns.forEach((column) => {
        if (isEmpty(column.cards)) {
          column.cards = [generatePlaceholderCard(column)]
          column.cardOrderIds = [generatePlaceholderCard(column)._id]
        } else {
          column.cards = mapOrder(column?.cards, column?.cardOrderIds, '_id')
        }
      })
      state.currentActiveBoard = board
    })
  }
})

// Action creators are generated for each case reducer function
export const { updateCurrentActiveBoard } = activeBoardSlice.actions

export const selectCurrentActiveBoard = (state) => {
  return state.activeBoard.currentActiveBoard
}

export const activeBoardReducer = activeBoardSlice.reducer
