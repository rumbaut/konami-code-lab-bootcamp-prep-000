const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
document.body.addEventListener("keydown",init, false);
function init(e) {
            var keyCode = parseInt(e.detail || e.which);
            //console.log(keyCode);
            e.stopPropagation;
            code.forEach(function(element) {
                if(element === keyCode){
                     alert(keyCode);
                 }
            }, this);

          }
