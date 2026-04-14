export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-xl space-y-8">
            <span className="inline-flex rounded-full border border-neutral-700 bg-neutral-950/70 px-5 py-2 text-xs text-neutral-400 uppercase shadow-sm">
              Contact
            </span>
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Let&apos;s build something together.
              </h2>
              <p className="text-lg leading-8 text-neutral-300">
                I&apos;m always interested in discussing challenging backend
                engineering problems, consulting opportunities, or full-time
                roles. Whether you need to scale your infrastructure or
                architect a new system from scratch, I&apos;d love to hear from
                you.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href="mailto:luandhv1406@gmail.com"
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-sm text-white transition hover:bg-white/10"
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
                    luandhv1406@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://github.com/LuanDHV"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-sm text-white transition hover:bg-white/10"
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
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-5 py-4 text-sm text-white transition hover:bg-white/10"
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

          <div className="self-start rounded-lg border border-white/10 bg-neutral-950/80 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs text-neutral-400 uppercase">
                  Send a Message
                </p>
                <h3 className="text-3xl font-semibold text-white">
                  Let&apos;s get started
                </h3>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-xs text-neutral-400 uppercase">
                    Name
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-xs text-white transition outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10"
                    />
                  </label>
                  <label className="space-y-2 text-xs text-neutral-400 uppercase">
                    Email
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-xs text-white transition outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10"
                    />
                  </label>
                </div>

                <label className="space-y-2 text-xs text-neutral-400 uppercase">
                  Subject
                  <input
                    type="text"
                    placeholder="Project inquiry / Collaboration"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-xs text-white transition outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10"
                  />
                </label>

                <div className="mt-4" />

                <label className="space-y-2 text-xs text-neutral-400 uppercase">
                  Message
                  <textarea
                    placeholder="Tell me about your project, timeline, and goals ..."
                    rows={6}
                    className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-xs text-white transition outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10"
                  />
                </label>

                <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-white uppercase transition hover:bg-white/15"
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
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
