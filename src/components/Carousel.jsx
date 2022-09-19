import React, {useState} from "react"
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
    {
        url: "https://images.unsplash.com/photo-1662443797681-a6fa710db1c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
    {
        url: "https://images.unsplash.com/photo-1661688163199-92318687e917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
    },
    {
        url: "https://images.unsplash.com/photo-1661792808945-847fd0d6b78a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
]

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const lenght = sliderData.length;

    const prevSlide = () => {
        setSlide(slide === lenght - 1 ? 0 : slide + 1)
    }
    const nextSlide = () => {
        setSlide(slide === 0 ? lenght - 1 : slide - 1)
    }

  return (
    <div className="max-w-[1000px] mx-auto px-4 py-16 relative flex justify-center items-center">
        <BsArrowLeftSquareFill onClick={prevSlide} className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"/>
        <BsArrowRightSquareFill onClick={nextSlide} className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"/>
        {sliderData.map((item, index) => (
            <div className={index === slide ? "opacity-100" : "opacity-0"}>
                {index === slide && (<img className="w-full rounded-md" src={item.url} alt="/" />)}
            </div>
        ))}
    </div>
  )
}

export default Carousel