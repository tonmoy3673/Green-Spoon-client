import AllMenu from "./AllMenu";
import Banner from "./Banner";
import Chef from "./Chef";
import FoodCard from "./FoodCard";
import Products from "./Products";
import Testimonial from "./Testimonial";

const Home =()=>{
    return (
        <div>
           <Banner/>
           <Products/>
           <Chef/>
           <AllMenu/>
           <FoodCard/>
           <Testimonial/>
           
        </div>

    )
};

export default Home;