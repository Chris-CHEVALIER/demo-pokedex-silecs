import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, CardActions } from '@mui/material'
import { deletePokemon } from '../Fire'

export default function PokemonCard ({ pokemon, onEdit }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={pokemon.name} />
      <CardMedia component='img' image={pokemon.image} alt={pokemon.name} />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {pokemon.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='outlined' color='warning' onClick={onEdit}>
          Modifier
        </Button>
        <Button
          variant='outlined'
          color='error'
          onClick={() => deletePokemon(pokemon)}
        >
          Supprimer
        </Button>
      </CardActions>
    </Card>
  )
}
