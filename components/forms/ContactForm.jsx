"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/lib/site";

function buildWhatsAppMessage(values) {
  const lines = [
    "Hello Yogic Company, I have an enquiry.",
    "",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
  ];
  
  if (values.phone?.trim()) lines.push(`Phone: ${values.phone.trim()}`);
  if (values.subject) lines.push(`About: ${values.subject}`);
  if (values.message?.trim()) lines.push("", `Message: ${values.message.trim()}`);
  
  return lines.join("\n");
}

function whatsappUrl(text) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    const url = whatsappUrl(buildWhatsAppMessage(values));
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => {
      reset();
      setSent(false);
    }, 5000);
  };

  return (
    <form className="yc-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="row g-3">
        <div className="col-md-6 yc-field">
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", { required: "Please tell us your name" })}
          />
          {errors.name ? <span className="yc-field__error">{errors.name.message}</span> : null}
        </div>

        <div className="col-md-6 yc-field">
          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "Please enter your email address",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email address" },
            })}
          />
          {errors.email ? <span className="yc-field__error">{errors.email.message}</span> : null}
        </div>

        <div className="col-md-6 yc-field">
          <label htmlFor="contact-phone">Phone (optional)</label>
          <input id="contact-phone" type="tel" autoComplete="tel" {...register("phone")} />
        </div>

        <div className="col-md-6 yc-field">
          <label htmlFor="contact-subject">What is this about?</label>
          <select id="contact-subject" defaultValue="" {...register("subject")}>
            <option value="">Select a topic</option>
            <option>Group classes</option>
            <option>Personal sessions</option>
            <option>Workplace wellness workshop</option>
            <option>Serenity Blueprint</option>
            <option>Breathe Life Guide</option>
            <option>Revive Your Sleep</option>
            <option>Something else</option>
          </select>
        </div>

        <div className="col-12 yc-field">
          <label htmlFor="contact-message">Your message</label>
          <textarea
            id="contact-message"
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", { required: "Please add a short message" })}
          />
          {errors.message ? (
            <span className="yc-field__error">{errors.message.message}</span>
          ) : null}
        </div>
      </div>

      <label className="yc-check" htmlFor="contact-consent">
        <input
          id="contact-consent"
          type="checkbox"
          {...register("consent", { required: "Please confirm before sending" })}
        />
        <span>
          I&rsquo;m happy for Yogic Company to use these details to reply to my
          enquiry, as described in the <a href="/privacy-policy">privacy policy</a>.
        </span>
      </label>
      {errors.consent ? <span className="yc-field__error">{errors.consent.message}</span> : null}

      <div>
        <button type="submit" className="yc-btn" disabled={isSubmitting}>
          <FaWhatsapp aria-hidden="true" /> Continue on WhatsApp
        </button>
      </div>

      <div aria-live="polite">
        {sent ? (
          <p className="yc-form__status mb-0">
            WhatsApp opened with your message. Press send there to reach us.
          </p>
        ) : null}
      </div>

      <p className="yc-form__note mb-0">
        This opens WhatsApp with your details ready to send. We only receive them when you
        press send there. Prefer email? <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </form>
  );
}
