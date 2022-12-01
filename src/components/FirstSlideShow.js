import React, { useState ,useEffect} from 'react'
import it1 from "./images/item1.jpg"
import it2 from "./images/item2.jpg"
import it3 from "./images/item3.jpg"
import it4 from "./images/item4.jpg"
import it5 from "./images/item5.jpg"
import it6 from "./images/item6.jpg"
import Slider from "react-slick";

const FirstSlideShow = () => {
const[slide,setSlide]=useState(3)

useEffect(() => {
  if(window.innerWidth < 600){
    setSlide(1)
  }
}, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slide,
        autoplay:true,
        slidesToScroll: 1,
        
       
        appendDots: dots => (
          <div
            style={{
        
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "0px",
          
            }}
          >
            <ul style={{ margin: "0px" }} className="border-none"> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
           
              width: "30px",
              color: "rgba(53, 54, 54, 0.866)",
              borderRadius:'5px',
              fontWeight:'600',
              
            }}
          >
            {i + 1}
          </div>
        )
      };
      
  return (
    <div className='w-80 mx-auto d-flex flex-column justify-content-center align-items-center position-relative' id='mt-100'>
      
        <div className='text-secondary fw-bold fs-2 mb-3 position-relative' style={{height:'15px',marginTop:'-180px'}} >
            بهترین پروژه ها
        </div>
        <Slider {...settings} className='w-100 d-flex flex-row justify-content-between align-items-center mt-5 ms-4 position-relative' id='mtcenter'>
            <div className='w-80 ms-4 mb-5 rounded d-flex flex-column  justify-content-center align-items-center position-relative' id='shadowbox'>
                    <div className='w-100 rounded-top rounded-botom-0'>
                        <img src={it1} className="rounded" width="100%" height='200px' alt="Logo" />
                    </div>
                    <div className='fw-bold text-info mt-2 '>
                        نوع کار
                    </div>
                    <div className='fw-bold  text-secondary mt-2 text-center lh-md' style={{fontSize:'13px'}}>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                         یسشیسش نوع کار و توضیحات برای نوع کار
                        <br/>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                    </div>
                    <button className='px-4 pb-2 fw-bold  my-3' id='firstslideshowbutton'>
                        خرید
                    </button>
            </div>
            <div className='w-80 ms-4 rounded d-flex flex-column justify-content-center align-items-center' id='shadowbox'>
                    <div className='w-100  rounded-top rounded-botom-0'>
                        <img src={it2} className="rounded" width="100%" height='200px' alt="Logo" />
                    </div>
                    <div className='fw-bold text-secondary mt-2'>
                        نوع کار
                    </div>
                    <div className='fw-bold  text-secondary mt-2 text-center lh-md' style={{fontSize:'13px'}}>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                         یسشیسش نوع کار و توضیحات برای نوع کار
                        <br/>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                    </div>
                    <button className='px-4 pb-2 fw-bold   my-3' id='firstslideshowbutton'>
                        خرید
                    </button>
            </div>
            <div className='w-80 ms-4 rounded d-flex flex-column justify-content-center align-items-center' id='shadowbox'>
                    <div className='w-100 bg-dark rounded-top rounded-botom-0'>
                        <img src={it3} className="rounded" width="100%" height='200px' alt="Logo" />
                    </div>
                    <div className='fw-bold text-secondary mt-2'>
                        نوع کار
                    </div>
                    <div className='fw-bold  text-secondary mt-2 text-center lh-md' style={{fontSize:'13px'}}>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                         یسشیسش نوع کار و توضیحات برای نوع کار
                        <br/>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                    </div>
                    <button className='px-4 pb-2 fw-bold   my-3' id='firstslideshowbutton'>
                        خرید
                    </button>
            </div>
            <div className='w-80 ms-4 rounded d-flex flex-column justify-content-center align-items-center' id='shadowbox'>
                    <div className='w-100  rounded-top rounded-botom-0'>
                        <img src={it4} className="rounded" width="100%" height='200px' alt="Logo" />
                    </div>
                    <div className='fw-bold text-secondary mt-2'>
                        نوع کار
                    </div>
                    <div className='fw-bold  text-secondary mt-2 text-center lh-md' style={{fontSize:'13px'}}>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                         یسشیسش نوع کار و توضیحات برای نوع کار
                        <br/>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                    </div>
                    <button className='px-4 pb-2 fw-bold   my-3' id='firstslideshowbutton'>
                        خرید
                    </button>
            </div>
            <div className='w-80 ms-4 rounded d-flex flex-column justify-content-center align-items-center' id='shadowbox'>
                    <div className='w-100  rounded-top0 rounded-botom-0'>
                        <img src={it5} className="rounded" width="100%" height='200px' alt="Logo" />
                    </div>
                    <div className='fw-bold text-secondary mt-2'>
                        نوع کار
                    </div>
                    <div className='fw-bold  text-secondary mt-2 text-center lh-md' style={{fontSize:'13px'}}>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                         یسشیسش نوع کار و توضیحات برای نوع کار
                        <br/>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                    </div>
                    <button className='px-4 pb-2 fw-bold   my-3' id='firstslideshowbutton'>
                        خرید
                    </button>
            </div>
            <div className='w-80 ms-4 rounded d-flex flex-column justify-content-center align-items-center' id='shadowbox'>
                    <div className='w-100  rounded-top rounded-botom-0'>
                        <img src={it6} className="rounded" width="100%" height='200px' alt="Logo" />
                    </div>
                    <div className='fw-bold text-secondary mt-2'>
                        نوع کار
                    </div>
                    <div className='fw-bold  text-secondary mt-2 text-center lh-md' style={{fontSize:'13px'}}>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                         یسشیسش نوع کار و توضیحات برای نوع کار
                        <br/>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                        نوع کار و توضیحات برای نوع کار
                        <br/>
                    </div>
                    <button className=' px-4 pb-2 fw-bold   my-3 ' id='firstslideshowbutton'>
                        خرید
                    </button>
            </div>
        </Slider>
    </div>
  )
}

export default FirstSlideShow