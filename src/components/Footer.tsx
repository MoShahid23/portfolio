import githubLogo from "./../assets/logo-github.png";

function Footer() {
    return (
      <footer className="flex-col flex gap-4 items-center justify-end h-32 p-4 bg-accent bg-[url(stripe-texture.png)] bg-repeat bg-[length:50px] text-white text-sm">
        <a className="flex flex-col place-content-center text-center" href="http://www.github.com/MoShahid23/" target="_blank">
          <img className="block w-30" src={githubLogo} alt="" />
        </a>
        <span>© {new Date().getFullYear()} Mo Shahid</span>
      </footer>
    );
  }
  export default Footer;