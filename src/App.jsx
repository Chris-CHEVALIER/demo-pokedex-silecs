import logo from './logo.png'
import './App.css'
import { useEffect, useState } from 'react'
import PokemonModal from './components/PokemonModal'
import { Box, Button, CircularProgress } from '@mui/material'
import { getPokemons } from './Fire'
import PokemonCard from './components/PokemonCard'

function App () {
  const [isPokemonModalVisible, setIsPokemonModalVisible] = useState(false)
  const [pokemons, setPokemons] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPokemons(pokemons => {
      setPokemons(pokemons)
      setLoading(false)
    })
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Pokédex</h1>
        <img src={logo} className='App-logo' alt='logo' />
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', m: 2 }}>
          {loading && pokemons.length <= 0 ? (
            <CircularProgress />
          ) : (
            pokemons.map(pokemon => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                onEdit={() => {
                  setCurrentPokemon(pokemon)
                  setIsPokemonModalVisible(true)
                }}
              />
            ))
          )}
        </Box>
        <Button
          variant='contained'
          onClick={() => {
            setIsPokemonModalVisible(true)
            setCurrentPokemon(null)
          }}
        >
          Ajouter un Pokémon
        </Button>
        {isPokemonModalVisible && (
          <PokemonModal
            title='Ajouter un Pokémon'
            onClose={() => setIsPokemonModalVisible(false)}
            isModalVisible={isPokemonModalVisible}
            currentPokemon={currentPokemon}
          />
        )}
      </header>
    </div>
  )
}

export default App
