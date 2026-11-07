console.log("script cargado");
const formulario = document.getElementById("pedidoForm");
const totalTexto = document.querySelector(".total");

formulario.addEventListener("submit", function(event) { //NUEVA FUNCION
    event.preventDefault();//este evita que se mande automaticamente 


    let cantidad = Number(document.getElementById("cantidad").value);

    if (cantidad < 1 || document.getElementById("cantidad").value === "") {
        alert("Por favor, ingresa una cantidad válida (mínimo 1).");
    } else {

        
        let especialidad = Number(document.getElementById("especialidad").value);


        let pan = document.querySelector('input[name="pan"]:checked');
        let precioPan = Number(pan.value);


        let ingredientes = document.querySelectorAll('input[name="ingrediente"]:checked');
        let precioIngredientes = ingredientes.length * 5;


        let subtotal = especialidad + precioPan + precioIngredientes;


        let total = subtotal * cantidad;


        let domicilio = document.querySelector('input[name="domicilio"]');

        if (domicilio.checked) {
            total = total + 30;
        }

        totalTexto.textContent = "Total: $" + total.toFixed(2) + " MXN";
    }
});
