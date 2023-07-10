import React, { useState } from 'react'
import { Button, FormControl, Input, InputLabel } from '@mui/material'
import { addPokemon, updatePokemon } from '../Fire'

export default function PokemonForm ({ currentPokemon, onClose }) {
  const [number, setNumber] = useState(
    currentPokemon ? currentPokemon.number : ''
  )
  const [name, setName] = useState(currentPokemon ? currentPokemon.name : '')
  const [image, setImage] = useState(currentPokemon ? currentPokemon.image : '')
  const [description, setDescription] = useState(
    currentPokemon ? currentPokemon.description : ''
  )

  const onSubmit = () => {
    let pokemon = {
      number,
      name,
      image,
      description
    }
    if (currentPokemon) {
      pokemon.id = currentPokemon.id
      updatePokemon(pokemon)
    } else {
      addPokemon(pokemon)
    }
    onClose()
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
          onChange={e => setNumber(e.target.value)}
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
          onChange={e => setName(e.target.value)}
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
          onChange={e => setImage(e.target.value)}
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
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
      </FormControl>
      <Button
        variant='outlined'
        sx={{ my: 2, width: '100%' }}
        color={currentPokemon ? 'warning' : 'primary'}
        onClick={onSubmit}
      >
        {currentPokemon ? 'Modifier' : 'Ajouter'}
      </Button>
    </>
  )
}
