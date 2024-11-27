import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
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
            products && products.map((product)=>
               <>
                <SwiperSlide>
                    <img src={product.img}/>
                </SwiperSlide>
               </>
            )
        }
      </Swiper>
            </div>
        </div>
    );
};

export default Products;