import React, { Fragment } from 'react'
import spinner from './spinner.gif'

const Spinner =  () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    /><p style={{ textAlign: 'center' }}>Wait for 20-30 seconds.</p>
  </Fragment>
)

export default Spinner
