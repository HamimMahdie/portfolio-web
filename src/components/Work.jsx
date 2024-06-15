import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Work extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fab fa-angular experience-icon"></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
            <p style={{ textAlign: "left", marginTop: "15px" }}>{work.description}</p>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="work" className="scroll-mt-40">
        <div className="container mx-auto my-20 px-10 lg:px-20">
            
          <div className="bg-highlight rounded-xl mb-16 text-center transition-all duration-200 ease-in-out transform hover:scale-150">
                    <h2 className="font-bold text-5xl lg:text-5xl text-theme-red pb-6">Experience</h2>
                </div>
          <div className="col-md-12 mx-auto">
            <VerticalTimeline>
              {work}
              <VerticalTimelineElement
                iconStyle={{
                  background: "#AE944F",
                  color: "#fff",
                  textAlign: "center",
                }}
                icon={
                  <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                }
              />
            </VerticalTimeline>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
