"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, XCircle, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { cn } from "@/lib/cn";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
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
      {/* PAGE HEADER */}
      <section className="border-b border-border bg-bg pb-12 md:py-16">
        <Container className="pt-4 md:pt-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="Contact"
              title="Get in touch"
              description="Have questions about our program? We're here to help. For enrollment inquiries, apply here and we'll get back to you soon."
            />
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted md:text-lg">
              <Link
                href="/apply"
                className="text-gold transition-colors hover:text-gold2 hover:underline"
              >
                Apply here
              </Link>{" "}
              to get started.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-border bg-surface2 py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT: CONTACT INFO */}
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
                  Contact Information
                </h2>
                <p className="mb-6 max-w-prose text-base leading-relaxed text-muted md:text-lg">
                  Send us a message using the form, or reach out directly via email.
                  We typically respond within 3-5 business days.
                </p>
              </div>

              {/* Email Address */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                    <div className="flex-1">
                      <a
                        href="mailto:Darultahawiyyah@gmail.com"
                        className="text-lg font-semibold text-text transition-colors hover:text-gold hover:underline"
                      >
                        Darultahawiyyah@gmail.com
                      </a>
                      <p className="mt-1 text-sm text-muted">
                        Response time: 3-5 business days
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tip Callout */}
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm leading-relaxed text-muted">
                  <strong className="text-text">Tip:</strong> If you're ready
                  to enroll,{" "}
                  <Link
                    href="/apply"
                    className="text-gold transition-colors hover:text-gold2 hover:underline"
                  >
                    applying
                  </Link>{" "}
                  is the fastest way to get started.
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
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you soon.
                  </CardDescription>
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
                              Message sent successfully!
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

                    {/* NAME */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-text"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("name")}
                        id="name"
                        type="text"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                          "disabled:opacity-50 disabled:cursor-not-allowed",
                          errors.name && "border-red-500/50"
                        )}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.name.message}
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

                    {/* SUBJECT */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-text"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        {...register("subject")}
                        id="subject"
                        type="text"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                          "disabled:opacity-50 disabled:cursor-not-allowed",
                          errors.subject && "border-red-500/50"
                        )}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-text"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        {...register("message")}
                        id="message"
                        rows={6}
                        disabled={isSubmitting}
                        className={cn(
                          "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text transition-colors",
                          "focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg",
                          "disabled:opacity-50 disabled:cursor-not-allowed",
                          "resize-none",
                          errors.message && "border-red-500/50"
                        )}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.message.message}
                        </p>
                      )}
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
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
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

      {/* FAQ SECTION */}
      <section className="border-b border-border bg-bg py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Divider className="mb-12" />
            <h2 className="mb-8 text-2xl font-semibold text-text md:text-3xl">
              Quick questions
            </h2>
            <Accordion>
              <AccordionItem title="How do I enroll?">
                Use the{" "}
                <Link
                  href="/apply"
                  className="text-gold transition-colors hover:text-gold2 hover:underline"
                >
                  Apply page
                </Link>
                ; we'll follow up by email.
              </AccordionItem>
              <AccordionItem title="Is the program online?">
                Yes, our program is fully online, with classes held Monday and Wednesday evenings.
              </AccordionItem>
              <AccordionItem title="What if I'm not sure yet?">
                Apply and note your situation; we'll guide you.
              </AccordionItem>
            </Accordion>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
