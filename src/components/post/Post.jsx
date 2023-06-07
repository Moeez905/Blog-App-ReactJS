import { useEffect } from "react"
import "./post.css"

export default function Post() {
  useEffect(()=>{

  },[])
  
return (
  <div className='posts'>
 
      <div class="containerBP">
        <div class="col-lg-4 col-md-6">
          <div class="cardBP">
            <div class="card__header">
              <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600"/>
            </div>
            <div class="card__body">
              <p className="HeaderDateBP">Olivia Rhye • 20 Jan 2022 </p>
              <h4 class="cardtitle">2222 &nbsp;  &#x2197; </h4>
              <p className="cardteaser">1111</p>
            </div>
            <div className="HeaderButtonsBP">
              <button className="button-headerBP">Design</button>
              <button className="button-headerBP">Research</button>
              <button className="button-headerBP">Presentation</button>
            </div>
          </div>
        </div>
      </div>
 
  </div>
); 
    }