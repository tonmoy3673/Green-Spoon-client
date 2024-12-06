import { useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import SectionTitle from "../../../assets/images/SectionTitle/SectionTitle";
import Menu from "./Menu";

const AllMenu =()=>{
    const [menu,setMenu]=useState([]);
    const [display,setDisplay]= useState([4]);
    fetch('/data.json')
    .then((res)=>res.json())
    .then((data)=>setMenu(data))

    

    return(
        <div className="mb-6 md:mb-16">
            <div>
                <SectionTitle subTitle={'----- Check it Out -----'} title={'From Our Menu'}/>
            </div>
            <h2>All Menu : {menu.length}</h2>
            {/* ============= Menu Section ========== */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
                    {
                    menu && menu.map((menu)=><Menu key={menu._id} menu={menu}/>)
                    }
                    
                </div>
                <div className="flex items-center gap-2 py-3 mt-0 md:mt-10 justify-center border-b-2 border-green-600 w-32 rounded-2xl mx-auto shadow-2xl cursor-pointer hover:w-40 hover:gap-x-8 transition-transform  hover:scale-y-100">
                        <button className="text-green-600">Show More</button>
                       
                        <FaArrowDownLong fill="green"  className="mt-1" />

                    </div>
        </div>
    )
};

export default AllMenu;