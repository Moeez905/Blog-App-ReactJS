import "./sidebar.css";
import logo from "../logo.jpg"

export default function Sidebar() {
  return (
    <div className="container">
      
  <div class="pagination">
    <div class="arrowleft">&larr;</div>
    <div class="page-indicator">Page 1 of 10</div>
    <div class="arrowright">&rarr;</div>
  </div>
      <div className="row">
        <div className="col-md-9"></div>
        <div className="col-md-3">
          <div className="card card-right">
            <div className="card-body">
            
              <h3>Let's get started on something great</h3>
              <p className="sideText">Join 4,000+ startups already growing</p>
              <button className="button-17" role="button">
                Start Your 3 Day FREE Trial
              </button>

              <div className="category-list-container">
                <ul className="category-list c1">
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="#">Overview</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Solutions</a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Releases</a>
                  </li>
                  <br />
                  <li>
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Newsletter</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Help </a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <br />
                  <li>
                    <a href="#">Social</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Github</a>
                  </li>
                  <li>
                    <a href="#">AngelList</a>
                  </li>
                  <li>
                    <a href="#">Dribble</a>
                  </li>
                </ul>
                <ul className="category-list c2">
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="#">Overview</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Solutions</a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Releases</a>
                  </li>
                  <br />
                  <li>
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Newsletter</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Help </a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <br />
                  <li>
                    <a href="#">Social</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Github</a>
                  </li>
                  <li>
                    <a href="#">AngelList</a>
                  </li>
                  <li>
                    <a href="#">Dribble</a>
                  </li>
                </ul>
              </div>
              <div className="logo1">
  <img src={logo} alt="Logo" />
</div>
<div className="rights">
  <p className="rights-text">© 2077 Untitled UI. All Rights Reserved.</p>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
