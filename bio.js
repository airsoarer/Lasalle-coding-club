(function(){
    $(document).ready(init);

function init(){
    $('button').on('click', changeColor);
}

function changeColor(){
    var color = $(this).text();
    $("h2").css("color", color);
}
})();