import React from 'react'
import { useAppSelector } from '../../app/hooks'
import PokemonContainer from '../../components/PokemonContainer'
import Info from '../../components/Info'

function Description() {
    const pokemonData = useAppSelector(({pokemon:{currentPokemon}})=>currentPokemon)
  return (
    <div className="description-container">
      {pokemonData && (
        <>   
          <div className="pokemon-content">
            <div className="pokemon-image-section">
              <PokemonContainer image={pokemonData?.image!}/>
            </div>
            <div className="pokemon-info-section">
              <Info data={pokemonData} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Description