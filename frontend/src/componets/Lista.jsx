import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css/navigation';
import "swiper/css";
import productos from "../productos.json";
import "../styles/Lista.css";
import { useProducts } from "../context/ProductContainer";

// A D M I N I S T R A D O R


export function Lista(){
    const { products } = useProducts();
    
    return(
        <div className="container">
            
            <h2>LISTA PRODUCTOS</h2>
            <div className="swiper-container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    {products.map(p =>(
                        <SwiperSlide key={p.nombre} className="slide">
                            <div className="producto">
                                <div className="imagen">
                                    <img src={p.img.url} alt="vino" />
                                </div>
                                <h5>{p.nombre}</h5>
                                <p>{p.descrip}</p>
                                <p>${p.precio}</p>
                                <p>Stock: {p.stock}</p>
                            </div>        
                        </SwiperSlide>
                    ))};
                </Swiper>
            </div>
        </div>
                
    );
}