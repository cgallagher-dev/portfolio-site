import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://www.linkedin.com/in/charliegallagher2004/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted transition-colors hover:text-fg"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="h-5 w-5" />
      </a>

      <a
        href="https://github.com/cgallagher-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted transition-colors hover:text-fg"
        aria-label="GitHub"
      >
        <FaGithub className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialIcons;
