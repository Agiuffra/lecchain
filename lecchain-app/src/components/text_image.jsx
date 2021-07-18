import React, { Component } from "react";
import "./text_image.css";

class TextImage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="text-image">
          <div className="block-a" style={{order:this.props.first==='text'?'1':'2'}}>
                <h1>{this.props.title}</h1>
                <p>
                    {this.props.text}
                </p>
          </div>
          <div className="block-b" style={{order:this.props.first==='text'?'2':'1'}}>
                <img src="https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"></img>
          </div>
      </div>
    );
  }
}

export default TextImage;
