import React, {FunctionComponent} from "react";
import PokemonCard from "./pokemon-card";
import {Row} from "react-bootstrap";
import usePokemons from "../hooks/pokemon.hook";


const PokemonList: FunctionComponent = () => {
    const pokemons = usePokemons()
    return (
        <Row className="mt-5 d-flex justify-content-center ">
            {
                pokemons.map((pokemon, id) => {
                    return (
                        <PokemonCard pokemon={pokemon} key={pokemon.id}/>
                    )
                })
            }
        </Row>
    )
}
export default PokemonList