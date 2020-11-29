import { useState, useEffect } from 'react'

function useAvailabilities() {
  const [isLoading, setIsLoading] = useState(true)
  const [ availabilities, setAvailabilities ] = useState([])

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
        return [a.response, b.response, c.response, d.response, e.response]
      })
      .then(result => {
        setAvailabilities(result)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
      })
  }, [])


  return [availabilities, isLoading]
}

export default useAvailabilities