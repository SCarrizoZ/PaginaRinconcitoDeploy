
import axios from 'axios'
import { useEffect, useState } from 'react'
export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url)
        setData(res.data)
        console.log(res.data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    getData()
  }, [url])
  return {
    data,
    loading,
    error
  }
}
