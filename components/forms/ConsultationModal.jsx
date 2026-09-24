"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { FiCheck, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { consultationIssues } from "@/lib/content/conditions";
import { site } from "@/lib/site";

const TIMES_OF_DAY = ["Morning", "Afternoon", "Evening"];

const HIGHLIGHTS = [
  "18+ years of knowledge & experience",
  "Breathing and yoga for stress, back pain, infertility, diabetes, thyroid and more",
  "Every request is read and answered by a person",
];

function formatDate(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function buildMessage(values) {
  const lines = [
    "Hello Yogic Company, I would like to book a consultation.",
    "",
    `Name: ${values.name.trim()}`,
    `Phone: ${values.phone.trim()}`,
  ];
  if (values.email.trim()) lines.push(`Email: ${values.email.trim()}`);
  lines.push(`Looking for help with: ${values.concern}`);
  if (values.date) lines.push(`Preferred date: ${formatDate(values.date)}`);
  if (values.timeOfDay) lines.push(`Preferred time: ${values.timeOfDay}`);
  if (values.message.trim()) lines.push("", `Notes: ${values.message.trim()}`);
  return lines.join("\n");
}

function whatsappUrl(text) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

function ConsultationForm() {
  const [waUrl, setWaUrl] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const today = new Date().toLocaleDateString("en-CA");

  const onSubmit = (values) => {
    const url = whatsappUrl(buildMessage(values));
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="yc-consult__main">
      <header className="yc-consult__head">
        <h2 id="consult-title">{waUrl ? "Your message is ready" : "Book your consultation"}</h2>
        <p>
          {waUrl
            ? "One last step, and it is yours to take."
            : "Tell us a little about you. We will pick the conversation up on WhatsApp."}
        </p>
      </header>

      {waUrl ? (
        <div className="yc-consult__done" role="status">
          <span className="yc-consult__done-icon" aria-hidden="true">
            <FaWhatsapp />
          </span>
          <p>
            WhatsApp should have opened with your details filled in. Press{" "}
            <strong>send</strong> there and we&rsquo;ll take it from here. Nothing reaches us
            until you do.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <a
              className="yc-btn"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              autoFocus
            >
              <FaWhatsapp aria-hidden="true" /> Open WhatsApp
            </a>
            <button
              type="button"
              className="yc-btn yc-btn--outline"
              onClick={() => setWaUrl(null)}
            >
              Edit details
            </button>
          </div>
        </div>
      ) : (
        <form className="yc-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="row g-3">
            <div className="col-sm-6 yc-field">
              <label htmlFor="consult-name">Your name</label>
              <input
                id="consult-name"
                type="text"
                autoComplete="name"
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name", { required: "Please tell us your name" })}
              />
              {errors.name ? <span className="yc-field__error">{errors.name.message}</span> : null}
            </div>

            <div className="col-sm-6 yc-field">
              <label htmlFor="consult-phone">Phone / WhatsApp</label>
              <input
                id="consult-phone"
                type="tel"
                autoComplete="tel"
                aria-invalid={errors.phone ? "true" : "false"}
                {...register("phone", {
                  required: "Please enter your phone number",
                  validate: (value) => {
                    const digits = value.replace(/\D/g, "").length;
                    return (digits >= 7 && digits <= 15) || "Please enter a valid phone number";
                  },
                })}
              />
              {errors.phone ? <span className="yc-field__error">{errors.phone.message}</span> : null}
            </div>

            <div className="col-12 yc-field">
              <label htmlFor="consult-email">Email (optional)</label>
              <input
                id="consult-email"
                type="email"
                autoComplete="email"
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email", {
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Please enter a valid email address" },
                })}
              />
              {errors.email ? <span className="yc-field__error">{errors.email.message}</span> : null}
            </div>

            <div className="col-12 yc-field">
              <label htmlFor="consult-concern">What would you like help with?</label>
              <select
                id="consult-concern"
                defaultValue=""
                aria-invalid={errors.concern ? "true" : "false"}
                {...register("concern", { required: "Please choose what brings you here" })}
              >
                <option value="">Select a concern</option>
                {consultationIssues.map((issue) => (
                  <option key={issue.title}>{issue.title}</option>
                ))}
                <option>Something else</option>
              </select>
              {errors.concern ? (
                <span className="yc-field__error">{errors.concern.message}</span>
              ) : null}
            </div>

            <div className="col-sm-6 yc-field">
              <label htmlFor="consult-date">Preferred date</label>
              <input id="consult-date" type="date" min={today} {...register("date")} />
            </div>

            <div className="col-sm-6 yc-field">
              <label htmlFor="consult-time">Preferred time</label>
              <select id="consult-time" defaultValue="" {...register("timeOfDay")}>
                <option value="">Any time</option>
                {TIMES_OF_DAY.map((time) => (
                  <option key={time}>{time}</option>
                ))}
              </select>
            </div>

            <div className="col-12 yc-field">
              <label htmlFor="consult-message">Anything we should know? (optional)</label>
              <textarea id="consult-message" {...register("message")} />
            </div>
          </div>

          <div>
            <button type="submit" className="yc-btn">
              <FaWhatsapp aria-hidden="true" /> Continue on WhatsApp
            </button>
          </div>

          <p className="yc-form__note mb-0">
            This opens WhatsApp with your details ready to send. We only receive them when you
            press send there. Prefer to call? <a href={site.phoneHref}>{site.phone}</a>
          </p>
        </form>
      )}
    </div>
  );
}

export default function ConsultationModal({ show, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      aria-labelledby="consult-title"
      dialogClassName="yc-consult"
      contentClassName="yc-consult__content"
      backdropClassName="yc-consult-backdrop"
    >
      <button type="button" className="yc-consult__close" onClick={onHide} aria-label="Close">
        <FiX aria-hidden="true" />
      </button>

      <div className="yc-consult__grid">
        <aside className="yc-consult__aside">
          <Image
            src="/images/team/yogacharya-manish-pranayama.jpg"
            alt="Yogacharya Manish practising pranayama outdoors"
            fill
            sizes="(max-width: 767px) 100vw, 340px"
            style={{ objectFit: "cover", objectPosition: "50% 22%" }}
          />
          <div className="yc-consult__aside-inner">
            <span className="yc-eyebrow">With Yogacharya Manish</span>
            <p className="yc-consult__tagline">{site.tagline}</p>
            <ul className="yc-consult__points">
              {HIGHLIGHTS.map((point) => (
                <li key={point}>
                  <FiCheck aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <ConsultationForm />
      </div>
    </Modal>
  );
}
