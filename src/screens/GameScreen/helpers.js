const pickRandomCard = ({setAllCards, allCards}) => {
    const randomIndex = Math.floor(Math.random() * (allCards.length -1));
    const pickedCard = allCards[randomIndex];

    allCards.splice(randomIndex,1);
    setAllCards(allCards);

    return pickedCard
}


const getScore = (value) => {
    if(['Q','K', 'J'].includes(value)){
        return 10;
    }
    if(value == 'A'){
        return 11;
    }
    return value;
}

const hitCard = ({allCards, setAllCards, setUserCards, setOpponentCards,setUserScore, setOpponentScore, animate, win}) => () => {
    let userFinished = false;
    const userCard = pickRandomCard({setAllCards, allCards});
    setUserCards(existing => ([...existing, userCard]));
    setUserScore(currentScore => {
        const newScore = currentScore + getScore(userCard.value);
        if(newScore == 21){
            win('User', 21)
            return 21;
        }
        else if(newScore > 21){
            userFinished = true;
            return currentScore;
        }

        else return newScore;
    }
    )

    if(userFinished){
        showCard({userScore,opponentScore, setOpponentScore, setOpponentCards, allCards, setAllCards, win})
    }

    else{
     setTimeout(() => {
        const opponentCard = pickRandomCard({setAllCards, allCards});
        setOpponentCards(existing => ([...existing, opponentCard]));
        setOpponentScore(currentScore => currentScore+ getScore(opponentCard.value))
      }, 800);
   
    }
    animate();
}

const showCard = ({userScore,opponentScore, setOpponentScore, setOpponentCards, allCards, setAllCards, win}) => () => {
    const continueOpponentPlay = ()=> {
        const opponentCard = pickRandomCard({setAllCards, allCards});
        const newScore = opponentScore + getScore(opponentCard);
        if(newScore == 21){
            //Win with newScore
            setOpponentCards(existing => ([...existing, opponentCard]));
            setOpponentScore(currentScore => currentScore+ getScore(opponentCard.value))
            win?.('Draw', 21)
        }
        else if(newScore>21){
            //Win with score opponent Score
            if(userScore> opponentScore){
                win?.('User', userScore)
            }
            win?.('Dealer', opponentScore)
        }
        else{
            setOpponentCards(existing => ([...existing, opponentCard]));
            setOpponentScore(currentScore => currentScore+ getScore(opponentCard.value))
            continueOpponentPlay();
        }
    }

    if(userScore == 21){
        win?.('User', 21)
    }
    else{
        continueOpponentPlay();
    }
}

const cardKeyExtractor = (item,index) => {
    return `${item.suit}${item.value}`
}

export {pickRandomCard, cardKeyExtractor, hitCard, showCard}