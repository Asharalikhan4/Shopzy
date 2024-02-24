import { Link } from "react-router-dom";

import ProductCart from "../components/ProductCart";

const Home = () => {

    const addToCartHandler = () => {

    }

    return (
        <div className="home">
            <section>

            </section>
            <h1>
                Latest Products
                <Link to={"/search"} className="findmore">More Items</Link>
            </h1>
            <main>
                <ProductCart productId="jkahdk" name="MacBook" price={99999} stock={46} handler={addToCartHandler} photo="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966368/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256713_xqa1ds.png?tr=w-1000" />
            </main>
        </div>
    );
};

export default Home;