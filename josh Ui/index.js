

const textArea1=document.getElementById("ta1");
const textArea2=document.getElementById("ta2");




[textArea1,textArea2].forEach(ta =>{
    ta.addEventListener('input', ()=>{
        const ip1=textArea1.value.split(",").filter(tag=> tag.trim()!=='').map(tag=>tag.trim()) ;
        const ip2=textArea2.value.split(",").filter(tag=> tag.trim()!=='').map(tag=>tag.trim());
        fillBoxes(ip1,ip2);
    });
});



function fillBoxes(inp1 , inp2){

    // fill box 1
    document.querySelectorAll(".box").forEach(box =>{
        box.innerHTML="";
    })
    inp1.forEach(element =>{
        if(inp2.includes(element)==false ){
            let tempel=document.createElement("h4");
            tempel.classList.add("boxelement");
            tempel.innerText=element;
            document.querySelector(".box1").append(tempel);
        }
    });

    //fill box2
    inp1.forEach(element =>{
        if(inp2.includes(element)==true ){
            let tempel=document.createElement("h4");
            tempel.classList.add("boxelement");
            tempel.innerText=element;
            document.querySelector(".box2").append(tempel);
        }
    });

    //fill box3
    inp2.forEach(element =>{
        if(inp1.includes(element)==false ){
            let tempel=document.createElement("h4");
            tempel.classList.add("boxelement");
            tempel.innerText=element;
            document.querySelector(".box3").append(tempel);
        }
    });


}





