var myObj = {"array": [
   { "Cestas": "Frutas", "Precio": "10€/mes", "imagen": "/img/cesta-fruta.png", 
      "Cestas": "Verduras","Precio":"7€/mes", "imagen":"/img/cesta-verduras.png",
      "Cestas": "Chocolate", "Precio":"35€", "imagen":"/img/cesta-chocolate.png"}]};

   var myObj2 = JSON.stringify(myObj);

   localStorage.setItem("series", myObj2)

   let serie = JSON.parse(localStorage.getItem("series"));


$(function() {
    $("#nombre_form").focusout(function(){
       comprueba_nom();
    });

    $("#apellidos_form").focusout(function() {
       comprueba_apellidos();
    });

    $("#email_form").focusout(function() {
       comprueba_email();
    });

    $("#nacimiento_form").focusout(function(){
       comprueba_nacimiento();
    });

    

    function comprueba_nom() {
       var pattern = /^[a-zA-Z ]*$/;
       var nombref = $("#nombre_form").val();
       if (pattern.test(nombref) && nombref !== '') {
          $("#nom_error").hide();
          $("#nombre_form").css("border","2px solid #34F458");
          $("#nom_label").show();
          $("#apellidos_form" ).prop( "disabled", false );
       } else {
          $("#nom_error").html("El nombre solo debe conetener caracteres");
          $("#nom_error").show();
          $("#nombre_form").css("border","2px solid #F90A0A");
          $("#apellidos_form").prop( "disabled", true );
       }
    }

    function comprueba_apellidos() {
       var pattern = /^[a-zA-Z ]*$/;
       var apellidosf = $("#apellidos_form").val()
       if (pattern.test(apellidosf) && apellidosf !== '') {
          $("#apellidos_error").hide();
          $("#apellidos_form").css("border","2px solid #34F458");
          $("apellidos_label").show();
          $("#email_form" ).prop( "disabled", false );
       } else {
          $("#apellidos_error").html("El apellido solo debe contener caracteres");
          $("#apelidos_error").show();
          $("#apellidos_form").css("border","2px solid #F90A0A");
          $("#email_form" ).prop( "disabled", true );
       }
    }

    function comprueba_email() {
       var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
       var emailform = $("#email_form").val();
       if (pattern.test(emailform) && emailform !== '') {
          $("#email_error").hide();
          $("#email_form").css("border","2px solid #34F458");
          $("#nacimiento_form").prop("disabled",false)
       } else {
          $("#email_error").html("Introduce el email correctamente");
          $("#email_error").show();
          $("#email_form").css("border","2px solid #F90A0A");
       }
    }

    function comprueba_nacimiento(){
      var pattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
      var nacimientoform = $("#nacimiento_form").val();
      if (pattern.test(nacimientoform) && nacimientoform !== '') {
         $("#nacimiento_error").hide();
         $("#nacimiento_form").css("border","2px solid #34F458");
      } else {
         $("#nacimiento_error").html("El formato de la fecha de nacimiento es dd/mm/yyyy");
         $("#nacimiento_error").show();
         $("#nacimiento_form").css("border","2px solid #F90A0A");
      }
    }
 });