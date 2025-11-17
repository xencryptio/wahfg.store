
import { Hero } from '@/components/hero'
import { BookDetails } from '@/components/book-details'
import { Authors } from '@/components/authors'
import { BookPreview } from '@/components/book-preview'
import { FeedbackForm } from '@/components/feedback-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Smooth overlap with clean spacing */}
      <div className="relative z-20 -mt-12 md:-mt-20 px-4">
        <BookDetails />
      </div>

      {/* Normal spacing between sections */}
      <div className="mt-20 px-4">
        <Authors />
      </div>

      {/* Book Preview Section */}
      <div className="mt-20 px-4">
        <BookPreview />
      </div>

      <div className="mt-20 px-4">
        <FeedbackForm />
      </div>

      <Footer />
    </main>
  )
}