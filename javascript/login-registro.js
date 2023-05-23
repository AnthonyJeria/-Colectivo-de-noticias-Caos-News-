var correo = "lea.mena@duocuc.cl";
var contraseña = "asdf1234";

function guardar_datos(){

    var nombre1 = document.getElementById("nombre").value;
    var correo1 = document.getElementById("correo").value;
    var usuario1 = document.getElementById("usuario").value;
    var contraseña1 = document.getElementById("contraseña").value;

    if(nombre1.length == 0 || correo1.length == 0 || usuario1.length == 0 || contraseña1.length == 0){
 
        alert("No pueden haber valores vacios");

    } else {

        if(correo1.includes("@gmail.com") || correo1.includes("@hotmail.com") || correo1.includes("@duocuc.cl")){

            console.log(nombre1);
            console.log(correo1);
            console.log(usuario1);
            console.log(contraseña1);
            alert("cuenta registrada");
            location.href = "login.html"
    
        } else {
    
            alert("el correo ingresado no es valido");
    
        }

    }

    

}

function validar_datos(correo,contraseña){

    var correo2 = document.getElementById("logcorreo").value;
    var contraseña2 = document.getElementById("logcontra").value;
    var usuario = "LeandrosMenas";

    console.log(correo2,contraseña2);

    if(correo=correo2){

        if(contraseña=contraseña2){

            alert("bienvenido "+usuario)
            location.href = "tienda.html"

        }

    } else {

        alert("correo o contraseña incorrectos");

    }

}