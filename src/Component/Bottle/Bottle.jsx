import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({bottle, handleAddToCard}) => {
    const {name, img, price} = bottle;
    // console.log(bottle);
    return (
        <div className="bottle">
            <h4>Bottle: {name}</h4>
            <img src={img} alt="" />
            <p>${price}</p>
            <button onClick={() => handleAddToCard(bottle)}>Buy New</button>
        </div>
    );
};

Bottle.propTypes={
    bottle: PropTypes.object.isRequired,
    handleAddToCard: PropTypes.func.isRequired
}

export default Bottle;