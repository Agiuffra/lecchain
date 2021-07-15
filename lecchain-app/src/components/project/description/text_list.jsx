import React, { Component } from "react";
import "./text_list.css";

class Item extends Component {
  constructor(props){
    super(props);
  }  

  render() {
    return (
        <div className="item">
            <img src={this.props.icon}></img>
            <p>
                {this.props.item}
            </p>
        </div>
      );
  }
}

class TextList extends Component {
    constructor(props){
        super(props);
      }
    
      renderList() {
        const text = this.props.text;
        return (
            <div>
                {text.split("|").map((i,key) => {
                    return <Item key={key} item={i} icon={this.props.icon} />
                })}
            </div>
        );
      }

  render() {
    const renderList = this.renderList();
    return (
      <div className="text-list">
          <div className="block-a" style={{order:this.props.first==='text'?'1':'2'}}>
                <h1>{this.props.title}</h1>
                {renderList}
          </div>
          <div className="block-b" style={{order:this.props.first==='text'?'2':'1'}}>
                <img src={this.props.img1}></img>
                <img src={this.props.img2}></img>
          </div>
      </div>
    );
  }
}

export default TextList;
