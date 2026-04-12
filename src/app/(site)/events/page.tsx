"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2, XCircle, Loader2, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ─── ADD FUTURE EVENTS HERE ───────────────────────────────────────────────────
const events: {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}[] = [
  // Example (remove when real events are added):
  // {
  //   title: "Open House & Info Session",
  //   date: "April 27, 2026",
  //   time: "7:00 PM – 9:00 PM",
  //   location: "Masjid Ḥanafiyyah",
  //   description: "Meet the faculty and learn about the Ṭaḥāwiyyah Institute program.",
  // },
];
// ─────────────────────────────────────────────────────────────────────────────

interface FieldError { [key: string]: string }

export default function EventsPage() {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", previousStudies: "" });
  const [errors, setErrors] = React.useState<FieldError>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
  };

  const handleSubmit = async () => {
    const errs: FieldError = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!form.phone.trim()) errs.phone = "Phone number is required";
    if (!form.previousStudies.trim()) errs.previousStudies = "Please describe your previous studies";
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/sisters-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, previousStudies: form.previousStudies }),
      });
      const data = await res.json();
      if (data.ok) {
        setSubmitStatus("success");
        setForm({ name: "", email: "", phone: "", previousStudies: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg pb-20 md:pb-0">
      {/* HEADER */}
      <section className="border-b border-border bg-bg pb-12 md:py-16">
        <Container className="pt-4 md:pt-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-semibold tracking-tight text-text md:text-5xl lg:text-6xl">
              Events
            </h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted md:text-lg">
              Upcoming gatherings, open houses, and classes hosted at masaajid in your area.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* SISTERS' CLASSES — COMING SOON (moved above events list) */}
      <section className="border-b border-border bg-surface2 py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-5xl">

            {/* LEFT: announcement */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10">
                <Heart className="h-7 w-7 text-gold" />
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                  Coming Soon
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
                  Classes for Sisters
                </h2>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-px w-10 bg-gradient-to-r from-gold to-gold/20" />
                  <div className="h-1.5 w-1.5 rounded-full bg-gold/50" />
                  <div className="h-px w-10 bg-gradient-to-l from-gold to-gold/20" />
                </div>
              </div>
              <p className="text-base leading-relaxed text-muted">
                We are working to offer a dedicated sisters&apos; program inshallah. Sign up below to express your interest and we will reach out when registration opens.
              </p>
              <div className="rounded-xl border border-gold/20 bg-gold/5 p-4 space-y-2 text-sm">
                <p className="font-semibold text-text">Why pre-register?</p>
                <ul className="space-y-1 text-muted">
                  <li>· Be the first to know when enrollment opens</li>
                  <li>· Help us gauge interest and plan the program</li>
                  <li>· No commitment required</li>
                </ul>
              </div>
            </motion.div>

            {/* RIGHT: form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-text mb-1">Pre-Registration</h3>
                <p className="text-sm text-muted mb-6">Express your interest in the sisters&apos; program.</p>

                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center py-8 space-y-3"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10">
                      <CheckCircle2 className="h-7 w-7 text-green-500" />
                    </div>
                    <p className="font-semibold text-text">You&apos;re on the list!</p>
                    <p className="text-sm text-muted leading-relaxed max-w-xs">
                      JazakAllahu khayran. We will be in touch inshallah when the sisters&apos; program is ready.
                    </p>
                  </motion.div>
                ) : (
                  <div className="space-y-5">
                    {submitStatus === "error" && (
                      <div className="flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-3">
                        <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={cn(
                          "w-full rounded-xl border border-border bg-bg px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-surface",
                          errors.name && "border-red-500/50"
                        )}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={cn(
                          "w-full rounded-xl border border-border bg-bg px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-surface",
                          errors.email && "border-red-500/50"
                        )}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={cn(
                          "w-full rounded-xl border border-border bg-bg px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-surface",
                          errors.phone && "border-red-500/50"
                        )}
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>

                    {/* Previous Studies */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text">
                        Previous Islamic Studies <span className="text-red-500">*</span>
                      </label>
                      <p className="mb-2 text-xs text-muted">
                        Describe any prior Qurʾān, Arabic, or Islamic education you have received.
                      </p>
                      <textarea
                        rows={3}
                        value={form.previousStudies}
                        onChange={(e) => update("previousStudies", e.target.value)}
                        className={cn(
                          "w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-surface",
                          errors.previousStudies && "border-red-500/50"
                        )}
                      />
                      {errors.previousStudies && <p className="mt-1 text-sm text-red-500">{errors.previousStudies}</p>}
                    </div>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-gold py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </span>
                      ) : "Sign Up for Pre-Registration"}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* EVENTS LIST */}
      <section className="border-b border-border bg-bg py-16 md:py-24">
        <Container>
          {events.length === 0 ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 mb-6">
                <Calendar className="h-10 w-10 text-gold/60" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">
                No Upcoming Events
              </h3>
              <p className="text-muted max-w-md text-base leading-relaxed">
                Events will be posted here as they are scheduled. Check back soon
                for upcoming classes and gatherings at masaajid in your area.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-6 max-w-3xl">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUpVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-text mb-3">
                    {event.title}
                  </h3>
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted">
                      <Calendar className="h-4 w-4 text-gold flex-shrink-0" />
                      <span>{event.date}{event.time ? ` · ${event.time}` : ""}</span>
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <MapPin className="h-4 w-4 text-gold flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                  {event.description && (
                    <p className="text-base leading-relaxed text-muted">{event.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </Container>
      </section>

    </div>
  );
}
