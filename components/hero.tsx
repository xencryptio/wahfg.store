'use client'
import { useRef } from 'react'

export function Hero() {
  const formRef = useRef<HTMLDivElement>(null)

  const handleReserveClick = () => {
    const formElement = document.getElementById('feedback-form-section')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="relative w-full min-h-screen flex items-center overflow-hidden">
        {/* Animated background image with parallax effect */}
        <div className="absolute inset-0">
          <img
            src="/images/whatsapp-20image-202025-11-15-20at-2020.jpg"
            alt="Web Application Hacker's Field Guide - Professional Showcase"
            className="w-full h-full object-cover object-left opacity-30 scale-105"
          />
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-l from-gray-900/95 via-gray-900/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gray-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-20 flex justify-end">
          <div className="max-w-4xl">
            

            {/* Main heading with gradient */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Web Application
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent">
                Hacker's Field Guide
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              A Hands-On Approach to Securing Web Applications & APIs
            </p>

            {/* Features list */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 text-gray-300">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Practical Techniques</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Real-World Examples</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Expert Insights</span>
              </div>
            </div>
           
            {/* CTA Button with enhanced styling */}
            <button
              onClick={handleReserveClick}
              className="group relative bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-600/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Reserve Your Copy
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
            </button>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </section>
  )
}