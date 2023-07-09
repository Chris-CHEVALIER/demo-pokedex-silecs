import logo from './logo.png'
import './App.css'
import { useState } from 'react'
import PokemonModal from './components/PokemonModal'
import { Button } from '@mui/material'

function App () {
  const [isPokemonModalVisible, setIsPokemonModalVisible] = useState(false)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Pokédex</h1>
        <img src={logo} className='App-logo' alt='logo' />
        <Button
          variant='contained'
          onClick={() => setIsPokemonModalVisible(true)}
        >
          Ajouter un Pokémon
        </Button>
        {isPokemonModalVisible && (
          <PokemonModal
            title='Ajouter un Pokémon'
            onClose={() => setIsPokemonModalVisible(false)}
            isModalVisible={isPokemonModalVisible}
          />
        )}
      </header>
    </div>
  )
}

export default App
