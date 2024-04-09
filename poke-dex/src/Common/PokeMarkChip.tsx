import styled from "@emotion/styled";

const PokeMarkChip = () => {
    return (
        <Chip>
            <Text>Pokémon</Text>
        </Chip>
    )
}

const Chip = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 16px;
    border: 1px solid #c0c0c0;
    border-radius: 16px;
    font-weight: bold;
    box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
`

const Text = styled.label`
    padding: 0 8px;
`

export default PokeMarkChip;