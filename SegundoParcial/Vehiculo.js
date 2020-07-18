var general;
(function (general) {
    var Vehiculo = /** @class */ (function () {
        function Vehiculo(id, marca, modelo, precio) {
            this.marca = marca;
            this.id = id;
            this.modelo = modelo,
                this.precio = precio;
        }
        Vehiculo.prototype.getId = function () {
            return this.id;
        };
        Vehiculo.prototype.setId = function (id) {
            this.id = id;
        };
        Vehiculo.prototype.getMarca = function () {
            return this.marca;
        };
        Vehiculo.prototype.setMarca = function (marca) {
            this.marca = marca;
        };
        Vehiculo.prototype.getModelo = function () {
            return this.modelo;
        };
        Vehiculo.prototype.setModelo = function (modelo) {
            this.modelo = modelo;
        };
        Vehiculo.prototype.getPrecio = function () {
            return this.precio;
        };
        Vehiculo.prototype.setPrecio = function (precio) {
            this.precio = precio;
        };
        return Vehiculo;
    }());
    general.Vehiculo = Vehiculo;
})(general || (general = {}));
