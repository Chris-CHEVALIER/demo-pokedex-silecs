import React from 'react'
import { Box, Button, Modal, Typography } from '@mui/material'
import PokemonForm from './PokemonForm'

export default function PokemonModal ({ title, onClose, isModalVisible }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '15px',
    border: '2px solid #000',
    width: '30%',
    p: 4
  }

  return (
    <Modal
      open={isModalVisible}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          {title}
        </Typography>
        <PokemonForm />
        <Button
          variant='outlined'
          sx={{ width: '100%' }}
          onClick={onClose}
          color='error'
        >
          Fermer
        </Button>
      </Box>
    </Modal>
  )
}
