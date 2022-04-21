$(document).ready(function () {

    $('#enviar-nombre').click(function () {
        let id = $('#fnombre').val();
        console.log(id);
        api(id);
    })

    $('#enviar-id').click(function () {
        let id = $('#id-pokemon').val();
        console.log(id);
        api(id);
    })


})




function api(id) {

    var formParams = {
        url: "http://localhost:9080/spring-mvc/pokemon/img/" + id,
        type: "GET",
        contentType: "application/json",

        success: function (data) {
            if(data){

                $("#title").text(data.name);
                $("#weiht").text("Weight: " + data.weight);
                $("#heiht").text("Height: " + data.height);
                $("#baseExperience").text("Experience: " + data.baseExperience);

                $("#imagen").attr("src",data.img);
                $("#title").removeClass('d-none');
                $("#weiht").removeClass('d-none');
                $("#heiht").removeClass('d-none');
                $("#baseExperience").removeClass('d-none');

                $("#title").addClass('d-flex');
                $("#weiht").addClass('d-flex');
                $("#heiht").addClass('d-flex');
                $("#baseExperience").addClass('d-flex');
            }else{
                $("#imagen").attr("src","");
                $("#title").removeClass('d-flex');
                $("#weiht").removeClass('d-flex');
                $("#heiht").removeClass('d-flex');
                $("#baseExperience").removeClass('d-flex');

                $("#title").addClass('d-none');
                $("#weiht").addClass('d-none');
                $("#heiht").addClass('d-none');
                $("#baseExperience").addClass('d-none');
            }
        },
        error: function () {
            console.log("Peticion incorrecta");
            $('#modal-error').modal("show");
        },
    };
    $.ajax(formParams);
}
