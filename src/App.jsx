import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f0f0f",
        color: "#ff7a00",
        fontSize: "40px",
        fontWeight: "bold"
      }}>
        LeadEX
      </div>
    );
  }

  return (
    <div style={{
      fontFamily: "Arial",
      background: "#f7f4ef",
      color: "#111"
    }}>

      {/* HERO */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "42px" }}>
          Stop Chasing Leads. Start Closing Deals.
        </h1>
        <p style={{ maxWidth: "700px", margin: "20px auto", fontSize: "18px" }}>
          We help B2B companies generate qualified leads and book meetings with decision-makers.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section style={{ padding: "60px 20px", background: "#fff" }}>
        <h2 style={{ color: "#ff7a00", textAlign: "center" }}>What We Do</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", textAlign: "center" }}>
          We handle the full front-end sales process from targeting to booking qualified appointments so your team only closes deals.
        </p>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Industries We Serve</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "15px",
          maxWidth: "900px",
          margin: "30px auto"
        }}>
          {[
            "Telecom",
            "SaaS",
            "Cybersecurity",
            "Logistics",
            "Cloud Services",
            "VoIP",
            "ISP",
            "Mobile Plans"
          ].map((item, i) => (
            <div key={i} style={{
              padding: "20px",
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* QUALITY */}
      <section style={{ padding: "60px 20px", background: "#fff" }}>
        <h2 style={{ textAlign: "center" }}>Quality Control</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto", textAlign: "center" }}>
          Every lead is pre-qualified, matched to your ICP, and informed before the call to ensure higher conversion rates.
        </p>
      </section>

      {/* PRICING */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Pricing</h2>
        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          Pricing depends on seats, lead volume, and targeting complexity. Everything is customized per client.
        </p>
      </section>

      {/* GUARANTEE */}
      <section style={{ padding: "60px 20px", background: "#fff", textAlign: "center" }}>
        <h2 style={{ color: "#ff7a00" }}>Guarantee</h2>
        <p>
          We guarantee high-quality meetings. If performance drops below agreed standards, we compensate.
        </p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>📞 02 7265 1399</p>
        <p>✉️ info@lea-dex.com</p>

        <form style={{
          maxWidth: "400px",
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
          <input placeholder="Name" required />
          <input placeholder="Email" required />
          <textarea placeholder="Message" required />
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
      </section>

    </div>
  );
}
