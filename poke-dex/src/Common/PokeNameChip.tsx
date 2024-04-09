import styled from "@emotion/styled";

const PokeNameChip = () => {
    return (
        <Chip>
            <Number>001</Number>
            <Text>이상해씨</Text>
        </Chip>
    )
}

const Chip = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #c0c0c0;
    border-radius: 16px;
    font-weight: bold;
    box-shadow: 0.5px 0.5px 0 0 #c0c0c0
`

const Number = styled.div`
    opacity: 0.8;
    padding: 4px 6px;
    background-color: green;
    border-radius: 16px;
`

const Text = styled.label`
    margin: 0 8px 0 4px
`

export default PokeNameChip;