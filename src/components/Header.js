import React from 'react'
import {Box, Container, Typography} from '@mui/material'

const Header = () => {
  return (
    <Box component={'header'} sx={{position: 'fixed', width: '100vw', zIndex: 100, height: '80px', backgroundColor: 'primary.main'}}>
        <Box component={'nav'} sx={{width: '900px', height: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography variant='h4' color={'white'}>Cocktails</Typography>
        
        
        </Box>
    </Box>
  )
}

export default Header