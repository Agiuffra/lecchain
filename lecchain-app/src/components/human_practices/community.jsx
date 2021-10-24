import React, { Component } from "react";

import "./community.css";

class Community extends Component {
  render() {
    return (
      <div className="humprac-comm">
        <div className="comm-title">Community</div>
        <div className="comm-text">
          COVID-19 has brought to light a lot of aspects around public health
          and vaccination. People more than never, are <b> aware of their
          immunological system and in having a health lifestyle </b>. Different
          opinions have been generated according to these topics and
          misinformation has spread with them. As a project that <b> seeks to face
          cold chains </b>, is very important to <b> identify people’s opinion and
          knowledge around this problem </b>. That is why we have develop a
          classification regarding Lecchain ‘s community, a group of people that
          represent the four main areas that involve our problem: <b> users,
          biotechnology experts, health professionals and infrastructure
          professionals </b> to interview and collect insights, experiences and ways
          of thinking.
        </div>
        <div className="comm-img">
          <img
            src={process.env.PUBLIC_URL + "/humanpract/community.png"}
            alt=""
            width="700px"
          />
        </div>
        <div className="comm-text">
          In a way to have opinions from both users and experts from different 
          regions of our country, we have made contact with people from the 
          majority of places in Peru to gather different points of view.
        </div>
        <div className="comm-img">
          <img
            src={process.env.PUBLIC_URL + "/humanpract/mapa_community.png"}
            alt=""
            width="700px"
          />
        </div>
        <div className="comm-text">
          The following presents <b> Lecchain </b>‘s community. Thanks to them we
          developed a project with a social and human vision.
        </div>
        <div className="comm-sect">
          <div className="comm-sect-sep">
            <img
              src={process.env.PUBLIC_URL + "/humanpract/person/community - users.png"}
              alt=""
              width="100%"
            />
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-img">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/1.jpeg"}
                alt=""
                width="175px"
                height="175px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                <b> Name: </b> James Van Hallen Arbildo Pacheco
              </div>
              <div>
                <b> Occupation: </b> University student living in Pucallpa
              </div>
              <div>
                <b> Fact: </b> Pucallpa is one of the <b> regions of the Peruvian 
                jungle that initially lagged behind in the vaccination </b> process 
                due to the <b> lack of cold chains </b> and <b> difficult access to 
                the city </b>. For this reason, James gives us a citizen perspective 
                of how the vaccination campaign is developing in that area.
              </div>
            </div>
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-img">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/1.jpeg"}
                alt=""
                width="175px"
                height="175px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                <b> User: </b> People in the Vacunaton
              </div>
              <div>
                <b> Fact: </b> People going to big centers for receiving vaccines 
                usually are misinformed around topics related to immunization, 
                side effects, among others. In that sense, the key to connect 
                with them starts by knowing what they think.
              </div>
            </div>
          </div>
          <div className="comm-sect-sep">
            <img
              src={process.env.PUBLIC_URL + "/humanpract/person/community_healt.png"}
              alt=""
              width="100%"
            />
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-img">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/7.jpeg"}
                alt=""
                width="175px"
                height="175px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                <b> Name: </b> Ronald Goicochea
              </div>
              <div>
                <b> Occupation: </b> Surgeon in Ricardo Palma’s hospital
              </div>
              <div>
                <b> Fact: </b> He is a doctor who  has been in the front row 
                throughout the COVID period in Peru. And he has <b>experience 
                in different vaccination campaigns throughout the country </b>. 
                For this reason, he was able to experiment with all the 
                <b> resources needed </b> in order to <b> improve the vaccination in 
                rural areas </b>.
              </div>
            </div>
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-img">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/10.jpg"}
                alt=""
                width="175px"
                height="175px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                <b> Name: </b> Nery Peña
              </div>
              <div>
                <b> Occupation: </b> Resident doctor at the Lambayeque Regional Hospital
              </div>
              <div>
                <b> Fact: </b> She is a doctor who did her <b> internship in rural areas </b> of 
                the Lambayeque region and realized the <b> weak infrastructure of the health 
                centers</b>. Likewise, she performed her serums in a <b> covid hospital </b> so she was 
                closely aware of the <b> vaccination plan</b>.
              </div>
            </div>
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-img">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/8.jpeg"}
                alt=""
                width="175px"
                height="175px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                <b> Name: </b> Gladys Mendoza
              </div>
              <div>
                <b> Occupation: </b> Nurse at the Hospital of support in Camana, Arequipa
              </div>
              <div>
                <b> Fact: </b> In <b> charge of vaccination </b> within the <b> Arequipa region
                in Camana</b>.
              </div>
            </div>
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-img">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/5.jpeg"}
                alt=""
                width="175px"
                height="175px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                <b> Name: </b> Julia Gonzales Perez
              </div>
              <div>
                <b> Occupation: </b> Nurse in Pucallpa vaccination process 
              </div>
              <div>
                <b> Fact: </b> She is a nurse who has <b> worked directly </b> in the <b> vaccination 
                process against covid 19 in Pucallpa</b>. Therefore, she knows about the 
                <b> handling and transportation of vaccines </b> in that region. Pucallpa is one 
                of the regions of the Peruvian jungle that initially lagged in the vaccination 
                process. 
              </div>
            </div>
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-img">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/2.png"}
                alt=""
                width="175px"
                height="175px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                <b> Name: </b> María Julia Vega Ramirez
              </div>
              <div>
                <b> Occupation: </b> Pharmaceutical engineer
              </div>
              <div>
                <b> Fact: </b> In charge of the <b> vaccination process </b> so she needs to 
                <b> know what temperature to keep </b> and remove for application and at what 
                time.
              </div>
            </div>
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-img">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/4.jpg"}
                alt=""
                width="175px"
                height="175px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                <b> Name: </b> Marisa Mandarachi Rivera
              </div>
              <div>
                <b> Occupation: </b> Nurse in charge of the South of Lima
              </div>
              <div>
                <b> Fact: </b> She is <b> head of the logistics of the cold chain </b> used 
                throughout the vaccination process in the <b> southern region of the country's 
                capital</b>. Likewise, she has <b> worked directly in the vaccination process </b> for 
                COVID 19.
              </div>
            </div>
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-img">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/6.jpeg"}
                alt=""
                width="175px"
                height="175px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                <b> Name: </b> Alexandra Hernández
              </div>
              <div>
                <b> Occupation: </b> Surgeon
              </div>
              <div>
                <b> Fact: </b> She performed her SERUM in different regions of the 
                country, closely <b> experiencing the vaccination process that must be 
                carried out in places with few medical resources</b>.
              </div>
            </div>
          </div>
          <div className="comm-sect-sep">
            <img
              src={process.env.PUBLIC_URL + "/humanpract/person/community - infra.png"}
              alt=""
              width="100%"
            />
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-img">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/9.jpg"}
                alt=""
                width="175px"
                height="175px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                <b> Name: </b> Marcos Walter Seclen Fernandez
              </div>
              <div>
                <b> Occupation: </b> Sanitary inspector at DIGESA - La libertad
              </div>
              <div>
                <b> Fact: </b>  <b> DIGESA </b> is one of the institutions that works 
                closely with regard to the <b> distribution of vaccines and the maintenance 
                of cold chains in the country</b>.
              </div>
            </div>
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-img">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/3.png"}
                alt=""
                width="175px"
                height="175px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                <b> Name: </b> Alex Távara Aranibar
              </div>
              <div>
                <b> Occupation: </b> Specialist in Territorial Development Policies in the 
                Presidency of the Council of Ministers of Peru
              </div>
              <div>
                <b> Fact: </b> He has experience in issues related to the <b> vaccination plan </b>
                that is <b> carried out in the country from public policies</b>. In addition, for 
                this reason he has traveled to the <b> most remote areas of the country to evaluate 
                the vaccination process</b>.
              </div>
            </div>
          </div>
          <div className="comm-sect-sep">
            <img
              src={process.env.PUBLIC_URL + "/humanpract/person/community -experts.png"}
              alt=""
              width="100%"
            />
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-logo">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/roche.png"}
                alt=""
                width="175px"
                height="100px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                <b> Roche </b> is a <b> Swiss multinational healthcare company </b> that 
                operates worldwide under two divisions: <b> Pharmaceuticals and Diagnostics</b>. 
                It is the <b> largest pharmaceutical company in the world </b> and the leading 
                provider of cancer treatments globally.
              </div>
            </div>
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-logo">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/mased.png"}
                alt=""
                width="175px"
                height="100px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                Company dedicated to the <b> commercialization of laboratory equipment and 
                supplies</b>. It represents big biotechnology companies such as <b> BioRad and 
                Promega </b> in the country.
              </div>
            </div>
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-logo">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/auna.png"}
                alt=""
                width="175px"
                height="100px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                Auna offers comprehensive health care throughout a <b> network of clinics 
                and wellness centers</b>; transversal health services, insurance products; 
                and, all this, with the support of the <b> most advanced medical and academic 
                research</b>. Auna has been working in <b> several projects to face COVID-19</b>.
              </div>
            </div>
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-logo">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/genlab.png"}
                alt=""
                width="175px"
                height="100px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                Company with more than 19 years of experience integrating projects and 
                providing <b> technological solutions </b> in topics related to <b>life sciences 
                research</b>.
              </div>
            </div>
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-logo">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/bio.jpg"}
                alt=""
                width="175px"
                height="100px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                The Bioengineering Research Center (BIO) looks to integrate <b> engineering 
                with biology</b>, solving complex problems, both in the <b> biomedical </b> and 
                <b> biotechnological areas</b>. BIO seeks to become a reference center and lead 
                <b> technological research </b> and innovation in its <b> 10 lines of research</b>.
              </div>
            </div>
          </div>
          <div className="comm-sect-person">
            <div className="comm-sect-person-logo">
              <img
                src={process.env.PUBLIC_URL + "/humanpract/person/biotec.png"}
                alt=""
                width="175px"
                height="100px"
              />
            </div>
            <div className="comm-sect-person-text">
              <div>
                It is the <b> first biotechnology company in Peru</b>, which meets the highest 
                quality standards in the development and research of <b> cell therapies </b>.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
