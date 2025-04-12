export default function AboutMeSection() {
    const logos = [
      {
        name: "ZDF",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Logo_ZDF.svg",
      },
      {
        name: "SWR",
        src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/SWR_Das_Beste_am_S%C3%BCden_logo_2022.svg",
      },
      {
        name: "Physio.de",
        src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Physio-de-Logo.svg",
      },
      {
        name: "ARD",
        src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/ARD_logo.svg",
      },
    ]
  
    return (
      <section className="bg-white dark:bg-[#061b26] text-gray-800 dark:text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Bildbereich */}
          <div className="w-full">
            <img
              src="https://picsum.photos/600/600"
              alt="Portrait von Berkcan Atesoglu"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
  
          {/* Textbereich */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#08415C] dark:text-[#50C9E1] mb-6">
              Meine Geschichte
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Mein Name ist Berkcan Atesoglu – ich glaube daran, dass Bewegung der Schlüssel zu einem erfüllten Leben ist.
              In meiner Laufbahn habe ich gelernt, dass nicht nur Technik zählt, sondern auch echtes Zuhören und Verstehen.
            </p>
            <p className="text-lg leading-relaxed">
              Deshalb habe ich Kinemo gegründet: als Ort, an dem Menschlichkeit, Innovation und Therapie zusammenfinden.
              Jeder Fortschritt beginnt mit einem ersten Schritt – und genau den machen wir gemeinsam.
            </p>
          </div>
        </div>
  
        {/* Logo-Bereich */}
        <div className="mt-24">
          <p className="text-center text-lg font-semibold text-[#08415C] dark:text-[#50C9E1] mb-10">
            Bekannt aus
          </p>
  
          <div className="flex flex-wrap justify-center items-center gap-8 px-4">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="transition duration-300 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transform hover:scale-105"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-auto dark:invert"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  