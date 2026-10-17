"use client";

import { useState } from "react";

export default function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [state, setState] = useState(label);

  async function copy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setState("Copied");
    } catch {
      setState("Select & copy");
    }
    setTimeout(() => setState(label), 1800);
  }

  return (
    <button type="button" className="copy-btn" onClick={copy}>
      {state}
    </button>
  );
}
