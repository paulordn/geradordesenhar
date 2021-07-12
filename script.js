function pswGenerate(){
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let password = " "
    let leght = document.getElementById("pswLeght").value
    let qtd = document.getElementById("pswQtd").value
    let spc = document.getElementById("special").checked
    let numb = document.getElementById("number").checked
    let upp = document.getElementById("upperCase").checked
    
    if(spc == true){characters += "@#$%&*"}
    if(numb == true){characters += "1234567890"}
    if(upp == true){characters += "ABCDEFGHUJKLMNOPQRSTUVWXYZ" }
    
    let charactersLength = characters.length
   
    for(let y = 1; y <= qtd; y++){

        let passwordN = ' '
    for (let x = 1; x <= leght; x++){
        passwordN = passwordN + characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    password = passwordN + " " + password
}
    
document.getElementById("answer").value = password

}




