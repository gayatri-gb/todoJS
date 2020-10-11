function get_todos{
    let todos = new Array;
    let todos_Str=localStorage.getItem('todo');
    if(todos_Str!=null){
        todos= JSON.parse(todos_Str)
    }
    
    return todos;
}

function add(){
    let task = document.getElementById('task').Value;
    let todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo',JSON.stringify(todos));

    show();

    return false;

}

function clearDefault(a){
    if(a.defaultValue = a.Value){a.Value=""}
};

function remove(){
    let id =this.getAttribute('id');
    let todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem(JSON.stringify(todos));
show();
return false;

}

function show(){
    let todos = get_todos();
    let html ='<ul>';
    for(let i=0;i<todos.length;i++){
        html +='<li>' +todos[i] +'<button class="remove" id="' + i + '">Delete</button></li>';

    };
    html+='</ul>';
    document.getElementById('todos').innerHTML = html;
    for(let i=0; i<buttons.length;i++){
        buttons[i].addEventListener('click', remove);
    };


}


document.getElementById('add').addEventListener('click', add);
show();