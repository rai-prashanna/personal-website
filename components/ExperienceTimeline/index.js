import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import list from "./list";
import "./style.module.css";

const ExperienceTimeline = () => {
  return (
    <div
      style={{
        borderRadius: "5px",
      }}
    >
      <VerticalTimeline className="vertical-timeline-custom-line">
        {list.map((experience) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={{
                borderRight: "7px solid",
              }}
              contentStyle={{
                borderTop: "5px solid red",
                boxShadow: "0px 0px 1px 0px",
              }}
              date={experience.date}
              iconStyle={{ background: "white" }}
              icon={experience.icon}
            >
              <a
                href={experience.website}
                target="_blank"
                style={{ color: "#2F4F4F" }}
              >
                <h3 className="vertical-timeline-element-title">
                  {experience.role}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {experience.location}
                </h4>
              </a>
              <p style={{ color: "#696969" }}>{<experience.description />}</p>
            </VerticalTimelineElement>
          );
        })}

        <VerticalTimelineElement
          style={{}}
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" , fontSize: '70px'}}
        />
      </VerticalTimeline>
    </div>
  );
};
export default ExperienceTimeline;
