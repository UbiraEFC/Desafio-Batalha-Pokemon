import { Pokemon } from '../model/Pokemon';
import { Bulbasaur } from '../model/Bulbasaur';
import { Charmander } from '../model/Charmander';
import { Squirtle } from '../model/Squirtle';
import prompt from 'prompt-sync';

const keyboard = prompt();


export class Util {

    public static choisePokemon(choise: number): Pokemon {
        switch (choise) {
            case 1:
                let first: Pokemon = new Bulbasaur()
                return first;
            case 2:
                let second: Pokemon = new Charmander()
                return second;
            case 3:
                let third: Pokemon = new Squirtle()
                return third;
            default:
                let d: Pokemon = new Pokemon()
                return d
        }
    }

    public static verifyChoise(choise: number): number {
        do {

            switch (choise) {
                case 1:
                case 2:
                case 3:
                    return choise;
                default:
                    console.clear();
                    console.log('\n==================================' +
                        '\n|                                |' +
                        '\n|   Escolha uma Opcao Valida     |' +
                        '\n|                                |' +
                        '\n=================================='
                    );
                    this.presentationChoise();
                    choise = +keyboard('');

            }
        } while (choise !== 99)
        return choise;
    }

    public static verifyWinner(pokemonLife: number, mewTwoLife: number): number {

        if (pokemonLife == 0 && mewTwoLife == 0) {
            console.log("Empate!");
            return 99;

        } else if (pokemonLife == 0) {
            console.log("Voce perdeu!");
            return 99;

        } else if (mewTwoLife == 0) {
            console.log("Parabens voce derrotou MewTwo!");
            return 99;

        } else return 0;
    }

    public static verifyChoiseBattle(
        choise: number,
        pokemonLife: number,
        pokemon: Pokemon,
        mewTwoLife: number,
        mewTwo: Pokemon
    ): number[] {

        switch (choise) {
            case 1:
                pokemonLife = pokemonLife - mewTwo.gerenicAttack();
                mewTwoLife = mewTwoLife - pokemon.gerenicAttack();
                if (pokemonLife < 0) pokemonLife = 0;
                if (mewTwoLife < 0) mewTwoLife = 0;
                return [1, pokemonLife, mewTwoLife];
            case 2:
                pokemonLife = pokemonLife + pokemon.restCure();
                pokemonLife = pokemonLife - mewTwo.gerenicAttack();
                if (pokemonLife < 0) pokemonLife = 0;
                return [1, pokemonLife, mewTwoLife];
            case 3:
                console.log("Você fugiu!");
                return [99, pokemonLife, mewTwoLife];
            default:
                console.clear();
                console.log('\n==================================' +
                    '\n|                                |' +
                    '\n|   Opção errada perde o turno!  |' +
                    '\n|                                |' +
                    '\n=================================='
                );
                console.log("\nPress ENTER to continue...");
                choise = +keyboard("");

                pokemonLife = pokemonLife - mewTwo.gerenicAttack();
                if (pokemonLife < 0) pokemonLife = 0;
                return [1, pokemonLife, mewTwoLife];
        }
    }

    public static presentation(): void {
        console.log('\n=======  BATALHA POKEMON  ========' +
            '\n|                                |' +
            '\n|        Ola Treinador!          |' +
            '\n|                                |' +
            '\n=================================='
        )
    }

    public static presentationChoise(): void {
        console.log('\n==================================' +
            '\n|                                |' +
            '\n|     Escolha o seu Pokemon!     |' +
            '\n|                                |' +
            '\n|     1 - Bulbasaur              |' +
            '\n|                                |' +
            '\n|     2 - Charmander             |' +
            '\n|                                |' +
            '\n|     3 - Squirtle               |' +
            '\n|                                |' +
            '\n=================================='
        )
    }


    public static battle(): void {
        console.log('\n==================================' +
            '\n|                                |' +
            '\n| O que deseja fazer nesse Turno?|' +
            '\n|                                |' +
            '\n|     1 - Atacar                 |' +
            '\n|                                |' +
            '\n|     2 - Curar                  |' +
            '\n|                                |' +
            '\n|     3 - Fugir                  |' +
            '\n|                                |' +
            '\n=================================='
        )
    }

    public static presentationConfirmChoise(pokemon: Pokemon): void {
        console.log('\n==================================' +
            '\n                                  ' +
            `\nSua escolha foi ${pokemon.getName()}` +
            '\n                                ' +
            '\n      ' + pokemon.status() + '         ' +
            '\n==================================' +
            '\n|                                |' +
            '\n|Você tem certeza da sua escolha?|' +
            '\n|                                |' +
            '\n|         1 - SIM                |' +
            '\n|                                |' +
            '\n|         2 - NÃO                |' +
            '\n|                                |' +
            '\n=================================='
        )
    }
}