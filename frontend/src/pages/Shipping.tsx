import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Shipping = () => {

    const navigate = useNavigate();

    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: ""
    });

    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setShippingInfo((prev) => ({...prev, [e.target.name]:e.target.value}));
    };

    return(
        <div className="shipping">
            <button className="back-btn" onClick={() => navigate(-1)}>
                {/* replace -1 with "/cart" if it doesn't work properly */}
                <BiArrowBack />
            </button>
            <form>
                <h1>Shipping Address</h1>

                <input required type="text" placeholder="Address" name="address" value={shippingInfo.address} onChange={changeHandler} />

                <input required type="text" placeholder="City" name="city" value={shippingInfo.city} onChange={changeHandler} />

                <input required type="text" placeholder="State" name="state" value={shippingInfo.state} onChange={changeHandler} />

                <select required name="country" value={shippingInfo.country} onChange={changeHandler}>
                    <option value="">Choose Country</option>
                    <option value="india">India</option>
                    <option value="Nepal">Nepal</option>
                </select>

                <input required type="number" placeholder="Pin Code" name="pinCode" value={shippingInfo.pinCode} onChange={changeHandler} />

                <button type="submit">Pay Now</button>

            </form>
        </div>
    );
};

export default Shipping;