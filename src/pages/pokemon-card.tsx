import React, {FunctionComponent, useState} from 'react';
import Pokemon from '../models/pokemon';
import formatDate from '../helpers/format-date'
import formatType from "../helpers/format-type"
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '../components/pokemon-card.css'
import {useHistory} from 'react-router-dom'

type Props = {
    pokemon: Pokemon
    borderColor?: string
};

const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = '#009688'}) => {
    const history = useHistory();
    const {picture, name, created, types, id} = pokemon;
    const [color, setColor] = useState<string>("")
    const showBorder = () => (
        setColor(borderColor)
    )
    const hideBorder = () => (
        setColor("#f5f5f5")
    )
    const goToPokemon = (id: number) => {
        history.push(`/pokemon/${id}`);
    }

    return (
        <div className="col-sm-6 col-md-4 my-2 d-flex justify-content-center" onClick={() => (goToPokemon(id))}
             onMouseEnter={showBorder}
             onMouseLeave={hideBorder}>
            <div className=" Card carte" style={{borderColor: color, width: "18rem"}}>
                <Card.Img variant="top" src={picture} alt={name} className="imgCarte"/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {formatDate(created)}
                    </Card.Text>
                    <Card.Text>
                        {
                            types.map((type, index) => {
                                return (<span key={index} className={formatType(type)}>{type}</span>)
                            })
                        }
                    </Card.Text>
                </Card.Body>
            </div>
        </div>
    );
}

export default PokemonCard;