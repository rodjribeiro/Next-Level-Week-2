// Procurar o botão 
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)
//Executar uma acao
function cloneField(){
    //Duplicar os campos, que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos, que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pega o field do momento e limpa ele
        field.value = ""
    })

    //Colocar na pagina, onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)


}
    

