let project = document.getElementById('project')
let about = document.getElementById('about')
let cv = document.getElementById('cv')
let skill = document.getElementById('skill')
let contact = document.getElementById('contact')
let overlay = document.querySelector('.overlay')
let close = document.querySelector('.close')
let div = document.createElement('div')

close.onclick = ()=>{
    overlay.style.display = "none"
}



project.onclick = ()=>{
    change_dom(project_dom())
}

about.onclick = ()=>{
    change_dom(about_dom())
}

function change_dom(func){
    overlay.style.display = "block"
    div.innerHTML = func
    overlay.appendChild(div)
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







