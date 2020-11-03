import React, {FunctionComponent, useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';


type Params = { id: string };

const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({match}) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        POKEMONS.forEach(pokemon => {
            if (match.params.id === pokemon.id.toString()) {
                setPokemon(pokemon);
            }
        })
    }, [match.params.id]);

    return (
        <div>
            {pokemon ? (
                <div className="row d-flex justify-content-center">
                    {/*<h2 className="header center">Éditer { pokemon.name }</h2>*/}
                    <PokemonForm pokemon={pokemon}/>
                </div>
            ) : (
                <h4 className="center">Aucun pokémon à afficher !</h4>
            )}
        </div>
    );
}

export default PokemonEdit;