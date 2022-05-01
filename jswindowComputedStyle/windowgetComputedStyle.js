const h1 = document.querySelector('h1')
//Two methods 
//.style.attributeName needs to h1 to have inline css otherwise doesnot display anything

>h1.style.color
 ""
>window.getComputedStyle(h1)
 CSSStyleDeclaration{0:"",1:"",2:"",3:""}
>window.getComputedStyle(h1).fontSize
 "Times"