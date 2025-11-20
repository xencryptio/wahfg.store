'use client'

import { useEffect } from 'react'

export function FeedbackForm() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://form.jotform.com/jsform/253193406492459'
    script.async = true
    const container = document.getElementById('jotform-container')
    if (container) {
      container.appendChild(script)
    }
  }, [])

  return (
    <section
      id="feedback-form-section"
      className="pt-4 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden"
    >
      <div className="absolute -top-24 right-10 w-64 h-64 bg-gray-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gray-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-200/50 border border-gray-300/50 rounded-full px-4 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-gray-700 rounded-full animate-pulse"></div>
            <span className="text-gray-700 text-sm font-medium">Hard Copy Only</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
            Reserve for Free. Pay ₹450 Only Upon Distribution.
          </h2>

          <div className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed space-y-3">
            <p className="leading-relaxed">
              Reserve your hard copy for free before{' '}
              <span className="font-bold text-gray-900 bg-gray-200 px-3 py-1 rounded-lg mx-1">
                November 30, 2025
              </span>
              and lock in the guaranteed price of{' '}
              <span className="font-bold text-gray-900 text-2xl mx-1">₹450</span>.
            </p>

            <p className="leading-relaxed text-gray-600">
              Your copy will be among the first dispatched once distribution opens{' '}
              <span className="text-sm italic">(shipping charges apply)</span>.
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Published November 15, 2025 | Singapore
            </p>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="grid grid-cols-1 gap-12 items-start mt-10">
          <div className="bg-white/95 border border-gray-200 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] overflow-hidden relative max-w-4xl mx-auto w-full fade-in-up">

            <div className="h-2 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600"></div>

            <div className="p-6 md:p-8 relative z-10">
              <div
                id="jotform-container"
                className="w-full min-h-[700px] 
                [&_iframe]:!w-full 
                [&_iframe]:!min-h-[700px] 
                [&_iframe]:!rounded-xl
              "></div>
            </div>

          </div>
        </div>

        {/* BADGES */}
        <div className="mt-16 space-y-6">
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <span className="w-3 h-3 bg-gray-700 rounded-full"></span>
              <span className="text-sm font-medium text-gray-700">Secure</span>
            </div>

            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <span className="w-3 h-3 bg-gray-700 rounded-full"></span>
              <span className="text-sm font-medium text-gray-700">Privacy Protected</span>
            </div>

            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <span className="w-3 h-3 bg-gray-700 rounded-full"></span>
              <span className="text-sm font-medium text-gray-700">Instant Confirmation</span>
            </div>

            <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <span className="w-3 h-3 bg-gray-700 rounded-full"></span>
              <span className="text-sm font-medium text-gray-700">Hard Copy Only</span>
            </div>
          </div>

          {/* PRIVACY STATEMENT */}
          <div className="text-center bg-gray-100/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 shadow-inner">
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-800">🔒 Your Privacy Matters:</span>
              We respect your privacy. Your information is secure and will only be used for book reservation and shipping updates. No spam, ever.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}