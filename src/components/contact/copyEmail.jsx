import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

const EMAIL = "cgallagher.dev@gmail.com";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the mailto link still works
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${EMAIL}`}
        className="text-lg text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-primary"
      >
        {EMAIL}
      </a>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded-md border border-line px-2.5 py-1 text-sm text-muted transition-colors hover:border-muted hover:text-fg"
      >
        {copied ? <FiCheck className="h-4 w-4 text-primary" /> : <FiCopy className="h-4 w-4" />}
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}
