import React, {FunctionComponent} from 'react';
import 'bootstrap'
import {BrowserRouter as Router, Route,Switch, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import PokemonsList from "./pages/pokemon-list";
import Header from "./components/header";
import PokemonsDetail from "./pages/pokemon-detail";


const App: FunctionComponent = () => {

    const Amar =() =><h1>JE SUIS LA </h1>

    return (
       <Router>
           <div className="container">
               <Header/>
               {/**********POKEMONS LIST*************/}
               <Switch>
                   <Route exact path='/' component={PokemonsList}/>
                   <Route exact path='/pokemon' component={PokemonsList}/>
                   <Route path="/pokemon/:id" component={PokemonsDetail}/>
               </Switch>
           </div>

       </Router>

    );
}

export default App;
