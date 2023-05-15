import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Box margin={'200px auto'} sx={{fontSize: '2rem'}}>Page not found, <Link to={'/'}>return to home page</Link></Box>
  )
}

export default Error