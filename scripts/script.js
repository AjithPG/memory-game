document.addEventListener('DOMContentLoaded',() => {

    //cardArray
    var cardArray =[
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'milkshake',
            img:'images/milkshake.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
    ]
    cardArray.sort(() => 0.5 - Math.random());
    const grid = document.querySelector('.grid');
    const palyButton =document.querySelector('.playButton');
    const resultDisplay = document.querySelector('#result');
    var cardChosen = [];
    var cardChosenId = [];
    var cardsWon = [];

    function createBoard(){
        for(let i=0;i<cardArray.length;i++){
            var card = document.createElement('img');
            card.setAttribute('src','images/blank.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipCard);
            grid.appendChild(card);

           
        }
    }
    createBoard();
    //check matches
    function playAgain(){
        var playBtn = document.createElement('button');
        playBtn.setAttribute('id','palyButton');
        playBtn.innerHTML='Play Again';
        palyButton.appendChild(playBtn);
        palyButton.addEventListener('click',function(){
            location.reload();
        })
    }
    function checkMatch(){
        var cards = document.querySelectorAll('img');
        var optionOneId = cardChosenId[0];
        var optionTwoId = cardChosenId[1];
        if(cardChosen[0] === cardChosen[1]){
           alert("You found a match");
           cards[optionOneId].setAttribute('src','images/white.png');
           cards[optionTwoId].setAttribute('src','images/white.png');
           cardsWon.push(cardChosen);
           console.log(cardsWon);
        }
        else{
            cards[optionOneId].setAttribute('src','images/blank.png');
            cards[optionTwoId].setAttribute('src','images/blank.png');
            alert('try again');
        }
        cardChosen = [];
        cardChosenId = [];
        resultDisplay.textContent ='Score :' + cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations!';
            setTimeout(playAgain,1000);
        }
    }

    //flip your card
    function flipCard(){
        if(this.getAttribute('src') === 'images/white.png'){
            alert('Already Matched');
           return;
        }
        let cardId = this.getAttribute('data-id');
        cardChosen.push(cardArray[cardId].name );
        cardChosenId.push(cardId);
        this.setAttribute('src',cardArray[cardId].img);
        console.log(this.getAttribute('src'));
        if(cardChosenId.length == 2){
            setTimeout(checkMatch,500);
        }
        
    }

  
})