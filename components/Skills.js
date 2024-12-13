import React from "react";
import PublicImage from "./PublicImage";
import styled from "styled-components";

const skills = [
  "microsoft-certified-associate-badge",
  "java",
  "jakarta-ee",
  "spring",
  "angular",
  "docker",
  "kubernetes",
  "python",
  "git",
  "playwright",
  "ubuntu",
  "spark",
  "hadoop_logo",
  "apache-pulsar",
  "postgreSQL",
  "openpolicyagent",
  "html",
  "css"
];
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: 5.5rem;
  height: 5rem;
  padding: 0.5rem;
  transition: width 0.5s;

  &:hover {
    width: 7rem;
    height: 7rem;
  }
`;
const Image = styled(PublicImage)``;

const Skills = () => {
  return (
    <Container>
      {skills.map((skill, index) => {
        return (
          <Item key={index}>
            <a
              href={'https://github.com/rai-prashanna/rai-prashanna.github.io'}
              target="_blank"
            >
              <Image name={skill} alt={skill} />
            </a>
          </Item>
        );
      })}
    </Container>
  );
};
export default Skills;
