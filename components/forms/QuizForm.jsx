"use client";

import { useMemo, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { site } from "@/lib/site";

const EMAIL_RE = /^\S+@\S+\.\S+$/;

function isAnswered(step, answers) {
  if (step.fields) {
    return step.fields.every((f) => {
      const v = (answers[f.name] || "").trim();
      if (!f.required) return true;
      if (!v) return false;
      if (f.type === "email") return EMAIL_RE.test(v);
      if (f.type === "tel") return v.replace(/\D/g, "").length >= 7;
      return true;
    });
  }
  const v = answers[step.id];
  if (step.type === "scale") return typeof v === "number";
  if (step.type === "single") return Boolean(v);
  return Array.isArray(v) && v.length > 0;
}

function buildWhatsAppMessage(form, steps, answers, other) {
  const lines = [
    `Hello Yogic Company, I completed the ${form.name}.`,
    "",
  ];
  
  // Add contact info
  const contactStep = steps.find((s) => s.fields);
  if (contactStep) {
    contactStep.fields.forEach((f) => {
      const value = answers[f.name];
      if (value?.trim()) {
        lines.push(`${f.label}: ${value.trim()}`);
      }
    });
    lines.push("");
  }
  
  // Add answers
  lines.push("My Answers:");
  steps
    .filter((s) => !s.fields)
    .forEach((s) => {
      const answer = [answers[s.id], other[s.id]].flat().filter(Boolean).join(", ");
      if (answer) {
        lines.push(`\nQ: ${s.question}`);
        lines.push(`A: ${answer}`);
      }
    });
  
  return lines.join("\n");
}

function whatsappUrl(text) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function QuizForm({ form }) {
  const steps = form.steps;
  const [index, setIndex] = useState(-1); // -1 = intro screen
  const [answers, setAnswers] = useState({});
  const [other, setOther] = useState({});
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState({ state: "idle" });

  const step = index >= 0 ? steps[index] : null;
  const isLast = index === steps.length - 1;
  const ready = useMemo(() => (step ? isAnswered(step, answers) : true), [step, answers]);

  const toggle = (stepId, option, multi) => {
    setAnswers((prev) => {
      if (!multi) return { ...prev, [stepId]: option };
      const current = Array.isArray(prev[stepId]) ? prev[stepId] : [];
      return {
        ...prev,
        [stepId]: current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current, option],
      };
    });
  };

  const submit = async (event) => {
    event.preventDefault();
    setTouched(true);
    if (!ready) return;
    setStatus({ state: "sending" });
    
    const message = buildWhatsAppMessage(form, steps, answers, other);
    const url = whatsappUrl(message);
    
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus({ state: "sent" });
  };

  if (status.state === "sent") {
    return (
      <div className="yc-quiz">
        <div className="yc-quiz__done">
          <span className="yc-quiz__donemark" aria-hidden="true">
            <FaWhatsapp />
          </span>
          <h2>Your answers are ready</h2>
          <p className="mb-0">
            WhatsApp should have opened with your answers filled in. Press send there and
            we&rsquo;ll take it from here. Nothing reaches us until you do.
          </p>
        </div>
      </div>
    );
  }

  if (index < 0) {
    return (
      <div className="yc-quiz">
        <div className="yc-quiz__intro">
          <h2>{form.title}</h2>
          <p className="yc-lead">{form.intro}</p>
          <button type="button" className="yc-btn yc-btn--lg mt-3" onClick={() => setIndex(0)}>
            {form.startLabel} <FiArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="yc-quiz" onSubmit={submit} noValidate>
      <div className="yc-quiz__progress" aria-hidden="true">
        <span style={{ width: `${((index + 1) / steps.length) * 100}%` }} />
      </div>
      <p className="yc-quiz__step">
        Step {index + 1} of {steps.length}
      </p>

      {step.fields ? (
        <fieldset className="yc-quiz__fieldset">
          <legend className="yc-quiz__question">{step.title}</legend>
          {step.intro ? <p className="yc-text-muted-sm">{step.intro}</p> : null}
          <div className="row g-3 mt-1">
            {step.fields.map((field) => {
              const value = answers[field.name] || "";
              const invalid =
                touched &&
                field.required &&
                !isAnswered({ fields: [field] }, answers);
              return (
                <div className="col-md-6 yc-field" key={field.name}>
                  <label htmlFor={`${form.slug}-${field.name}`}>
                    {field.label}
                    {field.required ? <span aria-hidden="true"> *</span> : null}
                  </label>
                  <input
                    id={`${form.slug}-${field.name}`}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required={field.required}
                    aria-invalid={invalid ? "true" : "false"}
                    value={value}
                    onChange={(e) =>
                      setAnswers((p) => ({ ...p, [field.name]: e.target.value }))
                    }
                  />
                  {invalid ? (
                    <span className="yc-field__error">
                      Please add a valid {field.label.replace(" (Optional)", "").toLowerCase()}.
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </fieldset>
      ) : (
        <fieldset className="yc-quiz__fieldset">
          <legend className="yc-quiz__question">{step.question}</legend>

          {step.type === "scale" ? (
            <div className="yc-scale">
              <div className="yc-scale__row" role="radiogroup" aria-label={step.question}>
                {Array.from({ length: step.max - step.min + 1 }, (_, n) => step.min + n).map((n) => (
                  <button
                    type="button"
                    key={n}
                    role="radio"
                    aria-checked={answers[step.id] === n}
                    className={`yc-scale__dot${answers[step.id] === n ? " is-active" : ""}`}
                    onClick={() => setAnswers((p) => ({ ...p, [step.id]: n }))}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <div className="yc-scale__labels">
                <span>{step.minLabel}</span>
                <span>{step.maxLabel}</span>
              </div>
            </div>
          ) : (
            <div className="yc-choices">
              {step.options.map((option) => {
                const multi = step.type !== "single";
                const selected = multi
                  ? (answers[step.id] || []).includes(option)
                  : answers[step.id] === option;
                return (
                  <button
                    type="button"
                    key={option}
                    className={`yc-choice${selected ? " is-active" : ""}`}
                    aria-pressed={selected}
                    onClick={() => toggle(step.id, option, multi)}
                  >
                    <span className="yc-choice__box" aria-hidden="true">
                      {selected ? <FiCheck /> : null}
                    </span>
                    {option}
                  </button>
                );
              })}
              {step.allowOther ? (
                <label className="yc-choice yc-choice--other">
                  <span className="yc-choice__box" aria-hidden="true" />
                  <span className="visually-hidden">Other</span>
                  <input
                    type="text"
                    placeholder="Other:"
                    value={other[step.id] || ""}
                    onChange={(e) => setOther((p) => ({ ...p, [step.id]: e.target.value }))}
                  />
                </label>
              ) : null}
            </div>
          )}

          <p className="yc-quiz__hint">
            {step.type === "single" ? "*Select one option" : "*Select one or more options"}
          </p>
          {touched && !ready ? (
            <span className="yc-field__error">Please choose an answer to continue.</span>
          ) : null}
        </fieldset>
      )}

      <div className="yc-quiz__actions">
        <button
          type="button"
          className="yc-btn yc-btn--outline"
          onClick={() => {
            setTouched(false);
            setIndex((i) => Math.max(i - 1, 0));
          }}
          disabled={index === 0}
        >
          <FiArrowLeft aria-hidden="true" /> Back
        </button>

        {isLast ? (
          <button type="submit" className="yc-btn" disabled={status.state === "sending"}>
            {status.state === "sending" ? "Preparing…" : <><FaWhatsapp aria-hidden="true" /> Continue on WhatsApp</>}
          </button>
        ) : (
          <button
            type="button"
            className="yc-btn"
            onClick={() => {
              setTouched(true);
              if (ready) {
                setTouched(false);
                setIndex((i) => i + 1);
              }
            }}
          >
            Next <FiArrowRight aria-hidden="true" />
          </button>
        )}
      </div>

      <div aria-live="polite">
        {status.state === "error" ? (
          <p className="yc-form__status mt-3 mb-0">
            Something went wrong. Please try again, or message us directly on{" "}
            <a href={site.whatsappHref}>WhatsApp</a>.
          </p>
        ) : null}
      </div>
    </form>
  );
}
