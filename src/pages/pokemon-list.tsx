import React, {ComponentType, FunctionComponent, useEffect, useState} from "react";
import PokemonCard from "./pokemon-card";
import {Button, Container, Form, FormControl, Row, Spinner} from "react-bootstrap";
import Pokemon from "../models/pokemon";

const PokemonList: FunctionComponent = () => {
    // const pokemons = usePokemons()
    const Loading = () => (<Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner>)
    const [spinner, setSpinner] = useState<ComponentType>()
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    useEffect(() => {
        setSpinner(Loading)
        fetch(`http://localhost:3001/pokemon`)
            .then((response) => response.json())
            .then((pokemons) => {
                setSpinner(() => <> </>)
                setPokemons(pokemons)
                console.log(pokemons)
            })
            .catch(Error)
        {
            console.log(Error)
        }

    }, [])
    return (
        <>
            <Container>
                <div className="row d-flex justify-content-center">
                    <div className="col-6 d-flex justify-content-center">
                        <Form className="justify-content-around d-flex" inline>
                            <FormControl className="text-center" type="text" placeholder="Search"/>
                            <Button type="submit" variant="secondary">Submit</Button>
                        </Form>
                    </div>
                </div>
                <Row className="d-flex justify-content-center">
                    {spinner}

                    {
                        pokemons.map((pokemon) => (<PokemonCard key={pokemon.id} pokemon={pokemon}/>))

                    }
                </Row>
            </Container>
        </>

    )
}


export default PokemonList