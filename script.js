// const inputText = document.querySelector("#inptext");
// console.log(inputText);
// const todo = document.querySelector("#addedtexttodo");
// console.log(todo);
// todo list code
const btn = document.getElementById("Addbtn");
const input = document.querySelector(".input");
const list = document.querySelector(".list");
const validator = document.querySelector(".validator");

// creating another variable
// const fruit = "apple";
// create variable to get validation text from html

// creating remove todo function
// catching the this argument in i parameter
function removeTodo(i)
{
  // alert("remove todo");
  //  console.log(i);
  // console.log(i.parentNode);
  console.log(i.parentNode.remove());
}

// creating add function
function addTodo()
{
// check if text box is empty
if(input.value!=="")
{
   // input.value is giving the value enter in the input box
//  console.log("addtodo",input.value); 
// inserting li in our list using js
const li = document.createElement("li");
// console.log(li);
// li.textContent="raima aftab" + input.value;

// we can also add style here as whole html code is passing here in backtick we can also apply style classes here
// this pass the current element 

li.innerHTML=`${input.value}
<button onclick="removeTodo(this)" type= "button">Remove</button>`;

// adding li in list
list.appendChild(li);
// clear text box
input.value = "";
// clear empty input msg
validator.textContent="";

}
// if condition loop close here

else
{ validator.textContent="Empty input";}
}
// func close
