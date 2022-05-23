const cardList = document.querySelector('.cardList');
let score = 0
const content = document.querySelector(".content");
const changeDiff = document.getElementById("ask");


function addCard(value){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('active');
    card.innerHTML = value;
    cardList.appendChild(card);
}



function buildBoard(value){
    for(let i = 0; i<12; i++){
        addCard("starter")
    }
}
buildBoard();

let interval =  setInterval(function(){
    addCard(cardList.children.length +1)
}, 2000)


cardList.addEventListener("click", function(e){
    console.log(e.target);
    

    if (e.target.matches(".cardList")){
        return
    }

    if(e.target.classList.contains("active")){
         (e.target.classList.remove("active"))
            score = score + 1;
         (e.target.classList.add("inactive"))
            score = score + 2;

        return

    }
    e.target.remove();
    let children = cardList.children;
    if(children.length<1){
        clearInterval(interval);
        const c = document.createElement("p");
        c.innerHTML = `Your score is ${score}`
        content.appendChild(c);

         const b = document.createElement("button");
         b.innerHTML = 'Difficulty: Hard'
         content.appendChild(b);

         b.addEventListener("click", function(e){
            score = 0

             function addCard(value){
                 let card = document.createElement('div');
                 card.classList.add('card');
                 card.classList.add('active');
                 card.innerHTML = value;
                 cardList.appendChild(card);
             }

             function buildBoard(value){
                 for(let i = 0; i<12; i++){
                     addCard("starter")
                 }
             }
             buildBoard();

             let interval =  setInterval(function(){
                 addCard(cardList.children.length +1)
             }, 200)

             cardList.addEventListener("click", function(e) {
                 console.log(e.target);


                 if (e.target.matches(".cardList")) {
                     return
                 }

                 if (e.target.classList.contains("active")) {
                     (e.target.classList.remove("active"))
                     score = score + 1;
                     (e.target.classList.add("inactive"))
                     score = score + 2;

                     return

                 }
                 e.target.remove();
                 let children = cardList.children;
                 if (children.length < 1) {
                     clearInterval(interval);
                     const c = document.createElement("p");
                     c.innerHTML = `Your score is ${score}`
                     content.appendChild(c);
                 }
             })

        })
    }
})

