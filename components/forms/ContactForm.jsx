"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 500));
    setSent(true);
    reset();
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
          {isSubmitting ? "Sending…" : "Send message"}
        </button>
      </div>

      <div aria-live="polite">
        {sent ? (
          <p className="yc-form__status mb-0">
            Thank you — your message is with us. We usually reply within two
            working days.
          </p>
        ) : null}
      </div>

      <p className="yc-form__note mb-0">
        This form is not yet connected to a mailbox. Until it is, please write to{" "}
        <a href="mailto:hello@yogiccompany.com">hello@yogiccompany.com</a>.
      </p>
    </form>
  );
}
