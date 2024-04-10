import styled from "@emotion/styled";
import { useEffect } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Store";
import { fetchPokemons } from "../Store/pokemonsSlice";
import PokeCard from "./PokeCard";

const PokeCardList = () => {
    const dispatch = useAppDispatch();
    const { pokemons } = useSelector((state: RootState) => state.pokemons);

    const [infiniteRef] = useInfiniteScroll({
        loading: false,
        hasNextPage: pokemons.next !== '',
        onLoadMore: async () => {
            dispatch(fetchPokemons(pokemons.next));
        },
        disabled: false,
        rootMargin: '0px 0px 400px 0px',
    });

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch])

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