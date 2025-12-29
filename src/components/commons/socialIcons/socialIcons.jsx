import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="my-5 flex items-center justify-center">
      <a
        href="https://www.linkedin.com/in/charliegallagher2004/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 text-zinc-400 hover:text-[#0debd8] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Linkedin"
      >
        <FaLinkedinIn className="h-7 w-7" />
      </a>

      <a
        href="https://github.com/cgallagher-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#0debd8] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Github"
      >
        <FaGithub className="h-7 w-7" />
      </a>
    </div>
  );
};

export default SocialIcons;
