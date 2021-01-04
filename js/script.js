$('button.btn.remove').on('click', function () {
    $(this).parents('li.list-group-item').remove()

})
$('a.btn.btn-primary').on('click', function (e) {

    if ($("input[type='text']") != "") {
        $('.list').append(`<li class="list-group-item">${$("input[type='text']").val()}<button class = "btn remove">X</button></li>`)
        $("input[type='text']").val("")
    }
   
    $('button.btn.remove').on('click', function () {
        $(this).parents('li.list-group-item').remove()
    })
})