let menuVisibility = false

function toggleMenu() {
    if (menuVisibility) {
        document.getElementById("nav").classList = ""
        menuVisibility = false
    } else {
        document.getElementById("nav").classList = "responsive"
        menuVisibility = true
    }
}

function select() {
    document.getElementById("nav").classList = ""
    menuVisibility = false
}

function skillsEffect() {
    let skills = document.getElementById("skills")
    let skillsDistance = window.innerHeight - skills.getBoundingClientRect().top
    if(skillsDistance >= 300) {
        let skills = document.getElementsByClassName("progress")
        skills[0].classList.add("javascript")
        skills[1].classList.add("htmlcss")
        skills[2].classList.add("react")
        skills[3].classList.add("express")
        skills[4].classList.add("golang")
        skills[5].classList.add("comunication")
        skills[6].classList.add("teamwork")
        skills[7].classList.add("creativity")
        skills[8].classList.add("dedication")
        skills[9].classList.add("projectmanagement")
    }
}

window.onscroll = () => {
    skillsEffect()
}