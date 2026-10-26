"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";

/** One field. There is no backend: sending opens the visitor's email app with the message filled in. */
export function ContactForm({
  email,
  labels,
}: {
  email: string;
  labels: { label: string; placeholder: string; send: string; subject: string };
}) {
  const [text, setText] = useState("");
  const href = `mailto:${email}?subject=${encodeURIComponent(labels.subject)}&body=${encodeURIComponent(text)}`;
  return (
    <form
      className="contact__field"
      action={`mailto:${email}`}
      method="post"
      encType="text/plain"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = href;
      }}
    >
      <label htmlFor="contact-message" className="sr-only">
        {labels.label}
      </label>
      <textarea
        id="contact-message"
        name="message"
        rows={1}
        value={text}
        placeholder={labels.placeholder}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn contact__send" aria-label={labels.send}>
        <ArrowRight width={18} height={18} />
      </button>
    </form>
  );
}
