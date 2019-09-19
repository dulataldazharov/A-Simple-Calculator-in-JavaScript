let a=0;
let op=null;
let ops=["+","-","*","/"];
let nums=[];
for (let i=0; i<10; i++){
    nums.push(i.toString());
}

function present(a, arr){
    for (let i=0; i<arr.length; i++){
        if (arr[i]===a){
            return true;
        }
    }
    return false;
}

function clearAll(){
    a=0;
    op=null;
    document.querySelector(".screen-text").innerHTML="0";
}

function compute(){
    let result;
    let b=parseInt(document.querySelector(".screen-text").innerText);
    if (op===null){
        return;
    }
    if (op==="+"){
        result=(a+b).toString().substr(0, 12);
        document.querySelector(".screen-text").innerText=result;
        a=parseInt(result);
    }
    if (op==="-"){
        result=(a-b).toString().substr(0, 12);
        document.querySelector(".screen-text").innerText=result;
        a=parseInt(result);
    }
    if (op==="*"){
        result=(a*b).toString().substr(0, 12);
        document.querySelector(".screen-text").innerText=result;
        a=parseInt(result);
    }
    if (op==="/"){
        result=(a/b).toString().substr(0, 12);
        document.querySelector(".screen-text").innerText=result;
        a=parseInt(result);
    }
}

document.querySelector(".calculator-body").addEventListener('click', function(event){
    let d=document.querySelector(".screen-text");
    if (d.innerText==="Infinity") clearAll();
    let s=event.target.innerText;
    console.log("Event detected\n");
    console.log(s);
    if (present(s, ops)===true){
        console.log("operation was pressed\n");
        a=parseInt(d.innerText);
        op = s;
        d.innerText="0";
    }
    else if (present(s, nums)===true){
        if (d.innerText.length===12){
            return;
        }
        console.log("number was pressed\n");
        if (d.innerText==="0")
            d.innerText=s;
        else {
            d.innerText+=s;
        }
    }
    else if (s==="CL"){
        clearAll();
    }
    else if (s==="="){
        compute();
    }
})