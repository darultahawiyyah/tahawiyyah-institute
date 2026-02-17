"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Loader2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { applySchema, type ApplyFormData } from "@/lib/apply-schema";
import { cn } from "@/lib/cn";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Apply() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      availability: [],
    },
  });

  const onSubmit = async (data: ApplyFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.error || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Take the first step towards deepening your Islamic knowledge. Fill
              out the application form below and we'll get back to you soon.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-border bg-surface2 py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT: PERSUASIVE COPY */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-text md:text-3xl">
                  Begin Your Journey
                </h2>
                <p className="mb-4 max-w-prose text-base leading-relaxed text-muted md:text-lg">
                  Our comprehensive 2-year Islamic studies program is designed
                  to provide you with authentic knowledge and practical skills.
                  Our fully online format offers flexible learning that fits
                  your schedule.
                </p>
                <p className="max-w-prose text-base leading-relaxed text-muted md:text-lg">
                  Join a community of dedicated students committed to
                  understanding and applying Islamic principles in their daily
                  lives.
                </p>
              </div>

              {/* WHAT HAPPENS NEXT */}
              <div>
                <h3 className="mb-6 text-xl font-semibold text-text">
                  What Happens Next
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Submit Your Application",
                      description:
                        "Fill out the form with your information and preferred learning track.",
                    },
                    {
                      step: "2",
                      title: "Review Process",
                      description:
                        "Our team will review your application and get back to you within 3-5 business days.",
                    },
                    {
                      step: "3",
                      title: "Start Learning",
                      description:
                        "Once accepted, you'll receive enrollment details and can begin your studies.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-sm font-semibold text-gold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-text">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PRIVACY NOTE */}
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-xs leading-relaxed text-muted">
                  <strong className="text-text">Privacy:</strong> Your
                  information is secure and will only be used for application
                  purposes. We respect your privacy and will never share your
                  data with third parties.
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
                  <CardTitle className="text-2xl">Application Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* SUCCESS BANNER */}
                    {submitStatus === "success" && (
                      <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <div>
                            <p className="font-medium text-green-700 dark:text-green-400">
                              Application submitted successfully!
                            </p>
                            <p className="mt-1 text-sm text-green-600 dark:text-green-500">
                              We'll be in touch with you soon.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ERROR BANNER */}
                    {submitStatus === "error" && (
                      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
                        <div className="flex items-center gap-3">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <div>
                            <p className="font-medium text-red-700 dark:text-red-400">
                              Submission failed
                            </p>
                            <p className="mt-1 text-sm text-red-600 dark:text-red-500">
                              {errorMessage}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* FIRST NAME */}
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-sm font-medium text-text"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("firstName")}
                        id="firstName"
                        type="text"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                          "disabled:opacity-50 disabled:cursor-not-allowed",
                          errors.firstName && "border-red-500/50"
                        )}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    {/* LAST NAME */}
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-sm font-medium text-text"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("lastName")}
                        id="lastName"
                        type="text"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                          "disabled:opacity-50 disabled:cursor-not-allowed",
                          errors.lastName && "border-red-500/50"
                        )}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-text"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("email")}
                        id="email"
                        type="email"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                          "disabled:opacity-50 disabled:cursor-not-allowed",
                          errors.email && "border-red-500/50"
                        )}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* PHONE */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-text"
                      >
                        Phone
                      </label>
                      <input
                        {...register("phone")}
                        id="phone"
                        type="tel"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                          "disabled:opacity-50 disabled:cursor-not-allowed"
                        )}
                      />
                    </div>

                    {/* PREFERRED TRACK */}
                    <div>
                      <label
                        htmlFor="preferredTrack"
                        className="mb-2 block text-sm font-medium text-text"
                      >
                        Preferred Track <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register("preferredTrack")}
                        id="preferredTrack"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                          "disabled:opacity-50 disabled:cursor-not-allowed",
                          errors.preferredTrack && "border-red-500/50"
                        )}
                      >
                        <option value="">Select a track</option>
                        <option value="online">Online</option>
                        <option value="not-sure">Not sure</option>
                      </select>
                      {errors.preferredTrack && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.preferredTrack.message}
                        </p>
                      )}
                    </div>

                    {/* AVAILABILITY */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-text">
                        Availability <span className="text-red-500">*</span>
                      </label>
                      <Controller
                        name="availability"
                        control={control}
                        render={({ field }) => (
                          <div className="space-y-2">
                            {[
                              { value: "mon", label: "Monday" },
                              { value: "wed", label: "Wednesday" },
                            ].map((option) => (
                              <label
                                key={option.value}
                                className="flex items-center gap-3"
                              >
                                <input
                                  type="checkbox"
                                  value={option.value}
                                  disabled={isSubmitting}
                                  checked={field.value?.includes(option.value as "mon" | "wed")}
                                  onChange={(e) => {
                                    const currentValue = field.value || [];
                                    if (e.target.checked) {
                                      field.onChange([...currentValue, option.value as "mon" | "wed"]);
                                    } else {
                                      field.onChange(
                                        currentValue.filter(
                                          (v) => v !== option.value
                                        )
                                      );
                                    }
                                  }}
                                  className={cn(
                                    "h-4 w-4 rounded border-border text-gold focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                                    "disabled:opacity-50 disabled:cursor-not-allowed"
                                  )}
                                />
                                <span className="text-sm text-text">
                                  {option.label}
                                </span>
                              </label>
                            ))}
                          </div>
                        )}
                      />
                      {errors.availability && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.availability.message}
                        </p>
                      )}
                    </div>

                    {/* NOTES */}
                    <div>
                      <label
                        htmlFor="notes"
                        className="mb-2 block text-sm font-medium text-text"
                      >
                        Notes
                      </label>
                      <textarea
                        {...register("notes")}
                        id="notes"
                        rows={4}
                        disabled={isSubmitting}
                        className={cn(
                          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                          "disabled:opacity-50 disabled:cursor-not-allowed",
                          "resize-none"
                        )}
                      />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
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
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
