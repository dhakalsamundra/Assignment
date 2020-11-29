import { useState, useEffect } from 'react'
import Axios from 'axios'

function useProducts(url) {
  const [products, setProducts] = useState([{}])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchUrl =  async () => {
      const result = await Axios(url)
      setProducts(result.data)
      setLoading(false)
    }
    fetchUrl()

  }, [url])


  return [products, loading]
}

export default useProducts