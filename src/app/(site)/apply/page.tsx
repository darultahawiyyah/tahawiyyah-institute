"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  Loader2,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  CreditCard,
  HandHeart,
  X,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { individualCourseOptions } from "@/lib/apply-schema";
import { cn } from "@/lib/cn";

const PER_COURSE_FEE = 50;
const SEMESTER_FEE = 200;

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type TrackType = "madani" | "individual" | "";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: "male" | "female" | "";
  previousStudies: string;
  notes: string;
  trackType: TrackType;
  madaniSemester: "semester1" | "";
  selectedCourses: string[];
  priceAcknowledged: boolean;
}

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  gender: "",
  previousStudies: "",
  notes: "",
  trackType: "",
  madaniSemester: "",
  selectedCourses: [],
  priceAcknowledged: false,
};

interface FieldError {
  [key: string]: string;
}

function validateStep1(data: FormState): FieldError {
  const errors: FieldError = {};
  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.lastName.trim()) errors.lastName = "Last name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  if (!data.gender) errors.gender = "Please select a gender";
  if (!data.previousStudies.trim()) errors.previousStudies = "Please describe your previous Islamic studies";
  return errors;
}

function validateStep2(data: FormState): FieldError {
  const errors: FieldError = {};
  if (!data.trackType) errors.trackType = "Please select a track";
  if (data.trackType === "madani" && !data.madaniSemester) {
    errors.madaniSemester = "Please select a semester";
  }
  if (data.trackType === "individual" && data.selectedCourses.length === 0) {
    errors.selectedCourses = "Please select at least one course";
  }
  return errors;
}

function validateStep3(data: FormState): FieldError {
  const errors: FieldError = {};
  if (!data.priceAcknowledged) {
    errors.priceAcknowledged = "Please acknowledge the price to continue";
  }
  return errors;
}

export default function Apply() {
  const [step, setStep] = React.useState<1 | 2 | 3>(1);
  const [formData, setFormData] = React.useState<FormState>(initialState);
  const [errors, setErrors] = React.useState<FieldError>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  // Financial Aid modal state
  const [showFinancialAid, setShowFinancialAid] = React.useState(false);
  const [aidForm, setAidForm] = React.useState({
    name: "",
    reason: "",
    employment: "" as "fulltime" | "parttime" | "nojob" | "",
  });
  const [aidErrors, setAidErrors] = React.useState<FieldError>({});
  const [aidSubmitted, setAidSubmitted] = React.useState(false);

  const updateAid = (field: string, value: string) => {
    setAidForm((prev) => ({ ...prev, [field]: value }));
    setAidErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });
  };

  const submitAid = () => {
    const errs: FieldError = {};
    if (!aidForm.name.trim()) errs.name = "Name is required";
    if (!aidForm.reason.trim()) errs.reason = "Please provide a reason";
    if (!aidForm.employment) errs.employment = "Please select an option";
    if (Object.keys(errs).length > 0) { setAidErrors(errs); return; }
    setAidSubmitted(true);
  };

  const closeAidModal = () => {
    setShowFinancialAid(false);
    setAidSubmitted(false);
    setAidForm({ name: "", reason: "", employment: "" });
    setAidErrors({});
  };

  const update = (field: keyof FormState, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => { const next = { ...prev }; delete next[field as string]; return next; });
  };

  const toggleCourse = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedCourses: prev.selectedCourses.includes(value)
        ? prev.selectedCourses.filter((c) => c !== value)
        : [...prev.selectedCourses, value],
    }));
    setErrors((prev) => { const next = { ...prev }; delete next.selectedCourses; return next; });
  };

  const goNext = () => {
    const errs =
      step === 1 ? validateStep1(formData) : validateStep2(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep((prev) => (prev < 3 ? ((prev + 1) as 1 | 2 | 3) : prev));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setErrors({});
    setStep((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3) : prev));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    const errs = validateStep3(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          gender: formData.gender,
          previousStudies: formData.previousStudies,
          trackType: formData.trackType,
          selectedCourses:
            formData.trackType === "individual" ? formData.selectedCourses : undefined,
          notes: formData.notes || undefined,
          priceAcknowledged: true,
        }),
      });

      const result = await response.json();

      if (result.ok) {
        setSubmitStatus("success");
        setFormData(initialState);
        setStep(1);
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const coursesLabel =
    formData.trackType === "madani"
      ? "Madani Track — Semester 1"
      : formData.selectedCourses
          .map((v) => individualCourseOptions.find((o) => o.value === v)?.label ?? v)
          .join(", ");

  const totalPrice =
    formData.trackType === "madani"
      ? SEMESTER_FEE
      : formData.selectedCourses.length * PER_COURSE_FEE;

  return (
    <div className="min-h-screen bg-bg">
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
              Apply Now
            </h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted md:text-lg">
              Take the first step towards deepening your Islamic knowledge.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-border bg-surface2 py-16 md:py-24">
        <Container>
          {/* STEP INDICATOR */}
          <div className="mb-10 flex items-center gap-3 max-w-lg mx-auto">
            {[
              { n: 1, label: "Your Info" },
              { n: 2, label: "Choose Track" },
              { n: 3, label: "Payment" },
            ].map(({ n, label }, i) => (
              <React.Fragment key={n}>
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                      step === n
                        ? "bg-gold text-white"
                        : step > n
                        ? "bg-gold/20 text-gold"
                        : "bg-surface border border-border text-muted"
                    )}
                  >
                    {step > n ? <CheckCircle2 className="h-4 w-4" /> : n}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium",
                      step === n ? "text-text" : "text-muted"
                    )}
                  >
                    {label}
                  </span>
                </div>
                {i < 2 && (
                  <div
                    className={cn(
                      "h-px flex-1 mb-4 transition-colors",
                      step > n ? "bg-gold/40" : "bg-border"
                    )}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* SUCCESS BANNER */}
          {submitStatus === "success" && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="mb-8 max-w-lg mx-auto rounded-lg border border-green-500/30 bg-green-500/10 p-5"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-700">Application submitted!</p>
                  <p className="mt-1 text-sm text-green-600">
                    JazakAllahu khayran. You will receive an email with further enrollment and payment information inshallah.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ERROR BANNER */}
          {submitStatus === "error" && (
            <div className="mb-8 max-w-lg mx-auto rounded-lg border border-red-500/30 bg-red-500/10 p-4">
              <div className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-red-700">Submission failed</p>
                  <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT: INFO PANEL */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {step === 1 && (
                <div>
                  <h2 className="mb-4 text-2xl font-semibold text-text md:text-3xl">
                    Begin Your Journey
                  </h2>
                  <p className="mb-4 max-w-prose text-base leading-relaxed text-muted md:text-lg">
                    Our comprehensive Islamic studies program is designed to
                    provide you with authentic knowledge rooted in the traditional
                    Islamic sciences.
                  </p>
                  <p className="max-w-prose text-base leading-relaxed text-muted md:text-lg">
                    Join a community of dedicated students committed to
                    understanding and applying Islamic principles in their daily
                    lives.
                  </p>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="mb-4 text-2xl font-semibold text-text md:text-3xl">
                    Choose Your Track
                  </h2>
                  <p className="mb-6 max-w-prose text-base leading-relaxed text-muted md:text-lg">
                    Select the Madani Track to enroll in the full program, or
                    choose individual courses that fit your schedule and goals.
                  </p>
                  <div className="space-y-4">
                    <div className="rounded-xl border border-border bg-surface p-4">
                      <h4 className="font-semibold text-text mb-1">Madani Track (All Courses)</h4>
                      <p className="text-sm text-muted">
                        The complete 2-year program covering all seven Islamic
                        sciences: Fiqh, ʿAqīda, Ḥadīth, Tajwīd, Naḥw, Ṣarf, and Qurʾān & Tafsīr.
                      </p>
                    </div>
                    <div className="rounded-xl border border-border bg-surface p-4">
                      <h4 className="font-semibold text-text mb-1">Individual Courses</h4>
                      <p className="text-sm text-muted">
                        Select one or more courses to study at your own pace,
                        tailored to your specific interests.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="mb-4 text-2xl font-semibold text-text md:text-3xl">
                    Review &amp; Submit
                  </h2>
                  <p className="mb-4 max-w-prose text-base leading-relaxed text-muted md:text-lg">
                    Review your application summary and acknowledge the tuition below. After submitting, you will receive an email with further enrollment and payment details.
                  </p>
                  <div className="rounded-xl border border-gold/20 bg-gold/5 p-5 space-y-2 text-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <CreditCard className="h-5 w-5 text-gold" />
                      <h4 className="font-semibold text-text">Tuition</h4>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Per course</span>
                      <span className="font-medium text-text">${PER_COURSE_FEE}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Full semester (Madani Track)</span>
                      <span className="font-medium text-text">${SEMESTER_FEE}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* WHAT HAPPENS NEXT (step 1 only) */}
              {step === 1 && (
                <div>
                  <h3 className="mb-6 text-xl font-semibold text-text">What Happens Next</h3>
                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Fill Out Your Information",
                        description: "Provide your personal details and choose your learning track.",
                      },
                      {
                        step: "2",
                        title: "Send Payment",
                        description: "Send your enrollment fee via Zelle to confirm your spot.",
                      },
                      {
                        step: "3",
                        title: "Start Learning",
                        description: "Once confirmed, you will be contacted with further details on payment and class registration.",
                      },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-sm font-semibold text-gold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-text">{item.title}</h4>
                          <p className="mt-1 text-sm text-muted">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-xs leading-relaxed text-muted">
                  <strong className="text-text">Privacy:</strong> Your information
                  is secure and will only be used for enrollment purposes. We will
                  never share your data with third parties.
                </p>
              </div>
            </motion.div>

            {/* RIGHT: FORM */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {step === 1 && "Your Information"}
                    {step === 2 && "Choose Track"}
                    {step === 3 && "Confirm Payment"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">

                    {/* ── STEP 1 ── */}
                    {step === 1 && (
                      <>
                        {/* First Name */}
                        <div>
                          <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-text">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => update("firstName", e.target.value)}
                            className={cn(
                              "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                              "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                              errors.firstName && "border-red-500/50"
                            )}
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                          )}
                        </div>

                        {/* Last Name */}
                        <div>
                          <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-text">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => update("lastName", e.target.value)}
                            className={cn(
                              "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                              "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                              errors.lastName && "border-red-500/50"
                            )}
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => update("email", e.target.value)}
                            className={cn(
                              "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                              "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                              errors.email && "border-red-500/50"
                            )}
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            className={cn(
                              "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                              "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                              errors.phone && "border-red-500/50"
                            )}
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                          )}
                        </div>

                        {/* Gender */}
                        <div>
                          <p className="mb-2 block text-sm font-medium text-text">
                            Gender <span className="text-red-500">*</span>
                          </p>
                          <div className="flex gap-3">
                            {[
                              { value: "male", label: "Brother" },
                              { value: "female", label: "Sister" },
                            ].map((opt) => (
                              <button
                                key={opt.value}
                                type="button"
                                onClick={() => update("gender", opt.value)}
                                className={cn(
                                  "flex-1 rounded-xl border-2 py-3 text-sm font-medium transition-all",
                                  formData.gender === opt.value
                                    ? "border-gold bg-gold/5 text-text"
                                    : "border-border bg-surface text-muted hover:border-gold/40",
                                  errors.gender && !formData.gender && "border-red-500/50"
                                )}
                              >
                                {opt.label}
                              </button>
                            ))}
                          </div>
                          {errors.gender && (
                            <p className="mt-1 text-sm text-red-500">{errors.gender}</p>
                          )}
                        </div>

                        {/* Previous Studies */}
                        <div>
                          <label htmlFor="previousStudies" className="mb-2 block text-sm font-medium text-text">
                            Previous Islamic Studies <span className="text-red-500">*</span>
                          </label>
                          <p className="mb-2 text-xs text-muted">
                            Describe any prior Qurʾān, Arabic, or Islamic education you have received.
                          </p>
                          <textarea
                            id="previousStudies"
                            rows={3}
                            value={formData.previousStudies}
                            onChange={(e) => update("previousStudies", e.target.value)}
                            className={cn(
                              "w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                              "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                              errors.previousStudies && "border-red-500/50"
                            )}
                          />
                          {errors.previousStudies && (
                            <p className="mt-1 text-sm text-red-500">{errors.previousStudies}</p>
                          )}
                        </div>

                        {/* Notes */}
                        <div>
                          <label htmlFor="notes" className="mb-2 block text-sm font-medium text-text">
                            Notes
                          </label>
                          <textarea
                            id="notes"
                            rows={3}
                            value={formData.notes}
                            onChange={(e) => update("notes", e.target.value)}
                            className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg"
                          />
                        </div>

                        <Button
                          type="button"
                          variant="primary"
                          size="lg"
                          onClick={goNext}
                          className="w-full"
                        >
                          Next: Choose Track
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </>
                    )}

                    {/* ── STEP 2 ── */}
                    {step === 2 && (
                      <>
                        {/* Track type */}
                        <div>
                          <p className="mb-3 text-sm font-medium text-text">
                            Select a Track <span className="text-red-500">*</span>
                          </p>
                          <div className="space-y-3">
                            {[
                              {
                                value: "madani" as TrackType,
                                label: "Madani Track",
                                description: "All Courses — Full Program",
                              },
                              {
                                value: "individual" as TrackType,
                                label: "Individual Courses",
                                description: "Choose specific courses",
                              },
                            ].map((opt) => (
                              <div key={opt.value}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    update("trackType", opt.value);
                                    if (opt.value === "madani") {
                                      update("selectedCourses", []);
                                    } else {
                                      update("madaniSemester", "");
                                    }
                                  }}
                                  className={cn(
                                    "w-full rounded-xl border-2 p-4 text-left transition-all",
                                    formData.trackType === opt.value
                                      ? "border-gold bg-gold/5"
                                      : "border-border bg-surface hover:border-gold/40"
                                  )}
                                >
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={cn(
                                        "h-4 w-4 rounded-full border-2 flex-shrink-0 transition-colors",
                                        formData.trackType === opt.value
                                          ? "border-gold bg-gold"
                                          : "border-border"
                                      )}
                                    />
                                    <div>
                                      <p className="font-semibold text-text">{opt.label}</p>
                                      <p className="text-sm text-muted">{opt.description}</p>
                                    </div>
                                  </div>
                                </button>

                                {/* Semester selector for Madani Track */}
                                {opt.value === "madani" && formData.trackType === "madani" && (
                                  <div className="mt-2 ml-4">
                                    <p className="mb-2 text-xs font-medium text-muted uppercase tracking-wide">Select Semester</p>
                                    <button
                                      type="button"
                                      onClick={() => update("madaniSemester", "semester1")}
                                      className={cn(
                                        "w-full rounded-xl border-2 px-4 py-3 text-left text-sm transition-all",
                                        formData.madaniSemester === "semester1"
                                          ? "border-gold bg-gold/5 font-medium text-text"
                                          : "border-border bg-surface text-muted hover:border-gold/40"
                                      )}
                                    >
                                      <div className="flex items-center gap-3">
                                        <div
                                          className={cn(
                                            "h-4 w-4 rounded-full border-2 flex-shrink-0 transition-colors",
                                            formData.madaniSemester === "semester1"
                                              ? "border-gold bg-gold"
                                              : "border-border"
                                          )}
                                        />
                                        Semester 1
                                      </div>
                                    </button>
                                    {errors.madaniSemester && (
                                      <p className="mt-1 text-sm text-red-500">{errors.madaniSemester}</p>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                          {errors.trackType && (
                            <p className="mt-2 text-sm text-red-500">{errors.trackType}</p>
                          )}
                        </div>

                        {/* Individual course checkboxes */}
                        {formData.trackType === "individual" && (
                          <div>
                            <p className="mb-3 text-sm font-medium text-text">
                              Select Courses <span className="text-red-500">*</span>
                            </p>
                            <div className="space-y-2">
                              {individualCourseOptions.map((course) => {
                                const checked = formData.selectedCourses.includes(course.value);
                                return (
                                  <button
                                    key={course.value}
                                    type="button"
                                    onClick={() => toggleCourse(course.value)}
                                    className={cn(
                                      "w-full rounded-xl border px-4 py-3 text-left text-sm transition-all",
                                      checked
                                        ? "border-gold bg-gold/5 font-medium text-text"
                                        : "border-border bg-surface text-muted hover:border-gold/40"
                                    )}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div
                                        className={cn(
                                          "h-4 w-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors",
                                          checked ? "border-gold bg-gold" : "border-border"
                                        )}
                                      >
                                        {checked && (
                                          <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                          </svg>
                                        )}
                                      </div>
                                      {course.label}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                            {errors.selectedCourses && (
                              <p className="mt-2 text-sm text-red-500">{errors.selectedCourses}</p>
                            )}
                          </div>
                        )}

                        <div className="flex gap-3">
                          <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            onClick={goBack}
                            className="flex-1"
                          >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                          </Button>
                          <Button
                            type="button"
                            variant="primary"
                            size="lg"
                            onClick={goNext}
                            className="flex-1"
                          >
                            Next: Payment
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </>
                    )}

                    {/* ── STEP 3 ── */}
                    {step === 3 && (
                      <>
                        {/* Application Summary */}
                        <div className="rounded-xl border border-border bg-surface2 p-4 space-y-2 text-sm">
                          <div className="flex items-center gap-2 mb-3">
                            <BookOpen className="h-4 w-4 text-gold" />
                            <h4 className="font-semibold text-text">Application Summary</h4>
                          </div>
                          <div className="grid grid-cols-[130px_1fr] gap-y-2">
                            <span className="text-muted">Name</span>
                            <span className="text-text font-medium">
                              {formData.firstName} {formData.lastName}
                            </span>
                            <span className="text-muted">Email</span>
                            <span className="text-text font-medium break-all">{formData.email}</span>
                            <span className="text-muted">Phone</span>
                            <span className="text-text font-medium">{formData.phone}</span>
                            <span className="text-muted">Gender</span>
                            <span className="text-text font-medium">
                              {formData.gender === "male" ? "Brother" : "Sister"}
                            </span>
                            <span className="text-muted">Enrollment</span>
                            <span className="text-text font-medium">{coursesLabel}</span>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="rounded-xl border border-gold/20 bg-gold/5 p-4 space-y-2 text-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <CreditCard className="h-4 w-4 text-gold" />
                            <h4 className="font-semibold text-text">Tuition</h4>
                          </div>
                          {formData.trackType === "madani" ? (
                            <div className="flex justify-between">
                              <span className="text-muted">Madani Track — Semester 1</span>
                              <span className="font-semibold text-text">${SEMESTER_FEE}</span>
                            </div>
                          ) : (
                            <>
                              <div className="flex justify-between">
                                <span className="text-muted">{formData.selectedCourses.length} course{formData.selectedCourses.length !== 1 ? "s" : ""} × ${ PER_COURSE_FEE}</span>
                                <span className="font-semibold text-text">${totalPrice}</span>
                              </div>
                            </>
                          )}
                          <div className="border-t border-gold/20 pt-2 flex justify-between font-semibold">
                            <span className="text-text">Total</span>
                            <span className="text-gold">${totalPrice}</span>
                          </div>
                        </div>

                        {/* Financial Aid */}
                        <div className="rounded-xl border border-border bg-surface p-4 flex items-center justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold text-text">Need Financial Aid?</p>
                            <p className="text-xs text-muted mt-0.5">Apply for assistance with tuition fees.</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowFinancialAid(true)}
                            className="flex shrink-0 items-center gap-2 rounded-lg border border-gold/40 bg-gold/5 px-4 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
                          >
                            <HandHeart className="h-4 w-4" />
                            Financial Aid
                          </button>
                        </div>

                        {/* Price acknowledgment */}
                        <div>
                          <button
                            type="button"
                            onClick={() => update("priceAcknowledged", !formData.priceAcknowledged)}
                            className={cn(
                              "w-full rounded-xl border-2 p-4 text-left transition-all",
                              formData.priceAcknowledged
                                ? "border-gold bg-gold/5"
                                : "border-border bg-surface hover:border-gold/40",
                              errors.priceAcknowledged && !formData.priceAcknowledged && "border-red-500/50"
                            )}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={cn(
                                  "mt-0.5 h-5 w-5 flex-shrink-0 rounded border-2 flex items-center justify-center transition-colors",
                                  formData.priceAcknowledged ? "border-gold bg-gold" : "border-border"
                                )}
                              >
                                {formData.priceAcknowledged && (
                                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                              <p className="text-sm text-text leading-relaxed">
                                I acknowledge the tuition of <strong>${totalPrice}</strong> for the selected enrollment and understand that payment details will be sent via email.
                              </p>
                            </div>
                          </button>
                          {errors.priceAcknowledged && (
                            <p className="mt-2 text-sm text-red-500">{errors.priceAcknowledged}</p>
                          )}
                        </div>

                        <div className="flex gap-3">
                          <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            onClick={goBack}
                            disabled={isSubmitting}
                            className="flex-1"
                          >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                          </Button>
                          <Button
                            type="button"
                            variant="primary"
                            size="lg"
                            disabled={isSubmitting}
                            onClick={handleSubmit}
                            className="flex-1"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              <>
                                Submit Application
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FINANCIAL AID MODAL */}
      <AnimatePresence>
        {showFinancialAid && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={(e) => { if (e.target === e.currentTarget) closeAidModal(); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md rounded-2xl border border-border bg-bg shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <div className="flex items-center gap-2">
                  <HandHeart className="h-5 w-5 text-gold" />
                  <h2 className="text-lg font-semibold text-text">Financial Aid Application</h2>
                </div>
                <button
                  type="button"
                  onClick={closeAidModal}
                  className="rounded-lg p-1.5 text-muted transition-colors hover:bg-surface hover:text-text"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-6 py-5">
                {aidSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-4 text-center space-y-3"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10">
                      <CheckCircle2 className="h-7 w-7 text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-text">Application Received</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      JazakAllahu khayran. We will reach out to you inshallah for further details.
                    </p>
                    <button
                      type="button"
                      onClick={closeAidModal}
                      className="mt-2 rounded-lg bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-5">
                    <p className="text-sm text-muted leading-relaxed">
                      Fill out the form below and we will review your request and get back to you inshallah.
                    </p>

                    {/* Name */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={aidForm.name}
                        onChange={(e) => updateAid("name", e.target.value)}
                        className={cn(
                          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                          aidErrors.name && "border-red-500/50"
                        )}
                      />
                      {aidErrors.name && <p className="mt-1 text-sm text-red-500">{aidErrors.name}</p>}
                    </div>

                    {/* Reason */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text">
                        Reason for Requiring Financial Aid <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        value={aidForm.reason}
                        onChange={(e) => updateAid("reason", e.target.value)}
                        className={cn(
                          "w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                          aidErrors.reason && "border-red-500/50"
                        )}
                      />
                      {aidErrors.reason && <p className="mt-1 text-sm text-red-500">{aidErrors.reason}</p>}
                    </div>

                    {/* Employment Status */}
                    <div>
                      <p className="mb-2 text-sm font-medium text-text">
                        Current Occupation <span className="text-red-500">*</span>
                      </p>
                      <div className="space-y-2">
                        {[
                          { value: "fulltime", label: "Full-time Job" },
                          { value: "parttime", label: "Part-time Job" },
                          { value: "nojob", label: "Not Currently Employed" },
                        ].map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => updateAid("employment", opt.value)}
                            className={cn(
                              "w-full rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all",
                              aidForm.employment === opt.value
                                ? "border-gold bg-gold/5 text-text"
                                : "border-border bg-surface text-muted hover:border-gold/40",
                              aidErrors.employment && !aidForm.employment && "border-red-500/50"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={cn(
                                  "h-4 w-4 rounded-full border-2 flex-shrink-0 transition-colors",
                                  aidForm.employment === opt.value ? "border-gold bg-gold" : "border-border"
                                )}
                              />
                              {opt.label}
                            </div>
                          </button>
                        ))}
                      </div>
                      {aidErrors.employment && <p className="mt-1 text-sm text-red-500">{aidErrors.employment}</p>}
                    </div>

                    <button
                      type="button"
                      onClick={submitAid}
                      className="w-full rounded-xl bg-gold py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      Submit Application
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
