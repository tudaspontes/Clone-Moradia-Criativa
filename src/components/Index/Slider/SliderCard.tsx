import Slider from "react-slick";
import { CardBlog } from "../Cards/Blog";
import { CardProjects } from "../Cards/Projects";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardTestimonials } from "../Cards/Testimonials";
import { BlogItemData, TestimonialsData } from "../../../utils/types";

interface SliderCardProps {
    data: BlogItemData[] | TestimonialsData[] | any[]
    type:string;
    autoplay?:boolean;
    center?:boolean;
    slidesToShowScrol?:number;
}


export function SliderCard({ data, type, autoplay,center,slidesToShowScrol }:SliderCardProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoplay: autoplay ? true : false,
        centerMode: center ? true : false,
        className:center ? "center" : "none",
        centerPadding:"60px",
        autoplaySpeed: 10000,
        slidesToShow: slidesToShowScrol,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        pauseOnFocus: true,
    };

    console.log(slidesToShowScrol)

    return (
        <Slider {...settings} className="slider">

            {type === "blog" &&
                data?.map(item => {
                    return <CardBlog key={item.uid} blog={item} />
                })
            }
            {type === "projects" &&
                data?.map(item => {
                    return <CardProjects key={item.uid} data={item} />
                })
            }
            {type === "testi" &&
                data?.map(item => {
                    return <CardTestimonials key={item.uid} data={item} />
                })
            }
        </Slider>
    )
}