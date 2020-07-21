    


var val = 0;
var myH = setInterval(function() {
    window.ha.style.fontSize = val++;
    if(val > 30) {
        clearInterval(myH);
    }
}, 15);

    
