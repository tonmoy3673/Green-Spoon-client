const SectionTitle =({title,subTitle})=>{
    return (
        <div className="mt-6 md:mt-20 w-32 md:w-80 mx-auto">
            <p className="italic text-center text-sm text-amber-500 py-3 ">----- {subTitle} -----</p>
            <h2 className="mb-4 md:mb-10 text-center text-xl md:text-4xl text-green-500 font-semibold border-y-2 py-4 capitalize">{title}</h2>
        </div>

    )
};

export default SectionTitle;