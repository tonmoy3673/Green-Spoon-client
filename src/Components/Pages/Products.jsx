

const Products = () => {

    const products =[
        
        {name:'Salad',
        img:'../../assets/images/home/slide1.jpg'},
        {
            name:'Salad',
             img:'../../assets/images/home/slide2.jpg'
        },
        {
            name:'Salad',
             img:'../../assets/images/home/slide3.jpg'
        },
        {
            name:'Salad',
             img:'../../assets/images/home/slide4.jpg'
        },
        {
            name:'Salad',
             img:'../../assets/images/home/slide5.jpg'
        }
    ]
    return (
        <div>
            <h2>{products.length}</h2>
        </div>
    );
};

export default Products;