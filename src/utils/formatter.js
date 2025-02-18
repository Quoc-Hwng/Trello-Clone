export const capitalizeFirstLetter = (val) => {
  if (!val) return ''
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`
}

export const generatePlaceholderCard = (column) => {
  return {
    _id: `${column._id}-placeholder-card`,
    boardId: column.boardId,
    columnId: column._id,
    FE_PlaceholderCard: true
  }
}

export const removePlaceholderCard = (columnId, dndOrderedCardIds) => {
  const placeholderCardId = `${columnId}-placeholder-card`
  return dndOrderedCardIds.filter((cardId) => cardId !== placeholderCardId)
}
