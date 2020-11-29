import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import EuroIcon from '@material-ui/icons/Euro'

import useProducts from '../hooks/useProducts'
import Spinner from './Spinner'

const useStyles = makeStyles({
  blogCard: {
    marginTop: 20,
  },
})
const Accessory = () => {
  const [products, loading] = useProducts(
    'https://bad-api-assignment.reaktor.com/products/accessories'
  )
  const classes = useStyles()

  return (
    <div>
      {(loading) ? (
        <Spinner />

      ) : (
        products.map((jacket) => (
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
                  TYPES: {jacket.type}
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
export default Accessory