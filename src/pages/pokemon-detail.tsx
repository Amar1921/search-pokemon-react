import React, {FunctionComponent, useEffect, useState} from 'react';
import {Link, RouteComponentProps, useHistory} from 'react-router-dom';
import Pokemon from '../models/pokemon';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';

type Params = { id: string };

const PokemonsDetail: FunctionComponent<RouteComponentProps<Params>> = ({match}) => {
    const history = useHistory();
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [notPok, setNotPok] = useState<string>('')
    useEffect(() => {
        fetch(`http://localhost:3001/pokemon/${match.params.id}`)
            .then((response) => response.json())
            .then((pokemon) => {
                if (pokemon.id) {
                    setPokemon(pokemon)
                } else {
                    setNotPok('Aucun pokémon à afficher !')
                }

            })


    }, [match.params.id]);
    /*  const Pok = () =>(
          <div className="row d-flex justify-content-center">
              <div className="col-sm-8">
                  <h2 className="header center">{pokemon.name}</h2>
                  <div className="card hoverable">
                      <div className="card-image">
                          <img src={pokemon.picture} alt={pokemon.name}
                               style={{width: '250px', margin: '0 auto'}}/>
                      </div>
                      <div className="d-flex justify-content-end pr-3">
                          <Link className="btn btn-outline-dark" to={`/pokemon/edit/${pokemon.id}`}>
                              Edit</Link>
                      </div>
                      <div className="card-stacked">
                          <div className="card-content">
                              <table className="bordered striped">
                                  <tbody>
                                  <tr>
                                      <td>Nom</td>
                                      <td><strong>{pokemon.name}</strong></td>
                                  </tr>
                                  <tr>
                                      <td>Points de vie</td>
                                      <td><strong>{pokemon.hp}</strong></td>
                                  </tr>
                                  <tr>
                                      <td>Dégâts</td>
                                      <td><strong>{pokemon.cp}</strong></td>
                                  </tr>
                                  <tr>
                                      <td>Types</td>
                                      <td>
                                          {pokemon.types.map(type => (
                                              <span key={type} className={formatType(type)}>{type}</span>
                                          ))}</td>
                                  </tr>
                                  <tr>
                                      <td>Date de création</td>
                                      <td>{formatDate(pokemon.created)}</td>
                                  </tr>
                                  </tbody>
                              </table>
                          </div>

                          <div className="card-footer">
                              <Link className="btn btn-outline-dark" to="/">Back</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )*/
    //const render = pokemon? Pok :<h4 className="center">Aucun pokémon à afficher !</h4>
    return (
        <div className="container">
            {pokemon ? (
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-8">
                        <h2 className="header center">{pokemon.name}</h2>
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src={pokemon.picture} alt={pokemon.name}
                                     style={{width: '250px', margin: '0 auto'}}/>
                            </div>
                            <div className="d-flex justify-content-end pr-3">
                                <Link className="btn btn-outline-dark" to={`/pokemon/edit/${pokemon.id}`}>
                                    Edit</Link>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <table className="bordered striped">
                                        <tbody>
                                        <tr>
                                            <td>Nom</td>
                                            <td><strong>{pokemon.name}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Points de vie</td>
                                            <td><strong>{pokemon.hp}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Dégâts</td>
                                            <td><strong>{pokemon.cp}</strong></td>
                                        </tr>
                                        <tr>
                                            <td>Types</td>
                                            <td>
                                                {pokemon.types.map(type => (
                                                    <span key={type} className={formatType(type)}>{type}</span>
                                                ))}</td>
                                        </tr>
                                        <tr>
                                            <td>Date de création</td>
                                            <td>{formatDate(pokemon.created)}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="card-footer">
                                    <Link className="btn btn-outline-dark" to="/">Back</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <h4 className="text-center">{notPok}</h4>}
        </div>
    );
}

export default PokemonsDetail;