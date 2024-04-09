import styled from "@emotion/styled";
import PokeMarkChip from "../Common/PokeMarkChip";
import PokeNameChip from "../Common/PokeNameChip";

const ImgURL = 'https://cdn.nookazon.com/pokemonswordshield/generation-i/bulbasaur.png'

const PokeCard = () => {
    return (
        <Item>
            <Header>
                <PokeNameChip />
            </Header>
            <Body>
                <Image src={ImgURL} alt="이상해씨 이미지" />
            </Body>
            <Footer>
                <PokeMarkChip />
            </Footer>
        </Item>
    )
}

const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 8px;
    width: 250px;
    height: 300px;
    border: 1px solid #c0c0c0;
    box-shadow: 1px 1px 3px 1px #c0c0c0;
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
`

const Footer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`


export default PokeCard;