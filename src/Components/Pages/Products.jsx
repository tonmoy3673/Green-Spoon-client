import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../assets/images/home/slide1.jpg';
import slide2 from '../../assets/images/home/slide2.jpg';
import slide3 from '../../assets/images/home/slide3.jpg';
import slide4 from '../../assets/images/home/slide4.jpg';
import slide5 from '../../assets/images/home/slide5.jpg';


import SectionTitle from '../../assets/images/SectionTitle/SectionTitle';
import './styles.css';


const Products = () => {

    const breakpoints={
        0:{
            slidesPerView:1,
            spaceBetween:10
        },
       640: {
            slidesPerView:2,
            spaceBetween:20
        },
        768:{
            slidesPerView:3,
            spaceBetween:30
        },
        1024:{
            slidesPerView:4,
            spaceBetween:40
        }
    }
    

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
        },{
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
            <SectionTitle subTitle={'----- From 11:00 AM to 10:00 PM -----'} title={'Order Online'}/>
            <div>
            <Swiper
       breakpoints={breakpoints}
        freeMode={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,FreeMode, Pagination]}
        className="mySwiper mb-6 md:mb-16"
      >
        {
            products && products.map((product,i)=>
               (
                
                <SwiperSlide key={i}>
                    <img src={product?.img}/>
                    <p className='-mt-8 md:-mt-20 pb-2 text-2xl text-white'>{product?.name}</p>
                </SwiperSlide>
               
               )
            )
        }
      </Swiper>
            </div>
        </div>
    );
};

export default Products;