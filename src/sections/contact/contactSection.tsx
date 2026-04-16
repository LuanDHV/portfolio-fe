"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import Footer from "@/src/components/ui/Footer";

export default function ContactSection() {
  const emailAddress = "luandhv1406@gmail.com";
  const [copied, setCopied] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.warn(
        "EmailJS public key not configured. Please set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local",
      );
    }
  }, []);

  // GSAP animation effect
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".contact-reveal");
      gsap.set(sections, { autoAlpha: 0, y: 40 });

      sections.forEach((section, index) => {
        const xDirection = index === 0 ? -80 : 80;
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 40, x: xDirection },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.4,
              toggleActions: "play reverse play reverse",
              invalidateOnRefresh: true,
            },
          },
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const handleCopiedDismiss = () => {
    setCopied(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");

    // Validate form
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus("error");
      setIsLoading(false);
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.error("EmailJS configuration is missing");
      setSubmitStatus("error");
      setIsLoading(false);
      return;
    }

    try {
      const now = new Date();
      const formattedTime = now.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      await emailjs.send(serviceId, templateId, {
        to_email: emailAddress,
        name: formData.name,
        email: formData.email,
        subject_line: formData.subject || "Portfolio Contact",
        message: formData.message,
        time: formattedTime,
        reply_to: formData.email,
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex h-auto flex-col py-12 lg:min-h-screen"
    >
      <div className="mx-auto max-w-7xl flex-1 px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="contact-reveal max-w-xl space-y-8">
            <span className="inline-flex rounded-full border border-neutral-700 bg-neutral-950/70 px-5 py-2 text-xs text-neutral-400 uppercase shadow-sm">
              Contact
            </span>
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Let&apos;s build something together.
              </h2>
              <p className="text-lg leading-8 text-neutral-300">
                I&apos;m open to new challenges across web development, product
                delivery, and technical collaboration. If you have a project,
                idea, or opportunity to discuss, I&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid gap-4">
              <button
                type="button"
                onClick={handleEmailClick}
                className="flex cursor-pointer items-center gap-4 rounded-lg border border-white/10 bg-white/10 px-5 py-4 text-left text-sm text-white transition hover:bg-white/20"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                      fill="#ffffff"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-neutral-400 uppercase">Email</p>
                  <p className="mt-1 font-semibold text-white">
                    {emailAddress}
                  </p>
                </div>
              </button>
              {copied ? (
                <div className="flex items-center justify-between gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-black/10">
                  <span className="whitespace-nowrap">
                    Copied to clipboard!
                  </span>
                  <button
                    type="button"
                    onClick={handleCopiedDismiss}
                    className="text-black/50 hover:text-black"
                    aria-label="Dismiss"
                  >
                    ✕
                  </button>
                </div>
              ) : null}
              <a
                href="https://github.com/LuanDHV"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/10 px-5 py-4 text-sm text-white transition hover:bg-white/10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="m5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0 1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3" />
                    <path d="m5.25 13.75c-1.5.5-3-.5-3.5-1" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-neutral-400 uppercase">GitHub</p>
                  <p className="mt-1 font-semibold text-white">
                    github.com/LuanDHV
                  </p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/luandhv/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/10 px-5 py-4 text-sm text-white transition hover:bg-white/10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                  <svg
                    fill="#ffffff"
                    width="16px"
                    height="16px"
                    viewBox="-2 -2 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin"
                    className="jam jam-linkedin"
                  >
                    <path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-neutral-400 uppercase">LinkedIn</p>
                  <p className="mt-1 font-semibold text-white">
                    linkedin.com/in/luandhv
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-reveal self-end rounded-lg border border-white/10 bg-neutral-950/80 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs text-neutral-400 uppercase">
                  Send a Message
                </p>
                <h3 className="text-3xl font-semibold text-white">
                  Let&apos;s get started
                </h3>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-xs text-neutral-400 uppercase">
                    Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-xs text-white transition outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10 disabled:opacity-50"
                    />
                  </label>
                  <label className="space-y-2 text-xs text-neutral-400 uppercase">
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-xs text-white transition outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10 disabled:opacity-50"
                    />
                  </label>
                </div>

                <label className="space-y-2 text-xs text-neutral-400 uppercase">
                  Subject
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project inquiry / Collaboration"
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-xs text-white transition outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10 disabled:opacity-50"
                  />
                </label>

                <div className="mt-4" />

                <label className="space-y-2 text-xs text-neutral-400 uppercase">
                  Message
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, timeline, and goals ..."
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    rows={6}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-xs text-white transition outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10 disabled:opacity-50"
                  />
                </label>

                <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-white uppercase transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span className="text-[10px]">
                      <svg
                        fill="#ffffff"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.10514201,11.8070619 L2.74013818,2.2520351 L22.236068,12 L2.74013818,21.7479649 L4.10514201,12.1929381 L4.87689437,12 L4.10514201,11.8070619 Z M5.25986182,5.7479649 L5.89485799,10.1929381 L13.1231056,12 L5.89485799,13.8070619 L5.25986182,18.2520351 L17.763932,12 L5.25986182,5.7479649 Z"
                        />
                      </svg>
                    </span>
                    {isLoading ? "Sending..." : "Send message"}
                  </button>

                  {submitStatus === "success" && (
                    <div className="flex items-center justify-between gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-black/10">
                      <span className="whitespace-nowrap">
                        ✓ Message sent successfully!
                      </span>
                      <button
                        type="button"
                        onClick={() => setSubmitStatus("idle")}
                        className="text-black/50 hover:text-black"
                        aria-label="Dismiss"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="flex items-center justify-between gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-black/10">
                      <span className="whitespace-nowrap">
                        ✕ Error sending message. Please try again.
                      </span>
                      <button
                        type="button"
                        onClick={() => setSubmitStatus("idle")}
                        className="text-black/50 hover:text-black"
                        aria-label="Dismiss"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
