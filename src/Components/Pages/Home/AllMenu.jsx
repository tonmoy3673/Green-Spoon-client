import { useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import SectionTitle from "../../../assets/images/SectionTitle/SectionTitle";
import Menu from "./Menu";

const AllMenu =()=>{
    const [menu,setMenu]=useState([]);
    const [display,setDisplay]= useState(4);
    fetch('/data.json')
    .then((res)=>res.json())
    .then((data)=>setMenu(data))

    // useEffect(()=>{
    //     setMenu(display)
    // },[display])

    return(
        <div className="mb-6 md:mb-16">
            <div>
                <SectionTitle subTitle={'Check it Out'} title={'From Our Menu'}/>
            </div>
            <h2>All Menu : {menu.length}</h2>
            {/* ============= Menu Section ========== */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
                    {
                    menu && menu.slice(0,display).map((menu)=><Menu key={menu._id} menu={menu}/>)
                    }
                    
                </div>
                {
                   menu.length < display?  <p className="py-3 mt-2 md:mt-5 text-center text-green-600 font-semibold text-lg md:text-xl"> No Data Available </p> : <div className="flex items-center gap-2 py-3 mt-0 md:mt-10 justify-center border-b-2 border-green-600 w-32 rounded-2xl mx-auto shadow-2xl cursor-pointer hover:w-40 hover:gap-x-5 transition-transform  hover:scale-y-100 hover:ease-in-out hover:duration-500">
                    <button onClick={()=>setDisplay(display+24)} className="text-green-600 hover:scale-5-100">Show More</button>
                    
                    <FaArrowDownLong fill="green"  className="mt-1 hover:scale-y-100" />

                </div> 
                }
        </div>
    )
};

export default AllMenu;