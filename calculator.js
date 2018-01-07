(function(){
    $(document).ready(init);

function init(){
    $('button').on('click', show);
    $('#equal').on('click', evaluate);
}

function show(){
    var val = $(this).val();
    if(val === "*"){
        val = "*";
    }
    
    if(val === "="){
        val = "=";
    }

    if(val === " "){
        $('.h').empty();
    }

    $('.h').append(val);
}

function evaluate(){
    var sentence = $('.h').text();
    sentence = sentence.split("=");
    sentence = sentence[0];

    var evaluation = eval(sentence);
    $('.h').empty();
    $('.h').append(evaluation);
}
})();