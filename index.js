//Codigo para calcular o indice de massa corporal de determinada pessoa:
const peso = 68
const altura = 1.65
let imc = peso / (altura * altura) //IMC = indice de massa corporal

if (imc< 18.5){
    console.log ("Abaixo do peso!")
}
    else if (imc>= 18.5 && imc<25){
        console.log ("Peso Normal!")
    }
        else if (imc >= 25 && imc<30){
            console.log ("Acima do peso!")
        }
            else if (imc>= 30 && imc<40){
                console.log("Obeso!!!")
            }
                else{
                    console.log("Obesidade Grave")
                }

console.log (imc.toFixed(2))
