import React from "react";
import PublicImage from "./PublicImage";
import styled from "styled-components";

const skills = [
  "typescript",
  "js",
  "react",
  "nodejs",
  "express",
  "docker",
  "git",
  "github",
  "linux",
  "ubuntu",
  "vsc",
  "webpack",
  "html",
  "css",
  "redux",
  "graphql",
  "java",
  "aws",
  "postgress"
];
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 0.5rem;
  transition: width 0.5s;

  &:hover {
    width: 4rem;
    height: 4rem;
  }
`;
const Image = styled(PublicImage)``;

const Skills = () => {
  return (
    <Container>
      {skills.map((skill, index) => {
        return (
          <Item key={index}>
              <Image name={skill} alt={skill} />
          </Item>
        );
      })}
    </Container>
  );
};
export default Skills;