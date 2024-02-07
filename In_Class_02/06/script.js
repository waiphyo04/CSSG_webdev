function whatToDo(){
    let userText = document.getElementById("myTextInput").value;
    if (userText){
        let li = document.createElement("li");
        li.textContent = userText;
        document.getElementById("itemList").appendChild(li);
        document.getElementById("myTextInput").value = "";
    }
    else{
        alert("Please enter an item.");
    }
}

document.getElementById("addItem").addEventListener("click", whatToDo())