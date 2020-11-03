import React, {FunctionComponent} from 'react';
import 'bootstrap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import PokemonsList from "./pages/pokemon-list";
import Header from "./components/header";
import PokemonsDetail from "./pages/pokemon-detail";
import PageNotFound from "./pages/page-not-found";
import PokemonEdit from "./pages/pokemon-edit";


const App: FunctionComponent = () => {

    const Amar = () => <h1>JE SUIS LA </h1>

    return (
        <Router>
            <div className="container">
                <Header/>
                {/**********POKEMONS LIST*************/}
                <Switch>
                    <Route exact path='/' component={PokemonsList}/>
                    <Route exact path='/pokemon' component={PokemonsList}/>
                    <Route path='/pokemon/edit/:id' component={PokemonEdit}/>
                    <Route path="/pokemon/:id" component={PokemonsDetail}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </div>

        </Router>

    );
}

export default App;
