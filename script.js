/*var vaCorreo = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
$("#enviar").click(function() {
    if ($("#nombre").val().length < 3) {
        $("#mensaje1").show();
    } else {
        $("#mensaje1").hide();
    }
    if ($("#celular").val().length != 9) {
        $("#mensaje2").show();
    } else {
        $("#mensaje2").hide();
    }
    if (vaCorreo.test(correo) == false) {
        $("#mensaje3").show();
    } else {
        $("#mensaje3").hide();
    }

    var co = vaCorreo.test(correo);
    console.log(co);
})*/

jQuery.validator.messages.required = 'Esta campo es obligatorio.';
jQuery.validator.messages.number = 'Esta campo debe ser numerico.';
jQuery.validator.messages.email = 'La direccion de correo es incorrecta.';

$("#enviar").click(function() {
    var validado = $("#formulario").valid();
    if (validado) {
        alert('El formulario es correcto.');
    }
});