$(document).ready(function()
{

    $( "#vol" ).click(function() {

        $('.nada').hide();
        $('.cors').hide();
        $('.ress').hide();
        $('.vols').show();

   
    });

    

    $("#v1").keyup(function(e) {

        

        var v1 = $("#v1").val();
        var v2 = $("#v2").val();

        v3=v1*v2;

        $("#r").val(v3);

    
    });


    $("#v2").keyup(function(e) {

       

        var v1 = $("#v1").val();
        var v2 = $("#v2").val();

        v3=v1*v2;

        $("#r").val(v3);

    
    });

    ///////////////////////////////////////////////////CORRIENTE

    $( "#cor" ).click(function() {

        $('.nada').hide();
        $('.vols').hide();
        $('.ress').hide();
        $('.cors').show();

   
    });

    $("#c1").keyup(function(e) {

        

        var c1 = $("#c1").val();
        var c2 = $("#c2").val();

        c3=c1/c2;

        $("#cr").val(c3);

    
    });


    $("#c2").keyup(function(e) {

        
        

        var c1 = $("#c1").val();
        var c2 = $("#c2").val();

        c3=c1/c2;

        $("#cr").val(c3);

    
    });

///////////////////////////////////////////////////RESISTENCIA

$( "#res" ).click(function() {

    $('.nada').hide();
    $('.vols').hide();
    $('.cors').hide();
    $('.ress').show();


});



$("#i1").keyup(function(e) {

    var i1 = $("#i1").val();
    var i2 = $("#i2").val();

    i3=i1/i2;

    $("#ir").val(i3);


});


$("#i2").keyup(function(e) {


    var i1 = $("#i1").val();
    var i2 = $("#i2").val();

    i3=i1/i2;

    $("#ir").val(i3);


});


});
