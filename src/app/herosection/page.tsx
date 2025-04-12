export default function Hero() {
    return (
      <section className="relative bg-[#08415C] text-white py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Willkommen bei Kinemo
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Wir bringen Bewegung sichtbar in Form – mit modernster Analyse & Expertise.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#50C9E1] hover:bg-[#7DDBF3] text-[#08415C] font-semibold px-6 py-3 rounded-full transition"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </section>
    )
  }