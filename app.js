const con3 =document.querySelector("#con3");
const monitor = document.querySelector(".monitor");
const monitor_1 = document.querySelector(".monitor_1");
const monitor_2 = document.querySelector(".monitor_2");


let flag=1;
let operator='';
let operator_flag=0;

let sayi1;
let sayi2;

const calculate= () =>{
    if(operator=='+'){
        monitor.innerText=(sayi1)+(sayi2);
        monitor_1.innerText='';
        monitor_2.innerText='';
    }else if(operator=='-'){
        monitor.innerText=(sayi1)-(sayi2);
        monitor_1.innerText='';
        monitor_2.innerText='';
    }else if(operator=='x'){
        monitor.innerText=(sayi1)*(sayi2);
        monitor_1.innerText='';
        monitor_2.innerText='';
    }else if(operator=='÷'){
        monitor.innerText=(sayi1)/(sayi2);
        monitor_1.innerText='';
        monitor_2.innerText='';
    }else if(operator=='%'){
        monitor.innerText=(sayi1)%(sayi2);
        monitor_1.innerText='';
        monitor_2.innerText='';
    }
    
}  

con3.addEventListener("click",(e)=>{

   

    // window.onload
    if(e.target.classList.contains("operator") && !operator && (operator_flag!=0)){
        flag++;
        operator=e.target.innerText;
        monitor_2.innerText=operator;
        monitor.innerText='';
         
    }
    if(e.target.classList.contains("numbers")){
        
        monitor.innerText+=parseFloat(e.target.innerText);
        if(flag==1){
        sayi1=parseFloat(monitor.innerText)
        monitor_1.innerText=sayi1;
        }
        operator_flag++;
        if(flag==2){
            sayi2=parseFloat(monitor.innerText)
        }
    }

    if(e.target.classList.contains("dot")){
        monitor.innerText=monitor.innerText+e.target.innerText
    }
    if(e.target.classList.contains("ac")){
         flag=1;
     operator='';
     operator_flag=0;

     sayi1=0;
     sayi2=0;
    monitor.innerText='';
    monitor_1.innerText='';
    monitor_2.innerText='';
    }
    if(e.target.classList.contains("sign")){
        
        
        
        if(monitor.innerText!== (0)){
            monitor.innerText=monitor.innerText*(-1);
        }
        
        if(flag==1){
            sayi1=parseFloat(monitor.innerText)
            monitor_1.innerText=sayi1;
        }else if(flag==2){
                sayi2=parseFloat(monitor.innerText)
        }
    }

    if(e.target.classList.contains("equal")){
        calculate();
        
    }
    
})
