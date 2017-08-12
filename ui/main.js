//counter code
var button = counter.getElementById('counter');
var counter = 0;
button.onclick = function () {
    //increasing the counter value
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};
