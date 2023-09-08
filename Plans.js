document.addEventListener('click', e => {
    if(e.target.className == 'tick'){
        if(e.target.style.background == ''){
            e.target.style.background = 'lightgreen'
            e.target.style.border = '1px solid lightgreen'
            e.target.nextSibling.nextSibling.style.color = 'gray'
            e.target.nextSibling.nextSibling.style.textDecoration = 'line-through'
            todos[parseInt(e.target.id)-1].checked = true
        }
    }
    if(e.target.className == 'cancel'){
        todos = todos.filter(todo => todo.id !== parseInt(e.target.id))
        for(let todo of todos){
            if(todo.id > parseInt(e.target.id)){
                todo.id--
            }
        }
        updateSite()
    }
})
let todos = [{
    id: 1,
    text: 'Homework',
    checked: false
}]
const tdl = document.querySelector('.todo_list')
const addBtn = document.querySelector('.add_btn')
const addInp = document.querySelector('.add_input')
function updateSite(){
    tdl.innerHTML = ''
    for(let todo of todos){
        tdl.innerHTML += `            <div class="task" id="${todo.id}">
            <div class="tick" id="${todo.id}t"></div>
            <div class="task_name">${todo.text}</div>
            <button class="cancel" id="${todo.id}x">X</button>
        </div>`
        if(todo.checked){
            document.getElementById(String(todo.id) + 't').style.background = 'lightgreen'
            document.getElementById(String(todo.id) + 't').style.border = '1px solid lightgreen'
            document.getElementById(String(todo.id) + 't').nextSibling.nextSibling.style.color = 'gray'
            document.getElementById(String(todo.id) + 't').nextSibling.nextSibling.style.textDecoration = 'line-through'
        }
    }
}
updateSite()
let added = {}
addBtn.addEventListener('click', () => {
    if(addInp.value.length === 0){
        alert('It doesn\'t allowed to make empty todos!')
    }else{
        added = {
            id: todos.length === 0 ? 1 : todos.length+1,
            text: addInp.value,
            checked: false
        }
        todos.push(added)
        updateSite()
    }
})