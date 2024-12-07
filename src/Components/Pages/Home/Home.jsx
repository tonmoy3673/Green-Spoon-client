import AllMenu from "./AllMenu";
import Banner from "./Banner";
import Chef from "./Chef";
import FoodCard from "./FoodCard";
import Products from "./Products";

const Home =()=>{
    return (
        <div>
           <Banner/>
           <Products/>
           <Chef/>
           <AllMenu/>
           <FoodCard/>
           
        </div>

    )
};

export default Home;