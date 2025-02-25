// let apiRoot = 'https://trello-api-brne.onrender.com'
console.log(import.meta.env)
// if (process.env.BUILD_MODE === 'dev') {
let apiRoot = 'http://localhost:4000'
// }
// if (process.env.BUILD_MODE === 'production') {

//   apiRoot = 'https://trello-api-brne.onrender.com/'
// }

export const API_ROOT = apiRoot
