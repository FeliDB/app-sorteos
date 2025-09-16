export class LogicaSorteo{
    constructor(){

    }

    AgregarParticipante(participante: string, array: string[]): string[]{
        return [...array, participante];
    }

    Sortear(array: string[]): string{
        const ganador = array[Math.floor(Math.random() * array.length)];
        return ganador;
    }

}


