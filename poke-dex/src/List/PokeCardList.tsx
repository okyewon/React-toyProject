import styled from "@emotion/styled";
import PokeCard from "./PokeCard";

const PokeCardList = () => {
    return (
        <List>
            {
                Array.from({length: 10}).map((_, index) => {
                    return (
                        <PokeCard key={index} />
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