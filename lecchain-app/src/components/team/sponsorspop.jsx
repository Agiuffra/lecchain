import React, { Component } from "react";
import "./sponsorpop.css";
import chelo from "./../../data/img/Marcelo.jpeg";

class Sponsorpop extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={this.handleClick}>
            x
          </span>
          <div className="sponsor-content">
            <div className="arrow-top">
              <img
                height="75px"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5Mi4wMDIgNDkyLjAwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkyLjAwMiA0OTIuMDAyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ4NC4xMzYsMzI4LjQ3M0wyNjQuOTg4LDEwOS4zMjljLTUuMDY0LTUuMDY0LTExLjgxNi03Ljg0NC0xOS4xNzItNy44NDRjLTcuMjA4LDAtMTMuOTY0LDIuNzgtMTkuMDIsNy44NDQNCgkJCUw3Ljg1MiwzMjguMjY1QzIuNzg4LDMzMy4zMzMsMCwzNDAuMDg5LDAsMzQ3LjI5N2MwLDcuMjA4LDIuNzg0LDEzLjk2OCw3Ljg1MiwxOS4wMzJsMTYuMTI0LDE2LjEyNA0KCQkJYzUuMDY0LDUuMDY0LDExLjgyNCw3Ljg2LDE5LjAzMiw3Ljg2czEzLjk2NC0yLjc5NiwxOS4wMzItNy44NmwxODMuODUyLTE4My44NTJsMTg0LjA1NiwxODQuMDY0DQoJCQljNS4wNjQsNS4wNiwxMS44Miw3Ljg1MiwxOS4wMzIsNy44NTJjNy4yMDgsMCwxMy45Ni0yLjc5MiwxOS4wMjgtNy44NTJsMTYuMTI4LTE2LjEzMg0KCQkJQzQ5NC42MjQsMzU2LjA0MSw0OTQuNjI0LDMzOC45NjUsNDg0LjEzNiwzMjguNDczeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                alt="top-arrow"
              />
            </div>
            <div className="sponsor-div">
              <div className="sponsor-img">
                <img
                  className="student-picture-img"
                  height="100px"
                  src={chelo}
                  alt="student-picture"
                />
              </div>
              <div className="sponsor-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                porro libero ad ipsam, rem amet earum eaque dolore quas repellat
                illo excepturi reprehenderit doloribus, est eius assumenda, quis
                ex. Expedita.
              </div>
            </div>
            <div className="sponsor-div">
              <div className="sponsor-img">
                <img
                  className="student-picture-img"
                  height="100px"
                  src={chelo}
                  alt="student-picture"
                />
              </div>
              <div className="sponsor-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                porro libero ad ipsam, rem amet earum eaque dolore quas repellat
                illo excepturi reprehenderit doloribus, est eius assumenda, quis
                ex. Expedita.
              </div>
            </div>
            <div className="arrow-bot">
              <img
                height="75px"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5MS45OTYgNDkxLjk5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkxLjk5NiA0OTEuOTk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ4NC4xMzIsMTI0Ljk4NmwtMTYuMTE2LTE2LjIyOGMtNS4wNzItNS4wNjgtMTEuODItNy44Ni0xOS4wMzItNy44NmMtNy4yMDgsMC0xMy45NjQsMi43OTItMTkuMDM2LDcuODZsLTE4My44NCwxODMuODQ4DQoJCQlMNjIuMDU2LDEwOC41NTRjLTUuMDY0LTUuMDY4LTExLjgyLTcuODU2LTE5LjAyOC03Ljg1NnMtMTMuOTY4LDIuNzg4LTE5LjAzNiw3Ljg1NmwtMTYuMTIsMTYuMTI4DQoJCQljLTEwLjQ5NiwxMC40ODgtMTAuNDk2LDI3LjU3MiwwLDM4LjA2bDIxOS4xMzYsMjE5LjkyNGM1LjA2NCw1LjA2NCwxMS44MTIsOC42MzIsMTkuMDg0LDguNjMyaDAuMDg0DQoJCQljNy4yMTIsMCwxMy45Ni0zLjU3MiwxOS4wMjQtOC42MzJsMjE4LjkzMi0yMTkuMzI4YzUuMDcyLTUuMDY0LDcuODU2LTEyLjAxNiw3Ljg2NC0xOS4yMjQNCgkJCUM0OTEuOTk2LDEzNi45MDIsNDg5LjIwNCwxMzAuMDQ2LDQ4NC4xMzIsMTI0Ljk4NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                alt="bot-arrow"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsorpop;
