import PropTypes from 'prop-types'; // ES6
import './Card.css'
const Card = ({card, handleRemoveFromCard}) => {
    return (
        <div>
            <h5>Card: {card.length}</h5>
            <div className="card-container">
                {
                    card.map(Bottle => <div key={Bottle.id}>
                        <img src={Bottle.img}></img>
                        <button onClick={ () => handleRemoveFromCard(Bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Card.propTypes ={
    card: PropTypes.array.isRequired,
    handleRemoveFromCard: PropTypes.func.isRequired
}

export default Card;