//SummarizePro
import type { Project } from '../../../types/Project';

//import icon here
import icon from './icon.png';

//all images should be placed in this directory and must be named starting with 'img'
const imageDirs = import.meta.glob<{ default: string }>(
  './img*.{jpg,jpeg,png,webp,gif}',
  { eager: true }
);
const images: string[] = Object.values(imageDirs).map((mod) => mod.default);

console.log(images)

//configure data here
const projectData = {
    name: "SummarizePro",
    icon: icon,
    period: "Early 2024",
    subheading:"interactive AI based Learning Platform (Google cloud platform, NodeJs, Python)",
    github: "https://github.com/MoShahid23/SummarizePro",
    liveURL: "",
    description:`
      This application allows users to submit a document, and chat with an LLM that answers using the document as context.  It also allows users to generate multiple choice quizzes to help consolidate learning. 
      This was a collaborative project.
    `,
    images: images
} satisfies Project;

export default projectData;