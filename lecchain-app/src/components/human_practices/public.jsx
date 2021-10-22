import React, { Component } from "react";

import "./public.css";

class Public extends Component {
  render() {
    return (
      <div className="humprac-public">
        <div className="public-title">Public Engagement</div>
        <div className="public-text">
          Peru is a very demographic limited country that does not have the 
          sufficient resources and conditions for managing proper cold-chains 
          in most of its regions. Actually, by 2019 about two million of the 
          total population did not have access to electricity in their 
          communities [1]. An important point considering that in a country 
          where one in five rural households does not have access to electricity 
          through the public grid, storing and distributing vaccines at the 
          correct temperature can be challenging [1]. Probably the reason why 
          there is a demographic vaccination difference between the peruvian 
          regions, where only 5 of them have achieved more than 30% of the 
          population [2]. 
        </div>
      </div>
    );
  }
}

export default Public;
