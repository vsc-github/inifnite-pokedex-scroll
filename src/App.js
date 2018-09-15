import React, {Component} from 'react';
import './App.css';
import './normalize.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [
                {
                    url: "https://pokeapi.co/api/v2/pokemon/1/",
                    name: "bulbasaur"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/2/",
                    name: "ivysaur"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/3/",
                    name: "venusaur"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/4/",
                    name: "charmander"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/5/",
                    name: "charmeleon"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/6/",
                    name: "charizard"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/7/",
                    name: "squirtle"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/8/",
                    name: "wartortle"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/9/",
                    name: "blastoise"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/10/",
                    name: "caterpie"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/11/",
                    name: "metapod"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/12/",
                    name: "butterfree"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/13/",
                    name: "weedle"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/14/",
                    name: "kakuna"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/15/",
                    name: "beedrill"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/16/",
                    name: "pidgey"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/17/",
                    name: "pidgeotto"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/18/",
                    name: "pidgeot"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/19/",
                    name: "rattata"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/20/",
                    name: "raticate"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/21/",
                    name: "spearow"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/22/",
                    name: "fearow"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/23/",
                    name: "ekans"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/24/",
                    name: "arbok"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/25/",
                    name: "pikachu"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/26/",
                    name: "raichu"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/27/",
                    name: "sandshrew"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/28/",
                    name: "sandslash"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/29/",
                    name: "nidoran-f"
                },
                {
                    url: "https://pokeapi.co/api/v2/pokemon/30/",
                    name: "nidorina"
                }],
        }
    }

    render() {
        return (
            <div className="App">
                <div className="podium">
                    This is the podium!
                </div>
                <div className="pokedex">
                    <div className="row odd">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row even">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row odd">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row even">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row odd">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row even">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row odd">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row even">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row odd">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row even">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row odd">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row even">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row odd">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row even">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row odd">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row even">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row odd">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" alt=""/>
                            </div>
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row even">
                        <div className="left">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" alt=""/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="pokemon">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
