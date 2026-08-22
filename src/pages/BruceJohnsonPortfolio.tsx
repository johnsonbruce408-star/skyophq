import { ArrowRight, BriefcaseBusiness, Brain, ExternalLink, LockKeyhole, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "SkyOPHQ Investor Operations",
    eyebrow: "Active business project",
    description:
      "A dedicated operating environment for investor relationships, onboarding, documentation, and business development.",
    href: "/unified-portal",
    icon: BriefcaseBusiness,
    action: "Investor access",
  },
  {
    title: "AI Tutor Pro",
    eyebrow: "Independent project",
    description:
      "A personal AI-powered learning environment focused on expanding knowledge, technical skills, and practical capability.",
    href: null,
    icon: Brain,
    action: "Independent project",
  },
  {
    title: "SkyOPHQ Business Structure & Documentation",
    eyebrow: "Private master documentation",
    description:
      "The private source-of-truth layer for company structure, documentation, architecture, project blueprints, and historical archive material.",
    href: "/auth",
    icon: LockKeyhole,
    action: "Private access",
  },
];

export default function BruceJohnsonPortfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
              <UserRound className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold tracking-tight">Bruce Johnson</p>
              <p className="text-xs text-muted-foreground">Portfolio & Projects</p>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="text-muted-foreground transition-colors hover:text-foreground">About</a>
            <a href="#projects" className="text-muted-foreground transition-colors hover:text-foreground">Projects</a>
            <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-24 pt-24 md:pb-32 md:pt-32">
        <div className="absolute inset-0 subtle-pattern pointer-events-none" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm text-muted-foreground shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Building. Operating. Learning.
            </div>
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Bruce Johnson
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-muted-foreground md:text-2xl">
              A portfolio of the businesses, systems, and independent projects I am building — with a clear separation between what is public, what is operational, and what is private.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#projects">
                  Explore my projects <ArrowRight />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-border bg-muted/20 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">The portfolio</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">One public front door. Multiple real projects.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              bruce-johnson.org is designed to be the public-facing portfolio. Behind it are distinct projects with their own purposes and boundaries. SkyOPHQ maintains the business operating architecture, while AI Tutor Pro remains an independent personal learning project.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Selected projects</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">What I’m building</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <Card key={project.title} className="group flex h-full flex-col border-border/80 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{project.eyebrow}</p>
                    <CardTitle className="pt-2 text-xl leading-tight">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <p className="leading-7 text-muted-foreground">{project.description}</p>
                    <div className="mt-auto pt-8">
                      {project.href ? (
                        <Button variant="outline" asChild>
                          <Link to={project.href}>{project.action} <ExternalLink /></Link>
                        </Button>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-muted-foreground">
                          {project.action}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-8">
        <div className="mx-auto max-w-6xl">
          <Card className="overflow-hidden border-border bg-foreground text-background">
            <CardContent className="flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-70">Contact</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">Let’s connect.</h2>
                <p className="mt-4 leading-7 opacity-75">For professional inquiries, partnerships, project conversations, or other opportunities, reach out directly.</p>
              </div>
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:johnsonbruce408@gmail.com">Email Bruce <ArrowRight /></a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bruce Johnson. All rights reserved.</p>
          <p>bruce-johnson.org</p>
        </div>
      </footer>
    </main>
  );
}
