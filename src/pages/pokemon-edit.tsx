import React, {FunctionComponent, useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';


type Params = { id: string };

const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({match}) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [notPo, setNotPo] = useState<string>()
    useEffect(() => {

        fetch(`http://localhost:3001/pokemon/${match.params.id}`)
            .then((response) => response.json())
            .then((pokemon) => {
                if (pokemon.id) {
                    setPokemon(pokemon)
                }

            })
            .catch(() => setNotPo('Aucun pokémon à afficher !'))

    }, [match.params.id]);

    return (
        <div>
            {pokemon ? (
                <div className="row d-flex justify-content-center">
                    {/*<h2 className="header center">Éditer { pokemon.name }</h2>*/}
                    <PokemonForm pokemon={pokemon}/>
                </div>
            ) : <h4>{notPo}</h4>}
        </div>
    );
}

export default PokemonEdit;