//RecipeStash
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
    name: "RecipeStash",
    icon: icon,
    period: "Late 2024",
    subheading:"recipe forum (NodeJS, mySQL)",
    github: "https://github.com/MoShahid23/recipe-stash",
    liveURL: "",
    description:`
    This is a recipe sharing forum that integrates with an external API and provides its own API for accessing
    the forum database. Built using the Express framework, the application prioritizes security and
    modularity.
    `,
    images: images
} satisfies Project;

export default projectData;