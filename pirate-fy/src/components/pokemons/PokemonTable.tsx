interface Props {
    pokemons: any,
    pokemonState: any
}

const PokemonTable = (props: Props) => {
    console.log(props.pokemonState)
    return (
        <table>
            {props.pokemons.map((pokemon: any) => {
                return (
                    <tr>
                        <td>{pokemon.name}</td>
                        <td>{pokemon.qty}</td>
                        <td><img src={!!props.pokemonState[pokemon.name] ? props.pokemonState[pokemon.name]["image"] : ""}/></td>
                        <td>{!!props.pokemonState[pokemon.name] ? props.pokemonState[pokemon.name]["type"] : ""}</td>
                    </tr>

                )
            })}
        </table>
    );
};

export default PokemonTable;
