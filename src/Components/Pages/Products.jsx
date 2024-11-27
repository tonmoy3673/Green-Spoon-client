import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../assets/images/home/slide1.jpg';
import slide2 from '../../assets/images/home/slide2.jpg';
import slide3 from '../../assets/images/home/slide3.jpg';
import slide4 from '../../assets/images/home/slide4.jpg';
import slide5 from '../../assets/images/home/slide5.jpg';


import './styles.css';
const Products = () => {

    const products =[
        
        {name:'Salad',
        img:slide1},
        {
            name:'Soups',
             img:slide2
        },
        {
            name:'Salad',
             img:slide3
        },
        {
            name:'Pizzas',
             img:slide4
        },
        {
            name:'Deserts',
             img:slide5
        }
    ]
    return (
        <div>
            <h2>{products.length}</h2>
            <div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
            products && products.map((product,i)=>
               (
                <>
                <SwiperSlide key={i}>
                    <img src={product.img}/>
                    <p></p>
                </SwiperSlide>
               </>
               )
            )
        }
      </Swiper>
            </div>
        </div>
    );
};

export default Products;