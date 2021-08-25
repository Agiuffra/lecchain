import React, { Component } from "react";
import "./text_image.css";

class TextImage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    /*
    <img src={this.props.img}></img>
    */
    return (
      <div className="text-image">
          <div className="block-a" style={{order:this.props.first==='text'?'1':'2'}}>
                <h1>{this.props.title}</h1>
                <p>
                    {this.props.text}
                </p>
          </div>
          <div className="block-b" style={{order:this.props.first==='text'?'2':'1'}}>
                
          </div>
      </div>
    );
  }
}

export default TextImage;
