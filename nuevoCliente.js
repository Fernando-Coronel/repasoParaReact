(function () {
  let DB;
  const formulario = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    conectarDB();

    formulario.addEventListener("submit", validarCliente);
  });



  function validarCliente(e) {
    e.preventDefault();

    //Leer todos los inputs
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    if (nombre === "" || email === "" || telefono === "" || empresa === '') {
      imprimirAlerta("Todos los campos son obligatorios", "error");
      return;
    }

    //Crear un objeto con la informacion
    const cliente = {
        nombre,
        email,
        telefono,
        empresa
    }

    console.log(cliente);

    cliente.id = Date.now();

    crearNuevoCliente(cliente);

    //Resetea el formulario una vez agregando el cliente
    formulario.reset();
  }

  function crearNuevoCliente(cliente){
    const transaction = DB.transaction(['crm'], 'readwrite');

    const objectStore = transaction.objectStore('crm');

    objectStore.add(cliente);

    transaction.onerror = function(){
        //En caso de que haya clientes duplicados.
        imprimirAlerta('Hubo un error', 'error');
    }

    transaction.oncomplete = function(){
        imprimirAlerta('El cliente se agregó correctamente');

        setTimeout(()=> {
            window.location.href = 'index.html'
        },3000)
    }

  }

})();