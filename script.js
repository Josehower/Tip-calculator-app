let bill = document.getElementById("bill")
let service = document.getElementById("service")
let people = document.getElementById("people")
let recuadro = document.getElementById("recuadro")
let recuadroOriginal = recuadro.innerHTML;


bill = document.getElementById("bill")
service = document.getElementById("service")
people = document.getElementById("people")


function calculate(){
respuesta = Math.round(bill.value*(service.value/100)/people.value)
if (isNaN(respuesta)|| respuesta == Infinity) {
    recuadro.innerHTML=
"<span class='response'>Sorry i need all the values. <br><br> Please retry whit real values </span><button type='button' onclick='retry()'>retry</button>"
}
else if (respuesta != 0){
recuadro.innerHTML=
"<span class='response'> Each person should leave a tip of: <br><span id='Vdinero'>$ "+ 
respuesta +"</span id='Vdinero'></span><button type='button' onclick='retry()'>retry</button>"
}
else{recuadro.innerHTML=
    "<span class='responseL'> You dont have to give any tip. <br><br> But just consider give at least : <br><span id='Vdinero'>$ "+ 
    1 +"</span id='Vdinero'></span><button type='button' onclick='retry()'>retry</button>"

}
};

//calculate()

function retry() {
const recuadro = document.getElementById("recuadro")
recuadro.innerHTML= recuadroOriginal
bill = document.getElementById("bill")
service = document.getElementById("service")
people = document.getElementById("people")
console.log(bill.value)
console.log(service.value)
console.log(people.value)

};