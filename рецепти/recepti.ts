class Recept {
    public ime: string;
    public poteklo: string;
    public sostojki: [string];

    constructor( ime: string, poteklo: string, sostojki: [string]){
        this.ime = ime;
        this.poteklo = poteklo;
        this.sostojki = sostojki;
    }
}

// let novRecept = new Recept('recept', 'vtor', new ListaNaSostojki());