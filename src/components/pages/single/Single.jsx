import "./single.css"
import Sidebar from "../../sidebar/sidebar"
import SinglePost from "../../singlePost/singlePost"

export default function Single() {
  return (
    <div className="single">
    <SinglePost/>
    <Sidebar/>
    </div>
  )
}
