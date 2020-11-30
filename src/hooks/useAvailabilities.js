import { useState, useEffect } from 'react'

function useAvailabilities() {
  const [isLoading, setIsLoading] = useState(true)
  const [ availabilities, setAvailabilities ] = useState([])
  const [ error, setError ] = useState(null)

  useEffect(() => {
    Promise.all([
      fetch('https://bad-api-assignment.reaktor.com/availability/abiplos'),
      fetch('https://bad-api-assignment.reaktor.com/availability/derp'),
      fetch('https://bad-api-assignment.reaktor.com/availability/nouke'),
      fetch('https://bad-api-assignment.reaktor.com/availability/reps'),
      fetch('https://bad-api-assignment.reaktor.com/availability/xoon'),
    ])
      .then(async ([aa, bb, cc, dd, ee]) => {
        const a = await aa.json()
        const b = await bb.json()
        const c = await cc.json()
        const d = await dd.json()
        const e = await ee.json()
        return await[a.response, b.response, c.response, d.response, e.response]
      })
      .then(result => {
        setAvailabilities(result)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        setError(err)
        setIsLoading(false)
      })
  }, [])


  return [availabilities, isLoading, error]
}

export default useAvailabilities