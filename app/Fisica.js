var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./Pessoa"], function (require, exports, Pessoa_1) {
    "use strict";
    var Fisica = (function (_super) {
        __extends(Fisica, _super);
        function Fisica(nome, cnpj) {
            _super.call(this, nome);
            this.cnpj = cnpj;
        }
        Fisica.prototype.fazer = function () {
            return this.cnpj + " tem a a\u00E7\u00E3o de " + this.andar();
        };
        return Fisica;
    }(Pessoa_1.Pessoa));
    exports.Fisica = Fisica;
});
