import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { POKEMON_IMAGE_TYPE } from "../Constants";
import { RootState, useAppDispatch } from "../Store";
import { changeImageType, PokemonImageType } from "../Store/imageTypeSlice";

const PageHeader = () => {
    const type = useSelector((state: RootState) => state.imageType.type)
    const dispatch = useAppDispatch()

    const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeImageType({
            type: e.target.value as PokemonImageType
        }))
    }

    return (
        <Header>
            <Title>
                <Link to="/">Pokémon</Link>
            </Title>
            <Select value={type} onChange={handleChange}>
                <option value={POKEMON_IMAGE_TYPE.HOME_FRONT}>HomeFront</option>
                <option value={POKEMON_IMAGE_TYPE.OFFICIAL_ARTWORT}>Official</option>
                <option value={POKEMON_IMAGE_TYPE.DREAM_WORLD}>DreamWorld</option>
                <option value={POKEMON_IMAGE_TYPE.SHOW_FRONT}>GIF</option>
            </Select>
        </Header>
    )
}

const Header = styled.nav`
  display: flex;
  margin-botton: 16px;
  padding: 16px 32px;
  border-bottom: 1px solid #c0c0c0;
`

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  color: #ffca06;
  text-shadow: 1px 0 #216fc1, 0 1px #216fc1, -2px 0 #216fc1, 0 -1px #216fc1;
`

const Select = styled.select`
    display: flex;
    margin-left: auto;
    padding: 8px 12px;
    border-radius: 8px;
`

export default PageHeader;