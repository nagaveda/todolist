var button = document.getElementById("bt1");
var input=document.getElementsByTagName("input")[0];
var ul=document.getElementsByTagName("ul")[0];
button.addEventListener("click",function(){
    if(input.value.length>0){
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
         var del=document.createElement("button");
        del.appendChild(document.createTextNode("X"));
        li.appendChild(del);
        del.addEventListener("click",function(){
            li.remove();
        })
    
    }
        
    })
input.addEventListener("keypress",function(k){
    if(input.value.length>0 && k.keyCode===13){
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
        var del=document.createElement("button");
        del.appendChild(document.createTextNode("X"));
        li.appendChild(del);
        del.addEventListener("click",function(){
            li.style.textDecoration="line-through";
            li.remove();
        })
    }
        
    })