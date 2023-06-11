import "./details.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

 function Details( ){
 const param = useParams()
 
 
console.log(param)

  return (
 
  <div >
        This is {param.id} 
      </div>
      
    );
}
export default Details;