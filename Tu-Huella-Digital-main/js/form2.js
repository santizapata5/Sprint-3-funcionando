function validar_contrasena_usuario(password){
    let dato_contrasena = /[A-Z\W]\S*/;
        if (dato_contrasena.test(password)){
            alert("Sesión iniciada");
            return true;
        }
            else{
                alert("Error")
                return false;
        }
}

function validar_correo(string){
    let correoUsuario = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[com|org]{0,3}[.co|.es]{0,3}$/;
    if (correoUsuario.test(string)){
        alert("Correo validado");
        return true;
    } else{
        alert("Correo no válido");
        return false;
    }
}

/* module.exports.validar_correo = validar_correo;
module.exports.validar_contrasena_usuario = validar_contrasena_usuario; */