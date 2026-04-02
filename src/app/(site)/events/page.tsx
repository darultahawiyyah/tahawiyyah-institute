"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ─── ADD FUTURE EVENTS HERE ───────────────────────────────────────────────────
// Each event object has: title, date, time, location, description
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
  //   date: "April 24, 2026",
  //   time: "7:00 PM – 9:00 PM",
  //   location: "Madani Masjid",
  //   description: "Meet the faculty and learn about the Ṭaḥāwiyya Institute program.",
  // },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function EventsPage() {
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

      {/* EVENTS LIST */}
      <section className="border-b border-border bg-surface2 py-16 md:py-24">
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
                      <span>
                        {event.date}
                        {event.time ? ` · ${event.time}` : ""}
                      </span>
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <MapPin className="h-4 w-4 text-gold flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                  {event.description && (
                    <p className="text-base leading-relaxed text-muted">
                      {event.description}
                    </p>
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
