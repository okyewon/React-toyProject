import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { fetchPokemons, PokemonListResponseType } from "../Service/pokemonService";
import PokeCard from "./PokeCard";

const PokeCardList = () => {
    const [pokemons, setPokemons] = useState<PokemonListResponseType>({
        count: 0,
        next: '',
        results: []
    })
    useEffect(() => {
        (async () => {
            const pokemons = await fetchPokemons();
            setPokemons(pokemons);
        })()
    }, [])

    return (
        <List>
            {
                pokemons.results.map((pokemon, index) => {
                    return (
                        <PokeCard key={pokemon.name} name={pokemon.name} />
                    )
                })
            }
        </List>
    )
}

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 32px 0 0 0;
    padding: 0;
`

export default PokeCardList;