let project = document.getElementById('project')
let about = document.getElementById('about')
let cv = document.getElementById('cv')
let skill = document.getElementById('skill')
let contact = document.getElementById('contact')
let overlay = document.querySelector('.overlay')
let close = document.querySelector('.close')

let div = document.createElement('div')
div.className = "inner"

// close.onclick = ()=>{
//     overlay.style.display = "none"
// }



project.onclick = ()=>{
    change_dom(project_dom())
}

about.onclick = ()=>{
    change_dom(about_dom())
}

function change_dom(func){
    overlay.style.display = "flex"
    div.innerHTML = func
    overlay.appendChild(div)
    if (!window.matchMedia("(max-width: 600px)").matches) {
        dragElement(div);
    }
}

function project_dom(){
    let render = `
    <div>
        MY Projects
    </div>
    `
    return render
}

function about_dom(){
    let render = `
    <div>
        About Me
    </div>
    `
    return render
}




// Draggable


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}






