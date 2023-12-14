export const formatPrice = (price) => {
  return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} CLP`;
};

export const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, 300);
  // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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

// create a function that finds product by id
export const findProduct = (products, id) => {
  // console.log(products?.data)
  const product = products?.data?.find((item) => item.id === id);
  return product;
};

// capitalize first letter of string
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// change space by -
export const changeSpace = (str) => {
  return str.replace(/\s/g, '-');
};