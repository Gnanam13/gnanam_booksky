// selecting popup box popup overlay button
var popupoverlay = document.querySelector(".popupoverlay")
var popupbox = document.querySelector(".popupbox")
var addpopupbutton = document.getElementById("addpopupbutton")

addpopupbutton.addEventListener("click",function(){
   popupoverlay.style.display="block"
   popupbox.style.display="block"
})

// selecting cancel button
var canclepopup = document.getElementById("cancelpopup")

canclepopup.addEventListener("click",function(event){
   Event.preventdefault()
   popupoverlay.style.display="none"
   popupbox.style.display="none"       
})

//selecting container,add-book ,book-title-input,book-author-input,book-description-input


var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput= document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
   event.preventDefault()
   var div=document.createElement("div")
   div.setAttribute("class","Book-container")
   div.innerHTML=`<h1>${booktitleinput.value}</h1>
   <h4>${bookauthorinput.value}</h4>
   <p>${bookdescriptioninput.value}</p>
   <button onclick="deletebook(event)">Delete</button>`
   container.append(div)
   popupoverlay.style.display="none"
   popupbox.style.display="none"
})

function deletebook(event)
{
   event.target.parentElement.remove()
}