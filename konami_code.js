const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
document.body.addEventListener("keydown",init, false);
function init(e) {
  // Write your JavaScript code inside the init() function
    var keyCode = e.wich;
    e.stopPropagation;
    code.forEach(function(element) {
        if(element === keyCode){
          console.log(keyCode);
        }
    }, this);
}
