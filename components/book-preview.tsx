'use client'

export function BookPreview() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/images/sample.pdf'
    link.download = 'Web-Application-Hackers-Field-Guide-Sample.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="pt-8 pb-8 md:pt-12 md:pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-200/50 border border-gray-300/50 rounded-full px-4 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-gray-700 rounded-full animate-pulse"></div>
            <span className="text-gray-700 text-sm font-medium">Preview Available</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Take a Look Inside
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Preview the table of contents and explore what's covered in the book
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Back Cover */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 shadow-2xl hover:shadow-gray-800/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gray-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-gray-400 to-transparent rounded-full"></div>
                <h3 className="text-2xl font-bold text-white">Back Cover</h3>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-gray-600/50 mb-6">
                <img
                  src="/images/backcover.jpg"
                  alt="Web Application Hacker's Field Guide - Back Cover"
                  className="w-full h-auto rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Discover what industry experts and reviewers are saying about this comprehensive guide to web application security.
              </p>
            </div>
          </div>

          {/* Sample Chapter */}
          <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/50 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">Table of Contents</h3>
              </div>

              <div className="space-y-4">
                {/* PDF Preview */}
                <div className="bg-gray-900 p-2 rounded-lg">
                  <iframe
                    src="/images/sample.pdf"
                    className="w-full h-[500px] rounded"
                    title="Sample Chapter Preview"
                  />
                </div>
                
                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </button>

                {/* What's Inside */}
                <div className="bg-gray-100/50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Preview Includes
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>Complete table of contents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>Chapter organization and topics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>Overview of book structure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Call to Action Banner */}
        <div className="mt-8 bg-gradient-to-r from-gray-700 to-gray-800 text-white p-8 rounded-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-600/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Dive Deeper?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              This is just a glimpse of the comprehensive content inside. Reserve your copy now and get the complete guide to mastering web application security.
            </p>
            <a
              href="#feedback-form-section"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Reserve Your Copy Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}