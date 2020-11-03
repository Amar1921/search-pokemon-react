import React, {FunctionComponent} from "react";
import PokemonCard from "./pokemon-card";
import usePokemons from "../hooks/pokemon.hook";
import {Button, Form, FormControl, Row} from "react-bootstrap";

const PokemonList: FunctionComponent = () => {
    const pokemons = usePokemons()
    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-6 d-flex justify-content-center">
                    <Form className="justify-content-around d-flex" inline>
                        <FormControl className="text-center" type="text" placeholder="Search"/>
                        <Button type="submit" variant="secondary">Submit</Button>
                    </Form>
                </div>
            </div>
            <Row className="mt-5 d-flex justify-content-center ">

                {
                    pokemons.map((pokemon, id) => {
                        return (

                            <PokemonCard pokemon={pokemon} key={pokemon.id}/>
                        )
                    })
                }
            </Row>
        </>

    )
}


export default PokemonList