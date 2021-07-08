/**
 * Async Code
 * -------------------
 * Which starts now and finish later
 * 
 * Sync code works
 */


const renderTodos = (todos) => {
    const table = document.querySelector('table');
    
    let html = '';
    todos.forEach((todo) => {
        html += 
        `<tr>
            <td>${todo.id}</td>
            <td>${todo.userId}</td>
            <td>${todo.title}</td>
            <td>${todo.completed}</td>
        </tr>`;
    });

    table.innerHTML += html;
};
const getTodo = () => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            const result = JSON.parse(request.responseText);
            renderTodos(result);
        }else if(request.readyState === 4) {
            console.log('Could not fetch the data');
        }
    });

    request.open('GET','https://jsonplaceholder.typicode.com/todos');

    request.send();
};

getTodo();

const user = {
    "name" : "Alex",
    "age" : "22",
    "address": {
        "street": "mystreet",
        "city" : "mycity",
        "state" : "mystate", 
    }
}