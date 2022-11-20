//getting values from the html
const n1=document.getElementById("n1")
const n2=document.getElementById("n2")
const n3=document.getElementById("n3")
const n4=document.getElementById("n4")

//this is an addition function ....this occurs when you click on submit
const Q1=function(){
    //this is a condition to check your answer
    if(n1.value==6 && n2.value==8 && n3.value==10 && n4.value==14 ){
       alert('all correct')
    }else{
        alert('all correct except number 4')
    }
}

//this is an multiplication function ....this occurs when you click on submit
const Q2=function(){
    //this is a condition to check your answer
    if(b1.value==8 && b2.value==40 && b3.value==24 && b4.value==4 ){
       alert('all correct')
    }else{
        alert('all correct except number 1')
    }
}

//this is an subtraction function ....this occurs when you click on submit
const Q3=function(){
    //this is a condition to check your answer
    if(c1.value==0 && c2.value==-5 && c3.value==2 && c4.value==-3 ){
       alert('all correct')
    }else{
        alert('all correct except number 1')
    }
}