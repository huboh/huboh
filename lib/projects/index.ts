import { join } from "path";
import { Project } from "../../types";
import { readFile } from "fs/promises";
import { GetProjectProps } from "./types";

export const getProjects = async (props: GetProjectProps) => {
  const path = join(props.directory, "data.json");
  const data = await readFile(path, { encoding: "utf-8" });
  const projects: Project[] = JSON.parse(data)?.projects ?? [];

  return {
    nodes: projects,
    total: projects.length,
  };
};