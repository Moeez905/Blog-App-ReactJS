import { useEffect } from "react"
import { Link } from 'react-router-dom';

import "./post.css"

export default function Post(props) {
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
              <p className="HeaderDateBP">{props.post.title}</p>
             <Link to={`/details/${props.post.id}`}>
  <h4 className="cardtitle">{props.post.id} &nbsp; &#x2197;</h4>
</Link>
              <p className="cardteaser"></p> 
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