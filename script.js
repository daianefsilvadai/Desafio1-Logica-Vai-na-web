console.log("Ano novo está chegando!!!")

let nome = "Mariah Carey"
let idade = 54
let anoAtual = 2023

let dataNasc = (anoAtual - idade)
console.log(dataNasc)

let quartaFeira = true
console.log(typeof quartaFeira)

if(idade >= 18 ){
    console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.")
}else{
    console.log("Sinto muito, mas assistirá da tv globo")
}

let aniversario = "Junho"

if(aniversario == "Agosto" || aniversario == "Dezembro" || aniversario == "Junho"){
    console.log(`Uma ou mais opções estão corretas. O mês escolhido foi ${aniversario}!`)
}else{
    console.log(`Algo de errado não está certo, o mês digitado foi o ${aniversario}.`)
}



