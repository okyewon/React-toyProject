import styled from "@emotion/styled";
import PokeMarkChip from "../Common/PokeMarkChip";

const ImgURL = 'https://cdn.nookazon.com/pokemonswordshield/generation-i/bulbasaur.png'

const PokeDetail = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src={ImgURL} alt="포켓몬 이미지" />
            </ImageContainer>
            <Divider />
            <Body>
                <h2>기본 정보</h2>
                <Table>
                    <tbody>
                        <tr>
                            <TableHeader>번호</TableHeader>
                            <td>1</td>
                        </tr>
                        <tr>
                            <TableHeader>이름</TableHeader>
                            <td>이상해씨</td>
                        </tr>
                    </tbody>
                </Table>
                <h2>능력치</h2>
                <Table>
                    <tbody>
                        <tr>
                            <TableHeader>hp</TableHeader>
                            <td>45</td>
                        </tr>
                        <tr>
                            <TableHeader>attack</TableHeader>
                            <td>49</td>
                        </tr>
                    </tbody>
                </Table>
            </Body>
            <Footer>
                <PokeMarkChip />
            </Footer>
        </Container>
    )
}

const Container = styled.section`
    margin: 16px 32px;
    border: 1px solid #c0c0c0;
    border-radius: 16px;
    box-shadow: 1px 1px 3px 2px #c0c0c0
`

const ImageContainer = styled.section`
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    margin: 8px 0;
`

const Image = styled.img`
    width: 350px;
    height: 350px;
`

const Divider = styled.hr`
    margin: 32px;
    border-style: none;
    border-top: 1px dashed #d3d3d3;
`

const Body = styled.section`
    margin: 0 32px;
`

const Table = styled.table`
    width: 100%;
    border-bottom: 1px solid #f0f0f0;    
    border-spacing:0px;    
    border-collapse:collapse;

    th, td {
        padding: 6px 12px;
        border-top: 1px solid #f0f0f0;
    }
`

const TableHeader = styled.th`
    width: 1px;
    white-space: nowrap;
    text-align: left;
    font-weight: normal;
    font-size: 14px;
    color: #a0a0a0;
`

const Footer = styled.section`
    display: flex;
    margin: 32px 16px;
`

export default PokeDetail;