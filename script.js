const inputEl = document.querySelector("input");
const listConatainer = document.getElementById("list-contaier");

function AddTodo()
{
    const inputEl = document.querySelector("input");
    const val = inputEl.value;

    if(!val)
    {
        alert("Cannot add empty task")
    }
    else
    {
        let li= document.createElement("li");
        li.innerHTML = val;
        listConatainer.appendChild(li);


        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        inputEl.value = "";
        saveData();
    }
}

listConatainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false)


function saveData()
{
    localStorage.setItem("data", listConatainer.innerHTML);

}


function showTask()
{
    listConatainer.innerHTML = localStorage.getItem("data");
}

showTask();



