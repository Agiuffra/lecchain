import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-lecchain">
        <div className="left-footer-lecchain">
          <h4>CONTACT</h4>
          <div>
            address:{" "}
            <a className="link-footer-lecchain" href="">
              Jr. Medrano Silva 165, Barranco. Lima, Peru.
            </a>
          </div>
          <div>
            e-mail:{" "}
            <a
              className="link-footer-lecchain"
              href="mailto:lecchain@utec.edu.pe"
            >
              lecchain@utec.edu.pe
            </a>
          </div>
        </div>
        <div className="right-footer-lecchain">
          <a href="https://twitter.com/lecchain" target="_blank">
            <img
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
              alt="tw-link"
              width="80px"
            />
          </a>
          <a href="https://www.instagram.com/lecchain/" target="_blank">
            <img
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
              alt="ig-link"
              width="80px"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/lecchain-peru"
            target="_blank"
          >
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ1NS43MzEgNDU1LjczMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU1LjczMSA0NTUuNzMxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cmVjdCB4PSIwIiB5PSIwIiBzdHlsZT0iZmlsbDojMDA4NEIxOyIgd2lkdGg9IjQ1NS43MzEiIGhlaWdodD0iNDU1LjczMSIvPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTEwNy4yNTUsNjkuMjE1YzIwLjg3MywwLjAxNywzOC4wODgsMTcuMjU3LDM4LjA0MywzOC4yMzRjLTAuMDUsMjEuOTY1LTE4LjI3OCwzOC41Mi0zOC4zLDM4LjA0Mw0KCQkJYy0yMC4zMDgsMC40MTEtMzguMTU1LTE2LjU1MS0zOC4xNTEtMzguMTg4QzY4Ljg0Nyw4Ni4zMTksODYuMTI5LDY5LjE5OSwxMDcuMjU1LDY5LjIxNXoiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xMjkuNDMxLDM4Ni40NzFIODQuNzFjLTUuODA0LDAtMTAuNTA5LTQuNzA1LTEwLjUwOS0xMC41MDlWMTg1LjE4DQoJCQljMC01LjgwNCw0LjcwNS0xMC41MDksMTAuNTA5LTEwLjUwOWg0NC43MjFjNS44MDQsMCwxMC41MDksNC43MDUsMTAuNTA5LDEwLjUwOXYxOTAuNzgzDQoJCQlDMTM5LjkzOSwzODEuNzY2LDEzNS4yMzUsMzg2LjQ3MSwxMjkuNDMxLDM4Ni40NzF6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzg2Ljg4NCwyNDEuNjgyYzAtMzkuOTk2LTMyLjQyMy03Mi40Mi03Mi40Mi03Mi40MmgtMTEuNDdjLTIxLjg4MiwwLTQxLjIxNCwxMC45MTgtNTIuODQyLDI3LjYwNg0KCQkJYy0xLjI2OCwxLjgxOS0yLjQ0MiwzLjcwOC0zLjUyLDUuNjU4Yy0wLjM3My0wLjA1Ni0wLjU5NC0wLjA4NS0wLjU5OS0wLjA3NXYtMjMuNDE4YzAtMi40MDktMS45NTMtNC4zNjMtNC4zNjMtNC4zNjNoLTU1Ljc5NQ0KCQkJYy0yLjQwOSwwLTQuMzYzLDEuOTUzLTQuMzYzLDQuMzYzVjM4Mi4xMWMwLDIuNDA5LDEuOTUyLDQuMzYyLDQuMzYxLDQuMzYzbDU3LjAxMSwwLjAxNGMyLjQxLDAuMDAxLDQuMzY0LTEuOTUzLDQuMzY0LTQuMzYzDQoJCQlWMjY0LjgwMWMwLTIwLjI4LDE2LjE3NS0zNy4xMTksMzYuNDU0LTM3LjM0OGMxMC4zNTItMC4xMTcsMTkuNzM3LDQuMDMxLDI2LjUwMSwxMC43OTljNi42NzUsNi42NzEsMTAuODAyLDE1Ljg5NSwxMC44MDIsMjYuMDc5DQoJCQl2MTE3LjgwOGMwLDIuNDA5LDEuOTUzLDQuMzYyLDQuMzYxLDQuMzYzbDU3LjE1MiwwLjAxNGMyLjQxLDAuMDAxLDQuMzY0LTEuOTUzLDQuMzY0LTQuMzYzVjI0MS42ODJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
              alt="li-link"
              width="80px"
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
