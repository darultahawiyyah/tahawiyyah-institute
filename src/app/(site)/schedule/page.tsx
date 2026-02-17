"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Monitor, Clock, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
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

export default function Schedule() {
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
              Schedule
            </h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted md:text-lg">
              Our program is delivered fully online, providing flexible learning
              that accommodates different schedules and time zones.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* SCHEDULE CARD */}
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
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                    <Monitor className="h-6 w-6 text-gold" />
                  </div>
                  <CardTitle className="text-2xl">Online Schedule</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-sm font-medium text-muted">Days</p>
                      <p className="text-lg font-semibold text-text">
                        Monday & Wednesday
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-sm font-medium text-muted">Time</p>
                      <p className="text-lg font-semibold text-text">
                        7:10 PM – 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border border-border bg-surface p-4">
                  <p className="text-sm text-muted">
                    <strong className="text-text">Class Duration:</strong>{" "}
                    45–60 minutes per session
                  </p>
                </div>
                
                <p className="text-xs italic text-muted/80">
                  Schedule subject to change
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
