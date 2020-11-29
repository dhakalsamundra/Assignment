import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Toolbar, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  userNameNav: {
    flex: 1,
  },
})

const NavBar = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.userNameNav}>
      <Toolbar>
        <Button color='inherit' component={Link} to='/'>Jacket</Button>
        <Button color='inherit' component={Link} to='/shirts'>Shirt</Button>
        <Button color='inherit' component={Link} to='/accessories'>Accessories</Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar