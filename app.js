var x = 0;

function escribir1(){
var h = document.getElementById("1").value;
if (h == "" && x==0){
  document.getElementById("1").value= "X";
   x++;

}
else if (h=="" && x!=0) {
    document.getElementById("1").value= "O";
    x=0;
}
ganador();
}

function escribir2(){
    var h = document.getElementById("2").value;
    if (h == "" && x==0){
      document.getElementById("2").value= "X";
       x++;
    
    }
    else if (h=="" && x!=0) {
        document.getElementById("2").value= "O";
        x=0;
    }
    ganador();
    }

    function escribir3(){
        var h = document.getElementById("3").value;
        if (h == "" && x==0){
          document.getElementById("3").value= "X";
           x++;
        
        }
        else if (h=="" && x!=0) {
            document.getElementById("3").value= "O";
            x=0;
        }
        ganador();
        }

        function escribir4(){
            var h = document.getElementById("4").value;
            if (h == "" && x==0){
              document.getElementById("4").value= "X";
               x++;
            
            }
            else if (h=="" && x!=0) {
                document.getElementById("4").value= "O";
                x=0;
            }
            ganador();
            }

            function escribir5(){
                var h = document.getElementById("5").value;
                if (h == "" && x==0){
                  document.getElementById("5").value= "X";
                   x++;
                
                }
                else if (h=="" && x!=0) {
                    document.getElementById("5").value= "O";
                    x=0;
                }
                ganador();
                }

                function escribir6(){
                    var h = document.getElementById("6").value;
                    if (h == "" && x==0){
                      document.getElementById("6").value= "X";
                       x++;
                    
                    }
                    else if (h=="" && x!=0) {
                        document.getElementById("6").value= "O";
                        x=0;
                    }
                    ganador();
                    }

                    function escribir7(){
                        var h = document.getElementById("7").value;
                        if (h == "" && x==0){
                          document.getElementById("7").value= "X";
                           x++;
                        
                        }
                        else if (h=="" && x!=0) {
                            document.getElementById("7").value= "O";
                            x=0;
                        }
                        ganador();
                        }

                        function escribir8(){
                            var h = document.getElementById("8").value;
                            if (h == "" && x==0){
                              document.getElementById("8").value= "X";
                               x++;
                            
                            }
                            else if (h=="" && x!=0) {
                                document.getElementById("8").value= "O";
                                x=0;
                            }
                            ganador();
                            }

                            function escribir9(){
                                var h = document.getElementById("9").value;
                                if (h == "" && x==0){
                                  document.getElementById("9").value= "X";
                                   x++;
                                
                                }
                                else if (h=="" && x!=0) {
                                    document.getElementById("9").value= "O";
                                    x=0;
                                }
                                ganador();
                                }

function ganador(){
    var a = document.getElementById("1").value;
    var b= document.getElementById("2").value;
    var c= document.getElementById("3").value;
    var d= document.getElementById("4").value;
    var e= document.getElementById("5").value;
    var f= document.getElementById("6").value;
    var g= document.getElementById("7").value;
    var h= document.getElementById("8").value;
    var i= document.getElementById("9").value;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
    console.log(h);
    console.log(i);


    if(a === b && a === c && a!="" && b!="" && c!=""){
        alert ("winner "+a );
    }

    else if (d == e && d== f && d!="" && e!="" && f !=""){
        alert ("winner "+d);
    }

    else if(g == h && g == i && g!="" && h!="" && i !=""){
        alert ("winner "+g);
    }
    else if(a == d && a == g && a!="" && d!="" && g !=""){
        alert ("winner "+a );
    }

    else if (b == e && b == h && b!="" && e!="" && h !=""){
        alert ("winner "+b);
        }

    else if(c == f && c== i && c!="" && f!="" && i !=""){
        alert ("winner "+c);
    }
    else if(a == e && a== i && a!="" && e!="" && i !=""){
        alert ("winner "+a);
    }
    else if(c == e && c== g && c!="" && e!="" && g !=""){
        alert ("winner "+c);
    }

    else if(a!="" && b!="" && c !="" && d!="" && e!="" 
    && f !=""&& g!="" && h!="" && i !=""){
        alert("empate");
    }
}