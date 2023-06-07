import "./Header.css"

export default function Header() {
  return (
    <div className='Header'>
      <div className="HeaderTitles">
        <span className="HeaderTitleSm">The blog</span>
        <span className="HeaderTitleLg">Writings from our team</span>
        <span className="HeaderTextmd">The latest industry news, interviews, technologies, and resources.</span>
      </div>
      <div className="HeaderImgContainer">
        <img
          className="HeaderImg"
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <div className="HeaderContent mobile-view">
        <div className="HeaderTextOverlay">
          <div className="HeaderText">
            <h2 className="HeaderDate">Olivia Rhye • 20 Jan 2022 </h2>
            <h2 className="HeaderTitle">UX review presentations</h2>
             <p className="HeaderDescription">
          How do you create compelling presentations that wow your colleagues and impress your managers?</p>
           <div className="HeaderButtons">
            <button className="button-header">Design</button>
            <button className="button-header">Research</button>
            <button className="button-header">Presentation</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
