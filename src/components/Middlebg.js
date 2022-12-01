import React,{useEffect,useState,useRef} from 'react'
import it1 from "./images/bg1.jpg"
import $ from "jquery"



const Middlebg = () => {





  return (
<div className='w-100 d-flex flex-column justify-content-center align-items-end text-light'  dir='rtl'>
  
 <div className='w-100' >
  <div className='position-absolute  text-dark text-center  flex-column align-items-center hide' style={{zIndex:'1000' ,marginTop:'100px',width:'60vw'}}>
    <div className='text-info fw-bold fs-1 ' id='shadowtext' style={{marginTop:'-60px'}}>
      الکترونیک
    </div>
    <div className='my-3 text-secondary lh-lg text-center'>
      طلوع لوتوس هیرکان تست یشسیشس صثخضحنپر
      <br/>
      یسشیاشسخهیسعلیعسشع خعشیس
    </div>
  </div>

    <div style={{width:'100vw',zIndex:'2',position:'absolute',marginTop:'-120px'}} id='curvedivtop'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fillOpacity="1" d="M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,240C840,277,960,299,1080,288C1200,277,1320,235,1380,213.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </div>
    <div id='img'>
      <img  style={{width:'100%',zIndex:'-2',height:'700px'}} src={it1}  id='img' />

    </div>
    <div style={{width:'100vw',marginTop:'-21%'}} className="w-100 d-flex position-absolute" id='curvediv'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fillOpacity="1" d="M0,224L60,202.7C120,181,240,139,360,144C480,149,600,203,720,240C840,277,960,299,1080,288C1200,277,1320,235,1380,213.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>    </div>
    <div>

    </div>
    </div>
    <div className='position-absolute  text-dark d-flex flex-column align-items-center' id='textonimagediv' style={{zIndex:'1000' ,width:'50vw',marginTop:'-130px'}}>
      <div className='text-info fw-bold fs-1' id='shadowtext'>
        الکترونیک
      </div>
      <div className='my-3 text-light lh-lg text-center'>
        طلوع لوتوس هیرکان تست یشسیشس صثخضحنپر
        <br/>
        یسشیاشسخهیسعلیعسشع خعشیس
      </div>
      <button id='btn-shadow'> انجمن</button>
  </div>

</div>
  
  )
}

export default Middlebg