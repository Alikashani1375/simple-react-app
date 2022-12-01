import React from 'react'

const Footer = () => {
  return (
    <div className='w-100 d-flex flex-column text-light zindex-dropdown' dir='rtl' id='footer'>
        <div className='d-flex flex-column justify-content-start align-items-start text-light fs-5 fw-bolc w-100 px-5' id='pt15' style={{zIndex:'2000',paddingTop:'12vh',height:'100%'}}>
 
            <div className='fw-bold text-info' id='font15'>
                معرفی
            </div>
            <div className='mt-3 fw-bold fs-4 text-end'>
                     شرکت الکترونیک   
                     <br/>
                     طلوع لوتوس        
                     <br/>
                     هیرکان     
            </div>
            <div id='lightblueunderline'>  </div>
            <div id='font15'>
                توضیحاتی مختصر برای نرم افزار  شرکت
                <br/>
                در زمینه الکترونیک
            </div>
            <div className='w-100 d-flex flex-row justify-content-start align-items-start '>
                <div className='w-50 d-flex justify-content-center align-items-center mt-4'>
                  <button className='btn text-light fw-bold  ' id='btn'>خانه</button>
                  <button className='btn text-light fw-bold  ' id='btn'>تماس</button>
                  <button className='btn text-light fw-bold text-nowrap ' id='btn'>درباره ی ما</button>
                  <button className='btn text-light fw-bold text-nowrap border rounded-5 py-2' id='btn'>تماس با ما</button>
                </div>
                <div className='w-50 d-flex justify-content-center align-items-center' id='btnfooter'>
                    <button id='btn-shadow'>
                        ورود به انجمن
                    </button>
                    <button  id='btn-shadow'>
                        ثبت نام در انجمن
                    </button>
                </div>
            </div>
          
        </div>
    
    </div>
  )
}

export default Footer