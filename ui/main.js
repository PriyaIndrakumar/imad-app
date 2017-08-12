//counter code
var button = counter.getElementbyId('counter');
var counter = 0;
button.onClick=function(){
    //increasing the counter value
    counter = counter + 1;
    var span = document.getElementbyId('count');
    span.innerHTML= counter.toString();
}
