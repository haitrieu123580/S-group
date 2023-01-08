const notesObj = [
    {
        id: 1,
        content: "bla bla..."
    },
    {
        id: 2,
        content: "bla bla ...2"
    }
]
function showNote() {
    let notes = document.getElementsByClassName("note__list")[0];
    for (let i of notesObj) {
        notes.innerHTML += `
        <div class="note__item">
    <div class="item__head">
        <button id="save" onclick="saveNote(${i.id})"><i class="fas fa-edit"></i></button>
        <button id="delete" onclick="deleteNote(${i.id})">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
    <div class="item__body">
        <textarea>${i.content}</textarea>
    </div>
</div>
        `;
    }
}

showNote();


function addNote() {
    let notes = document.getElementsByClassName("note__list")[0];
    let newIndex = notesObj.length;
    notes.innerHTML += `
    <div class="note__item">
    <div class="item__head">
        <button id="save" onclick="saveNote(${newIndex})"><i class="fas fa-edit"></i></button>
        <button id="delete" onclick="deleteNote(${newIndex})">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
    <div class="item__body">
        <textarea></textarea>
    </div>
</div>
    `;
    let newNote ={
        id:newIndex,
        content:""
    }
    notesObj.push(newNote)
    // const node = document.createElement("div");
    // const textNode = document.createTextNode(`
    // <div class="note__item">
    //             <div class="item__head">
    //                 <button id="edit"><i class="fas fa-edit"></i></button>
    //                 <button id="delete" onclick="deleteNote(this)">
    //                     <i class="fas fa-trash-alt"></i>
    //                 </button>
    //             </div>
    //             <div class="item__body">
    //                 <textarea></textarea>
    //             </div>`)
    // node.appendChild(textNode);
    // document.getElementsByClassName("note__list")[0].appendChild(node);
    console.log("btn Add")
}

function deleteNote(noteId) {
    // let noteDel = notes.indexOf(noteId);
    let noteDel;
    for (let i of notesObj) {
        if (i.id == noteId) {
            noteDel = i;
        }
    }
    let index = notesObj.indexOf(noteDel);
    if (index > -1) { // only splice array when item is found
        notesObj.splice(index, 1); // 2nd parameter means remove one item only
    }
    document.querySelectorAll(".note__item").forEach(e => e.parentNode.removeChild(e));;
    showNote();

}

function saveNote(noteId){
    //get textarea content 
    let noteContent;
    // update and save new content
    
    let noteUpdate;
    for (let i of notesObj) {
        if (i.id == noteId) {
            noteUpdate = i;
        }
    }
    noteUpdate.content = noteContent;
}