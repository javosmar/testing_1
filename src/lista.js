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

    isOrdenado() {
        for (let i = 0; i < this.#elementos.length - 1; i++) {
            const key = Object.keys(this.#elementos[i])[0];
            const keyn = Object.keys(this.#elementos[i + 1])[0];
            if (key > keyn) {
                return false;
            }
        }
        return true;
    }

    ordenar() {
        this.#elementos.sort((a, b) => {
            const key = Object.keys(a)[0];
            const keyn = Object.keys(b)[0];
            return (key < keyn) ? -1 : 1;
        })
    }

    delete(clave) {
        for (let i = 0; i < this.#elementos.length; i++) {
            const key = Object.keys(this.#elementos[i]);
            if (key == clave) {
                this.#elementos.splice(i, 1);
            }
        }
    }

}