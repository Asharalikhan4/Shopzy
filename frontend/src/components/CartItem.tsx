import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
    cartItem: any;
};

const CartItem = ({ cartItem }: CartItemProps) => {

    const { photo, produdctId, name, price, quantity } = cartItem;

    return (
        <div className="cart-item">
            <img src={photo} alt={name} />
            <article>
                <Link to={`/product/${produdctId}`}>{name}</Link>
                <span>₹{price}</span>
                <div>
                    <button>-</button>
                    <button>{quantity}</button>
                    <button>+</button>
                </div>
            </article>
            <button><FaTrash /></button>
        </div>
    );
};


export default CartItem;