//counter code
var button = counter.getElementById('counter');
var counter = 0;
button.onClick=function(){
    //increasing the counter value
    counter = counter + 1;
    span.innerHTML= counter.toString();
    var span = document.getElementById('count');
}
