import React, { useState } from 'react'
import { Button, FormControl, Input, InputLabel } from '@mui/material'

export default function PokemonForm () {
  const [number, setNumber] = useState("")
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = () => {
    console.log(number, name, image, description)
  }

  return (
    <>
      <FormControl sx={{ display: 'block', my: 2 }}>
        <InputLabel htmlFor='number'>Numéro</InputLabel>
        <Input
          id='number'
          sx={{ width: '100%' }}
          type='number'
          placeholder='Le numéro du Pokémon'
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
      </FormControl>
      <FormControl sx={{ display: 'block', my: 2 }}>
        <InputLabel htmlFor='name'>Nom</InputLabel>
        <Input
          id='name'
          sx={{ width: '100%' }}
          type='text'
          placeholder='Le nom du Pokémon'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </FormControl>
      <FormControl sx={{ display: 'block', my: 2 }}>
        <InputLabel htmlFor='image'>Image</InputLabel>
        <Input
          id='image'
          sx={{ width: '100%' }}
          type='text'
          placeholder="L'image du Pokémon"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
      </FormControl>
      <FormControl sx={{ display: 'block', my: 2 }}>
        <InputLabel htmlFor='image'>Description</InputLabel>
        <Input
          id='image'
          sx={{ width: '100%' }}
          multiline
          type='text'
          placeholder='La description du Pokémon'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </FormControl>
      <Button variant='outlined' mL onClick={onSubmit}>
        Ajouter
      </Button>
    </>
  )
}
