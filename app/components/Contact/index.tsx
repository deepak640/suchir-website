"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiLinkedinFill, RiInstagramLine, RiMailLine, RiArrowRightUpLine } from "react-icons/ri";

const LINKEDIN_URL = "https://www.linkedin.com/in/shuchir-suri-058251b/";
const INSTAGRAM_URL = "https://www.instagram.com/shuchirsuri/";
const EMAIL = "hello@shuchirsuri.com";

/* ─── Marquee strip ───────────────────────────────────────────── */
const ticker = ["Food Talk India", "Jade Forest", "Anthem"];

function Marquee() {
  const repeated = [...ticker, ...ticker, ...ticker];
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid rgba(200,161,90,0.12)",
        borderBottom: "1px solid rgba(200,161,90,0.12)",
        padding: "0.75rem 0",
        marginBottom: "5rem",
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: "3rem", whiteSpace: "nowrap", width: "max-content" }}
      >
        {repeated.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "3rem" }}>
            <span
              className="font-body"
              style={{ fontSize: "0.75rem", letterSpacing: "0.2em", color: "#A1A1A1", textTransform: "uppercase" }}
            >
              {item}
            </span>
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "#C8A15A",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Bordered input ──────────────────────────────────────────── */
function Field({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  multiline = false,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  multiline?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const sharedStyle: React.CSSProperties = {
    width: "100%",
    background: focused ? "rgba(200,161,90,0.06)" : "rgba(255,255,255,0.07)",
    border: `1px solid ${focused ? "#C8A15A" : "rgba(255,255,255,0.35)"}`,
    color: "#F5F5F5",
    fontSize: "0.9375rem",
    padding: "0.875rem 1rem",
    outline: "none",
    resize: "none",
    fontFamily: "inherit",
    transition: "border-color 0.3s, background 0.3s",
    boxSizing: "border-box",
    borderRadius: "2px",
  };
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label
        className="font-body"
        style={{
          display: "block",
          fontSize: "0.65rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: focused ? "#C8A15A" : "#bbb",
          marginBottom: "0.5rem",
          transition: "color 0.3s",
        }}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={5}
          required
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...sharedStyle }}
        />
      ) : (
        <input
          type={type}
          required
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{ ...sharedStyle }}
        />
      )}
      <style>{`input::placeholder, textarea::placeholder { color: #999; }`}</style>
    </div>
  );
}

/* ─── Main ────────────────────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ background: "#0A0A0A", paddingTop: "6rem", position: "relative", overflow: "hidden" }}
    >
      <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
        {/* ── Big heading ── */}
        <div style={{ marginBottom: "3rem" }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body"
            style={{
              color: "#C8A15A",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span style={{ width: "2rem", height: "1px", background: "#C8A15A", flexShrink: 0 }} />
            Contact
          </motion.p>

          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-heading"
              style={{
                fontSize: "clamp(3rem, 7vw, 6rem)",
                fontWeight: 700,
                color: "#F5F5F5",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Open for partnerships and
            </motion.h2>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h2
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="font-heading text-gradient"
              style={{
                fontSize: "clamp(3rem, 7vw, 6rem)",
                fontWeight: 700,
                fontStyle: "italic",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              collaborations worldwide.
            </motion.h2>
          </div>
        </div>
      </div>

      {/* ── Marquee ── */}
      <Marquee />

      {/* ── Two-column body ── */}
      <div className="site-container" style={{ position: "relative", zIndex: 1, paddingBottom: "6rem" }}>
        <div
          className="contact-cols"
          style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "5rem", alignItems: "start" }}
        >
          {/* LEFT — Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="font-body"
              style={{
                color: "#555",
                fontSize: "0.8rem",
                letterSpacing: "0.04em",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
              }}
            >
              Have a collaboration in mind? Drop your details below and I&apos;ll get back to you shortly.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: "2.5rem",
                  border: "1px solid rgba(200,161,90,0.3)",
                  textAlign: "center",
                }}
              >
                <p className="font-heading" style={{ fontSize: "1.5rem", color: "#C8A15A", marginBottom: "0.5rem" }}>
                  Message sent ✓
                </p>
                <p className="font-body" style={{ color: "#A1A1A1", fontSize: "0.875rem" }}>
                  I&apos;ll be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <Field
                  label="Your Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="John Doe"
                />
                <Field
                  label="Email Address"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="you@example.com"
                />
                <Field
                  label="Your Message"
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                  placeholder="Tell me about your idea…"
                  multiline
                />

                <button
                  type="submit"
                  className="font-body send-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1.5rem",
                    width: "auto",
                    background: "none",
                    border: "1px solid rgba(200,161,90,0.35)",
                    color: "#F5F5F5",
                    padding: "1rem 1.5rem",
                    fontSize: "0.8125rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.35s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#C8A15A";
                    e.currentTarget.style.borderColor = "#C8A15A";
                    e.currentTarget.style.color = "#0E0E0E";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "none";
                    e.currentTarget.style.borderColor = "rgba(200,161,90,0.35)";
                    e.currentTarget.style.color = "#F5F5F5";
                  }}
                >
                  <span>Get in Touch</span>
                  <RiArrowRightUpLine size={18} />
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT — Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ paddingTop: "3.5rem" }}
          >
            {/* Large location text */}
            <p
              className="font-heading"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.75rem)",
                fontWeight: 600,
                color: "#F5F5F5",
                lineHeight: 1.4,
                marginBottom: "0.5rem",
              }}
            ></p>
            <p
              className="font-body"
              style={{ color: "#555", fontSize: "0.8125rem", marginBottom: "3rem", lineHeight: 1.7 }}
            >
              Open for partnerships and collaborations worldwide.
            </p>

            {/* Social links — stacked large links */}
            {[
              { icon: RiLinkedinFill, label: "LinkedIn", handle: "Shuchir Suri", href: LINKEDIN_URL, color: "#0A66C2" },
              {
                icon: RiInstagramLine,
                label: "Instagram",
                handle: "@shuchirsuri",
                href: INSTAGRAM_URL,
                color: "#E1306C",
              },
            ].map(({ icon: Icon, label, handle, href, color }, i) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.25rem 0",
                  borderBottom: "1px solid rgba(200,161,90,0.1)",
                  textDecoration: "none",
                  transition: "padding-left 0.3s",
                  gap: "1rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = "0.75rem";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: `${color}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <p
                      className="font-body"
                      style={{
                        fontSize: "0.65rem",
                        color: "#555",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginBottom: "0.15rem",
                      }}
                    >
                      {label}
                    </p>
                    <p className="font-body" style={{ fontSize: "0.9375rem", color: "#F5F5F5", fontWeight: 500 }}>
                      {handle}
                    </p>
                  </div>
                </div>
                <RiArrowRightUpLine size={15} style={{ color: "#C8A15A", flexShrink: 0 }} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .contact-cols { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .send-btn { width: auto !important; font-size: 0.68rem !important; white-space: nowrap !important; padding: 0.75rem 1.25rem !important; letter-spacing: 0.08em !important; }
        }
      `}</style>
    </section>
  );
}
