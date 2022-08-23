export class Pokemon {

    protected name: string;
    protected life: number;
    protected attack: number;
    protected cure: number;

    constructor(){

        this.name = "";
        this.life = 0;
        this.attack = 0;
        this.cure = 0;
    }


    public status(): string {
        return (
            ("\nVida: "+ this.life) + 
            ("\nAtaque: "+ this.attack) + 
            ("\nCura: "+ this.cure + "\n")            
        ); 
    };

    public getName(): string {
        return this.name;
    }
    
    public getLife(): number {
        return this.life;
    }

    public gerenicAttack(): number {
        return this.attack;
    };

    public restCure(): number {
        return this.cure
    };

    public escape(): number {
        return 99;
    };
}