export default function PokemonList({ pokedexArray }) {
  const listItems = pokedexArray.map(character =>
    <li>{character.name}</li>
  )
  return (
    <ul>{listItems}</ul>
  )
}
