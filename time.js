(function(){
    $(document).ready(init);

function init(){
    time();
    function time(){
        var date = new Date();
        var hh = date.getHours();
        var mm = date.getMinutes();
        var ss = date.getSeconds();
        var dd = "AM";
    
        var h = hh;
        if(h >= 12){
            h = hh - 12;
            dd = "PM";
        }
        if(h === 0){
            h = 12;
        }
        if(mm < 10){
            h = h < 10 ? "0" + h : h;
        }
        if(mm < 10){
            mm = mm < 10 ? "0" + mm : mm;
        }
        if(ss < 10){
            ss = ss < 10 ? "0" + ss : ss;
        }
    
        $('#hour').append(h + ":");
        $('#min').append(mm + ":");
        $('#sec').append(ss + " ");
        $('#type').append(dd);
    }

    setInterval(function(){
        $('#hour').empty();
        $('#min').empty();
        $('#sec').empty();
        $('#type').empty();
        time();
    }, 1000);
}
})();