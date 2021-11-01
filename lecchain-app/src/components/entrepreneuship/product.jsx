import React, { Component } from "react";

import "./product.css";

class Product extends Component {
  render() {
    return (
      <div className="entrep-prod">
        <div className="prod-title">The Product</div>
        <div className="prod-sect">
          <div className="prod-sect-title">Product Validation</div>
          <div className="prod-sect-content">
            <div className="sect-cont-txt">
              Through the stakeholder interviews, we were able to find the
              necessity of developing an accessible manner to facilitate the
              storage and distribution of vaccines. We were able to recognize
              that it all begins with the lack of decentralization of the
              country, which means that all the doses only arrive in the capital
              of Peru. This, added to the demographic limitation of the country
              and the fact that there are not enough freezing centers, generates
              a delay in rural vaccination. For more feedback and all comments
              received see Integrated Human Practices.
            </div>
            <div className="sect-cont-img">
              <img
                src={process.env.PUBLIC_URL + "/entrepreneurship/piramid.png"}
                alt=""
                width="890px"
              />
            </div>
          </div>
        </div>
        <div className="prod-sect">
          <div className="prod-sect-title">Application Method</div>
          <div className="prod-sect-content">
            <div className="sect-cont-txt">
              Lecchain will be developed not only as a thermostable vaccine, but
              also as an oral vaccine due to the fact that our lectin RTB has
              proved to be an excellent mucosal adjuvant (see Engineering
              cycle). Hence, the application method is as simple as an oral
              inoculation.
            </div>
          </div>
        </div>
        <div className="prod-sect">
          <div className="prod-sect-title">Industrial Scaling-Up</div>
          <div className="prod-sect-content">
            <div className="sect-cont-txt">
              Since our vaccine will be developed in bacteria cell cultures, lot
              of prices reduction compared with traditional methods that involve
              using mammalian cells will be. Since it has been demonstrated that
              proteins can be produced in bacteria at a large scale (). Thus, we
              are not only seeking to face cold chain dependence but also
              decreasing costs in a long-term view for future vaccine
              developments. As a crucial part, these costs reductions will not
              eliminate the main characteristics of the vaccine (immunogenicity,
              oral and thermostability).
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
