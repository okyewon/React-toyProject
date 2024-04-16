import styled from "@emotion/styled"
import { FormEvent, useEffect, useRef, useState } from "react";
import { useMap } from "../hooks/useMap";
import { PlactType } from "./mapTypes";

interface SearchLocationProps {
    onUpdatePlaces: (places:PlactType[]) => void
}

const SearchLocation = (props:SearchLocationProps) => {
    const map = useMap();
    const [keyword, setKeyword] = useState('');
    const [places, setPlaces] = useState<PlactType[]>([]);
    const placeService = useRef<kakao.maps.services.Places | null>(null);

    useEffect(() => {
        if(placeService.current) {
            return;
        }

        placeService.current = new kakao.maps.services.Places();
    }, [])

    const searchPlaces = (keyword:string) => {
        if (!keyword.replace(/^\s+|\s+$/g, '')) {
            alert('키워드를 입력해주세요!');
            return;
        }

        if(!placeService.current) {
            alert('placeService 에러');
            return;
        }

        placeService.current.keywordSearch(keyword, (data, status) => {
            if (status === kakao.maps.services.Status.OK) {
                const placeInfos = data.map(placeSearchResultItem => {
                    return {
                        id: placeSearchResultItem.id,
                        position: new kakao.maps.LatLng(Number(placeSearchResultItem.y), Number(placeSearchResultItem.x)),
                        title: placeSearchResultItem.place_name,
                        address: placeSearchResultItem.address_name
                    }
                })

                props.onUpdatePlaces(placeInfos);
                setPlaces(placeInfos);
            } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
                alert('검색 결과가 존재하지 않습니다.');
                return;
            } else if (status === kakao.maps.services.Status.ERROR) {
                alert('검색 결과 중 오류가 발생했습니다.');
                return;
            }
        })
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchPlaces(keyword);
    }

    const hancleItemClick = (place: PlactType) => {
        map.setCenter(place.position);
        map.setLevel(4);
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input value={keyword} onChange={(e) => {
                    setKeyword(e.target.value);
                }} />
            </Form>
            <List>
                {
                    places.map((item, index) => {
                        return (
                            <Item key={item.id} onClick={() => hancleItemClick(item)}>
                                <label>{`${index + 1}. ${item.title}`}</label>
                                <span>{item.address}</span>
                            </Item>
                        )
                    })
                }
            </List>
        </Container>
    )
}

const Container = styled.div`
    opacity: 0.8;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: white;
    overflow-y: auto;
`

const Form = styled.form`
    position: sticky;
    top: 0;
    display: flex;
`

const Input = styled.input`
    width: 100%;
    min-width: 200px;
    padding: 8px;
    border: 1px solid #c0c0c0;
`

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const Item = styled.li`
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-bottom: 1px dashed #d2d2d2;
    cursor: pointer;

    &:hover {
        opacity: 1;
        background-color: #d2d2d2;
        transition: background-color 0.2s;
    }
`

export default SearchLocation;