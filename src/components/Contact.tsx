import type React from "react"
import { useState } from "react"

interface ContactProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Contact",
    subheading: "Leave a request — I will get back to you as soon as possible",
    email: "Email",
    phone: "Phone",
    message: "Tell me about your order",
    send: "Send Request",
    location: "Location",
    name: "Your Name",
    successMessage: "Request sent! Evgenia will contact you shortly.",
    locationValue: "Russia",
    phoneValue: "+7 (___) ___-__-__",
  },
  de: {
    heading: "Kontakt",
    subheading: "Hinterlassen Sie eine Anfrage — ich melde mich so schnell wie möglich",
    email: "E-Mail",
    phone: "Telefon",
    message: "Erzählen Sie mir von Ihrer Bestellung",
    send: "Anfrage senden",
    location: "Standort",
    name: "Ihr Name",
    successMessage: "Anfrage gesendet! Evgenia meldet sich in Kürze bei Ihnen.",
    locationValue: "Russland",
    phoneValue: "+7 (___) ___-__-__",
  },
  ru: {
    heading: "Контакты",
    subheading: "Оставьте заявку — и я свяжусь с вами в ближайшее время",
    email: "Эл. почта",
    phone: "Телефон",
    message: "Расскажите о вашем заказе",
    send: "Отправить заявку",
    location: "Город",
    name: "Ваше имя",
    successMessage: "Заявка отправлена! Евгения свяжется с вами в ближайшее время.",
    locationValue: "Россия",
    phoneValue: "+7 (___) ___-__-__",
  },
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language]
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoLink = `mailto:murashkina@example.com?subject=${encodeURIComponent(`Заказ от ${formData.name}`)}&body=${encodeURIComponent(`От: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink

    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 md:py-36 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <p className="text-taupe">{t.subheading}</p>
          <div className="line-accent mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.email}</small>
              <p className="text-charcoal">murashkina@example.com</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.phone}</small>
              <p className="text-charcoal">{t.phoneValue}</p>
            </div>
            <div>
              <small className="font-medium text-charcoal/70 mb-2 block">{t.location}</small>
              <p className="text-charcoal">{t.locationValue}</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
            {submitted && (
              <div className="p-4 bg-gold/10 border border-gold/20 text-charcoal rounded text-sm">
                {t.successMessage}
              </div>
            )}
            <div>
              <input
                type="text"
                placeholder={t.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder={t.message}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="w-full bg-warm-white border border-taupe/30 px-4 py-3 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-charcoal text-warm-white py-3 font-medium hover:bg-charcoal/90 transition-colors duration-300"
            >
              {t.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}