document.addEventListener("DOMContentLoaded",function(event) {

    let store = JSON.parse(localStorage.getItem("stored")),
        nar = store ? store : [],
        lastcount = localStorage.getItem("counter"),
        count= lastcount ? lastcount : 0,
        list = document.getElementById("list"),
        divedit = document.getElementById("edit");
     
       
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
            num1= parseInt(content,10);
            num2= parseInt(tel,10);
            result = (num1+num2)/2;
            datestring = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
            element = document.createElement("LI");
            element.setAttribute("data-id",nar[i].id);
            divName = document.createElement("DIV");
            divName.textContent = name;
            divcont = document.createElement("DIV");
            divcont.textContent = content;
            divDat = document.createElement("DIV");
            divDat.textContent = datestring;
            divtel = document.createElement("DIV");
            divtel.textContent = tel;
            divres = document.createElement("DIV");
            divres.textContent = result;
            element.appendChild(divName);
            element.appendChild(divcont);
            element.appendChild(divtel);
            element.appendChild(divDat);
            element.appendChild(divres);


           element.addEventListener("click",showedit);
           list.appendChild(element);
           localStorage.setItem("stored",JSON.stringify(nar));
           localStorage.setItem("counter",count);
    }
}

       function showedit(){

            divedit.classList.remove("hide");

                let id = this.getAttribute("data-id"),

                name = '',
                content = '',
                tel = '';

                if(document.querySelector("#list li.sel") != null)
                {
                    document.querySelector("#list li.sel").classList.remove("sel");
                }

                this.classList.add('sel');

                for (let i =0 ; i < nar.length ; i++ )
                {

                    if (id === nar[i].id)
                    {

                        name = nar[i].name;
                        content = nar[i].content;
                        tel = nar[i].tel;
                    }


                }
                document.getElementById("edit-name").value=name;
                document.getElementById("edit-content").value=content;
                document.getElementById("edit-tel").value=tel;
        }

        document.getElementById("save").addEventListener("click", function() {
        let    name = document.getElementById("edit-name").value,
               content = document.getElementById("edit-content").value,
               tel = document.getElementById("edit-tel").value,
               id = document.querySelector("#list li.sel").getAttribute("data-id");
            

            for (let i =0 ; i < nar.length ; i++){

                if (nar[i].id == id)
                {
                    nar[i].name = name;
                    nar[i].content = content;
                    nar[i].tel = tel;
                    break;
                }
            }

            refresh();
                document.querySelector(`#list li[data-id="${id}"]`).classList.add("sel");


        });

        document.getElementById("cancel").addEventListener("click",function()
        {
            divedit.classList.add("hide");
            document.querySelector("#list li.sel").classList.remove("sel");




        });

        document.getElementById("del").addEventListener("click", function()
        {
            let id = document.querySelector("#list li.sel").getAttribute("data-id");

            confirmation = confirm("متأكد");
            if(confirmation)
            {
                for (let i =0; i < nar.length ; i++)
                {
                    if(nar[i].id == id)
                    {
                        if(i === 0 ) 
                        {
                            nar.splice(i,0);
                        }
                      
                        nar.splice(i,1);
                        break;
                    }
                }
                    refresh();
                    divedit.classList.add("hide");
            }
        });
});