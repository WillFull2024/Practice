console.log("this file is running")
function getName(el){
    console.log(el);
    let name = document.getElementById("name");
    // console.log(name.value)
    let h1Tag=document.getElementById("h1Tag");
    h1Tag.innerText="Hello " + name.value;
}