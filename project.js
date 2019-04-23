document.addEventListener("DOMContentLoaded",function(event) {
let store = JSON.parse(localStorage.getItem("stored"));
nar = store ? store : [],

lastcount = localStorage.getItem("counter"),
 count= lastcount ? lastcount : 0,
 list = document.getElementById("list");
 refresh();
document.getElementById("add").addEventListener("click",function(){
    let name = document.getElementById("name").value,
     content = document.getElementById("content").value,
      tel = document.getElementById("tel").value;
    date = new Date();
    if (name === ""){
        console.log("ما تحنك في التبش");
    }
    else {
        nar.push({
            id : count,
            name,
            content,
            tel,
            date
        })

        count ++;
        console.log("اصلي كيف");

    }
    document.getElementById("content").value = "";
    document.getElementById("name").value = "";
    document.getElementById("tel").value = "";
    refresh();
})
function refresh(){
    list.innerHTML = '';
    for (let i =0 ; i < nar.length ; i++ ){
        let name = nar[i].name,
            date = new Date(nar[i].date),
            content = nar[i].content,
            tel = nar[i].tel,
            datestring,
            element,
            divName,
            divcont,
            divDat,
            divtel;
       datestring = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
       element = document.createElement("LI");
       divName = document.createElement("DIV");
       divName.textContent = name;
       divcont = document.createElement("DIV");
       divcont.textContent = content;
       divDat = document.createElement("DIV");
       divDat.textContent = datestring;
       divtel = document.createElement("DIV");
       divtel.textContent = tel;
       element.appendChild(divName);
       element.appendChild(divcont);
       element.appendChild(divtel);
       element.appendChild(divDat);
       list.appendChild(element);
       localStorage.setItem("stored",JSON.stringify(nar));
       localStorage.setItem("counter",count);
    }
}
});