
// console.dir(document);
// let header = document.getElementById("apple");
// console.log(header);
// header.className = "red";

let ListItems = document.querySelector("#apple")
console.log(ListItems);
  // multi selector
  let items = document.getElementsByClassName("apple1");
  console.log(items);
  items[0].style.backgroundColor = "yellow"; // this will not work because items is a collection of elements, not a single element

// for ( let i = 0; i < items.length; i++) { // not working because of live dom

//     var element = items[i];
//     element.style.color = "blue";
// }
// but change to tep array will work
    let tep = []
    for ( let i = 0; i < items.length; i++) {
        tep.push(items[i]);
    }
    console.log(tep);

    for ( let i = 0; i < tep.length; i++) {
        let element = tep[i];
        element.style.color = "blue";
    }

 let elements = document.getElementsByTagName("li");
 console.log(elements);

 for ( let i = 0; i < elements.length; i++) { // this is work 
    var element = elements[i];
    element.style.fontWeight = "bold";
 }

let addItems = document.querySelector("#apple");
console.log(addItems);

// traversing the dom

let list = document.getElementById("amazon");
console.log(list);

list.classList.add("chaltu");
console.log(list);


// let parent = list.parentNode
// console.log(parent);

let firstChild = list.previousElementSibling;
console.log(firstChild);


// altering the content element

let content = document.createElement("p");
console.log(content);
// content.textContent = "Facebook";
content.innerHTML = "<h1>Facebook</h1>"
console.log(content);
addItems.after(content);
// addItems.before(content);
content.remove()
//parent.removeChild(content) // this is old Way of removing element


// document.getElementById("list").append(content);
// document.getElementById("list").prepend(content);
// document.ul.appendChild("content")

let newContent = document.getElementById("amazon1");
// add before and after

let newContent2 = document.createElement("p");
newContent2.innerHTML = "<h1>Tesla</h1>"
   
//    document.getElementById("list").appendChild(newContent2);
 // EVENT HANDLER
// function abebe() {
//     alert("You cliked on Apple");
// }
//     let button = document.getElementById("change-bg");
//     button.onclick =  background;
//     function background() {
//         document.body.style.backgroundColor = "lightblue";
//     }

// function changeBackground() {
//     document.getElementById("apple").style.backgroundColor = "green";
// }

let btn = document.getElementById("change-bg");
let apple = document.getElementById("apple");

// btn.onclick = changebackground;
// btn.ondblclick = removebackground;

// function changebackground() {
//     apple.style.backgroundColor = "green";
//     apple.style.color = "white";
// }
btn.onclick = function() {
  // apple.style.backgroundColor = "green";
  // apple.style.color = "white";
}

// function removebackground() {
//     apple.style.backgroundColor = "";
//     apple.style.color = "";
// }

// function changeColor() {
//     apple.style.backgroundColor = "green";
//     apple.style.color = "white";
// }

// btn.addEventListener("click", changeColor);

btn.addEventListener("click", function() {
    apple.style.backgroundColor = "green";
    apple.style.color = "white";
})