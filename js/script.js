$('button.btn.remove').on('click', function () {
    $(this).parents('li.list-group-item').remove()
})
let addToDo = $("input[type='text']");
addToDo.keydown(function (e) {
    if (e.keyCode == 13) {
        if (addToDo.val() != "") {
            $('.list').append(`<li class="list-group-item">${addToDo.val()}<button class = "btn remove">X</button></li>`)
            $("input[type='text']").val("")
        }
    }
    $('button.btn.remove').on('click', function () {
        $(this).parents('li.list-group-item').remove()
    })
});
$('a.btn.btn-primary').on('click', function () {
    if (addToDo.val() != "") {
        $('.list').append(`<li class="list-group-item">${addToDo.val()}<button class = "btn remove">X</button></li>`)
        $("input[type='text']").val("")
    }
    $('button.btn.remove').on('click', function () {
        $(this).parents('li.list-group-item').remove()
    })
})