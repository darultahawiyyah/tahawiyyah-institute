"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, Clock } from "lucide-react";
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
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  For questions about the program or enrollment.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Email Address */}
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                  <div className="flex-1">
                    <a
                      href="mailto:Darultahawiyyah@gmail.com"
                      className="text-lg font-semibold text-text transition-colors hover:text-gold hover:underline"
                    >
                      Darultahawiyyah@gmail.com
                    </a>
                    <p className="mt-1 text-xs text-muted">
                      Response time varies
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:Darultahawiyyah@gmail.com?subject=Tahawiyyah%20Institute%20Inquiry"
                    className="flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-lg"
                  >
                    <Button variant="primary" size="md" className="w-full">
                      Email Us
                    </Button>
                  </a>
                  <ButtonLink
                    href="/apply"
                    variant="outline"
                    size="md"
                    className="flex-1"
                  >
                    Apply Instead
                  </ButtonLink>
                </div>

                {/* Tip Callout */}
                <div className="rounded-lg border border-border bg-surface2 p-4">
                  <p className="text-sm leading-relaxed text-muted">
                    <strong className="text-text">Tip:</strong> If you're ready
                    to enroll, applying is the fastest way to get started.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
