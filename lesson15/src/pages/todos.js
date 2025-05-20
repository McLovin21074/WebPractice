import Auth from "../services/auth.js";
import location from "../services/location.js";
import loading from "../services/loading.js";

const API_URL = 'http://localhost:8000/api/todo';
const token = localStorage.getItem('access-token');

const init = async () => {
    const { ok: isLogged } = await Auth.me();

    if (!isLogged) {
        return location.login();
    }

    loading.stop();

    await loadTodos();

    const addButton = document.getElementById("toDoInputConfirm");
    addButton.addEventListener("click", addTodo);
};

    // create POST /todo { description: string }
    // get get /todo/1 - 1 это id
    // getAll get /todo
    // update put /todo/1 - 1 это id { description: string }
    // delete delete /todo/1 - 1 это id

const fetchWithAuth = (url, options = {}) => {
    return fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            ...options.headers
        },
        credentials: 'include'
    });
};

const createTodoElement = (description, completed, id) => {
    const element = document.createElement("div");
    element.className = "todo-item";
    element.innerHTML = `
        <p>${description}</p>
        <label>
            <input type="checkbox" class="todo-checkbox" ${completed ? 'checked' : ''}>
        </label>
        <button class="remove-btn" id="${id}">Remove</button>
    `;

    const checkbox = element.querySelector(".todo-checkbox");
    checkbox.addEventListener("change", async (e) => {
        checkbox.disabled = true;
        const res = await fetchWithAuth(`${API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ completed: checkbox.checked })
        });
        checkbox.disabled = false;
    });

    const removeBtn = element.querySelector(".remove-btn");
    removeBtn.addEventListener("click", async () => {
        const res = await fetchWithAuth(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        if (res.ok) {
            element.remove();
        } 
    });
    return element;
};

const loadTodos = async () => {
    const response = await fetchWithAuth(API_URL);
    const result = await response.json();
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = '';

    result.data.forEach(todo => {
        const el = createTodoElement(todo.description, todo.completed, todo.id);
        todoList.appendChild(el);
    });
};

const addTodo = async () => {
    const input = document.getElementById("toDoInput");
    const description = input.value.trim();
    if (!description) return;

    const response = await fetchWithAuth(API_URL, {
        method: 'POST',
        body: JSON.stringify({ description })
    });

    if (response.ok) {
        const result = await response.json();
        const newElement = createTodoElement(result.data.description, false, result.data.id);
        document.getElementById("todoList").appendChild(newElement);
        input.value = '';
    }
};


if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
