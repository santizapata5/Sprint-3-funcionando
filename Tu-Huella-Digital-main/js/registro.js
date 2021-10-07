var arreglo = [];
var persona;
var arreglo_ordenado = [];

function almacenarRegistros()
{
    var nombre = document.getElementById('campoNombre').value; 
    var contrasena = document.getElementById('campoContraseña').value;
    var correo = document.getElementById('campoCorreo').value;
    var confirmacion = document.getElementById('campoConfirmacion').value;
    var telefono = document.getElementById('campoTelefono').value;
    /* Creamos el objeto persona con los datos del formulario y los insertamos dentro del arreglo vacío */
    persona = 
    {
        "nombre": nombre,
        "contrasena": contrasena,
        "correo": correo,
        "confirmacion": confirmacion,
        "telefono": telefono
    };
    arreglo.push(persona);
    /* Limitamos el tamaño de los registros a 30 */
    if (arreglo.length > 30 ) 
    {
        arreglo.splice(arreglo.length-1,1);
        alert("Ya lleva 30 registros")
    };
    /* Esto es para limpiar los campos */
    document.getElementById('campoNombre').value = ""; 
    document.getElementById('campoContraseña').value = ""; 
    document.getElementById('campoCorreo').value = ""; 
    document.getElementById('campoConfirmacion').value = ""; 
    document.getElementById('campoTelefono').value = "";
}

function ordenarRegistros(arreglo_ordenado = [])
{
    for (var i=0 in arreglo) /* Con este for igualamos el arreglo lleno a un nuevo arreglo que vamos a ordenar */
    {
        arreglo_ordenado[i] = arreglo[i];
    }  /* Utilizamos el metodo sort para ordenar el nuevo arreglo alfabéticamente por el nombre */
    arreglo_ordenado.sort(function (a, b) 
                {
                    if(a.nombre < b.nombre) { return -1; }
                    if(a.nombre > b.nombre) { return 1; }
                }
    );
    return arreglo_ordenado; /* Retornamos el nuevo arreglo ordenado que contiene la misma longitud del original */
}

/* Esta función la implementamos solo para pruebas en consola, la comentariamos al momento de subir al bot.
Esta funcion la llamamos desde el registro.html con un botón llamado "Mostrar" */
function mostrar() 
{
    console.log(arreglo);
    console.log(ordenarRegistros());
}

/* module.exports.almacenarRegistros = almacenarRegistros();
module.exports.ordenarRegistros = ordenarRegistros(); */