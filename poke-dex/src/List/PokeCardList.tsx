import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { fetchPokemons, PokemonListResponseType } from "../Service/pokemonService";
import PokeCard from "./PokeCard";

const PokeCardList = () => {
    const [pokemons, setPokemons] = useState<PokemonListResponseType>({
        count: 0,
        next: '',
        results: []
    })

    const [infiniteRef] = useInfiniteScroll({
        loading: false,
        hasNextPage: pokemons.next !== '',
        onLoadMore: async () => {
            const morePokemons = await fetchPokemons(pokemons.next);

            setPokemons({
                ...morePokemons,
                results: [...pokemons.results, ...morePokemons.results]
            })
        },
        // When there is an error, we stop infinite loading.
        // It can be reactivated by setting "error" state as undefined.
        disabled: false,
        // `rootMargin` is passed to `IntersectionObserver`.
        // We can use it to trigger 'onLoadMore' when the sentry comes near to become
        // visible, instead of becoming fully visible on the screen.
        rootMargin: '0px 0px 400px 0px',
    });

    useEffect(() => {
        (async () => {
            const pokemons = await fetchPokemons();
            setPokemons(pokemons);
        })()
    }, [])

    return (
        <>
            <List>
                {
                    pokemons.results.map((pokemon, index) => {
                        return (
                            <PokeCard key={pokemon.name} name={pokemon.name} />
                        )
                    })
                }
            </List>
            <Loading ref={infiniteRef}>
                Loading
            </Loading>
        </>
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

const Loading = styled.div`
    display: flex;
    justify-content: center;
`

export default PokeCardList;