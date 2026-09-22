"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { classes } from "@/lib/content/classes";
import { programs } from "@/lib/content/programs";

export default function BookingForm() {
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
          <label htmlFor="booking-name">Your name</label>
          <input
            id="booking-name"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", { required: "Please tell us your name" })}
          />
          {errors.name ? <span className="yc-field__error">{errors.name.message}</span> : null}
        </div>

        <div className="col-md-6 yc-field">
          <label htmlFor="booking-email">Email address</label>
          <input
            id="booking-email"
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
          <label htmlFor="booking-format">Session format</label>
          <select
            id="booking-format"
            defaultValue=""
            aria-invalid={errors.format ? "true" : "false"}
            {...register("format", { required: "Please choose a format" })}
          >
            <option value="">Select a format</option>
            {classes.map((c) => (
              <option key={c.id}>{c.title}</option>
            ))}
          </select>
          {errors.format ? <span className="yc-field__error">{errors.format.message}</span> : null}
        </div>

        <div className="col-md-6 yc-field">
          <label htmlFor="booking-program">Programme of interest</label>
          <select id="booking-program" defaultValue="" {...register("program")}>
            <option value="">Not sure yet</option>
            {programs.map((p) => (
              <option key={p.slug}>{p.title}</option>
            ))}
          </select>
        </div>

        <div className="col-md-6 yc-field">
          <label htmlFor="booking-date">Preferred date</label>
          <input id="booking-date" type="date" {...register("date")} />
        </div>

        <div className="col-md-6 yc-field">
          <label htmlFor="booking-time">Preferred time</label>
          <input id="booking-time" type="time" {...register("time")} />
        </div>

        <div className="col-12 yc-field">
          <label htmlFor="booking-notes">
            Anything we should know? (injuries, conditions, goals)
          </label>
          <textarea id="booking-notes" {...register("notes")} />
        </div>
      </div>

      <label className="yc-check" htmlFor="booking-consent">
        <input
          id="booking-consent"
          type="checkbox"
          {...register("consent", { required: "Please confirm before sending" })}
        />
        <span>
          I&rsquo;m happy for Yogic Company to use these details to arrange my
          session, as described in the <a href="/privacy-policy">privacy policy</a>.
        </span>
      </label>
      {errors.consent ? <span className="yc-field__error">{errors.consent.message}</span> : null}

      <div>
        <button type="submit" className="yc-btn" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Request this session"}
        </button>
      </div>

      <div aria-live="polite">
        {sent ? (
          <p className="yc-form__status mb-0">
            Thank you — your request is with us. We&rsquo;ll confirm a time by
            email or on {""}
            <a href="tel:+918171067206">+91 8171067206</a>.
          </p>
        ) : null}
      </div>

      <p className="yc-form__note mb-0">
        Requests are confirmed by a person, not automatically — this form is not
        yet wired to a booking system.
      </p>
    </form>
  );
}
