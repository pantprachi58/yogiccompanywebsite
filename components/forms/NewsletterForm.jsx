"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";

export default function NewsletterForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 400));
    setSent(true);
    reset();
  };

  return (
    <form className="yc-newsletter" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="yc-newsletter__form">
        <label htmlFor="newsletter-email" className="visually-hidden">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Enter your email address"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: "Please enter your email address",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email address" },
          })}
        />
        <button type="submit" className="yc-btn yc-btn--light" disabled={isSubmitting}>
          Subscribe <FiArrowRight aria-hidden="true" />
        </button>
      </div>

      <label className="yc-check mt-3" htmlFor="newsletter-consent">
        <input
          id="newsletter-consent"
          type="checkbox"
          {...register("consent", { required: "Please accept the privacy policy" })}
        />
        <span>
          I agree to receive occasional updates from Yogic Company, in line with the{" "}
          <a href="/privacy-policy">privacy policy</a>.
        </span>
      </label>

      <div aria-live="polite" className="mt-2">
        {errors.email ? <span className="yc-field__error">{errors.email.message}</span> : null}
        {errors.consent ? <span className="yc-field__error">{errors.consent.message}</span> : null}
        {sent ? (
          <p className="mt-2 mb-0" style={{ color: "#fff", fontSize: "0.9rem" }}>
            Thank you — we&rsquo;ll be in touch.
          </p>
        ) : null}
      </div>
    </form>
  );
}
