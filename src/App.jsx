import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f7f4ef"
      }}>
        <h1 style={{ color: "#ff7a00" }}>LeadEX</h1>
      </div>
    );
  }

  return (
    <div style={{
      fontFamily: "Arial",
      background: "#f7f4ef",
      padding: "40px",
      textAlign: "center"
    }}>

      <h1>Stop Chasing Leads. Start Closing Deals.</h1>
      <p>
        We help B2B companies generate qualified leads and book meetings with decision-makers.
      </p>

      <h2 style={{ marginTop: "40px", color: "#ff7a00" }}>What We Do</h2>
      <p>
        We handle the full front-end sales process so your team focuses only on closing deals.
      </p>

      <h2 style={{ marginTop: "40px" }}>Industries We Serve</h2>
      <p>
        Telecom • SaaS • Cybersecurity • Logistics • Cloud Services • VoIP
      </p>

      <h2 style={{ marginTop: "40px" }}>Contact Us</h2>
      <p>📞 02 7265 1399</p>
      <p>✉️ info@lea-dex.com</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message received. We will contact you soon.");
          e.target.reset();
        }}
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <input name="name" placeholder="Name" required />
        <input name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />

        <button style={{
          background: "#ff7a00",
          color: "#fff",
          padding: "10px",
          border: "none",
          cursor: "pointer"
        }}>
          Send Message
        </button>
      </form>

    </div>
  );
}
