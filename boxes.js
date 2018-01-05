(function(){
    $(document).ready(init);
    var trainWhistle = new Audio('trainWhistle.mp3');
    var tvStatic = new Audio('tvStatic.mp3');
    var quack = new Audio('quack.mp3');
    var fax = new Audio('faxMachine.mp3');
    var weather = new Audio('weatherAlert.mp3');
    var r2d21 = new Audio('r2d2One.mp3');

function init(){
    //Train Whistle
    $('#trainWhistlePlay').on('click', trainWhistlePlay);
    $('#trainWhistlePause').on('click', trainWhistlePause);
    //TV Static
    $('#tvStaticPlay').on('click', tvStaticPlay);
    $('#tvStaticPause').on('click', tvStaticPause);
    //Quack
    $('#quackPlay').on('click', quackPlay);
    $('#quackPause').on('click', quackPause);
    //Fax
    $('#faxPlay').on('click', faxPlay);
    $('#faxPause').on('click', faxPause);
    //Weather
    $('#weatherPlay').on('click', weatherPlay);
    $('#weatherPause').on('click', weatherPause);
    //R2D2 One
    $('#r2d21Play').on('click', r2d21Play);
    $('#r2d21Pause').on('click', r2d21Pause);
}

//Train Whistle Functions
function trainWhistlePlay(){
    trainWhistle.play();
}

function trainWhistlePause(){
    trainWhistle.pause();
}

//TV Static Functions
function tvStaticPlay(){
    tvStatic.play();
}

function tvStaticPause(){
    tvStatic.pause();
}

//Quack Functions
function quackPlay(){
    quack.play();
}

function quackPause(){
    quack.pause();
}

//Fax Functions
function faxPlay(){
    fax.play();
}

function faxPause(){
    fax.pause();
}

//Weather Functions
function weatherPlay(){
    weather.play();
}

function weatherPause(){
    weather.pause();
}

//R2D2 One Function
function r2d21Play(){
    r2d21.play();
}

function r2d21Pause(){
    r2d21.pause();
}
})();