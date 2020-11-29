import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import EuroIcon from '@material-ui/icons/Euro'

import useProducts from '../hooks/useProducts'
import Spinner from './Spinner'
import useAvailabilities from '../hooks/useAvailabilities'

const useStyles = makeStyles({
  blogCard: {
    marginTop: 20,
  },
})
const Shirt = () => {
  const [products, loading] = useProducts(
    'https://bad-api-assignment.reaktor.com/products/shirts'
  )
  const classes = useStyles()

  const [ availabilities, isLoading ] = useAvailabilities()

  const sortedProducts = products.sort((a, b) => (a.manufacturer > b.manufacturer) ? 1 : -1)

  let resultData = []

  if(availabilities.length > 2) {
    // eslint-disable-next-line array-callback-return
    resultData = sortedProducts.map(product => {
      if(product.manufacturer === 'abiplos'){
        const matchedItems = availabilities && availabilities[0].filter(item => item.id.toLowerCase() === product.id)
        return Object.assign({}, product, { status: getStatus(matchedItems) })
      } else if(product.manufacturer === 'derp'){
        const matchedItems = availabilities[1].filter(item => item.id.toLowerCase() === product.id)
        return Object.assign({}, product, { status: getStatus(matchedItems) })
      } else if(product.manufacturer === 'nouke'){
        const matchedItems = availabilities[2].filter(item => item.id.toLowerCase() === product.id)
        return Object.assign({}, product, { status: getStatus(matchedItems) })
      } else if(product.manufacturer === 'reps'){
        const matchedItems = availabilities[3].filter(item => item.id.toLowerCase() === product.id)
        return Object.assign({}, product, { status: getStatus(matchedItems) })
      } else if(product.manufacturer === 'xoon') {
        const matchedItems = availabilities[4].filter(item => item.id.toLowerCase() === product.id)
        return Object.assign({}, product, { status: getStatus(matchedItems) })
      }
    })
    // eslint-disable-next-line no-inner-declarations
    function getStatus(matchedItems){
      const newString = matchedItems[0].DATAPAYLOAD.slice(31)
      const ourArray = newString.split('')
      const statusInfo = ourArray.slice(0,ourArray.findIndex(((element) => element === '<')))
      return statusInfo.join('')
    }
  }

  return (
    <div>
      {(isLoading || loading) ? (
        <Spinner />

      ) : (
        resultData.map((jacket) => (
          <Card className={classes.blogCard} key={jacket.id}>
            <CardContent>
              <Typography gutterBottom variant='h6'>
                  Name: {jacket.name}
              </Typography>
              <Typography gutterBottom variant='h6'>
                <EuroIcon />: {jacket.price}
              </Typography>
              <Typography gutterBottom variant='h6'>
                  Brand: {jacket.manufacturer}
              </Typography>
              <Typography gutterBottom variant='h6'>
                  Status: {jacket.status}
              </Typography>
              <Typography gutterBottom variant='h6'>
                  Color:{' '}
                {jacket.color.map((element) => (
                  <li key={element}>{element}</li>
                ))}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
export default Shirt