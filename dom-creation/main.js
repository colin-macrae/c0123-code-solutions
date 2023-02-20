/* exported pokedex */
var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

function renderPokemon(pokemon) {
  var div1ThrdCol = document.createElement('div');
  div1ThrdCol.setAttribute('class', 'column-third');
  // console.log(div1ThrdCol);

  var div2PkmnCrd = document.createElement('div');
  div2PkmnCrd.setAttribute('class', 'pokemon-card');
  // console.log(div2PkmnCrd);

  var pikachuImg = document.createElement('img');
  pikachuImg.setAttribute('src', pokemon.imageUrl);
  // console.log(pikachuImg);

  var div3PkmnCrdTxt = document.createElement('div');
  div3PkmnCrdTxt.setAttribute('class', 'pokemon-card-text');
  // console.log(div3PkmnCrdTxt);

  var h2Pikachu = document.createElement('h2');
  h2Pikachu.textContent = pokemon.name;
  // console.log(h2Pikachu);

  var number = document.createElement('h3');
  number.textContent = '#' + pokemon.number;
  // console.log(number);

  var aboutCharacter = document.createElement('p');
  aboutCharacter.textContent = pokemon.description;

  div1ThrdCol.appendChild(div2PkmnCrd);
  div2PkmnCrd.appendChild(pikachuImg);
  div2PkmnCrd.appendChild(div3PkmnCrdTxt);
  div3PkmnCrdTxt.appendChild(h2Pikachu);
  div3PkmnCrdTxt.appendChild(number);
  div3PkmnCrdTxt.appendChild(aboutCharacter);

  return div1ThrdCol;
}

var attachPokemon = document.querySelector('.row');

for (var i = 0; i < pokedex.length; i++) {
  var pokemon = renderPokemon(pokedex[i]);
  attachPokemon.appendChild(pokemon);
}
