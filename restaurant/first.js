let loading = document.querySelector(".loading");
let container = document.querySelector(".container");
let card = document.querySelectorAll(".card");

card.forEach(function(cards){
    cards.addEventListener("click", function(){
        console.log(cards);

        let div = document.createElement("div");
        div.classList.add("foodDetail");
        div.innerHTML=
    })
})
container.style.display="none";
setTimeout(function(){
    container.style.display="block";
    loading.style.display="none";  
   

},2000)