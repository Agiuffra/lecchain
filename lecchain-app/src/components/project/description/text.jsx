import React, { Component } from "react";
import "./text.css";

class Text extends Component {
  constructor(props){
    super(props);
  }

  renderParagraphs() {
    const text = this.props.text;
    return (
        <div>
            {text.split("|").map((i,key) => {
                return <p>{i}</p>;
            })}
        </div>
    );
  }

  render() {
    const renderParagraphs = this.renderParagraphs();
    return (
      <div className="text">
          <div className="block-a">
                <h1>{this.props.title}</h1>
                <img src={this.props.img}></img>

                {renderParagraphs}
          </div>
      </div>
    );
  }
}

export default Text;
