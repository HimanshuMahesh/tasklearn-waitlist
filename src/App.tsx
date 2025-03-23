"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Sparkles, ArrowRight, Moon, Sun, Star, Users, Zap, ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does TaskLearn.ai's task-based learning work?",
    answer:
      "Our platform breaks down complex skills into a clear Skill → Topic → Task structure. Each task combines theory with hands-on practice, ensuring you truly understand and can apply what you learn. Our AI tutor guides you through each step, providing instant feedback and support.",
  },
  {
    question: "What kind of skills can I learn on TaskLearn.ai?",
    answer:
      "You can learn virtually any skill on TaskLearn.ai! From programming and design to business and creative skills. Each skill path is carefully structured with practical tasks and real-world projects. Our AI adapts the content to match your learning pace and style.",
  },
  {
    question: "How does the AI tutor help me learn?",
    answer:
      "Our AI tutor provides 24/7 personalized support. It explains concepts in simple terms, answers your questions instantly, validates your task submissions, and offers improvement suggestions. It's like having a patient mentor who's always available to help.",
  },
  {
    question: "What makes TaskLearn.ai different from other platforms?",
    answer:
      "Unlike traditional platforms that focus on passive video learning, TaskLearn.ai emphasizes learning by doing. Our unique combination of structured paths, AI-powered support, and hands-on tasks ensures you gain practical skills you can actually use.",
  },
  {
    question: "How do projects help build my portfolio?",
    answer:
      "As you progress through your learning path, you'll complete real-world projects that demonstrate your skills. These projects are designed to be portfolio-worthy and relevant to your career goals. Plus, our AI helps ensure your projects meet industry standards.",
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-800 dark:border-gray-200/20">
      <button className="w-full py-6 flex justify-between items-center text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-lg font-medium font-montserrat">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-purple-500 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
      >
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-montserrat">{answer}</p>
      </div>
    </div>
  )
}

function App() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-lg z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-4xl mx-auto my-3 px-6 py-2 bg-gray-100 dark:bg-gray-800/30 rounded-3xl flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight font-poppins">
                Task<span className="text-purple-500">Learn</span>.ai
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="text-sm font-medium hover:text-purple-500 transition-colors font-montserrat"
              >
                Features
              </a>
              <a href="#faq" className="text-sm font-medium hover:text-purple-500 transition-colors font-montserrat">
                FAQ
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 py-4">
            <div className="container mx-auto px-4">
              <a
                href="#features"
                className="block py-2 text-sm font-medium hover:text-purple-500 transition-colors font-montserrat"
              >
                Features
              </a>
              <a
                href="#faq"
                className="block py-2 text-sm font-medium hover:text-purple-500 transition-colors font-montserrat"
              >
                FAQ
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full mb-6 md:mb-8">
              <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
              <span className="text-purple-500 text-sm font-medium font-montserrat">Coming Soon</span>
            </div>

            <h1 className="text-[2.5rem] sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight font-poppins px-4 sm:px-0">
              Master Any Skill Through
              <span className="text-purple-500 block mt-2">Task-Based Learning</span>
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-montserrat px-6 sm:px-4">
              Learning should be clear and effective. We're revolutionizing skill acquisition through hands-on practice
              and AI-powered guidance.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6 sm:mb-8 px-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  className="flex-1 px-6 py-3 sm:py-2.5 rounded-lg bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 focus:outline-none focus:border-purple-500 text-gray-900 dark:text-white placeholder-gray-500 transition-colors font-montserrat"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-600 transition-colors flex items-center justify-center group font-montserrat"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>

            {submitted && (
              <div className="text-green-600 dark:text-green-400 mb-8 flex items-center justify-center space-x-2 font-montserrat">
                <Star className="w-5 h-5" />
                <span>Thanks for joining! We'll notify you when we launch.</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 md:mt-12 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-500" />
                <span className="font-montserrat">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-500" />
                <span className="font-montserrat">Personalized</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-500" />
                <span className="font-montserrat">Hands-on</span>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="mt-8 sm:mt-12 flex justify-center mb-8 sm:mb-12">
              <img
                src={darkMode ? "/tasklearnblack-removebg-preview.png" : "/tasklearnlight-removebg-preview.png"}
                alt="TaskLearn.ai illustration"
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain transition-opacity duration-300"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-6 sm:py-10 md:py-16" id="features">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 tracking-tight font-poppins">
              Why TaskLearn.ai?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed font-montserrat">
              Traditional learning platforms overwhelm you with endless videos and theory, but lack the practical,
              hands-on experience needed to truly master a skill. We believe in learning by doing.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="group p-6 md:p-8 rounded-2xl bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-800/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">Structured Learning</h3>
              <p className="text-gray-600 dark:text-gray-400 font-montserrat">
                Clear, focused paths that guide you from basics to mastery with practical milestones.
              </p>
            </div>

            <div className="group p-6 md:p-8 rounded-2xl bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-800/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">AI-Powered Guidance</h3>
              <p className="text-gray-600 dark:text-gray-400 font-montserrat">
                Get instant, personalized feedback and support exactly when you need it most.
              </p>
            </div>

            <div className="group p-6 md:p-8 rounded-2xl bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 border border-gray-200 dark:border-gray-800/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-poppins">Learn by Doing</h3>
              <p className="text-gray-600 dark:text-gray-400 font-montserrat">
                Practice with real-world tasks and projects that reinforce your learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20" id="faq">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center tracking-tight font-poppins">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-gray-600 dark:text-gray-400 font-montserrat">
        <p>© 2025 TaskLearn.ai - Building the future of skill acquisition</p>
      </footer>
    </div>
  )
}

export default App

