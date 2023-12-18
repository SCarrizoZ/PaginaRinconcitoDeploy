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

export const getUniqueBrands = (brandsList) => {
  return [...new Set(brandsList)];
}

export const deleteSpecialCharacters = (word) => {
  if (word.includes("'")) {
    word = word.replace("'", "")
  }
  if (word.includes('"')) {
    word = word.replace('"', "")
  }
  return word
}
  
export const getSingular = (word) => {
  // if there is a space
  if (word.includes(" ")) {
    const wordArray = word.split(" ")
    // iterate over the array to delete the mentioned characters
    wordArray.forEach((word, index) => {
      
      if (word[word.length - 1] === "s") {
        // wordArray[index] = word.slice(0, word.length - 1)
        // delete that character
        wordArray[index] = deleteSpecialCharacters(word.slice(0, word.length - 1))

      }
      console.log(wordArray)
      // if contain es at the end delete
      if (word[word.length - 2] === "e" && word[word.length - 1] === "s") {
        // wordArray[index] = word.slice(0, word.length - 2)
        wordArray[index] = deleteSpecialCharacters(word.slice(0, word.length - 2))
        console.log(wordArray)
      }

      console.log(word)
    })
    // join the array
    console.log(wordArray.join(" "))
    return wordArray.join(" ")
    
  }
  else{
    if (word[word.length - 1] === "s") {
      // wordArray[index] = word.slice(0, word.length - 1)
      // delete that character
      word = deleteSpecialCharacters(word.slice(0, word.length - 1))
      console.log(word)
    }
    // if contain es at the end delete
    if (word[word.length - 2] === "e" && word[word.length - 1] === "s") {
      // wordArray[index] = word.slice(0, word.length - 2)
      word = deleteSpecialCharacters(word.slice(0, word.length - 2))
      console.log(word)
    }
    return word
  }
}