import styled from "@emotion/styled";

const PageHeader = () => {
    return (
        <Header>
            <Title>Pokémon</Title>
            <Select>
                <option value="Official">Official</option>
                <option value="A">A</option>
                <option value="B">B</option>
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