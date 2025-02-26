let apiRoot = ''
if (import.meta.env.DEV) {
  apiRoot = 'http://localhost:4000'
}
if (import.meta.env.PROD) {
  apiRoot = 'https://trello-api-brne.onrender.com'
}

export const API_ROOT = apiRoot

export const DEFAULT_PAGE = 1
export const DEFAULT_ITEMS_PER_PAGE = 12
