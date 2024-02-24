import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";

const cartItems = [{
    produdctId: "sldfjlkjsd",
    photo: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966368/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256713_xqa1ds.png?tr=w-1000",
    name: "Macbook Air",
    price: 99999,
    quantity: 4,
    stock: 10
}];

const subtotal = 4000;
const tax = Math.round(subtotal * 0.8);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {

    const [coupenCode, setCoupenCode] = useState<string>("");
    const [isValidCoupenCode, setIsValidCoupenCode] = useState<boolean>(false);

    useEffect(() => {
        const timeOutID = setTimeout(() => {
            if (Math.random() > 0.5) {
                setIsValidCoupenCode(true);
            } else {
                setIsValidCoupenCode(false);
            }
        }, 1000);
        return () => {
            clearTimeout(timeOutID);
            setIsValidCoupenCode(false);
        }
    }, [coupenCode])

    return (
        <div className="cart">
            <main>
                {
                    cartItems?.length > 0 ? (
                        cartItems?.map((i, idx) => <CartItem key={idx} cartItem={i} />)
                    ) : (
                        <h1>No Items Added</h1>
                    )
                }
            </main>
            <aside>
                <p>Subtotal: ₹{subtotal}</p>
                <p>Shipping Charges: ₹{shippingCharges}</p>
                <p>Tax: ₹{tax}</p>
                <p>Discount: <em className="red">- ₹{discount}</em></p>
                <p><b>Total: ₹{total}</b></p>
                <input type="text" placeholder="Coupen Code" value={coupenCode} onChange={(e) => setCoupenCode(e.target.value)} />
                {
                    coupenCode && (
                        isValidCoupenCode ? (
                            <span className="green">₹{discount} off using the <code>{coupenCode}</code></span>
                        ) : (
                            <span className="red">Invalid Coupon <VscError /></span>
                        )
                    )
                }
                {
                    cartItems?.length > 0 && (
                        <Link to={"/shipping"}>Checkout</Link>
                    )
                }
            </aside>
        </div>
    );
};

export default Cart;