
console.log(num1.value);
console.log(num2.value);

addEventListener('submit', function(e){

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    if(num1 > num2){
        alert("Primeiro é maior");
    }else if(num2 > num1){
        return alert("Segundo é maior");
    }else{
        return alert("São iguais")
    }
})