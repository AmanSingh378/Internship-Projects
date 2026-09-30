const taskForm = document.getElementById("taskForm");

const taskInput = document.getElementById("taskInput");
const category = document.getElementById("category");
const priority = document.getElementById("priority");
const dueDate = document.getElementById("dueDate");

const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const priorityFilter = document.getElementById("priorityFilter");

const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const taskCount = document.getElementById("taskCount");

const total = document.getElementById("total");
const pending = document.getElementById("pending");
const completed = document.getElementById("completed");

const error = document.getElementById("error");

const clearCompleted = document.getElementById("clearCompleted");
const clearAll = document.getElementById("clearAll");

const themeButton = document.getElementById("themeButton");


let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];


// SAVE TASKS

function saveTasks() {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
}


// ADD TASK

function addTask() {

    const title = taskInput.value.trim();

    if (title === "") {
        error.textContent = "Please enter a task.";
        return;
    }

    error.textContent = "";

    const task = {
        id: Date.now(),
        title: title,
        category: category.value,
        priority: priority.value,
        dueDate: dueDate.value,
        completed: false,
        createdAt: new Date().toLocaleString()
    };

    tasks.push(task);

    saveTasks();

    taskForm.reset();

    priority.value = "Medium";

    showTasks();
}


// DELETE TASK

function deleteTask(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) {
        return;
    }

    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    saveTasks();

    showTasks();
}


// COMPLETE TASK

function toggleTask(id) {

    tasks.forEach(function(task) {

        if (task.id === id) {
            task.completed = !task.completed;
        }

    });

    saveTasks();

    showTasks();
}


// EDIT TASK

function editTask(id) {

    const task = tasks.find(function(task) {
        return task.id === id;
    });

    if (!task) {
        return;
    }


    const newTitle = prompt(
        "Edit task:",
        task.title
    );


    if (newTitle === null) {
        return;
    }


    if (newTitle.trim() === "") {

        alert("Task cannot be empty.");

        return;
    }


    task.title = newTitle.trim();

    saveTasks();

    showTasks();
}


// FORMAT DATE

function formatDate(date) {

    if (!date) {
        return "No date";
    }

    const parts = date.split("-");

    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}


// SHOW TASKS

function showTasks() {

    taskList.innerHTML = "";

    const searchText =
        searchInput.value.toLowerCase().trim();

    const selectedStatus =
        statusFilter.value;

    const selectedPriority =
        priorityFilter.value;


    const filteredTasks = tasks.filter(function(task) {

        const matchesSearch =
            task.title
                .toLowerCase()
                .includes(searchText);


        let matchesStatus = true;

        if (selectedStatus === "active") {
            matchesStatus = !task.completed;
        }

        if (selectedStatus === "completed") {
            matchesStatus = task.completed;
        }


        let matchesPriority = true;

        if (selectedPriority !== "all") {
            matchesPriority =
                task.priority === selectedPriority;
        }


        return (
            matchesSearch &&
            matchesStatus &&
            matchesPriority
        );

    });


    if (filteredTasks.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }


    filteredTasks.forEach(function(task) {

        createTaskElement(task);

    });


    updateStats(filteredTasks.length);
}


// CREATE TASK ELEMENT

function createTaskElement(task) {

    const taskDiv = document.createElement("div");

    taskDiv.className = "task";


    // CHECK BUTTON

    const checkButton =
        document.createElement("button");

    checkButton.className = "check";


    if (task.completed) {
        checkButton.classList.add("completed");
    }


    checkButton.addEventListener(
        "click",
        function() {
            toggleTask(task.id);
        }
    );


    // CONTENT

    const content =
        document.createElement("div");

    content.className = "task-content";


    // TITLE

    const title =
        document.createElement("p");

    title.className = "task-text";

    title.textContent = task.title;


    if (task.completed) {
        title.classList.add("completed");
    }


    // INFO

    const info =
        document.createElement("div");

    info.className = "task-info";


    // CATEGORY

    const categoryBadge =
        document.createElement("span");

    categoryBadge.className = "badge";

    categoryBadge.textContent =
        task.category;


    // PRIORITY

    const priorityBadge =
        document.createElement("span");

    priorityBadge.className = "badge";


    if (task.priority === "High") {
        priorityBadge.classList.add(
            "priority-high"
        );
    }

    if (task.priority === "Medium") {
        priorityBadge.classList.add(
            "priority-medium"
        );
    }

    if (task.priority === "Low") {
        priorityBadge.classList.add(
            "priority-low"
        );
    }


    priorityBadge.textContent =
        task.priority;


    // DATE

    const dateBadge =
        document.createElement("span");

    dateBadge.className = "badge";

    dateBadge.textContent =
        task.dueDate
            ? "Due: " + formatDate(task.dueDate)
            : "No due date";


    info.appendChild(categoryBadge);

    info.appendChild(priorityBadge);

    info.appendChild(dateBadge);


    content.appendChild(title);

    content.appendChild(info);


    // ACTIONS

    const actions =
        document.createElement("div");

    actions.className = "actions";


    const editButton =
        document.createElement("button");

    editButton.className = "edit";

    editButton.textContent = "Edit";


    editButton.addEventListener(
        "click",
        function() {
            editTask(task.id);
        }
    );


    const deleteButton =
        document.createElement("button");

    deleteButton.className = "delete";

    deleteButton.textContent = "Delete";


    deleteButton.addEventListener(
        "click",
        function() {
            deleteTask(task.id);
        }
    );


    actions.appendChild(editButton);

    actions.appendChild(deleteButton);


    // FINAL TASK

    taskDiv.appendChild(checkButton);

    taskDiv.appendChild(content);

    taskDiv.appendChild(actions);


    taskList.appendChild(taskDiv);
}


// UPDATE STATISTICS

function updateStats(filteredCount) {

    const completedTasks =
        tasks.filter(function(task) {
            return task.completed;
        }).length;


    const pendingTasks =
        tasks.length - completedTasks;


    total.textContent =
        tasks.length;

    pending.textContent =
        pendingTasks;

    completed.textContent =
        completedTasks;


    if (filteredCount === 1) {

        taskCount.textContent =
            "1 task";

    } else {

        taskCount.textContent =
            filteredCount + " tasks";

    }
}


// CLEAR COMPLETED

clearCompleted.addEventListener(
    "click",
    function() {

        const hasCompleted =
            tasks.some(function(task) {
                return task.completed;
            });


        if (!hasCompleted) {

            alert("There are no completed tasks.");

            return;
        }


        const confirmClear =
            confirm(
                "Remove all completed tasks?"
            );


        if (!confirmClear) {
            return;
        }


        tasks =
            tasks.filter(function(task) {
                return !task.completed;
            });


        saveTasks();

        showTasks();

    }
);


// CLEAR ALL

clearAll.addEventListener(
    "click",
    function() {

        if (tasks.length === 0) {

            alert("There are no tasks.");

            return;
        }


        const confirmClear =
            confirm(
                "Delete all tasks?"
            );


        if (!confirmClear) {
            return;
        }


        tasks = [];

        saveTasks();

        showTasks();

    }
);


// FORM SUBMIT

taskForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        addTask();

    }
);


// SEARCH

searchInput.addEventListener(
    "input",
    function() {

        showTasks();

    }
);


// STATUS FILTER

statusFilter.addEventListener(
    "change",
    function() {

        showTasks();

    }
);


// PRIORITY FILTER

priorityFilter.addEventListener(
    "change",
    function() {

        showTasks();

    }
);


// DARK MODE

themeButton.addEventListener(
    "click",
    function() {

        document.body.classList.toggle("dark");


        if (
            document.body.classList.contains("dark")
        ) {

            themeButton.textContent =
                "Light Mode";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeButton.textContent =
                "Dark Mode";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    }
);


// LOAD SAVED THEME

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent =
        "Light Mode";
}


// INITIAL LOAD

showTasks();