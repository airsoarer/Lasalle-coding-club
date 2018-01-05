(function(){
    $(document).ready(init);
    var randomNumber1 = Math.floor((Math.random() * 10) + 1);
    var guesses1 = 3;
    var randomNumber2 = Math.floor((Math.random() * 20) + 1);
    var guesses2 = 5;
    var randomNumber3 = Math.floor((Math.random() * 50) + 1);
    var guesses3 = 8;

function init(){
    $('#one').on('click', guess1);
    $('#two').on('click', guess2);
    $('#three').on('click', guess3);
    $('#yes').on('click', function(){
        $('#won').css('display', 'none');
        $('#guess1').css('display', 'block');
    });
    $('#no').on('click', function(){
        $('#won').css('display', 'none');
        $('#h1').css('display', 'none');
        $('#goodbye').css('display', 'block');
    });
}

function guess1(){
    var guess = $('#num1').val();
    guess = Number(guess);

    if(guess === randomNumber1){
        alert("You got it right!!!\n Time to move on to the next Level");
        $('#guess1').css('display', 'none');
        $('#guess2').css('display', 'block');
        $('.tries').empty();
    }else if(guess !== randomNumber1){
        if(guess < randomNumber1){
            var img = document.createElement("img");
            var h1 = document.createElement("h1");
            h1.textContent = "HIGHER";
            img.setAttribute('src', 'http://freevector.co/wp-content/uploads/2014/07/70495-up-arrow-sign.png');
            $('#pic').append(img);
            $('#pic').prepend(h1);
            setInterval(function(){
                $('#pic').empty();
            }, 2000);
        }else if(guess > randomNumber1){
            var img = document.createElement("img");
            var h1 = document.createElement("h1");
            h1.textContent = "LOWER";
            img.setAttribute('src', 'https://d30y9cdsu7xlg0.cloudfront.net/png/114800-200.png');
            $('#pic').append(img);
            $('#pic').prepend(h1);
            setInterval(function(){
                $('#pic').empty();
            }, 2000);
        }
        guesses1 = guesses1 - 1;
        var h1 = document.createElement("h1");
        h1.textContent = guesses1 + " tries left";
        $('.tries').empty();
        $('.tries').append(h1);
    }
    if(guesses1 === 0){
        alert("You have no more tries left. \n You must start over at Level 1");
        $('.tries').empty();
        guesses1 = 0;
    }
    $('#num1').val(' ');
}

function guess2(){
    var guess = $('#number2').val();
    guess = Number(guess);

    if(guess === randomNumber2){
        alert("You got it right!!!\n Time to move on to the next Level");
        $('#guess2').css('display', 'none');
        $('#guess3').css('display', 'block');
        $('.tries').empty();
    }else if(guess !== randomNumber2){
        if(guess < randomNumber2){
            var img = document.createElement("img");
            var h1 = document.createElement("h1");
            h1.textContent = "HIGHER";
            img.setAttribute('src', 'http://freevector.co/wp-content/uploads/2014/07/70495-up-arrow-sign.png');
            $('#pic2').append(img);
            $('#pic2').prepend(h1);
            setInterval(function(){
                $('#pic2').empty();
            }, 2000);
        }else if(guess > randomNumber2){
            var img = document.createElement("img");
            var h1 = document.createElement("h1");
            h1.textContent = "LOWER";
            img.setAttribute('src', 'https://d30y9cdsu7xlg0.cloudfront.net/png/114800-200.png');
            $('#pic2').append(img);
            $('#pic2').prepend(h1);
            setInterval(function(){
                $('#pic2').empty();
            }, 2000);
        }
        guesses2 = guesses2 - 1;
        var h1 = document.createElement("h1");
        h1.textContent = guesses2 + " tries left";
        $('.tries').empty();
        $('.tries').append(h1);
    }
    if(guesses2 === 0){
        alert("You have no more tries left. \n You must start over at Level 1");
        $('#guess2').css('display', 'none');
        $('#guess1').css('display', 'block');
        $('.tries').empty();
        guesses2 = 0;
    }
    $('#number2').val(' ');
}

function guess3(){
    var guess = $('#number3').val();
    guess = Number(guess);

    if(guess === randomNumber3){
        $('#guess3').css('display', 'none');
        $('#won').css('display', 'block');
        $('.tries').empty();
    }else if(guess !== randomNumber3){
        if(guess < randomNumber3){
            var img = document.createElement("img");
            var h1 = document.createElement("h1");
            h1.textContent = "HIGHER";
            img.setAttribute('src', 'http://freevector.co/wp-content/uploads/2014/07/70495-up-arrow-sign.png');
            $('#pic3').append(img);
            $('#pic3').prepend(h1);
            setInterval(function(){
                $('#pic3').empty();
            }, 2000);
        }else if(guess > randomNumber3){
            var img = document.createElement("img");
            var h1 = document.createElement("h1");
            h1.textContent = "LOWER";
            img.setAttribute('src', 'https://d30y9cdsu7xlg0.cloudfront.net/png/114800-200.png');
            $('#pic3').append(img);
            $('#pic3').prepend(h1);
            setInterval(function(){
                $('#pic3').empty();
            }, 2000);
        }
        guesses3 = guesses3 - 1;
        var h1 = document.createElement("h1");
        h1.textContent = guesses3 + " tries left";
        $('.tries').empty();
        $('.tries').append(h1);
    }
    if(guesses3 === 0){
        alert("You have no more tries left. \n You must start over at Level 1");
        $('#guess3').css('display', 'none');
        $('#guess1').css('display', 'block');
        $('.tries').empty();
        guesses3 = 0;
    }
    $('#number3').val(' ');
}
})();