import { useState, useEffect } from 'react'
import Axios from 'axios'

function useProducts(url) {
  const [products, setProducts] = useState([{}])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage ] = useState(null)


  useEffect(() => {
    const fetchUrl =  async () => {
      try{
        const result = await Axios(url)
        setProducts(result.data)
        setLoading(false)
      } catch(err){
        setErrorMessage(err)
        setLoading(false)
      }
    }
    fetchUrl()

  }, [url])


  return [products, loading, errorMessage]
}

export default useProducts