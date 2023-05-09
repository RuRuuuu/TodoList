   

   window.addEventListener("load", function(){
    let contain =  document.querySelector(".container");
       contain.classList.add("container--hidden")

   contain.addEventListener("transitioned", function(){
       document.body.removeChild(contain);
 })
})



   let form = document.querySelector("form");
   let text = document.querySelector("#create");
   let divList = document.querySelector(".list");
  
    
   form.addEventListener("submit",function(e){
    e.preventDefault();
    todo();
    text.value = "";
   });

       let todos = JSON.parse(localStorage.getItem("todos"));
       if (todos) {
        todos.forEach(element => {
          todo(element);
        })
        
       }

   function todo(elem){
    let newTodo = document.createElement("div");
    let textShow = text.value;
    if (elem) {
           textShow = elem.text;
    };

    if (textShow) {
    newTodo.innerHTML = `<div class="todo-li">
    <div class="check ${elem && elem.complete?"mark-check":""}"><img src="images/icon-check.svg" alt="" class="img-check"></div>
    <p class="para ${elem && elem.complete?"line-through":""}">${textShow}</p>
    <button class="cancel"><img src="images/icon-cross.svg" alt=""></button>
  </div>`
      
     divList.appendChild(newTodo);
     listUpdate();

     
     
    } 

     
    
    
    
    //code for the cancel button
     let cancel = newTodo.querySelector(".cancel");
     cancel.addEventListener("click", function(){
      divList.removeChild(newTodo);
       listUpdate();
   })
     

         //code for adding the check class
      let marked = newTodo.querySelector(".check");
      marked.addEventListener('click', function(){
        divList.classList.toggle("white");
           marked.classList.toggle("mark-check");
           newTodo.children[0].children[1].classList.toggle("line-through");
          listUpdate();         
      })
      
}
            


       //code for local storage
       function listUpdate(){
               let  para1 = document.querySelectorAll(".para")
          let emptyArry = [];

            para1.forEach(element => {
         emptyArry.push({
          text:element.innerText,
          complete:element.classList.contains("line-through")

        })
       })
       localStorage.setItem("todos", JSON.stringify(emptyArry));    
   }
     

      


   let validation = document.querySelectorAll(".valida p");
   let todoli = document.querySelectorAll(".todo-li");
   let active = document.querySelector(".active");
   let all = document.querySelector(".all");
   let compl = document.querySelector(".comp");
   let clear = document.querySelector(".clear");
  let item = document.querySelector(".items")
   

   

   // code for the all, active and complete validation
          validation.forEach(element => {
            console.log(element);
            element.addEventListener("click", function(){
             if(element.innerText == "Active"){
             
             todoli.forEach(elem => {
          if (!elem.children[0].classList.contains("mark-check")) {
            elem.style.display = "flex"; 
          } else {
            elem.style.display = "none";
          }
        });   
      } else if(element.innerText == "Completed"){

        todoli.forEach(elem => {
          if (elem.children[0].classList.contains("mark-check")){
            elem.style.display ="flex"
          
          }else{
            elem.style.display = "none"
          
          }
          
        });
      } else if( element.innerText == "All"){
           todoli.forEach(elem => {
            elem.style.display = "flex"
           })
      } else{
        todoli.forEach(elem => {
          elem.style.display = "flex"
         })
      }   
     })
    })
   
               //code for acive state colors
               all.addEventListener("click", function(){ 
                all.style.color = "hsl(220, 98%, 61%)"
                  compl.style.color = "hsl(234, 11%, 52%)"
                   clear.style.color ="hsl(234, 11%, 52%)"
                   active.style.color ="hsl(234, 11%, 52%)"

                   item.innerText = todoli.length + " items left"
                })

            active.addEventListener("click", function(){ 
             active.style.color = "hsl(220, 98%, 61%)"
            compl.style.color = "hsl(234, 11%, 52%)"
            all.style.color = "hsl(234, 11%, 52%)"
             clear.style.color ="hsl(234, 11%, 52%)"
             })

           compl.addEventListener("click", function(){
            compl.style.color = "hsl(220, 98%, 61%)"
            active.style.color ="hsl(234, 11%, 52%)"
            all.style.color = "hsl(234, 11%, 52%)"
           })

           clear.addEventListener("click", function(){

            clear.style.color = "hsl(220, 98%, 61%)"
            compl.style.color = "hsl(234, 11%, 52%)"
            active.style.color ="hsl(234, 11%, 52%)"
            all.style.color = "hsl(234, 11%, 52%)"
            
            
            item.innerText = todoli.length + " items left"
            

           })

           let head = document.querySelector(".header-dark");
           let bod = document.querySelector(".bod");
           let lightmode = document.querySelector(".sun");
           let attri = document.querySelector(".attribution")


            //toggle image for the theme
            function toggleImg() {
              let initialImg = document.getElementById("imgg").src;
              let Test = initialImg.includes("images/icon-sun.svg");
              let newImg = {
                'true':"images/icon-moon.svg", 
                'false':"images/icon-sun.svg"}[Test];
            
              return newImg;
            }


            
           
           lightmode.addEventListener("click", function(){
            bod.classList.toggle("white");
            head.classList.toggle("header-light");
            document.getElementById("imgg").src = toggleImg();
            attri.classList.toggle("atrriBlack");
            
            

           })
          
    
       


   


      
   



   
      

