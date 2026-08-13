import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight } from "lucide-react";
import { profile, RESUME_URL } from "@/data/portfolio";

const FORMSPREE_RAW = (process.env.REACT_APP_FORMSPREE_ID || "").trim();
const FORMSPREE_URL = (() => {
  if (!FORMSPREE_RAW) return null;
  if (FORMSPREE_RAW.startsWith("http")) return FORMSPREE_RAW.replace(/\/$/, "");
  return `https://formspree.io/f/${FORMSPREE_RAW}`;
})();
const ease = [0.22, 1, 0.36, 1];

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "LinkedIn", href: profile.linkedin, value: "/sanidhya-malhotra" },
  { label: "GitHub", href: profile.github, value: "@sanidhyamalhotra" },
];

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    if (!FORMSPREE_URL) {
      toast.error("Contact form is not configured yet.");
      return;
    }

    setSubmitting(true);
    try {
      await axios.post(
        FORMSPREE_URL,
        {
          name: data.name,
          email: data.email,
          subject: data.subject || "Portfolio inquiry",
          message: data.message,
          _replyto: data.email,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          timeout: 15000,
        },
      );
      toast.success("Message sent. I'll get back to you soon.");
      reset();
    } catch (e) {
      const status = e?.response?.status;
      const detail =
        e?.response?.data?.error ||
        e?.response?.data?.errors?.[0]?.message ||
        e?.message;
      console.error("Formspree submit failed:", status, detail, e?.response?.data);
      toast.error(
        status === 404
          ? "Form endpoint not found. Check REACT_APP_FORMSPREE_ID."
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full border-0 border-b border-border bg-transparent py-4 text-base font-light tracking-tight text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-0 transition-colors";

  return (
    <section id="contact" className="relative w-full border-t border-border py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">/ Contact</span>
          <h2 className="mt-6 font-heading text-6xl font-black uppercase leading-[0.9] tracking-tighter text-foreground md:text-8xl lg:text-9xl">
            Let&apos;s <span className="text-stroke">talk</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} data-testid="contact-form" className="space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <input {...register("name")} data-testid="contact-name" placeholder="Your name" className={inputCls} />
                  {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div>
                  <input {...register("email")} data-testid="contact-email" placeholder="Your email" className={inputCls} />
                  {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <input {...register("subject")} data-testid="contact-subject" placeholder="Subject (optional)" className={inputCls} />
              </div>
              <div>
                <textarea {...register("message")} data-testid="contact-message" placeholder="Tell me about your project or role" rows={4} className={inputCls + " resize-none"} />
                {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={submitting}
                data-testid="contact-submit"
                className="group flex items-center gap-3 border border-primary bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-transparent hover:text-primary disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send message"}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`social-${s.label.toLowerCase()}`}
                  className="group flex items-center justify-between border-t border-border py-6 transition-colors hover:border-primary"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
                    <p className="mt-1 font-heading text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {s.value}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </a>
              ))}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-resume-btn"
                className="mt-8 flex w-full items-center justify-center gap-3 border border-border py-5 text-sm font-bold uppercase tracking-[0.15em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Download Résumé
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
