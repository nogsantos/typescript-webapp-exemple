define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     *
     */
    var Pessoa = (function () {
        function Pessoa(nome) {
            this.nome = nome;
        }
        Pessoa.prototype.andar = function () {
            return this.nome + " anda";
        };
        Pessoa.prototype.correr = function () {
            return this.nome + " corre";
        };
        Pessoa.prototype.pular = function () {
            return this.nome + " pula";
        };
        return Pessoa;
    }());
    exports.Pessoa = Pessoa;
});
