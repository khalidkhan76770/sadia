'use client';

export default function Contact() {
  return (
    <section className="py-20" id="contact">
      <h2 className="text-3xl font-semibold text-center mb-10">Contact</h2>
      <form
        action="https://formspree.io/f/mayvlzwn"
        method="POST"
        className="max-w-md mx-auto flex flex-col gap-4"
      >
        <input
          type="email"
          name="_replyto"
          placeholder="Your email"
          className="border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="border p-2 rounded h-32"
          required
        />
        <button type="submit" className="bg-black text-white py-2 rounded">
          Send
        </button>
      </form>
    </section>
  );
}
