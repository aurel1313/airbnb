import React from 'react'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import Modal from '@mui/material/Modal'
export const Modals = ({ open, handleClose, theme }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: theme == 'dark' ? 'black' : 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        color: theme == 'dark' ? 'white' : 'black',
        backgroundColor: theme == 'dark' ? '#121212' : '',
    }

    return (
        <div>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        Disponible ulterieurement
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}
