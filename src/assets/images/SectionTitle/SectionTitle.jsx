const SectionTitle =({title,subTitle})=>{
    return (
        <div>
            <p className="italic text-center text-sm text-amber-500 py-6">{subTitle}</p>
            <h2 className="mb-3 md:mb-8 text-center text-xl md:text-4xl text-green-500 font-semibold">{title}</h2>
        </div>

    )
};

export default SectionTitle;