import type { Project } from '../types/Project.ts';

const projectModules = import.meta.glob<{ default: Project }>(
  '../assets/projects/**/project.ts',
  { eager: true }
);
const projects: Project[] = Object.values(projectModules).map((mod) => mod.default);

export default projects;