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
        for (let i = 0; i < this.#elementos.length; i++) {
            const key = Object.keys(this.#elementos[i]);
            if (key == clave) {
                return this.#elementos[i][clave];
            }
        }
        return NaN;
    }

    add(clave, valor) {
        const buscar = this.find(clave);
        if (!buscar) {
            this.#elementos.push({ [clave]: valor });
        }
        else {
            for (let i = 0; i < this.#elementos.length; i++) {
                const key = Object.keys(this.#elementos[i]);
                if (key == clave) {
                    this.#elementos[i][clave] = valor;
                }
            }
        }
    }

    delete(clave) {
        for (let i = 0; i < this.#elementos.length; i++) {
            const key = Object.keys(this.#elementos[i]);
            if (key == clave) {
                this.#elementos.splice(i, 1);
            }
        }
    }

    getKeys() {
        let keys = [];
        for (let i = 0; i < this.#elementos.length; i++) {
            keys.push(Object.keys(this.#elementos[i])[0]);
        }
        keys.sort((a, b) => {
            return (a < b) ? -1 : 1;
        })
        return keys;
    }

}