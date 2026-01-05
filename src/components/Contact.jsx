export default function Contact() {
  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email.includes("@")) {
      alert("Invalid email address");
      return;
    }
    alert("Message sent successfully!");
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p class="contact-intro">
    Have a question, feedback, or a special order in mind?  
    We’d love to hear from you — our team is always ready to help!
  </p>
<div className="contact-wrapper">
        <div className="contact-info">
         <h3>📍 Visit Us</h3>
      <p>Heavenly Oven Bakery<br />
      Nairobi, Kenya</p>

      <h3>📞 Call Us</h3>
      <p>+254 700 123 456</p>

      <h3>✉️ Email</h3>
      <p>hello@freshbitebakery.com</p>

      <h3>🕒 Opening Hours</h3>
      <p>
        Monday - Saturday: 7:00 AM – 8:00 PM <br />
        Sunday: 9:00 AM – 5:00 PM
      </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea placeholder="Message" required />
          <button>Send Message</button>
        </form>
      </div>
     
    </section>
  );
}
