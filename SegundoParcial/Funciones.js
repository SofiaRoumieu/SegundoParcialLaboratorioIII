var general;
(function (general) {
    var listaVehiculos = new Array();
    var listaFiltrada = new Array();
    var idMayor;
    window.addEventListener("load", function () {
        idMayor = 0;
        document.getElementById("btnNuevoVehiculo").addEventListener("click", AbrePopUp);
        document.getElementById("btnGuardar").addEventListener("click", Guardar);
        document.getElementById("btnCancelar").addEventListener("click", Cancelar);
        document.getElementById("btnPromediar").addEventListener("click", Promediar);
        document.getElementById("inpTipoVehiculo").addEventListener("change", MostrarCampos);
        document.getElementById("inpFiltro").addEventListener("keypress", Filtrar);
    });
    function AbrePopUp() {
        document.getElementById("divPopUp").hidden = false;
    }
    function Cancelar() {
        document.getElementById("divPopUp").hidden = true;
        Limpiar();
    }
    function MostrarCampos() {
        var inpVehiculo = document.getElementById("inpTipoVehiculo");
        var vehiculo = inpVehiculo.options[inpVehiculo.selectedIndex].value;
        switch (vehiculo) {
            case 'Auto':
                document.getElementById("divAuto").hidden = false;
                document.getElementById("divCamioneta").hidden = true;
                break;
            case 'Camioneta':
                document.getElementById("divAuto").hidden = true;
                document.getElementById("divCamioneta").hidden = false;
                break;
        }
    }
    function Guardar() {
        var inpVehiculo = document.getElementById("inpTipoVehiculo");
        var vehiculo = inpVehiculo.options[inpVehiculo.selectedIndex].value;
        var inpMarca = document.getElementById("inpMarca");
        var marca = inpMarca.value;
        var inpModelo = document.getElementById("inpModelo");
        var modelo = inpModelo.value;
        var inpPrecio = document.getElementById("inpPrecio");
        var precio = parseInt(inpPrecio.value);
        var id = 0;
        if (listaVehiculos.length === 0)
            id = 1;
        else {
            id = listaVehiculos.reduce(function (mayor, vehiculo) {
                if (vehiculo.getPrecio() >= mayor)
                    return vehiculo.getId() + 1;
                else
                    return mayor++;
            }, id);
        }
        switch (vehiculo) {
            case 'Auto':
                var inpPuertas = document.getElementById("inpCantPuertas");
                var puertas = parseInt(inpPuertas.value);
                var auto = new general.Auto(1, marca, modelo, precio, puertas);
                listaVehiculos.push(auto);
                break;
            case 'Camioneta':
                var inpCuatroXCuatro = document.getElementById("chkCuatroXCuatro");
                var cuatroXCuatro = inpCuatroXCuatro.checked;
                console.log(cuatroXCuatro);
                var camioneta = new general.Camioneta(1, marca, modelo, precio, cuatroXCuatro);
                listaVehiculos.push(camioneta);
                break;
        }
        var cuerpoTabla = document.getElementById("bodyVehiculos");
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var nodoTexto1 = document.createTextNode(id.toString());
        document.getElementById("thId").hidden = !document.getElementById("chkId").checked;
        td1.hidden = !document.getElementById("chkId").checked;
        td1.appendChild(nodoTexto1);
        tr.appendChild(td1);
        var td2 = document.createElement("td");
        var nodoTexto2 = document.createTextNode(marca);
        document.getElementById("thMarca").hidden = !document.getElementById("chkMarca").checked;
        td2.hidden = !document.getElementById("chkMarca").checked;
        td2.appendChild(nodoTexto2);
        tr.appendChild(td2);
        var td3 = document.createElement("td");
        var nodoTexto3 = document.createTextNode(modelo);
        document.getElementById("thModelo").hidden = !document.getElementById("chkModelo").checked;
        td3.hidden = !document.getElementById("chkModelo").checked;
        td3.appendChild(nodoTexto3);
        tr.appendChild(td3);
        var td4 = document.createElement("td");
        var nodoTexto4 = document.createTextNode(precio.toString());
        document.getElementById("thPrecio").hidden = !document.getElementById("chkPrecio").checked;
        td4.hidden = !document.getElementById("chkPrecio").checked;
        td4.appendChild(nodoTexto4);
        tr.appendChild(td4);
        var botonEliminar = "<input id='btnEliminar' type='button' value='Eliminar' onClick='general.Elminar(" + tr.firstChild.textContent + ")'>";
        var td5 = document.createElement("td");
        var nodoTexto5 = document.createElement("button");
        nodoTexto5.addEventListener("click", Eliminar);
        nodoTexto5.textContent = "Eliminar";
        td5.appendChild(nodoTexto5);
        tr.appendChild(td5);
        cuerpoTabla.appendChild(tr);
        console.log(tr.firstChild.textContent);
        Limpiar();
    }
    function Filtrar() {
        listaFiltrada = listaVehiculos.filter(function (vehiculo) {
            return !vehiculo.getMarca().indexOf(document.getElementById("inpFiltro").value);
        });
        var cuerpoTabla = document.getElementById("bodyVehiculos");
        cuerpoTabla.innerHTML = "";
        for (var i = 0; i < listaFiltrada.length; i++) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var nodoTexto1 = document.createTextNode(listaFiltrada[i].getId().toString());
            document.getElementById("thId").hidden = !document.getElementById("chkId").checked;
            td1.hidden = !document.getElementById("chkId").checked;
            td1.appendChild(nodoTexto1);
            tr.appendChild(td1);
            var td2 = document.createElement("td");
            var nodoTexto2 = document.createTextNode(listaFiltrada[i].getMarca());
            document.getElementById("thMarca").hidden = !document.getElementById("chkMarca").checked;
            td2.hidden = !document.getElementById("chkMarca").checked;
            td2.appendChild(nodoTexto2);
            tr.appendChild(td2);
            var td3 = document.createElement("td");
            var nodoTexto3 = document.createTextNode(listaFiltrada[i].getModelo());
            document.getElementById("thModelo").hidden = !document.getElementById("chkModelo").checked;
            td3.hidden = !document.getElementById("chkModelo").checked;
            td3.appendChild(nodoTexto3);
            tr.appendChild(td3);
            var td4 = document.createElement("td");
            var nodoTexto4 = document.createTextNode(listaFiltrada[i].getPrecio().toString());
            document.getElementById("thPrecio").hidden = !document.getElementById("chkPrecio").checked;
            td4.hidden = !document.getElementById("chkPrecio").checked;
            td4.appendChild(nodoTexto4);
            tr.appendChild(td4);
            var botonEliminar = "<input id='btnEliminar' type='button' value='Eliminar' onClick='general.Elminar(" + tr.firstChild.textContent + ")'>";
            var td5 = document.createElement("td");
            var nodoTexto5 = document.createElement("button");
            nodoTexto5.addEventListener("click", Eliminar);
            nodoTexto5.textContent = "Eliminar";
            td5.appendChild(nodoTexto5);
            tr.appendChild(td5);
            cuerpoTabla.appendChild(tr);
        }
    }
    function Limpiar() {
        document.getElementById("inpMarca").value = "";
        document.getElementById("inpModelo").value = "";
        document.getElementById("inpPrecio").value = "";
        document.getElementById("inpCantPuertas").value = "";
        document.getElementById("chkCuatroXCuatro").checked = false;
    }
    function Promediar() {
        var promedio = 0;
        if (listaFiltrada.length > 0) {
            var total = listaFiltrada.reduce(function (total, vehiculo) {
                return total + vehiculo.getPrecio();
            }, 0);
            promedio = total / listaFiltrada.length;
        }
        else {
            var total = listaVehiculos.reduce(function (total, vehiculo) {
                return total + vehiculo.getPrecio();
            }, 0);
            promedio = total / listaVehiculos.length;
        }
        document.getElementById("inpPromedio").value = promedio.toString();
    }
    function Eliminar() {
    }
})(general || (general = {}));
