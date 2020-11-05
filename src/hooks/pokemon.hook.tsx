import React, {ComponentType, useEffect, useState} from "react";
import Pokemon from "../models/pokemon";
import {Spinner} from "react-bootstrap";


const usePokemons = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [spinner, setSpinner] = useState<ComponentType>()
    const Loading = () => (<Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner>)
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
    return pokemons;
}
export default usePokemons;