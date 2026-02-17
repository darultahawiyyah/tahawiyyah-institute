import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Divider } from "@/components/ui/Divider";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

export default function Styleguide() {
  return (
    <div className="min-h-screen bg-bg py-12">
      <Container>
        <div className="space-y-16">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-text md:text-6xl">
              UI Component Library
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Complete design system and reusable components for the marketing site.
            </p>
          </div>

          {/* Buttons */}
          <section>
            <SectionHeader
              eyebrow="Interactive"
              title="Buttons"
              description="Three variants with three sizes each. Includes focus states and disabled states."
            />
            <div className="mt-8 space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text md:text-2xl">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text md:text-2xl">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text md:text-2xl">States</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" disabled>Disabled</Button>
                  <Button variant="outline" disabled>Disabled</Button>
                  <Button variant="ghost" disabled>Disabled</Button>
                </div>
              </div>
            </div>
          </section>

          <Divider />

          {/* Cards */}
          <section>
            <SectionHeader
              eyebrow="Layout"
              title="Cards"
              description="Composable card components with header, title, description, and content sections."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>
                    This is a card description that provides additional context.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed text-text md:text-lg">
                    Card content goes here. Cards use the surface background with
                    rounded corners and soft shadows for depth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Another Card</CardTitle>
                  <CardDescription>With different content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-relaxed text-text md:text-lg">
                    Cards are perfect for grouping related content and creating
                    visual hierarchy on the page.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Divider />

          {/* Badges */}
          <section>
            <SectionHeader
              eyebrow="Labels"
              title="Badges"
              description="Pill-shaped labels for tags, status, and categories."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Badge>Default</Badge>
              <Badge variant="gold">Gold</Badge>
              <Badge>Feature</Badge>
              <Badge variant="gold">Premium</Badge>
              <Badge>New</Badge>
            </div>
          </section>

          <Divider />

          {/* Container */}
          <section>
            <SectionHeader
              eyebrow="Layout"
              title="Container"
              description="Centered container with responsive padding. This entire page uses the Container component."
            />
            <div className="mt-8">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-base leading-relaxed text-text md:text-lg">
                    Container provides max-width of 6xl (1152px) with responsive
                    horizontal padding. It ensures content doesn't stretch too wide
                    on large screens.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Divider />

          {/* Section Header */}
          <section>
            <SectionHeader
              eyebrow="Typography"
              title="Section Header"
              description="This section itself uses the SectionHeader component. It includes optional eyebrow text, title, and description."
            />
            <div className="mt-8 space-y-6">
              <SectionHeader
                eyebrow="Optional Eyebrow"
                title="Section Title"
                description="Optional description text that provides context for the section. It uses max-width-prose for optimal reading width."
              />
              <SectionHeader
                title="Section Without Eyebrow"
                description="Sections can also be created without an eyebrow text if not needed."
              />
              <SectionHeader
                eyebrow="Minimal"
                title="Title Only"
              />
            </div>
          </section>

          <Divider />

          {/* Divider */}
          <section>
            <SectionHeader
              eyebrow="Layout"
              title="Divider"
              description="Subtle horizontal divider using the border token."
            />
            <div className="mt-8 space-y-6">
              <p className="text-base leading-relaxed text-text md:text-lg">
                Content above the divider.
              </p>
              <Divider />
              <p className="text-base leading-relaxed text-text md:text-lg">
                Content below the divider.
              </p>
              <Divider />
              <p className="text-base leading-relaxed text-text md:text-lg">
                Dividers help separate sections visually without being too prominent.
              </p>
            </div>
          </section>

          <Divider />

          {/* Accordion */}
          <section>
            <SectionHeader
              eyebrow="Interactive"
              title="Accordion"
              description="Animated accordion component with smooth height transitions and full keyboard accessibility."
            />
            <div className="mt-8">
              <Accordion>
                <AccordionItem title="What is this program about?" defaultOpen>
                  This program is designed to provide comprehensive training in modern
                  web development. You'll learn the latest technologies and best practices
                  used in the industry today.
                </AccordionItem>
                <AccordionItem title="How long does the program take?">
                  The program is structured as a 12-week intensive course. Each week
                  includes lectures, hands-on projects, and collaborative exercises to
                  reinforce learning.
                </AccordionItem>
                <AccordionItem title="What are the prerequisites?">
                  While prior programming experience is helpful, we welcome students
                  from all backgrounds. The program starts with fundamentals and builds
                  up to advanced concepts progressively.
                </AccordionItem>
                <AccordionItem title="Is financial aid available?">
                  Yes, we offer several financial aid options including scholarships,
                  payment plans, and income-based pricing. Contact our admissions team
                  to learn more about eligibility.
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <Divider />

          {/* Combined Example */}
          <section>
            <SectionHeader
              eyebrow="Example"
              title="Component Combination"
              description="Real-world example showing multiple components working together."
            />
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CardTitle>Featured Program</CardTitle>
                    <Badge variant="gold">New</Badge>
                  </div>
                  <CardDescription>
                    Launch your career in web development
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-base leading-relaxed text-text md:text-lg">
                    Join our comprehensive 12-week program designed to take you from
                    beginner to job-ready developer. Learn modern frameworks, best
                    practices, and build real-world projects.
                  </p>
                  <Divider />
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Apply Now</Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
