export const formatPrice = (price) => {
  return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} CLP`;
};

export const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user) {
    return user
  } else {
    return null
  }
}

export const getToken = () => {
  const token = localStorage.getItem('token')
  if (token) {
    return token
  } else {
    return null
  }
}