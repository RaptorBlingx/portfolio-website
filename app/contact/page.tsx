import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FadeInUp } from "@/components/Animations";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mohamad Jarad for AI systems engineering, consulting, or EU R&D collaboration.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <FadeInUp>
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">Get in Touch</h1>
        <p className="mb-10 text-lg text-[var(--muted)]">
          Open to leadership roles, remote Applied AI positions, and EU
          R&amp;D collaborations.
        </p>
      </FadeInUp>

      <div className="grid gap-12 sm:grid-cols-5">
        {/* Form */}
        <FadeInUp className="sm:col-span-3">
          <ContactForm />
        </FadeInUp>

        {/* Direct Contact */}
        <FadeInUp delay={0.1} className="sm:col-span-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                Email
              </h3>
              <a
                href="mailto:swe.jarad@gmail.com"
                className="text-primary hover:text-primary-light transition-colors"
              >
                swe.jarad@gmail.com
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                Social
              </h3>
              <div className="space-y-2">
                <Link
                  href="https://github.com/RaptorBlingx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-primary transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  github.com/RaptorBlingx
                </Link>
                <Link
                  href="https://linkedin.com/in/raptorblingx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-primary transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  linkedin.com/in/raptorblingx
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                Location
              </h3>
              <p className="text-sm text-[var(--muted)]">Mersin, Türkiye</p>
              <p className="text-sm text-[var(--muted)]">
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
