import { useMemo, useState } from "react";

function ReadMoreInline({ text, maxChars = 80 }) {
  const [open, setOpen] = useState(false);

  const truncated = useMemo(() => {
    if (!text || text.length <= maxChars) return text || "";
    const cut = text.lastIndexOf(" ", maxChars - 1); // avoid cutting mid-word
    const base = text.slice(0, cut > 0 ? cut : maxChars).trimEnd();
    return base.replace(/[.,;:!?]+$/, ""); // tidy trailing punctuation
  }, [text, maxChars]);

  const needsToggle = text?.length > maxChars;

  return (
    <p className="text-[15px] font-medium md:text-[17px] lg:text-xl">
      {open ? text : `${truncated}… `}
      {needsToggle && (
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          className="text-sky-500 hover:underline align-baseline"
        >
          {open ? "read less" : "read more"}
        </button>
      )}
    </p>
  );
}

export default ReadMoreInline;