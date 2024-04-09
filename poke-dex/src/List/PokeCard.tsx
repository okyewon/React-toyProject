import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PokeMarkChip from "../Common/PokeMarkChip";
import PokeNameChip from "../Common/PokeNameChip";
import { fetchPokemonDetail, PokemonDetailType } from "../Service/pokemonService";


const ImgURL = 'https://cdn.nookazon.com/pokemonswordshield/generation-i/bulbasaur.png'

interface PokeCardProps {
    name: string
}

const PokeCard = (props:PokeCardProps) => {
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null)

    const handleClick = () => {
        navigate(`/pokemon/${props.name}`);
    }

    useEffect(() => {
        (async () => {
            const detail = await fetchPokemonDetail(props.name);
            setPokemon(detail);
        })()
    }, [props.name])

    if(!pokemon) {
        return null;
    }

    return (
        <Item onClick={handleClick}>
            <Header>
                <PokeNameChip name={pokemon.name} id={pokemon.id} />
            </Header>
            <Body>
                <Image src={pokemon.images.dreamWorldFront} alt={pokemon.name} />
            </Body>
            <Footer>
                <PokeMarkChip />
            </Footer>
        </Item>
    )
}

const Item = styled.li`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 8px;
    width: 250px;
    height: 300px;
    border: 1px solid #c0c0c0;
    background-color: #fff;
    box-shadow: 1px 1px 3px 1px #c0c0c0;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.2)
    }

    &:active {
        opacity: 0.5;
        background-color: yellow;
        transition: background-color 0s;
    }
`

const Header = styled.section`
    display: flex;
`

const Body = styled.section`
    display: flex;
    justify-content: center;
`

const Image = styled.img`
    width: 85%;
    max-height: 225px;
`

const Footer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`


export default PokeCard;