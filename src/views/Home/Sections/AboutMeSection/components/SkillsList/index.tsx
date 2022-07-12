import { FC } from "react";
import Text from "../../../../../../components/Text";

export interface SkillsListProps {
  skills: string[];
}

const SkillsList: FC<SkillsListProps> = ({ skills }) => (
  <Text.List className="skills-list" column="column-2" listItems={ skills } />
);

export {
  SkillsList as default
};