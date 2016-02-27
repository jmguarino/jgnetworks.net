/*
    Javascript for the Hobbies Page
    Justin Guarino
*/

$(document).ready(function () {

    $('.imgModBtn').click(function () {
        $('#imgModal img').attr('src', $(this).attr('data-img-url'));
    });
});
