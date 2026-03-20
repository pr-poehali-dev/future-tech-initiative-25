interface BiographyProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "About the Master",
    paragraphs: [
      "Evgenia Murashkina is a master craftsperson specializing in bone and wood carving. Each of her works is a unique handcrafted piece that combines centuries-old carving traditions with a modern artistic vision.",
      "The craft of bone carving has deep roots in Russian folk art. Evgenia draws on these traditions while developing her own recognizable style — precise lines, expressive compositions, and thoughtful attention to each detail.",
      "In her work, Evgenia uses natural materials: mammoth tusk bone, sea walrus bone, and rare species of wood. Each piece passes through many stages of hand processing — from the initial sketch to the final polishing.",
      "The subjects of her works range from animals and birds of the northern latitudes to traditional ornamental patterns and custom commissions. Each piece becomes a genuine work of art that can be passed down through generations.",
      "Evgenia accepts custom orders: gifts for special occasions, decorative panels, jewelry, figurines, and interior items. All works are made by hand and come with a certificate of authenticity.",
    ],
  },
  de: {
    heading: "Über die Meisterin",
    paragraphs: [
      "Evgenia Murashkina ist eine Meisterin der Knochen- und Holzschnitzerei. Jedes ihrer Werke ist ein einzigartiges handgefertigtes Stück, das jahrhundertealte Schnitztradition mit moderner künstlerischer Vision verbindet.",
      "Das Handwerk der Knochenschnitzerei hat tiefe Wurzeln in der russischen Volkskunst. Evgenia schöpft aus diesen Traditionen und entwickelt dabei ihren eigenen unverwechselbaren Stil — präzise Linien, ausdrucksstarke Kompositionen und sorgfältige Aufmerksamkeit für jedes Detail.",
      "In ihrer Arbeit verwendet Evgenia natürliche Materialien: Mammutzahnknochen, Seewalbein und seltene Holzarten. Jedes Stück durchläuft viele Stufen der Handverarbeitung — vom ersten Entwurf bis zur abschließenden Politur.",
      "Die Themen ihrer Werke reichen von Tieren und Vögeln der nördlichen Breiten bis hin zu traditionellen Ornamentmustern und individuellen Auftragsarbeiten. Jedes Stück wird zu einem echten Kunstwerk, das von Generation zu Generation weitergegeben werden kann.",
      "Evgenia nimmt individuelle Bestellungen an: Geschenke für besondere Anlässe, Dekorationspaneele, Schmuck, Figuren und Inneneinrichtungsgegenstände. Alle Werke sind handgefertigt und werden mit einem Echtheitszertifikat geliefert.",
    ],
  },
  ru: {
    heading: "О мастере",
    paragraphs: [
      "Евгения Мурашкина — мастер резьбы по кости и дереву. Каждая её работа — это уникальное изделие ручного труда, сочетающее многовековые традиции резьбы с современным художественным видением.",
      "Искусство резьбы по кости имеет глубокие корни в русском народном творчестве. Евгения черпает вдохновение из этих традиций, развивая собственный узнаваемый стиль — чёткие линии, выразительные композиции и внимательное отношение к каждой детали.",
      "В своей работе Евгения использует природные материалы: кость мамонта, морского моржа, а также ценные породы дерева. Каждое изделие проходит многоэтапную ручную обработку — от первого эскиза до финальной полировки.",
      "Тематика работ разнообразна: животные и птицы северных широт, традиционные орнаментальные узоры, жанровые сцены и изделия на заказ. Каждая вещь становится настоящим произведением искусства, которое можно передавать из поколения в поколение.",
      "Евгения принимает индивидуальные заказы: подарки к особым событиям, декоративные панно, украшения, фигурки и предметы интерьера. Все работы выполняются вручную и сопровождаются сертификатом подлинности.",
    ],
  },
}

export default function Biography({ language }: BiographyProps) {
  const t = translations[language]

  return (
    <section id="biography" className="py-24 md:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-charcoal mb-12 text-pretty">
          {t.heading}
        </h2>
        <div className="space-y-6">
          {t.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-charcoal/90 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}