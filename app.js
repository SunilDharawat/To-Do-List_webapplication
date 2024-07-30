const inputBox = document.getElementById('input-box');
const inputBtn = document.getElementById('input-btn');
const listContainer = document.getElementById('list-container');

inputBtn.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert("Please add some tasks....");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    setData();
})

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        setData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        setData();
    }
})

function setData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
getData();


