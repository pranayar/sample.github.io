document.getElementById("7").addEventListener("click",d7);
function d7(){
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"7";  
}
document.getElementById("8").addEventListener("click",d8);
function d8(){
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"8";  
}
document.getElementById("9").addEventListener("click",d9);
function d9(){
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"9";  
}

document.getElementById("1").addEventListener("click",d1);
function d1(){
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"1";  
}
document.getElementById("2").addEventListener("click",d2);
function d2(){
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"2";  
}
document.getElementById("3").addEventListener("click",d3);
function d3(){
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"3";  
}

document.getElementById("4").addEventListener("click",d4);
function d4(){
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"4";  
}
document.getElementById("5").addEventListener("click",d5);
function d5(){
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"5";  
}
document.getElementById("6").addEventListener("click",d6);
function d6(){
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"6";  
}

document.getElementById("/").addEventListener("click",d11);
function d11(){
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"/";  
}
document.getElementById("-").addEventListener("click",d12);
function d12(){
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"-";  
}
document.getElementById("+").addEventListener("click",d13);
function d13(){
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"+";  
}
document.getElementById("*").addEventListener("click",d14);
function d14(){
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"*";  
}
document.getElementById("0").addEventListener("click",d0);
function d0(){
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"0";  
}
document.getElementById("=").addEventListener("click",eql);
function eql(){
    check=true;
    s=(document.getElementById("output").innerText);
    s1=""
    s2=""
    symb=""
    for(var i=0;i<s.length;i++)
    {
        if(s[i]=='+'||s[i]=='-'||s[i]=='\\'||s[i]=="*")
        {
            symb=s[i];

        check=false;
        continue;
        }

        if(check==true)
        {
            s1=s1+s[i];
        }
        else
        s2=s2+s[i];
    }
    var n1=parseInt(s1);
    var n2=parseInt(s2);
    if(symb=="-")
     document.getElementById("output").innerHTML=String(n1-n2);
     else if(symb=="+")
     document.getElementById("output").innerHTML=String(n1+n2);
     else if(symb=="*")
     document.getElementById("output").innerHTML=String(n1*n2);
  
}