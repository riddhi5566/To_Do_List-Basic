

# To-Do List App

A simple to-do list web application built using basic HTML, CSS, and JavaScript. The app allows users to add, remove, and mark tasks as completed.

## Features
- **Add Tasks:** Users can input tasks and add them to the list.
- **Remove Tasks:** Each task has a remove button (`×`) that deletes the task when clicked.
- **Mark as Completed:** Clicking on a task marks it as completed by adding a strikethrough.

## Project Structure

```
├── index.html       # HTML structure of the app
├── style.css        # CSS for the layout and design
├── script.js        # JavaScript for app functionality
├── images/          # Folder containing images (for icons)
│   ├── icon.png
│   ├── checked.png
│   └── unchecked.png
└── README.md        # Project documentation
```

## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript**

## Getting Started

### Prerequisites
To run this project, all you need is a web browser (e.g., Chrome, Firefox, etc.).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   ```
2. Navigate into the project directory:
   ```bash
   cd todo-list-app
   ```

3. Open `index.html` in your browser:
   ```bash
   open index.html
   ```

### Usage
1. **Add Task:** Type in your task in the input box and click the "Add" button.
2. **Delete Task:** Click the `×` icon next to a task to remove it from the list.
3. **Mark as Completed:** Click on any task to toggle the "completed" state (strikethrough effect).

## Code Overview

### HTML (`index.html`)
The basic structure of the app with an input box, a button to add tasks, and an unordered list (`<ul>`) for task items.

### CSS (`style.css`)
Styling for the to-do app, including the layout, background colors, fonts, and task list formatting.

### JavaScript (`script.js`)
Handles adding tasks, deleting tasks, and marking tasks as completed using event listeners.

```javascript
const inputEl = document.querySelector("input");
const listConatainer = document.getElementById("list-contaier");

function AddTodo() {
    const inputEl = document.querySelector("input");
    const val = inputEl.value;

    if(!val) {
        alert("Cannot add empty task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = val;
        listConatainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.addEventListener("click", function() {
            li.remove();
        });
        li.appendChild(span);

        inputEl.value = "";
    }
}

listConatainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
}, false);
```



Feel free to replace the placeholder links and images as per your project setup!
