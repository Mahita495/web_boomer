function myFunction1(){
  var x = document.getElementById("fname");
  document.getElementById("search").onclick =course; 


var  choose_course = [ ["MPC","1. Basics of Programming", "2. Basics of Electronics" ,"3. Intro to Designing", "4. Basics of Web development"], ["BIPC", "1. Know about Anatomy", "2. Intro to Bio Chemistry", "3. Agriculture Development", "4. Intro to Botany"], ["CEC", "1. Public policy analysis", "2. Society and media", "3. Numerical analysis", "4. Corporate law"], ["HEC", "1. Applied business analytics", "2. Enterpreneur strategies", "3. Business model innovations", "4. Strategic management of innovations"], ["DIPOLAMA", "1. Programming basics", "2. Foundations of data structures", "3. Basic electronics", "4. Analog circuits"] ]


  function course(){
    var text = "";
    for (var i=0; i<choose_course[0].length;i++){
      text+=choose_course[x.value - 1][i]+ "<br>"+"<br>";

    } 
     document.getElementById("content").innerHTML =text ;
    
  }
 
}
