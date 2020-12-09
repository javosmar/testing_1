/**
 * 
 * +++++++++++++++++++++
 * ++++ REQUERIMIENTOS +++++
 * +++++++++++++++++++++
 * 
 * Almacena pres clave:valor
 * Las claves deben ser únicas
 * Las claves son cadenas de texto
 * Se debe poder recuperar un valor a partir de una clave
 * Se debe poder actualizar el valor asociado a una clave
 * Se debe poder recuperar una lista ordenada con las claves almacenadas en la lista
 * Se puede borrar una pareja a partir de la clave
 * 
 * +++++++++++++++++++++
 * ++++++ BACKLOG ++++++++
 * +++++++++++++++++++++
 * 
 * v En una lista vacía hay cero elementos.
 * v En una lista vacía no se encuentra ninguna clave.
 * 
 * v Cuando se agrega un elemento a una lista vacía hay un elemento.
 * v Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
 * v Cuando se agrega un elemento a una lista vacía debo poder obtener la lista de claves
 * 
 * v Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
 * v Cuando se agrega una clave que ya está en la lista no cambia la cantidad de elementos almacenados.
 * 
 * v Cuando se agrega un elemento a una lista con elementos la lista de claves está ordenada
 * 
 * v Cuando borro un elemento de una lista con un elemento, la lista está vacía
 * v Cuando borro un elemento de una lista con dos elementos, la lista contiene al elemento no borrado
 * v Cuando borro un elemento de una lista con dos elementos, la lista no contiene al elemento borrado
 * 
 * v Cuando busco un elemento que no existe en la lista, obtengo un valor 'NaN'
 * 
 */

const assert = require("chai").assert;
const { expect } = require("chai");
const Lista = require("../src/lista.js");

describe("en una lista vacia", () => {
    var lista = new Lista();

    it("hay cero elementos", () => {
        assert.equal(lista.count(), 0);
    });

    it("no se encuentra ninguna clave", () => {
        assert.isNaN(lista.find("clave"));
    });

});

describe("cuando se agrega un elemento a una lista vacia", () => {
    let lista = new Lista();
    lista.add("clave", "valor");

    it("hay un elemento", () => {
        assert.equal(lista.count(), 1);
    });

    it("se puede recuperar el valor a partir de la clave", () => {
        assert.equal(lista.find("clave"), "valor");
    });

    it('debo poder obtener la lista de claves', () => {
        claves = lista.getKeys();
        expect(claves).to.eql(['clave']);
    })
});

describe("Cuando se agrega una clave que ya está en la lista ", () => {
    let lista = new Lista();
    lista.add("clave", "valor");

    it("se actualiza el valor correspondiente", () => {
        lista.add("clave", "valor2");
        assert.equal(lista.find("clave"), "valor2");
    });

    it('no cambia la cantidad de elementos almacenados', () => {
        const cantidadPrevia = lista.count();
        lista.add("clave", "valor2");
        const cantidadNueva = lista.count();
        expect(cantidadNueva).to.be.equal(cantidadPrevia);
    });
});

describe('Cuando se agrega un elemento a una lista con elementos ', () => {
    let lista = new Lista();
    lista.add("clave", "valor1");

    it('la lista de claves está ordenada', () => {
        lista.add("bclave", "valor");

        claves = lista.getKeys();
        expect(claves).to.eql(['bclave','clave']);
    });
});

describe('Cuando borro un elemento de una lista ', () => {
    let lista = new Lista();

    it('con un elemento, la lista está vacía', () => {
        lista.add("clave", "valor");
        lista.delete("clave");
        const cantidad = lista.count();
        expect(cantidad).to.be.equal(0);
    });

    it('con dos elementos, la lista contiene al elemento no borrado', () => {
        lista.add("clave", "valor");
        lista.add("clave 2", "valor 2");
        lista.delete("clave 2");
        const noBorrado = lista.find("clave");
        expect(noBorrado).to.be.equal("valor");
    });

    it('con dos elementos, la lista no contiene al elemento borrado', () => {
        lista.add("clave", "valor");
        lista.add("clave 2", "valor 2");
        lista.delete("clave 2");
        const noBorrado = lista.find("clave 2");
        expect(noBorrado).to.be.NaN;
    });
});

describe('Cuando busco un elemento que no existe en la lista', () => {
    let lista = new Lista();
    lista.add("clave", "valor");

    it('obtengo un valor false', () => {
        const encontrado = lista.find("clave 2");
        expect(encontrado).to.be.NaN;
    })
})