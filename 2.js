let sbt = () => {
    let uname = document.querySelector('#uname');
    let eml = document.querySelector('#eml');
    let pwd = document.querySelector('#pwd');
    var str = eml.value;
    var pattern = str.match(/[a-zA-Z0-9]+@[a-z]+(.)(com|in)/);
    if(pattern && eml.value.trim() != "" && pwd.value.trim() != ""){
    const newBox = document.querySelector('#addn-box');
    let newEle = newBox.cloneNode(true);
    newEle.style.visibility = "visible";
    newEle.children[0].children[0].innerHTML = uname.value;
    newEle.children[1].children[0].innerHTML = eml.value;
    let mainB = document.querySelector('#m-box');
    mainB.insertBefore(newEle,mainB.firstChild);
    uname.value = "";
    eml.value = "";
    pwd.value = "";
    }
    else{
        return;
    }

}