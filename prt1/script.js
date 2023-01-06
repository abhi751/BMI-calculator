var age=document.getElementById("age");
var results=document.getElementById("result")
var male=document.getElementById("m")
var female=document.getElementById("f")
var ages=document.getElementById("text-input").value


function BMI(){
    var height=document.getElementById("height").value
    var weight=document.getElementById("weight").value
    var bmi=weight/(height/100*height/100)
    var bmio=(bmi.toFixed(2))
    results.innerHTML="BMI=" + bmio +"kg/mm2"

}

if(ages>120){
    document.getElementById("statement").innerHTML="Please provide age between 2 and 120"
}


