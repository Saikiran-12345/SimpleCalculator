var display=document.getElementById("display")
function saikiran(input){
    display.value=display.value+input
}
function Calculate(){
    display.value=eval(display.value)
}
function clearDisplay(){
    display.value=' '
}
