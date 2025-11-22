export function BookDetails() {
  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Book Information
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          {/* Left Column (Equal Height + Even Spacing) */}
          <div className="h-full flex flex-col justify-between gap-6">

            <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">ISBN</h3>
              <p className="text-2xl font-bold text-gray-900">978-981-94-4608-7</p>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Imprint</h3>
              <p className="text-lg text-gray-800 font-medium">Independent / Self-Published</p>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Publication Date</h3>
              <p className="text-lg text-gray-800 font-medium">November 15, 2025</p>
            </div>

            <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Pages</h3>
              <p className="text-lg text-gray-800 font-medium">250+</p>
            </div>

          </div>

          {/* Right Column (Stretched to Match Height) */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 shadow-2xl relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gray-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About This Book
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                Web Application Hacker's Field Guide is a comprehensive guide designed for security professionals, system administrators, and ethical hackers. This hands-on resource covers practical techniques for identifying and exploiting vulnerabilities in modern web applications and APIs.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Through real-world examples and detailed methodologies, the book explores offensive security practices, architectural vulnerabilities, and enterprise-grade security solutions. Perfect for those looking to deepen their understanding of web application security.
              </p>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}
