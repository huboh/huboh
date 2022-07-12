import { FC } from "react";
import { ProjectStackProps } from "../../types";


const ProjectDetails: FC<ProjectStackProps> = ({ stackList }) => (
  !stackList?.length ? null : (
    <ul
      className="project-stack-list"
      children={
        stackList.map((stack, index) => (
          <li key={ `${stack}-${index}` } className="project-stack-list-item">{ stack }</li>
        ))
      }
    />
  )
);


export {
  ProjectDetails as default
};