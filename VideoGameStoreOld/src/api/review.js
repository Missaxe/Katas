import { reviews, games } from '~/src/data/gameData'

export const fetchReviews = (gameId) => {
  const reviewList = JSON.parse(localStorage.getItem('reviews')) || reviews
  return Promise.resolve(reviewList.filter(r => r.gameId === parseInt(gameId)))
}

export const saveReview = (review) => {
  const reviewList = JSON.parse(localStorage.getItem('reviews')) || reviews
  reviewList.push(review)
  localStorage.setItem('reviews', JSON.stringify(reviewList))
}

export const fetchGames = () => {
  return Promise.resolve(games)
}

export const fetchGame = (id) => {
  return Promise.resolve(games.filter(g => g.id === parseInt(id))[0])
}

export const filterGames = (text) => {
  return Promise.resolve(games.filter(g => g.title.toLowerCase().includes(text.toLowerCase())))
}
