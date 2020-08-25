//procurar o botao
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)

//executar uma ação
function cloneField(){
    //duplicar os campus.Que campus?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        //pegar o fields do momento
        field.value =""
    })
    //colocar na página: onde colocar?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    