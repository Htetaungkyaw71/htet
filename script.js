let project = document.getElementById('project')
let about = document.getElementById('about')
let cv = document.getElementById('cv')
let skill = document.getElementById('skill')
let contact = document.getElementById('contact')
let overlay = document.querySelector('.overlay')


let div = document.createElement('div')
div.className = "inner"




project.onclick = ()=>{
    change_dom(project_dom())
}

about.onclick = ()=>{
    change_dom(about_dom())
}

contact.onclick = ()=>{
  change_dom(contact_dom())
}

function change_dom(func){
    overlay.style.display = "flex"
    div.innerHTML = func
    overlay.appendChild(div)
    if (!window.matchMedia("(max-width: 600px)").matches) {
        dragElement(div);
    }
    let close = document.querySelector('.close')
    close.onclick = ()=>{
      overlay.style.display = "none"
  }
  
}

function project_dom(){
    let render = `
    <div>
        <button class="close">Close</button>
        MY Projects
    </div>
    `
    return render
}

function contact_dom(){
  let render = `
  <div class="contact">
  <div class="header">
      <button class="close">X</button>
      <p>
          Contact Me
      </p>
  </div>
  <div class="contact-main">
      <div class="social">
          <a href="https://github.com/Htetaungkyaw71" target="_blank">
              <img src="./images/github.png" alt="">
          </a>
          <a href="https://twitter.com/Htetaungkyaw172" target="_blank">
              <img src="./images/twitter.png" alt="">
          </a>
          <a href="https://www.facebook.com/htet.aungkyaw.33234/" target="_blank">
              <img src="./images/facebook.png" alt="">
          </a>
      </div>
      <hr>
      <form class="form-control">
          <input type="email" placeholder="Email" class="email" required>
          <textarea name="message" Placeholder="Message" class="message" cols="58" rows="10" required></textarea>
          <input type="submit" value="Send" class="send">
      </form>
  </div>

 
</div>
  `
  return render
}


function about_dom(){
    let render = `
   
    <div class="about">
        <div class="header">
          <button class="close">X</button>
          <p>
          About Me
          </p>
        </div>
        <div class="about-main">
            <img src="./images/htet.png" alt="">
            <h1>Htetaungkyaw</h1>
            <p>
                A full-stack developer who focuses on using Javascript, Python, React, Redux, Django, Flask, and Rails to build software solutions. My biggest goal in my life is to help people and improve society by using software engineering. Now I am a student at Microverse, a remote software development school that allows developers to pair programs and build projects together.
            </p>
        </div>
        
       
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






