import SectionTitle from "../../../assets/images/SectionTitle/SectionTitle";

const AllMenu =()=>{
    fetch('/data.json')
    .then((res)=>res.json())
    .then((data)=>console.log(data))

    return(
        <div className="mb-6 md:mb-16">
            <div>
                <SectionTitle subTitle={'----- Check it Out -----'} title={'From Our Menu'}/>
            </div>
            {/* ============= Menu Section ========== */}
                <div>
                    {
                    
                    }
                </div>
        </div>
    )
};

export default AllMenu;