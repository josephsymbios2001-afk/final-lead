import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f7f4ef"}}>
        <h1 style={{color:"#ff7a00",fontSize:"40px"}}>LeadEX</h1>
      </div>
    );
  }

  return (
    <div style={{fontFamily:"Arial",background:"#f7f4ef",padding:"40px",textAlign:"center"}}>

      {/* HERO */}
      <h1>Stop Chasing Leads. Start Closing Deals.</h1>
      <p style={{maxWidth:"700px",margin:"10px auto"}}>
        We help B2B companies generate qualified leads and book meetings with decision-makers.
      </p>

      {/* WHAT WE DO */}
      <h2 style={{marginTop:"50px",color:"#ff7a00"}}>What We Do</h2>
      <p>
        We handle the full front-end sales process from prospecting to booking meetings so your team can focus on closing.
      </p>

      {/* CONTACT */}
      <h2 style={{marginTop:"50px"}}>Contact Us</h2>
      <p>📞 02 7265 1399</p>
      <p>✉️ info@lea-dex.com</p>

      {/* FORM */}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          emailjs.sendForm(
            "service_id",
            "template_id",
            e.target,
            "public_key"
          );

          alert("Message sent!");
          e.target.reset();
        }}
        style={{
          maxWidth:"400px",
          margin:"20px auto",
          display:"flex",
          flexDirection:"column",
          gap:"10px"
        }}
      >
        <input name="name" placeholder="Name" required />
        <input name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />

        <button style={{background:"#ff7a00",color:"#fff",padding:"10px",border:"none"}}>
          Send Message
        </button>
      </form>

    </div>
  );
}
