import Image from "next/image";

export default function contact() {
  return (
    <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 min-h-screen">
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
      </div>

      <main className="relative px-6 pt-32">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-9 items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 text-sm text-sky-400">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H8m0 0l4 4m-4-4l4-4"
                />
              </svg>
              Contact Our Team
            </div>

            <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              Get in Touch
              <span className="block text-2xl mt-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                We’re here to support you
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              For any inquiries, technical questions, or help using SafeReport,
              please fill out the form below. We’ll get back to you within 24–48
              hours.
            </p>
          </div>

          {/* Contact Form */}
          <div className="mt-24 rounded-2xl bg-zinc-900 p-8">
            <form className="grid gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-1">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 text-sm font-medium text-white transition-all hover:bg-sky-400"
                >
                  Send Message
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className="mt-16 text-center text-zinc-400 text-sm">
            <p>
              Email us directly:{" "}
              <a
                href="mailto:support@safereport.io"
                className="text-sky-400 hover:underline"
              >
                support@safereport.io
              </a>
            </p>
            <p className="mt-1">Available Monday to Friday, 9:00–18:00 UTC</p>
          </div>
        </div>
      </main>
    </div>
  );
}
