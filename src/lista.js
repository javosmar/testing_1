module.exports = class Lista {
    #elementos;

    constructor() {
        this.#elementos = [];
    }

    count() {
        return this.#elementos.length;
    }

    find(clave) {
        return NaN;
    }

    add(clave, valor) {
        this.#elementos.push({clave, valor});
    }
    
}