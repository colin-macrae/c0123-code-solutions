export default function PokemonList({ pokedexArray }) {
  const listItems = pokedexArray.map(character =>
    <li>{character.name}</li>
  )
  return (
    <ul>{listItems}</ul>
  )
}


// alternatively you can embed it directly, without the listItems variable
// export default function PokemonList({ pokedexArray }) {
//   return (
//     pokedexArray.map(character => <li>{character.name}</li>)
//   )
// }
