console.log("this file is running")
function getName(el){
    console.log(el.target); 
    el.target.innerText = "Done";
    let name = document.getElementById("name");
    // console.log(name.value)
    let h1Tag=document.getElementById("h1Tag");
    h1Tag.innerText="Hello " + name.value;
}
const btn = document.getElementById("smt");
console.log(btn);
btn.addEventListener("click", (e)=>getName(e))