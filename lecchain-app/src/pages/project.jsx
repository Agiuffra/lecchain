import React, { Component } from "react";
import ProjectBanner from "../components/project_v2/banner";
import Initial from "../components/project_v2/init";
import Description from "../components/project_v2/description";
import Roadmap from "../components/project_v2/roadmap";
import Infographic from "../components/project_v2/Infographic";
import PromotionalVideo from "../components/project_v2/promvid";
import ProjectVideo from "../components/project_v2/projvid";
import Footer from "../components/general/footer";
import "./project.css";

class Project extends Component {
  
  state = { language: '' }

  handleLanguage = (langValue) => {
    this.setState({language: langValue});
  }

  render() {
    return (
      <main className="project-lecchain">
        <ProjectBanner onSelectLanguage={this.handleLanguage} />
        <Initial onChange={this.language} />
        <Description />
        <Roadmap />
        <Infographic />
        <PromotionalVideo />
        <ProjectVideo />
        <Footer />
      </main>
    );
  }
}

export default Project;
