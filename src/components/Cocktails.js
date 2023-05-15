import React from 'react'
import { useGlobalContext } from '../context'
import { Typography, Stack, Box } from '@mui/material';

const Cocktails = ({items}) => {
    const {cocktails} = useGlobalContext();
  return (
    <Stack component={'section'} direction={'row'} flexWrap={'wrap'} gap={'50px'} margin={'0 auto 50px auto'} justifyContent={'center'}>
        {cocktails.length>0?
        items.map(item=>{
            return <Stack width={'250px'}  height={'auto'} key={item.idDrink} sx={{backgroundColor: 'primary.main', borderRadius: '10%', overflow: 'hidden', boxShadow: '10px -5px 5px 0px rgba(0,0,0,0.7)',  
        }}>
                <Box sx={{width: '250px', height: '250px'}}>
                    <img className='img' src={item.strDrinkThumb} alt="" />
                </Box>
                <Typography key={item.idDrink} sx={{textAlign: 'center', fontSize: '1.5rem', padding: '20px 20px', color: 'white',}}>{item.strDrink}</Typography>
            </Stack>
        }):<Typography sx={{margin: '50px 0'}} variant='h5'>No such cocktails was fouded</Typography>
    }
      </Stack>
  )
}

export default Cocktails