function invertmode() {
    var body = document.getElementsByTagName("body")
    if (body[0].className == "lightmode") {
        body[0].className = "darkmode"
        // document.getElementsByTagName("li")[0].innerHTML = "Modo claro"
    } else {
        body[0].className = "lightmode"
        // document.getElementsByTagName("li")[0].innerHTML = "Modo escuro"
    }
}
letter_size = 20

function largerLetter() {
    var body = document.getElementsByTagName("body")
    var form_st = document.getElementsByClassName("form_st")
    letter_size++
    body[0].style.fontSize = ` ${letter_size}px `
    for (i = 0; i < form_st.length; i++) form_st[i].style.fontSize = ` ${letter_size}px `

}

function smallerLetter() {
    var body = document.getElementsByTagName("body")
    var form_st = document.getElementsByClassName("form_st")
    letter_size--
    body[0].style.fontSize = ` ${letter_size}px `
    for (i = 0; i < form_st.length; i++) form_st[i].style.fontSize = ` ${letter_size}px `
}

