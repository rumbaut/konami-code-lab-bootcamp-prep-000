const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener("keydown",function(e){
    var keyCode = var keyCode = (typeof e.which != "undefined") ? e.which : e.button;
    e.stopPropagation;
    code.forEach(function(element) {
          if(element === keyCode){
               alert(keyCode);
         }
      }, this);
  }, false);
}
document.onload = init();
