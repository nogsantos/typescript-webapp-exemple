define(["require", "exports", "./Pessoa"], function (require, exports, Pessoa_1) {
    "use strict";
    var eu = new Pessoa_1.Pessoa("Fabricio");
    console.log(eu.andar());
    console.log(eu.pular());
    console.log(eu.correr());
});
