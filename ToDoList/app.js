const fs = require("fs");
const path = require("path");
const todoFile = "Todo.txt";

function todo() {
    const task = process.argv[2];
    const msg = process.argv.slice(3).join(' ');

    if (!task) {
        console.log("Please provide a task type (add, list, delete).");
        return;
    }

    switch (task) {
        case "add":
            if (!msg) {
                console.log("Please provide a task to add.");
                return;
            }
            addToDo(msg);
            console.log("Todo added!");
            break;
        case "list":
            listTodos();
            break;
        case "delete":
            const index = parseInt(msg, 10);
            if (isNaN(index)) {
                console.log("Please provide a valid task number to delete.");
                return;
            }
            const wasDeleted = deleteTodo(index);
            if (wasDeleted) {
                console.log("Todo deleted!");
            } else {
                console.log("Invalid task number.");
            }
            break;
        default:
            console.log("Unknown task. Available tasks: add, list, delete.");
            break;
    }
}

function addToDo(msg) {
    try {
        fs.appendFileSync(todoFile, `${msg}\n`);
    } catch (err) {
        console.error("Error adding task:", err);
    }
}

function listTodos() {
    try {
        const todos = getTodos();
        if (todos.length === 0) {
            console.log("No todos found.");
            return;
        }
        todos.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    } catch (err) {
        console.error("Error listing tasks:", err);
    }
}

function deleteTodo(index) {
    try {
        const todos = getTodos();
        if (index < 1 || index > todos.length) {
            return false;
        }
        todos.splice(index - 1, 1);
        if (todos.length > 0) {
            fs.writeFileSync(todoFile, todos.join("\n") + "\n");
        } else {
            fs.writeFileSync(todoFile, '');
        }
        return true;
    } catch (err) {
        console.error("Error deleting task:", err);
        return false;
    }
}

function getTodos() {
    try {
        const data = fs.readFileSync(todoFile, "utf-8");
        return data.trim().split("\n").filter(Boolean);
    } catch (err) {
        return [];
    }
}

todo();
