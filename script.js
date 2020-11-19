const dateElement = document.getElementById("date");

//show the date
const options = {weekday:"long", month:"short", day:"numeric", year:"numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add item to the list
// add item to the list
function addItem(){
    var ul = document.getElementById("list");
    var text = document.getElementById("input");
    var li = document.createElement("li");
    const trashCan = `<i class="fa fa-trash-o" style="font-size:22px" id="trash-btn"></i>`;
    li.setAttribute('id',input.value);
    li.appendChild(document.createTextNode(input.value));
    li.insertAdjacentHTML('beforeend', trashCan);
    ul.appendChild(li);
    li.style.color = 'red';
    li.style.fontSize = '24px';
    li.style.listStyleType = 'none';
    li.style.marginRight = '4rem';
}
add.addEventListener('click', function(){
        addItem();
      });



// clear everything on list 
function refresh() {
    refresh.addEventListener("click" , function(){
        refresh("refresh");
    })
}



// click on a "delete" button for each item
function deleteItem(){
    var li = document.getElementById("list");
    var text = document.getElementById("text");
    var item = document.getElementById(input.value);
    li.removeChild(item);
    if(item.classList[0] === "trashBtn"){
        const trashCheckIt = item.parentElement;
        trashCheckIt.classList.add("erase")
        ////trashCheckIt.remove()
        ////Arrow function to delay remove and update local storage
          setTimeout(delayDelete = () => {
              trashCheckIt.remove()
              ////Deletes html from local storage
              localStorage.setItem('savedToDoList', taskList.innerHTML);
            }, 600);
        }
}
list.addEventListener("click", function(){
    deleteItem("trash-btn"); // <i class="fa fa-trash-o" job="delete" id="0"></i>
});



// When clicking on a list item hit it with a strikethrough


