import styled from "@emotion/styled";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import PokeMarkChip from "../Common/PokeMarkChip";
import PokeNameChip from "../Common/PokeNameChip";
import { PokeImageSkeleton } from "../Common/PokeImageSkeleton";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Store";
import { fetchPokemonDetail } from "../Store/pokemonDetailSlice";

interface PokeCardProps {
    name: string
}

const PokeCard = (props:PokeCardProps) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const imageType = useSelector((state: RootState) => state.imageType.type)
    const { pokemonDetails } = useSelector((state: RootState) => state.pokemonDetail);
    const pokemon = pokemonDetails[props.name];
    const [ref, { entry }] = useIntersectionObserver();
    const isVisible = entry && entry.isIntersecting;

    const handleClick = () => {
        navigate(`/pokemon/${props.name}`);
    }

    useEffect(() => {
        // viewport(화면)에 보여지고 있는 card만 호출
        if(!isVisible) {
            return;
        }

        dispatch(fetchPokemonDetail(props.name));
    }, [dispatch, props.name, isVisible])

    if(!pokemon) {
        return (
            <Item color={'#fff'} ref={ref}>
                <Header>
                    <PokeNameChip name={'???'} color={'#ffca06'} id={0} />
                </Header>
                <Body>
                    <PokeImageSkeleton />
                </Body>
                <Footer>
                    <PokeMarkChip />
                </Footer>
            </Item>
        )
    }

    return (
        <Item onClick={handleClick} color={pokemon.color} ref={ref}>
            <Header>
                <PokeNameChip name={pokemon.koreanName} color={pokemon.color} id={pokemon.id} />
            </Header>
            <Body>
                <Image src={pokemon.images[imageType]} alt={pokemon.name} />
            </Body>
            <Footer>
                <PokeMarkChip />
            </Footer>
        </Item>
    )
}

const Item = styled.li<{ color: string}>`
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
        background-color: ${props => props.color};
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