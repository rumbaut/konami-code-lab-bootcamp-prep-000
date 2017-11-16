const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
            var keyCode = var keyCode = (typeof e.which != "undefined") ? e.which : e.button;
            //console.log(keyCode);
            e.stopPropagation;
            code.forEach(function(element) {
                if(element === keyCode){
                     alert(keyCode);
                 }
            }, this);

          }
document.body.addEventListener("keydown",init, false);
