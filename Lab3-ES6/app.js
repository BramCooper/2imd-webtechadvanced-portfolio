class Note {
  constructor(title) {
      this.title = title;
      this.element = this.createElement(title);
  }
  
  createElement(title) {
      let newNote = document.createElement("li");
      newNote.addEventListener('click', this.remove.bind(newNote));
      newNote.innerHTML = title;
      return newNote;
  }
  
  add(note) {
      let todoList = document.querySelector("#taskList");
      todoList.appendChild(note);
  }
  
  saveToStorage(note) {
      let Storage = window.localStorage;
      let notes = [];

      if(Storage.notes === undefined){
          notes.push(note);
          Storage.setItem("notes", JSON.stringify(notes));
      }else{
          notes = JSON.parse(Storage.getItem("notes"));
          notes.push(note);
          Storage.setItem("notes", JSON.stringify(notes));
      }
  }
  
  remove() {
      let todoList = document.querySelector("#taskList");
      todoList.removeChild(this);
      
      let Storage = window.localStorage;
      let notesStorage = JSON.parse(Storage.getItem("notes"));
      let notesIndex = notesStorage.indexOf(this.innerHTML);

      notesStorage.splice(notesIndex, 1);
      Storage.setItem("notes", JSON.stringify(notesStorage));
  }
}
  
class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
    this.txtTodo = document.querySelector("#taskInput");
    this.txtTodo.addEventListener("keypress", this.createNote.bind(this));
    this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    let Storage = window.localStorage;
    let notesStorage = JSON.parse(Storage.getItem("notes"));

    if (notesStorage != null){
      notesStorage.forEach( (note)=> {
        let loadNewNote = new Note(note);
        loadNewNote.add(loadNewNote.element);
        });
    }
  }
  
  createNote(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      let input = this.txtTodo.value;
      let note = new Note(input);
      note.add(note.element);
      this.reset();
      note.saveToStorage(note.title);
    }
  }
  
  reset() {
    this.txtTodo.value = "";
  }
}
  
const app = new App();
  