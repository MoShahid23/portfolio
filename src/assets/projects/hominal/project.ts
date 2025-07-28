//Hominal
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
    name: "Hominal",
    icon: icon,
    period: "Summer, 2022",
    subheading:"command line themed JS program runner for browsers (JavaScript, HTML, CSS)",
    github: "https://github.com/Muzz-Silat/Hominal",
    liveURL: "",
    description:`
      A NodeJS application that runs simple JS microprograms, developed using only raw HTML, CSS, and JS for the front end. It is designed to resemble a standard Unix shell. This was a collaborative project mainly done to consolidate development skills and usage of version control.
    `,
    images: images
} satisfies Project;

export default projectData;