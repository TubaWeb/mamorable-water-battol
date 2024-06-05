import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoreCard, removeFromLS } from "../../utilities/localstorage";
import Card from "../Card/Card";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // Load card from local storage
    useEffect(() => {
        console.log('call the useEffect', bottles.length);
        if (bottles.length) {
            const storeCard = getStoreCard();
            console.log(storeCard, bottles);

            const saveCard = [];
            for(const id of storeCard){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);

                if(bottle){
                    saveCard.push(bottle);
                }
            }

            console.log('saved card', saveCard);
            setCard(saveCard);

        }
    }, [bottles])

    const handleAddToCard = bottle => {
        const newCard = [...card, bottle];
        setCard(newCard);
        addToLS(bottle.id);
    }

    // Remove any bottle
    const handleRemoveFromCard = id => {
        // visual card remove
        const remainingCard = card.filter(bottle => bottle.id !== id);
        setCard(remainingCard);
        // remove from LS
        removeFromLS(id)

    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            {/* <h5>Card: {card.length}</h5> */}
            <Card card={card} handleRemoveFromCard={handleRemoveFromCard}></Card>



            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCard={handleAddToCard}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;