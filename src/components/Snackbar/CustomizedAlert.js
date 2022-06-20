import React from 'react'
import { Snackbar,Alert } from '@mui/material'

const CustomizedAlert = ({open, setOpen}) => {
    const onCloseHandler = (e, reason) => {
        if(reason === 'clickaway') return;

        setOpen(false)
    }

  return (
    <div sx={{width: '100%'}}>
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={3000} onClose={onCloseHandler}>
            <Alert onClose={onCloseHandler} variant="filled" severity="success">
                The transaction was added successfully!
            </Alert>
        </Snackbar>
    </div>
  )
}

export default CustomizedAlert