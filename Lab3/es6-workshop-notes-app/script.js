// adding cat-me module
//let kitty = require("cat-me");
//console.log(kitty());

class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
    // HINT🤩 this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div'); //  div made
    newNote.setAttribute("class","card"); // class added

    let newP = document.createElement("p"); // p added
    newP.innerHTML = title; 

    let newA = document.createElement('a'); // created a element
    newA.setAttribute("class", "card-remove");
    newA.setAttribute("href", "#");
    newA.innerHTML = "Remove";
    // try
    
    newNote.appendChild(newP);  // p placed in dev
    newNote.appendChild(newA); // added a element to div
    // HINT🤩 
    newA.addEventListener("click", this.remove.bind(newNote));

    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(this.element);
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    //document.querySelector(".notes").removeChild(this.element);
    
    let items = localStorage.getItem("data");
    //JSON.parse => data becomes js object
    let data = JSON.parse(items);
    //console.log(data);
    if( data == null ){
      data = [];
      //console.log(data);
    }
    // add to array
    data.push(this.title);
    //console.log(data);
    // change to string
    localStorage.setItem("data", JSON.stringify(data));

  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    this.remove(this.parentNode);
    let text = this.querySelector('p').innerHTML;
    console.log(text);
     let items = localStorage.getItem(`data`);
  
    let newItem = JSON.parse("[" + items + "]");
    
    for(let i =0; i < newItem[0].length; i++){
      if(newItem[0][i] == text){
        console.log(newItem[0][i]);
        newItem[0].splice(i,1);
        
      }
      localStorage['data'] = JSON.stringify(newItem[0]);
    }
    console.log(newItem[0]);
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    let that = this;
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", (that).createNote.bind(that));

    this.txtAdd = document.querySelector('#txtAddNote');
    this.txtAdd.addEventListener("keypress", function(e){
      console.log(e.keyCode);
      if(e.keyCode === 13){ 
        console.log("enter works");
        document.querySelector("#btnAddNote").click();
      }
    } );
    this.loadNotesFromStorage();
    
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice

    let savedNotes = JSON.parse(localStorage.getItem(`data`));
    console.log(savedNotes);
    if(savedNotes){}
    savedNotes.forEach(element => {
      let note = new Note(element);
      note.add();
    });

  
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    
    // HINT🤩
    let text = document.querySelector("#txtAddNote").value;
    //console.log(text);
    let note = new Note(text); // created note
    note.add(); 
    note.saveToStorage();
    this.reset();
  }
  
  reset(){
    // this function should reset the form
    document.querySelector("#txtAddNote").value="";
  }
  
}

let app = new App();