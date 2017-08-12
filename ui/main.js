//counter code
var button = counter.getElementbyId('counter');
var counter = 0;
button.onClick=function(){
    //increasing the counter value
    var span = document.getElementbyId('count');
    counter = counter + 1;
    span.innerHTML= counter.toString();
}
