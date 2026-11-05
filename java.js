
const formulario = document.getElementById("pedidoForm");
const totalTexto = document.querySelector(".total");

formulario.addEventListener("submit", function(event) { //NUEVA FUNCION
    event.preventDefault();//este evita que se mande automaticamente 

    // Obtener cantidad
    let cantidad = Number(document.getElementById("cantidad").value);

    // Validar cantidad
    if (cantidad < 1 || document.getElementById("cantidad").value === "") {
        alert("Por favor, ingresa una cantidad válida (mínimo 1).");
    } else {

        // Obtener precio de especialidad
        let especialidad = Number(document.getElementById("especialidad").value);

        // Obtener precio del pan
        let pan = document.querySelector('input[name="pan"]:checked');
        let precioPan = Number(pan.value);

        // Contar ingredientes seleccionados
        let ingredientes = document.querySelectorAll('input[name="ingrediente"]:checked');
        let precioIngredientes = ingredientes.length * 5;

        // Calcular precio por baguette
        let subtotal = especialidad + precioPan + precioIngredientes;

        // Multiplicar por cantidad
        let total = subtotal * cantidad;

        // Agregar costo de domicilio
        let domicilio = document.querySelector('input[name="domicilio"]');

        if (domicilio.checked) {
            total = total + 30;
        }

        // Mostrar resultado
        totalTexto.textContent = "Total: $" + total.toFixed(2) + " MXN";
    }
});
