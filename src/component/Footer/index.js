import React, { PureComponent } from "react";
import "../style.css";
export default class Footer extends PureComponent {
  render() {
    return (
      <div className="footer ">
        <div className="footer__main pd-tb-48">
          <div className="footer__mid container-fluid">
            <div className="footer__list col-4">
              <h6 className="title-f">CONTACT INFO</h6>
              <p>
                Address : Corp Vision, 343 marketing, #21 cravel 1st lane
                street, NY - 62617.
              </p>
              <p>Phone Number : +1(21) 234 4567</p>
              <p>Email : info@example.com</p>
              <p>Support : info@support.com</p>
            </div>
            <div className="footer__list col-lg-2">
              <h6 className="title-f">CATEGORIES</h6>
              <ul>
                <li>
                  <a href="#url">Marketing Strategy</a>
                </li>
                <li>
                  <a href="#url">Startup Business</a>
                </li>
                <li>
                  <a href="#url">Web development</a>
                </li>
              </ul>
            </div>
            <div className="footer__list col-lg-2">
              <h6 className="title-f">META</h6>
              <ul>
                <li>
                  <a href="#url">Log in</a>
                </li>
                <li>
                  <a href="#url">Entries feed</a>
                </li>
                <li>
                  <a href="#url">Comments feed</a>
                </li>
                <li>
                  <a href="#url">WordPress.org</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
