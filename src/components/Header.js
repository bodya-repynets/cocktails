import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <Box component={'header'} sx={{position: 'fixed', width: '100vw', zIndex: 100, height: '80px', backgroundColor: 'primary.main'}}>
        <Box component={'nav'} sx={{width: '900px', padding: '0 50px', height: '100%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography variant='h4' color={'white'}>Cocktails</Typography>
        <Stack direction={'row'} gap={'40px'}>
        <Link to={'/'} className='link'>
        <Typography variant='h6' color={'white'}>Home</Typography>
        </Link>
        <Link to={'/about'} className='link'>
        <Typography variant='h6' color={'white'}>About</Typography>
        </Link>
        <Link to={'/random'} className='link'>
        <Typography variant='h6' color={'white'}>Random cocktail</Typography>
        </Link>
        </Stack>
        
        </Box>
    </Box>
  )
}

export default Header