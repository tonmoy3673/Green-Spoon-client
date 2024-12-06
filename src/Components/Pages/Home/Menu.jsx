

const Menu = ({menu}) => {
    const {name,_id,recipe,image,price} = menu;
    return (
        <div className="flex flex-col md:flex-row items-center gap-y-2 md:gap-x-6 px-5 md:px-0">
           <img src={image} className="rounded-[50%] w-3/12 md:w-2/12"/>
           <div className="flex justify-center">
           <div>
            <h2 className="text-lg md:text-xl font-semibold">{name} ---------------------------</h2>
            <p>{recipe}</p>
           </div>
           <p className="text-red-500 font-semibold">${price}</p>
           </div>
        </div>
    );
};

export default Menu;