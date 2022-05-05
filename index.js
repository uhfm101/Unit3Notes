const cardList = document.querySelector('.cardList');
let score = 0
score++


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
        e.target.classList.remove("active");
        score +1
        e.target.classList.add("inactive");
        score +2
        return
        console.log(score)
    }
    e.target.remove();
    let children = cardList.children;
    if(children.length<1){
        clearInterval(interval);
    }
})