
// PARA RODAR O PROGRAMA NO TERMINAL < yarn dev >
import { Pokemon } from "./model/Pokemon";
import { Util } from "./util/Util";
import prompt from "prompt-sync";
import { MewTwo } from "./model/MewTwo";

const keyboard = prompt();

console.clear();

Util.presentation();

Util.presentationChoise();

let choise: number = +keyboard("");
choise = Util.verifyChoise(choise);

let pokemon: Pokemon = Util.choisePokemon(choise);

console.clear();
Util.presentationConfirmChoise(pokemon);
let option: number = +keyboard("");
console.clear();
if (option == 2) {
  Util.presentationChoise();
  choise = +keyboard("");
  console.clear();
  choise = Util.verifyChoise(choise);
}

pokemon = Util.choisePokemon(choise);

console.clear();
console.log(`O Pokemon escolhido foi ${pokemon.getName()} \n ${pokemon.status()}`);
console.log("\nPress ENTER to continue...");
choise = +keyboard("");
console.clear();

console.log("A Wild MewTwo Appears!!");
let mewTwo: Pokemon = new MewTwo();
console.log(mewTwo.status());
console.log("\nPress ENTER to continue...");
choise = +keyboard("");
console.clear();

let pokemonLife = pokemon.getLife();
let mewTwoLife = mewTwo.getLife();

do {

  console.log(`Voce possui ${pokemonLife} de vida!`);
  console.log(`\nMewTwo possui ${mewTwoLife} de vida!`);
  Util.battle();
  choise = +keyboard("");
  [ choise, pokemonLife, mewTwoLife ] = Util.verifyChoiseBattle(choise, pokemonLife, pokemon, mewTwoLife, mewTwo);
  console.clear();
  if(choise == 99) break;
  choise = Util.verifyWinner(pokemonLife, mewTwoLife);

} while (choise != 99);
