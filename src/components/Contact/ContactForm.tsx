import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName) {
      setError("Name is required.");
      return;
    }

    if (!emailPattern.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (trimmedMessage.length < 10) {
      setError("Message must be at least 10 characters.");
      return;
    }

    setError("");
    setStatus("sending");

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Unable to send your message right now.");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Unable to send your message right now.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="text-sm text-secondary mb-1.5 block">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-lg bg-white/5 border border-border px-4 py-2.5 text-white placeholder:text-secondary/60 focus:border-accent outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-secondary mb-1.5 block">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-lg bg-white/5 border border-border px-4 py-2.5 text-white placeholder:text-secondary/60 focus:border-accent outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-secondary mb-1.5 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Tell me about your project..."
          className="w-full rounded-lg bg-white/5 border border-border px-4 py-2.5 text-white placeholder:text-secondary/60 focus:border-accent outline-none transition-colors resize-none"
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <motion.button
        type="submit"
        disabled={status !== "idle"}
        whileHover={status === "idle" ? { scale: 1.02 } : {}}
        whileTap={status === "idle" ? { scale: 0.97 } : {}}
        className="mt-2 inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-xl disabled:opacity-80"
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === "idle" && (
            <motion.span
              key="idle"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-2"
            >
              <Send size={16} /> Send Message
            </motion.span>
          )}
          {status === "sending" && (
            <motion.span
              key="sending"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-2"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
              />
              Sending...
            </motion.span>
          )}
          {status === "sent" && (
            <motion.span
              key="sent"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-2"
            >
              <Check size={16} /> Message Sent
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}
