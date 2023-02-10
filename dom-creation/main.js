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
}
// renderPokemon(pokedex[2]);

for (var i = 0; i < pokedex.length - 1; i++) {
  // attach to row inside the loop here
  renderPokemon(pokedex[i]);
}

// console.log(renderPokemon(pokedex[2]));

// var connect = document.querySelector('.row');
// var pokemon1 = renderPokemon(pokedex[1]);
// connect.appendChild(pokemon1);

// var connect = document.querySelector('row');
// var pokemon1 = renderPokemon(pokedex[1]);
// connect.appendChild(pokemon1);

// at the row, you want to append your function called with a
// pokedex object as an argument
// what does that mean? do you append the function?
// the function is the thing doing the appending, no?  no.
// the thing doing the appending of the code in the function is
// you document query of class "row".
// it seems like you need to append your loop there(as a variable
// with a function inside?)
// which has called pokedex at an index (e.g. pokedex[0])
// then append the next pokedex index.  what would that
// look like?
// your loop would run the length of the array of objects.
// your code inside the loop would
// A) grab the function, run it with pokedex[i], and
// run again, the next time with the next pokedex[i];

// var div1Text = document.createTextNode('test');
// div1.appendChild(div1Text);

// var div1Text = document.createTextNode('test');
// div1.appendChild(div1Text);
// var positionDiv1 = document.querySelector('.container')[0];

// function renderPokemon(pokemon) {
//   var div1ThrdCol = document.createElement('div');
//   div1ThrdCol.setAttribute('class', 'column-third');
//   // var position
//   console.log(div1ThrdCol);
//   var div2PkmnCrd = document.createElement('div');
//   div2PkmnCrd.setAttribute('class', 'pokemon-card');
//   // var psndiv2PkmnCrd = document.querySelector('.column-third');

//   console.log(div2PkmnCrd);
//   var pikachuImg = document.createElement('img');
//   pikachuImg.setAttribute('src', 'images/bulbasaur.png');
//   var div3PkmnCrdTxt = document.createElement('div');
//   div3PkmnCrdTxt.setAttribute('class', 'pokemon-card-text');
//   console.log(div3PkmnCrdTxt);
//   var h2Pikachu = document.createElement('h2');
//   var h2PkchText = document.createTextNode('Pikachu');
//   h2Pikachu.appendChild(h2PkchText);
//   // console.log(h2Pikachu);
//   var h3025 = document.createElement('h3');
//   var h3025Text = document.createTextNode('#025');
//   h3025.appendChild(h3025Text);
//   // console.log(h2Pikachu);
//   var aboutCharacter = document.createElement('p');
//   var aboutText = document.createTextNode('Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.');
//   aboutCharacter.appendChild(aboutText);
//   // console.log(aboutCharacter);

//   div1ThrdCol.appendChild(div2PkmnCrd);
//   div2PkmnCrd.appendChild(pikachuImg);
//   div2PkmnCrd.appendChild(div3PkmnCrdTxt);
//   div3PkmnCrdTxt.appendChild(h2Pikachu);
//   div3PkmnCrdTxt.appendChild(h3025);
//   div3PkmnCrdTxt.appendChild(aboutCharacter);
// }
// console.log(renderPokemon(pokedex[1]));
