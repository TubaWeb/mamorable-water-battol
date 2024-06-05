const getStoreCard = () => {
    const storedCardString = localStorage.getItem('card');
    if(storedCardString){
        return JSON.parse(storedCardString);
    }
    return [];
}

const saveCardToLS = card =>{
    const cardStringified = JSON.stringify(card);
    localStorage.setItem('card', cardStringified);
}

const addToLS = id => {
    const card = getStoreCard();
    card.push(id);
    // save to local Storage
    saveCardToLS(card);
}

// Remove from LS
const removeFromLS = id => {
    const card = getStoreCard()
    // removing every id
    const remaining = card.filter(idx => idx !== id);
    saveCardToLS(remaining);
}

export {addToLS, getStoreCard, removeFromLS}