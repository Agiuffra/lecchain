import React, { Component } from "react";

import "./collaborations.css";

class Collaborations extends Component {
  render() {
    return (
      <div className="humprac-collab">
        <div className="collab-title">Collaborations</div>
        <div className="collab-subtitle">Key Achievements</div>
        <div className="collab-text">
          <ul>
            <li>Sharing information and knowledge based on our respective projects</li>
            <li>Spread science communication to the community</li>
            <li>Collaborating together to achieve common goals</li>
            <li>Maturing each others goals</li>
          </ul>
        </div>
        <div className="collab-subtitle">Sharing insights with the IGEM Design League community</div>
        <div className="collab-subsubtitle">SynYaku</div>
        <div className="collab-text">
          <p>
            Our first collaboration was with the SynYaku team. We chose <b> this 
            team </b> since it is also a peruvian team. We thought it would be 
            perfect to join and discuss common social <b> problems present in 
            Peru </b> and start brainstorming some solutions using synthetic 
            biology and how we can work together to spread science in the 
            country. 
          </p>
          <p>
            The first interaction was based on a general meeting between 
            several team members. From this, ideas for possible collaborations 
            were generated, where the topic of security stood out, which was 
            a <b> point that both teams had not delved into as much </b>. Then, based 
            on the selection of representatives from each team, these people 
            met to generate a document summarizing the most important points 
            of the topic that was discussed. 
          </p>
          <p>
            <b> Security and safety </b> are very important factors that must be 
            taken into account in any project, especially in a synthetic 
            biology project. This approach must cover everything from the 
            safety of the environment, the people involved in the 
            experimentation, and the possible use of animals. Thus, in 
            the <b> present collaboration we decided to join forces with the 
            SynYaku team in order to review and discuss all the safety 
            points that our projects should have</b>. This collaborative work 
            allowed us to take into account from the beginning of the design 
            process safety issues involved in our proposal and the safeguard 
            that needed to have every experimental activity. 
          </p>
          <p>
            Each group was able to see in detail <b> all the important points of 
            security </b> in each of their projects. In this way, both teams were 
            able to ensure that their projects were in line with the <b> ethical 
            values that all research should have</b>. Eventually we had an event, 
            where we discussed controversies in GMOs to the public, this event 
            was promoted in their social media:
          </p>
        </div>
        <div className="collab-img">
          <img
            src={process.env.PUBLIC_URL + "/humanpract/synyaku_colab.png"}
            alt=""
            width="700px"
          />
        </div>
        <div className="collab-subsubtitle">Crash Course + Experts panel</div>
        <div className="collab-text">
          The Crash Course was a <b> multiteam activity organized by SynYaku, 
          that united the teams Panama-Uni, FCB-UANL, SynYaku and us, 
          UTEC-Peru</b>. It was called <b> SynBio Crash Course</b>, a short and live 
          course consisting of <b> 5 different </b>, where the bases and 
          dogmas of molecular biology were touched as an introduction, 
          and then we entered the world of synthetic biology. This was 
          focused on <b> reaching out to a wider range of interested 
          individuals in synthetic biology </b>, in order to educate the general 
          public and our social networks about the basics that we were doing. 
          That is why this activity was done in Spanish, our native language. 
          Here <b> we were in charge of the 4th module that saw the different 
          applications of synthetic biology and how to visualize them with 
          Tinkercell</b>. We were also in charge of hosting the different meetings 
          via zoom and recording the sessions. Our <b> Primary Instructor (PI), 
          Alberto Donayre was part of the experts panel</b>, where he was asked 
          about his <b> career in synthetic biology</b>. 
        </div>
        <div className="collab-img">
          <img
            src={process.env.PUBLIC_URL + "/humanpract/crash_colab.png"}
            alt=""
            width="700px"
          />
        </div>
        <div className="collab-subsubtitle">LatAm Forum</div>
        <div className="collab-text">
          <p>
            The forum called <b>"Biología sintética en América Latina: Problemas, 
            desafíos y oportunidades"</b> was a collaborative activity where we 
            wanted different teams to share the <b> different realities from the 
            region in the synthetic biology area</b>. Besides, we wanted to 
            evidence how the <b> biotechnological tools help solve some problems 
            of environmental and biomedical fields</b>. This event was organized 
            and presented with help of the <b> SynYaku, P(d)Pana and Igem - 
            Yucatán teams</b>. Similarly, this forum allowed every team to 
            present the problem they were trying to solve with synthetic 
            biology and their solution to face it. 
          </p>
          <p>
            This forum helped us to know the <b> community’s opinion around cold 
            chains</b>. It allowed us to know <b> how cold chains work in each of 
            their countries, compared with Peru’s reality and decodes what 
            other countries have made to solve the problem</b>. Additionally, it 
            helped us to reach more people following our project and helped 
            all teams to have a solid idea on what to solve and how to solve 
            it.
          </p>
        </div>
        <div className="collab-subsubtitle">P(d)Pana</div>
        <div className="collab-text">
          <p>
            The venezuelan team, <b> P(d)Pana</b>, was a great ally for our project. We 
            had multiple meetings with them that lasted for a long period of time,
             both before and after the aforementioned <b> LatAm Forum</b>. We shared a 
             similar problematic, and we both were seeking to develop a vaccine 
             that could solve local problems, focusing ourselves on the current 
             pandemic. This meant that we shared a multitude of shared problems 
             that we could <b> solve together</b>. This went from using different protein 
             modeling softwares, acknowledging more useful <b> bioinformatic programs </b> 
             for future parts of our project, such as measuring possible 
             <b> allergenicity, antigenicity of B and T lymphocytes, or immunogenicity 
             and the discussion on our different methodologies</b>. That last part 
             helped us to think critically on why we were doing each part of our 
             approach and how we could <b> analyze different issues before doing 
             experimental assays</b>. They also help us broaden our understanding 
             and future problems we could face in regard to producing our antigen 
             on a larger scale. 
          </p>
          <p>
            The <b> P(d)Pana </b> team expressed the lack of funding and the lack of modern 
            equipment were a limiting factor for them. We helped them in <b> obtaining 
            a less computer demanding protein modelling approach</b>, using AlphaFold 
            with help of Google Colaboratory. Here, we shared many tutorials and 
            troubleshoot some of their problems using this platform. This helped 
            them not to require expensive computer hardware. 
          </p>
        </div>
        <div className="collab-img">
          <img
            src={process.env.PUBLIC_URL + "/humanpract/Reunion Tecnica P(d)Pana(1).jpeg"}
            alt=""
            width="700px"
          />
        </div>
        <div className="collab-subsubtitle">Igem - Yucatán</div>
        <div className="collab-text">
          <p>
            Besides participating in our forum, we had a virtual meetup, where 
            one member of team <b> Yucatán discussed with us the different technical 
            issues in regard to modelling our proteins</b>. This idea surged in the 
            Forum, where we learned that they were working with the same platform 
            we were trying, <b> GROMACS, a free open source molecular dynamics 
            software for our proteins</b>. Here we discussed the different issues we 
            had, such as not having a <b> good enough hardware for this demanding 
            software </b> and how we solved some of those as well as some of the unique 
            challenges it raised. We learned different settings for this program 
            and shared some alternatives we had learned.
          </p>
        </div>
        <div className="collab-subsubtitle">LatAm Forum</div>
        <div className="collab-text">
          <p>
            The forum called <b>"Biología sintética en América Latina: Problemas, 
            desafíos y oportunidades"</b> was a collaborative activity where we 
            wanted different teams to share the <b> different realities from the 
            region in the synthetic biology area</b>. Besides, we wanted to 
            evidence how the <b> biotechnological tools help solve some problems 
            of environmental and biomedical fields</b>. This event was organized 
            and presented with help of the <b> SynYaku, P(d)Pana and Igem - 
            Yucatán teams</b>. Similarly, this forum allowed every team to 
            present the problem they were trying to solve with synthetic 
            biology and their solution to face it. 
          </p>
          <p>
            This forum helped us to know the <b> community’s opinion around cold 
            chains</b>. It allowed us to know <b> how cold chains work in each of 
            their countries, compared with Peru’s reality and decodes what 
            other countries have made to solve the problem</b>. Additionally, it 
            helped us to reach more people following our project and helped 
            all teams to have a solid idea on what to solve and how to solve 
            it.
          </p>
        </div>
        <div className="collab-subsubtitle">iGEM Global</div>
        <div className="collab-text">
          <p>
            Despite this not counting for the competition, we were able to 
            have a meeting with <b> Korea_HS and Siberia from iGem global</b>, where 
            we individually shared our problems and talked about technical 
            issues regarding <b> the experimental part of both solutions around 
            immunological tests</b>. We also share some feedback in terms of 
            <b> funding and collaborations</b>. Also it is worth mentioning that 
            we shared our problem to MTU-CORK in a colorful and funny way, 
            they recollected different teams in a <a href="https://acortar.link/BnojF3">booklet</a>. 
          </p>
        </div>
        <div className="collab-img">
          <img
            src={process.env.PUBLIC_URL + "/humanpract/Reunion Tecnica P(d)Pana(1).jpg"}
            alt=""
            width="700px"
          />
        </div>
      </div>
    );
  }
}

export default Collaborations;
