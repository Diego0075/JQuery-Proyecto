$(document).ready(function(){
    
   $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
           $('#bscroll').fadeIn();
       } else {
           $('#bscroll').fadeOut();
       }
   });
   
   $('#bscroll').click(function(){
       $('html, body').animate({scrollTop : 0},600);
       return false;
   });
   
});


function crearTestimonios(){
   $.ajax({
      dataType:"json",
      url: "testimonios.json",
      data: "data",
      success: function(response){
      // $("div#testimonio").fadeIn(function() {
      $("img").remove("#testimonio-img");
         for (let i=0; i<3; i++){
            let aleatorio = Math.floor(Math.random()*8);
            ($("div#testimonio"+i.toString()).prepend('<img id="testimonio-img" src="'+response.testimonios[aleatorio].img+'"/>')).css({
               
               "font-size": "21px",
               "background":"rgba(145, 232, 232, 0.2)",
               "border-radius":"24px",
               "margin":"15px"
               // "border":"1px solid black",
               // "width":"100%"
               

               // "opacity": "0",
               
               // "-webkit-transition": "opacity 1s ease-in",
               //    "-moz-transition": "opacity 1s ease-in",
               //     "-ms-transition": "opacity 10s ease-in",
               //      "-o-transition": "opacity 9s ease-in",
               //         "transition": "opacity 10s ease-in"
               
               
            });
            $("h3#nombre"+i.toString()).text(response.testimonios[aleatorio].nombre);
            $("p#cuerpo"+i.toString()).text(response.testimonios[aleatorio].cuerpo);
            $("label#fecha"+i.toString()).text(response.testimonios[aleatorio].fecha);
         }
      // });
      }
   })
   setTimeout(crearTestimonios,10000);
}

crearTestimonios();

//  $("#testimonio0").delay(1000).animate({ opacity: 1 }, 700);​

function crearProductos(){
   $.ajax({
      dataType:"json",
      url: "cestas.json",
      data: "data",
      success: function(response){
         for (let i=0; i<3; i++){
            $("div#cestas"+i.toString()).prepend('<label>'+response.productos[i].precio+'</label>').css("textAlign","center");
            $("div#cestas"+i.toString()).prepend('<p>'+response.productos[i].cuerpo+'</p>').css("textAlingn");
             $("div#cestas"+i.toString()).prepend('<img id="cesta-img" src="'+response.productos[i].img+'"/>');
             $("div#cestas"+i.toString()).prepend('<h2>'+response.productos[i].titulo+'</h2>');

             

         }
     },error: function(){
      console.log("No se han podido obetner los productos");
      setTimeout(crearProductos, 5000);
  }
 })
}

crearProductos();


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
          ($("#nom_error").html("El nombre solo debe conetener caracteres")).css({
             "color":"red"
          });
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
          ($("#apellidos_error").html("El apellido solo debe contener caracteres")).css({
            "color":"red"
         });
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
          ($("#email_error").html("Introduce el email correctamente")).css({
            "color":"red"
         });
          $("#email_error").show();
          $("#email_form").css("border","2px solid #F90A0A");
       }
    }

    function comprueba_nacimiento(){
      var pattern = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
      var nacimientoform = $("#nacimiento_form").val();
      if (pattern.test(nacimientoform) && nacimientoform !== '') {
         $("#nacimiento_error").hide();
         $("#nacimiento_form").css("border","2px solid #34F458");
      } else {
         ($("#nacimiento_error").html("El formato de la fecha de nacimiento es dd-mm-yyyy")).css({
            "color":"red"
         });
         $("#nacimiento_error").show();
         $("#nacimiento_form").css("border","2px solid #F90A0A");
      }
    }
 });

 var vista = false;

 $(".bvista").click(function(){
    vista=!vista;
      if(vista){
         $("#testimonios-general").css({
            "display":"flex"
         })
      }else{
         $("#testimonios-general").css({
            "display":"grid"
         })
      }
 });
