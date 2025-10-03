const partners = [
  { name: "SIEMENS", logo: "/siemens-logo.png" },
  { name: "CAP ACCREDITED", logo: "/cap-accredited-logo.jpg" },
  { name: "Ministry of Education", logo: "/saudi-ministry-of-education-logo.jpg" },
  { name: "BECKMAN COULTER", logo: "/beckman-coulter-logo.jpg" },
  { name: "Al Rajhi Bank", logo: "/al-rajhi-bank-logo.png" },
  { name: "Saudi Electricity Company", logo: "/saudi-electricity-company-logo.jpg" },
  { name: "Ministry of Health", logo: "/saudi-ministry-of-health-logo.jpg" },
  { name: "BACS", logo: "/bacs-logo.jpg" },
  { name: "Riyadh Metro Project", logo: "/riyadh-metro-logo.jpg" },
  { name: "SYNTECH", logo: "/placeholder.svg?height=60&width=120" },
]

export function Partners() {
  return (
    <section className="w-full px-6 py-16 md:py-24 bg-[#F8FCFF]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-2 h-2 bg-[#00A3E0] rotate-45" />
          <h2 className="text-[#061923] text-3xl md:text-4xl font-bold text-center">Our Partners In This Campaign</h2>
          <div className="w-2 h-2 bg-[#00A3E0] rotate-45" />
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-w-full h-12 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
