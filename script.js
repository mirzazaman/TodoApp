// get input Element
let input = document.getElementById('ipt');

// enter key Function
function enter(e) {
    if (e.keyCode === 13) {
        todo();
    }   
   }

// let's Start with main function
function todo() {

    // erase spacing from text
    let text = input.value.trim(); 
   
    // empty input before get
    input.value="";

    // get text if it have
    if (text.length === 0) {
        return;
    }

    // select parent ul element
    let parent = document.getElementById('list');

    // create li element
    let child = document.createElement('li');
    
    // set class for Decoration
    child.setAttribute("class","text");

    // set value of input into li
    child.innerText = text;

    // append li to ul's child
    parent.appendChild(child);

    // create Delete Button
    let delBtn = document.createElement('button');
    
    // add name to button
    delBtn.innerText="Del";

    // set attributes for decoration and Delete function
    delBtn.setAttribute("id","delBtn");
    delBtn.setAttribute("onclick","del(this)");

    // append delete btn to ul's child
    child.appendChild(delBtn);

    // create input (checkBox) element
    let box = document.createElement('input');

    // set attributes for decoration and function
    box.setAttribute("type","checkbox");
    box.setAttribute("id","box");
    box.setAttribute("onClick","checkBox(this)");

    // append checkbox to ul's child
    child.appendChild(box);
}

// checkbox function
function checkBox(para2){
    if(para2.checked === false){

// default type
        para2.parentNode.style.textDecoration = "none";
        para2.parentNode.style.opacity =  "1.0";
    }
    else{
// when Click on checkbox it will go to lineThroughItem funtion
        lineThroughItem(para2);
    }
}

// Function to low & line through
function lineThroughItem(para3){
    para3.checked = true;
    para3.parentNode.style.textDecoration = "line-through";
    para3.parentNode.style.opacity = "0.5";
    
}
// function to delete element
function del(para1) {
    para1.parentNode.remove();
}