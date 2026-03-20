interface ConcertsProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Services & Orders",
    learnMore: "Order",
  },
  de: {
    heading: "Leistungen & Bestellungen",
    learnMore: "Bestellen",
  },
  ru: {
    heading: "Услуги и заказы",
    learnMore: "Заказать",
  },
}

const concerts = {
  en: [
    {
      date: "Bone Carving",
      time: "from 2 weeks",
      title: "Custom Figurine or Amulet",
      venue: "Mammoth tusk, walrus bone",
      location: "Made to order",
    },
    {
      date: "Wood Carving",
      time: "from 1 week",
      title: "Decorative Panel or Relief",
      venue: "Cedar, oak, birch",
      location: "Made to order",
    },
    {
      date: "Gift Sets",
      time: "from 3 days",
      title: "Unique Gift for Any Occasion",
      venue: "Bone + wood combination",
      location: "With packaging & certificate",
    },
  ],
  de: [
    {
      date: "Knochenschnitzerei",
      time: "ab 2 Wochen",
      title: "Individuelle Figur oder Amulett",
      venue: "Mammutzahn, Walross-Knochen",
      location: "Auf Bestellung",
    },
    {
      date: "Holzschnitzerei",
      time: "ab 1 Woche",
      title: "Dekoratives Panel oder Relief",
      venue: "Zeder, Eiche, Birke",
      location: "Auf Bestellung",
    },
    {
      date: "Geschenksets",
      time: "ab 3 Tagen",
      title: "Einzigartiges Geschenk für jeden Anlass",
      venue: "Kombination Knochen + Holz",
      location: "Mit Verpackung & Zertifikat",
    },
  ],
  ru: [
    {
      date: "Резьба по кости",
      time: "от 2 недель",
      title: "Фигурка или амулет на заказ",
      venue: "Кость мамонта, моржа",
      location: "Индивидуальный заказ",
    },
    {
      date: "Резьба по дереву",
      time: "от 1 недели",
      title: "Декоративное панно или рельеф",
      venue: "Кедр, дуб, берёза",
      location: "Индивидуальный заказ",
    },
    {
      date: "Подарочные изделия",
      time: "от 3 дней",
      title: "Уникальный подарок к любому событию",
      venue: "Сочетание кости и дерева",
      location: "С упаковкой и сертификатом",
    },
  ],
}

export default function Concerts({ language }: ConcertsProps) {
  const t = translations[language]
  const concertList = concerts[language]

  return (
    <section id="concerts" className="py-32 md:py-48 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-charcoal mb-6">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="space-y-8">
          {concertList.map((concert, idx) => (
            <div key={idx} className="pb-8 border-b border-taupe/30 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start">
                <div>
                  <h3 className="text-charcoal mb-1">{concert.date}</h3>
                  <small className="text-taupe">{concert.time}</small>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-charcoal mb-1">{concert.title}</h3>
                  <p className="text-charcoal/70 mb-1">{concert.venue}</p>
                  <small className="text-taupe">{concert.location}</small>
                </div>
                <div className="flex justify-start md:justify-end">
                  <button className="text-gold hover:text-gold/80 transition-colors text-sm font-medium">
                    {t.learnMore} &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}