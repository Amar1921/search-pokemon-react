import React, {FunctionComponent, useState} from 'react';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';
import {useHistory} from 'react-router-dom';

type Props = {
    pokemon: Pokemon
};
type Field = {
    value: any,
    error?: string,
    isValid: boolean

}
type Form = {
    name: Field,
    hp: Field,
    cp: Field,
    types: Field,

}

const PokemonForm: FunctionComponent<Props> = ({pokemon}) => {
    const history = useHistory();
    const types: string[] = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
    const [form, setForm] = useState<Form>({
        name: {value: pokemon.name, isValid: true},
        hp: {value: pokemon.hp, isValid: true},
        cp: {value: pokemon.cp, isValid: true},
        types: {value: pokemon.types, isValid: true}
    })
    const hasType = (type: string) => {
        return form.types.value.includes(type)
    }
    const hundleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = {isValid: true, value: undefined, [fieldName]: {value: fieldValue}}

        setForm({...form, ...newField})
    }
    const validateForm = () => {
        let newForm: Form = form;

        // Validator name
        if (!/^[a-zA-Zàéè ]{3,25}$/.test(form.name.value)) {
            const errorMsg: string = 'Le nom du pokémon est requis (1-25).';
            const newField: Field = {value: form.name.value, error: errorMsg, isValid: false};
            newForm = {...newForm, ...{name: newField}};
        } else {
            const newField: Field = {value: form.name.value, error: '', isValid: true};
            newForm = {...newForm, ...{name: newField}};
        }

        // Validator hp
        if (!/^[0-9]{1,3}$/.test(form.hp.value)) {
            const errorMsg: string = 'Les points de vie du pokémon sont compris entre 0 et 999.';
            const newField: Field = {value: form.hp.value, error: errorMsg, isValid: false};
            newForm = {...newForm, ...{hp: newField}};
        } else {
            const newField: Field = {value: form.hp.value, error: '', isValid: true};
            newForm = {...newForm, ...{hp: newField}};
        }

        // Validator cp
        if (!/^[0-9]{1,2}$/.test(form.cp.value)) {
            const errorMsg: string = 'Les dégâts du pokémon sont compris entre 0 et 99';
            const newField: Field = {value: form.cp.value, error: errorMsg, isValid: false};
            newForm = {...newForm, ...{cp: newField}};
        } else {
            const newField: Field = {value: form.cp.value, error: '', isValid: true};
            newForm = {...newForm, ...{cp: newField}};
        }

        setForm(newForm);
        return newForm.name.isValid && newForm.hp.isValid && newForm.cp.isValid;
    }

    const isTypesValid = (type: string): boolean => {
        // Cas n°1: Le pokémon a un seul type, qui correspond au type passé en paramètre.
        // Dans ce cas on revoie false, car l'utilisateur ne doit pas pouvoir décoché ce type (sinon le pokémon aurait 0 type, ce qui est interdit)
        if (form.types.value.length === 1 && hasType(type)) {
            return false;
        }

        // Cas n°1: Le pokémon a au moins 3 types.
        // Dans ce cas il faut empêcher à l'utilisateur de cocher un nouveau type, mais pas de décocher les types existants.
        if (form.types.value.length >= 3 && !hasType(type)) {
            return false;
        }

        // Après avoir passé les deux tests ci-dessus, on renvoie 'true',
        // c'est-à-dire que l'on autorise l'utilisateur à cocher ou décocher un nouveau type.
        return true;
    }
    const selectType = (type: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        let newField: Field;
        if (checked) {
            const newTypes: string[] = form.types.value.concat([type]);
            newField = {isValid: true, value: newTypes}

        } else {
            const newTypes: string[] = form.types.value.filter((currentType: string) => currentType !== type);
            newField = {isValid: true, value: newTypes}
        }
        setForm({...form, ...{types: newField}})
    }
    const hundleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (isFormValid) {
            history.push(`/pokemon/${pokemon.id}`)
        }
        console.log(form)
    }
    return (
        <div className="col-6 justify-content-center">
            <form className="my-4" onSubmit={e => hundleSubmit(e)}>
                <div className="d-flex justify-content-between">
                    <h2 className="mt-4">Éditer {pokemon.name}</h2>
                    <img src={pokemon.picture} alt={pokemon.name} className="al"/>
                </div>
                <div className="form-inline ">
                    <label htmlFor="name">Nom</label>
                    <input className="form-control" type="text" name="name" onChange={e => hundleInputChange(e)}
                           value={form.name.value}/>
                    {form.name.error &&
                    <div className="card-panel red accent-1">
                        {form.name.error}
                    </div>}
                </div>
                {/* Pokemon cp */}
                <div className="form-inline">
                    <label htmlFor="cp">Dégâts</label>
                    <input id="cp" type="number" name="cp" onChange={e => hundleInputChange(e)} className="form-control"
                           value={form.cp.value}/>
                    {/* error */}
                    {form.cp.error &&
                    <div className="card-panel red accent-1">
                        {form.cp.error}
                    </div>}
                </div>
                {/* Pokemon hp */}
                <div className=" form-inline">
                    <label htmlFor="hp">Point de vie</label>
                    <input id="hp" className="form-control" onChange={e => hundleInputChange(e)} type="number" name="hp"
                           value={form.hp.value}/>
                    {/* error */}
                    {form.hp.error &&
                    <div className="card-panel red accent-1">
                        {form.hp.error}
                    </div>}
                </div>
                {/* Pokemon types */}
                <div className="form-group">
                    <label>Types</label>
                    {types.map(type => (
                        <div key={type} style={{marginBottom: '10px'}}>
                            <label>
                                <input id={type} type="checkbox" name="type" disabled={!isTypesValid(type)}
                                       onChange={e => selectType(type, e)}
                                       className="filled-in" value={type}
                                       checked={hasType(type)}/>
                                <span>
                                    <p className={formatType(type)}>{type}</p>
                                </span>
                            </label>
                        </div>
                    ))}
                </div>
                <div className="d-flex mt-4 justify-content-center">
                    <button className="btn btn-outline-dark" type="submit">Valider</button>
                </div>
            </form>
        </div>
    );
};

export default PokemonForm;