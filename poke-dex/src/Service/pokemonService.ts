import axios from 'axios';
import { deserialize } from 'v8';

const remote = axios.create()

export interface PokemonListResponseType {
    count: number,
    next: string,
    results: {
        name: string,
        url: string
    }[]
}

export const fetchPokemons = async() => {
    const defaultURL = 'https://pokeapi.co/api/v2/pokemon'
    
    const response = await remote.get<PokemonListResponseType>(defaultURL)

    return response.data;
}

interface PokemonDetailResponseType {
    id: number,
    weight: number,
    height: number,
    name: string,
    types: {
        type: {
            name: string
        }
    }[],
    sprites:  {
        front_default: string,
        other: {
            dream_world: {
                front_default: string
            }
            home: {
                front_default: string
            }
            'official-artwork': {
                front_default: string
            }
        }
    },
    stats: {
        base_stat: number,
        stat: {
            name: string
        }
    }[]
}

interface PokemonSpeciesResponseType {
    color: {
        name: string
    },
    names: {
        name: string,
        language: {
            name: string
        }
    }[]
}

export interface PokemonDetailType {
    id: number,
    weight: number,
    height: number,
    name: string,
    koreanName: string,
    color: string,
    types: string[],
    images: {
        frontDefault: string,
        homeFrontDefault: string,
        dreamWorldFront: string,
        officialArtworkFront: string
    },
    baseStats: {
        name: string,
        value: number
    }[]
}

export const fetchPokemonDetail = async (name: string):Promise<PokemonDetailType> => {
    const pokemonDetailURL = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const pokemonSpeciesURL = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
    
    const response = await remote.get<PokemonDetailResponseType>(pokemonDetailURL);
    const speciesResponse = await remote.get<PokemonSpeciesResponseType>(pokemonSpeciesURL);
    const detail = response.data;
    const species = speciesResponse.data;
    console.log(detail)

    const koreanName = species.names.find(item => item.language.name === 'ko')?.name ?? detail.name;

    return {
        id: detail.id,
        name: detail.name,
        color: species.color.name,
        koreanName: koreanName,
        height: detail.height / 10, // 미터 단위
        weight: detail.weight / 10, // kg 단위
        types: detail.types.map(item => item.type.name),
        images: {
            frontDefault: detail.sprites.front_default,
            homeFrontDefault: detail.sprites.other.home.front_default,
            dreamWorldFront: detail.sprites.other.dream_world.front_default,
            officialArtworkFront: detail.sprites.other["official-artwork"].front_default
        },
        baseStats: detail.stats.map(item => {
            return {
                name: item.stat.name,
                value: item.base_stat
            }
        })
    }
}