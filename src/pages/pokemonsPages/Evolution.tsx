import React, { useState , useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getPokemonData } from '../../app/reducers/getPokemonData'
import PokemonCardGrid from '../../components/PokemonCardGrid'

function Evolution() {

    const dispatch = useAppDispatch()
    const [isLoaded, setisLoaded] = useState(false)
    const {currentPokemon,randomPokemons} = useAppSelector(({pokemon})=>pokemon)


    useEffect(() => {
    
    const fetchData = async()=>{
        const pokemons = currentPokemon?.evolution.map(({pokemon})=>pokemon)
        await dispatch(getPokemonData(pokemons!));
        setisLoaded(true)
    }
      fetchData()
    }, [dispatch,currentPokemon])
    
  return (
    <div className='page'>{
        isLoaded && <PokemonCardGrid pokemons={randomPokemons!}/>}</div>
  )
}

export default Evolution