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

        span.addEventListener("click", function(){
            li.remove();
        })
        li.appendChild(span);

        inputEl.value = "";
    }
}

listConatainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
})



