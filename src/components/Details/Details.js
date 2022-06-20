import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import useTransactions from '../../hooks/useTransactions';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


const Details = ({title}) => {
    //income
    //expense
   const {total, data} = useTransactions(title)
    const color = title === "Income" ?  "#80ff80" : "#ff4d4d"

  return (
    <div style={{borderBottom: `1px ${color} solid`, marginBottom: '20px'}}>
        <Container sx={{marginBottom:' 20px'}} maxWidth="md">
            <Box>
                <Typography sx={{marginTop: '10px'}} align="center" variant="h5" >{title}</Typography>
            </Box>
            <Typography align="left" variant="subtitle1" gutterBottom>${total}</Typography>
            <Doughnut type="doughnut" data={data}/>
        </Container>
    </div>
  )
}

export default Details