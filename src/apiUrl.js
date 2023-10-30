export const apiUrl = process.env.NODE_ENV === 'production'
  ? 'https://snudgeapi.onrender.com'
  : 'http://localhost:3000';