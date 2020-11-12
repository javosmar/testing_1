const { expect } = require("chai");

module.exports = class Lista {
    #elementos;

    constructor() {
        this.#elementos = [];
    }

    count() {
        return this.#elementos.length;
    }

    find(clave) {
        if(this.#elementos.length == 0)
            return NaN;
        for(let i = 0; i < this.#elementos.length; i++){
            const key = Object.keys(this.#elementos[i]);
            if(key == clave){
                return this.#elementos[i][clave];
            }
        }
    }

    add(clave, valor) {
        const buscar = this.find(clave);
        if(!buscar){
            this.#elementos.push({[clave]: valor});
        }
        else {
            for(let i = 0; i < this.#elementos.length; i++){
                const key = Object.keys(this.#elementos[i]);
                if(key == clave){
                    this.#elementos[i][clave] = valor;
                }
            }
        }
    }
    
}