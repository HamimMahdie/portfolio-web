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
      const sectionName = this.props.resumeBasicInfo.section_name.experience;
      const iconMapping = {
        "Resident Advisor/Assistant": "fa-users",
        "Writing Associate": "fa-pen",
        "Machine Learning Research Assistant": "fa-robot",
        "IT Consultant": "fa-laptop",
      };
      const work = this.props.resumeExperience.map((work, i) => {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        const mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        const tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });
        const iconClass = iconMapping[work.title] || "fa-briefcase"; // Default icon if title not found

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#26C485",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className={`fa ${iconClass} experience-icon`}></i>}
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
            <p style={{ textAlign: "left", marginTop: "15px" }}>
              {work.description}
            </p>
          </VerticalTimelineElement>
        );
      });

      return (
        <section id="work" className="scroll-mt-40">
          <div className="container mx-auto my-20 px-10 lg:px-20">
            <div className="bg-highlight rounded-xl mb-16 text-center transition-all duration-200 ease-in-out transform hover:scale-150">
              <h2 className="font-bold text-5xl lg:text-5xl text-theme-red pb-6">
                {sectionName}
              </h2>
            </div>
            <div className="col-md-12 mx-auto">
              <VerticalTimeline>{work}</VerticalTimeline>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Work;
