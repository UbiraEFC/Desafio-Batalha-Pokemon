import { Pokemon } from "./Pokemon";

export class MewTwo extends Pokemon {

	constructor() {
		super()
		this.name = "MewTwo";
		this.life = 300;
		this.attack = 50;
		this.cure = 0;
	}

	public status(): string {
		return (
			("\nVida: " + this.life) +
			("\nAtaque: " + this.attack)
		);
	};

}