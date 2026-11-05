import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactConfig } from "../config.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { btnClass } from "./ui.js";

const fieldClass =
  "w-full rounded-full border-0 bg-surface px-[1.6rem] py-4 text-base text-ink shadow-[0_8px_22px_rgba(53,51,83,0.12)] placeholder:text-placeholder focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus";

const SUCCESS = "Thanks! Your message has been sent. I'll get back to you soon.";
const FAILURE = "Sorry, something went wrong. Please try again, or send me an email instead.";

// Sends the visitor an auto-reply with EmailJS. If it fails, nothing is shown:
// the message already reached you, so the visitor doesn't need to know.
async function sendAutoReply(params) {
  const { publicKey, serviceId, templateId } = contactConfig.emailjs;
  try {
    await emailjs.send(serviceId, templateId, params, { publicKey });
  } catch (error) {
    console.warn("Auto-reply failed:", error);
  }
}

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // The hidden "bot-field" is a trap for spam bots. Real visitors never fill it in.
    if (formData.get("bot-field")) {
      form.reset();
      setStatus({ type: "success", message: SUCCESS });
      return;
    }
    formData.delete("bot-field");

    // Keep a copy of what was typed (the form is cleared after sending).
    const params = Object.fromEntries(formData);

    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(contactConfig.formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      form.reset();
      setStatus({ type: "success", message: SUCCESS });
      sendAutoReply(params); // runs in the background
    } catch (error) {
      setStatus({ type: "error", message: FAILURE });
    } finally {
      setSending(false);
    }
  }

  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="grid grid-cols-[1fr_1.4fr] items-start gap-[clamp(1.5rem,5vw,4rem)] max-[900px]:grid-cols-1">
        <div className="relative isolate">
          <SectionTitle id="contact-title">Get In Touch</SectionTitle>
          <Reveal as="p" className="text-[clamp(1.05rem,0.95rem+0.5vw,1.35rem)] leading-[1.45] font-light text-ink-strong">
            Let&apos;s talk about everything!
            <br />
            Don&apos;t like forms? Send me an{" "}
            <a href={`mailto:${contactConfig.email}`} className="underline underline-offset-[3px]">
              email
            </a>
            .
          </Reveal>
          <img
            src="/assets/world-map.svg"
            alt=""
            className="pointer-events-none absolute top-22 left-0 -z-10 w-[min(100%,380px)] opacity-50 max-[900px]:top-18"
          />
        </div>

        <Reveal as="form" onSubmit={handleSubmit} className="flex flex-col gap-5">
          <p hidden>
            <label>
              Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
            <label className="sr-only" htmlFor="name">
              Your name
            </label>
            <input type="text" id="name" name="name" placeholder="Your Name" autoComplete="name" required className={fieldClass} />

            <label className="sr-only" htmlFor="email">
              Your email
            </label>
            <input type="email" id="email" name="email" placeholder="Your Email" autoComplete="email" required className={fieldClass} />
          </div>

          <label className="sr-only" htmlFor="subject">
            Your subject
          </label>
          <input type="text" id="subject" name="subject" placeholder="Your subject" required className={fieldClass} />

          <label className="sr-only" htmlFor="message">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your message"
            required
            className={`${fieldClass} min-h-32 resize-y rounded-xl`}
          />

          <button
            type="submit"
            disabled={sending}
            className={`${btnClass} self-start disabled:cursor-progress disabled:opacity-60 max-sm:self-stretch max-sm:text-center`}
          >
            {sending ? "Sending…" : "Send message"}
          </button>

          <p
            role="status"
            aria-live="polite"
            className={`min-h-[1.4em] text-[0.95rem] font-semibold ${
              status.type === "success" ? "text-[#0f7a4f]" : status.type === "error" ? "text-[#c0392b]" : ""
            }`}
          >
            {status.message}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
