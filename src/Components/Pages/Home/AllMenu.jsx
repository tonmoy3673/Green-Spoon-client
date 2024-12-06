import { useState } from "react";
import SectionTitle from "../../../assets/images/SectionTitle/SectionTitle";
import Menu from "./Menu";

const AllMenu =()=>{
    const [menu,setMenu]=useState([]);
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
                <div>
                    {
                    menu && menu.map((menu)=><Menu key={menu._id} menu={menu}/>)
                    }
                </div>
        </div>
    )
};

export default AllMenu;