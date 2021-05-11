import React, { useState, useEffect } from "react";
import "./App.css";
// import Header from "./components/Header";
// import Form from "./components/form/Form";
import Pokemon from "./components/pokemons/PokemonTable";

function App() {
    const DEMO_DATA = {
        client: 125,
        timestamp: "1996-02-27T00:00:01",
        pokemon: [
            { name: "pikachu", qty: 1 },
            { name: "ekans", qty: 1 },
            { name: "zubat", qty: 914 },
            { name: "diggersby", qty: 2 },
            { name: "agumon", qty: 2 },
        ],
    };

    const [pokemonState, setPokemonState] = useState<any>({});

    const fetchPokemonData = (name: string) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(json => {
            const newPokemonData = {
                type: json.types[0]["type"]["name"],
                image: json.sprites.front_default
            };
            setPokemonState((pokemonState: any) => ({...pokemonState ,...{[name]: newPokemonData}}));

        })
        .catch(err => console.log(err));
    };

    useEffect(() => {
        DEMO_DATA.pokemon.map((poke: any) => {
            fetchPokemonData(poke.name)
        });
    }, []);



    return (
        <div className="App">
            {/* <Header />
            <Form /> */}
            <Pokemon pokemons={DEMO_DATA.pokemon} pokemonState={pokemonState} />
        </div>
    );
}

export default App;
