/**
 * +++++++++++++++++++++
 * ++++++ BACKLOG ++++++++
 * +++++++++++++++++++++
 * 
 * v En una lista vacía hay cero elementos.
 * v En una lista vacía no se encuentra ninguna clave.
 * v Cuando se agrega un elemento a una lista vacía hay un elemento.
 * v Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave.
 * v Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
 * Cuando se agrega una clave que ya está en la lista no cambia la cantidad de elementos almacenados.
 * Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada.
 * Cuando se agrega un elemento al principio la lista de claves esta ordenada.
 * Cuando se agrega un elemento al final la lista de claves esta ordenada.
 * Si agrego dos elementos a la lista entonces puedo buscar a cada uno de los valores.
 */

const assert = require("chai").assert;
const { expect } = require("chai");
const Lista = require("../src/lista.js");

describe("en una lista vacia" , function() {
    var lista = new Lista();

    it("hay cero elementos", function() {
        assert.equal(lista.count(), 0);
    });

    it("no se encuentra ninguna clave", function() {
        assert.isNaN(lista.find("clave"));
    });

});

describe("cuando se agrega un elemento a una lista vacia", function() {
    let lista = new Lista();
    lista.add("clave", "valor");

    it("hay un elemento", function() {
        assert.equal(lista.count(), 1);
    });

    it("se puede recuperar el valor a partir de la clave", function() {
        assert.equal(lista.find("clave"), "valor");
    });
});

describe("Cuando se agrega una clave que ya está en la lista ", function() {
    let lista = new Lista();
    lista.add("clave", "valor");
    lista.add("clave", "valor2");

    it("se actualiza el valor correspondiente", function() {
        assert.equal(lista.find("clave"), "valor2");
    });;
});