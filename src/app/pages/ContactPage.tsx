import React, { useState } from "react";
import { Award, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import axios from "axios";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      if (form.email) {
        formData.append("email", form.email);
      }
      formData.append("phone", form.phone);
      formData.append("project_type", form.service);
      formData.append("project_description", form.message);

      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? "https://j4-backend-e0ck.onrender.com";
      const response = await axios.post(`${apiBaseUrl}/contact/contact`, formData);
      setSent(true);
      if (response.data?.whatsapp_url) {
        window.open(response.data.whatsapp_url, "_blank");
      }
    } catch (err: any) {
      console.error("Error submitting contact form:", err);
      const detail = err.response?.data?.detail;
      const errorMessage = typeof detail === "string"
        ? detail
        : Array.isArray(detail)
          ? detail.map((d: any) => d.msg || JSON.stringify(d)).join(", ")
          : "Failed to send message. Please verify your input and try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  const offices = [
    { city: "Hyderabad", address: "MIG-H-27, Sai Ratna Arcade, New Santoshnagar-Santosh Nagar, Hyderabad, Telangana 500059", phone: "+91 82971 26392" },
  ];

  return (
    <div className="bg-background text-foreground pt-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16">
        <p className="font-['DM_Mono'] text-xs tracking-[0.4em] text-primary uppercase mb-4">Get in Touch</p>
        <h1 className="font-['Playfair_Display'] text-5xl lg:text-6xl font-700 text-foreground leading-tight mb-6">
          Let's Build<br />Together
        </h1>
        <p className="font-['DM_Sans'] text-base text-muted-foreground max-w-xl leading-relaxed font-300">
          Whether you have a project in mind or simply wish to learn more about our capabilities, we welcome the conversation.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-28 grid lg:grid-cols-5 gap-16">
        {/* Form */}
        <div className="lg:col-span-3">
          {sent ? (
            <div className="border border-primary/30 bg-card p-12 text-center">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Award size={24} className="text-primary" />
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl font-600 text-foreground mb-3">Message Received</h3>
              <p className="font-['DM_Sans'] text-sm text-muted-foreground font-300 leading-relaxed">
                Thank you for reaching out to J4 Builders and Developers. A member of our team will contact you within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                  { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label className="block font-['DM_Mono'] text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[key as keyof typeof form]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })}
                      required
                      className="w-full bg-card border border-border text-foreground placeholder:text-muted-foreground/50 px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-primary transition-colors duration-300"
                    />
                  </div>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-['DM_Mono'] text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-card border border-border text-foreground placeholder:text-muted-foreground/50 px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-primary transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block font-['DM_Mono'] text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-2">
                    Project Type
                  </label>
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-card border border-border text-foreground px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-primary transition-colors duration-300 appearance-none"
                  >
                    <option value="" className="bg-card">Select project type</option>
                    <option value="Residential Construction" className="bg-card">Residential Construction</option>
                    <option value="Commercial Construction" className="bg-card">Commercial Development</option>
                    <option value="Servies" className="bg-card">Services</option>
                    <option value="Interior Design" className="bg-card">Interior Design</option>
                    <option value="Renovation & Restoration" className="bg-card">Renovation & Restoration</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-['DM_Mono'] text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-2">
                  Project Brief
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project — scope, timeline, budget range, and any specific requirements."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full bg-card border border-border text-foreground placeholder:text-muted-foreground/50 px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>
              {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 font-['DM_Sans'] text-sm font-300">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="group flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 font-['DM_Sans'] text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <p className="font-['DM_Mono'] text-[10px] tracking-[0.35em] text-primary uppercase mb-6">Direct Contact</p>
            <div className="space-y-5">
              <a href="mailto:[EMAIL_ADDRESS]" className="flex items-start gap-4 group">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="font-['DM_Mono'] text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-1">Email</div>
                  <div className="font-['DM_Sans'] text-sm text-foreground group-hover:text-primary transition-colors duration-300">enquiries@j4buildersanddevelopers.com</div>
                </div>
              </a>
              <a href="tel:+914023547890" className="flex ite1ms-start gap-4 group">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="font-['DM_Mono'] text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-1">Phone</div>
                  <div className="font-['DM_Sans'] text-sm text-foreground group-hover:text-primary transition-colors duration-300">+91 82971 26392</div>
                </div>
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="font-['DM_Mono'] text-[10px] tracking-[0.35em] text-primary uppercase mb-6">Our Offices</p>
            <div className="space-y-6">
              {offices.map(({ city, address, phone }) => (
                <div key={city} className="flex items-start gap-4">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="font-['DM_Sans'] text-sm font-500 text-foreground mb-1">{city}</div>
                    <div className="font-['DM_Sans'] text-xs text-muted-foreground leading-relaxed mb-1 font-300">{address}</div>
                    <div className="font-['DM_Mono'] text-xs text-muted-foreground">{phone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="font-['DM_Mono'] text-[10px] tracking-[0.35em] text-primary uppercase mb-3">Business Hours</p>
            <div className="font-['DM_Sans'] text-sm text-muted-foreground font-300 space-y-1">
              <div>Monday – Friday: 9:00 AM – 6:30 PM</div>
              <div>Saturday: 10:00 AM – 2:00 PM</div>
              <div>Sunday: Closed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
