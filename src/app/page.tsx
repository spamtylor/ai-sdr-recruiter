"use client"

import { useState } from "react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setLoading(true)
    // In production, this would send to your API/DB
    // For now, just simulate success
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-white font-semibold text-xl">SDR Recruiter</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
          </nav>
          <a 
            href="#contact"
            className="border border-slate-600 text-slate-300 px-4 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-blue-300 text-sm">Now in Beta</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hire SDRs for 10% of<br />
            <span className="text-blue-400">the agency cost</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Replace expensive recruiting agencies with AI that autonomously sources, screens, and engages top SDR talent.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Start Free Trial
            </a>
            <a 
              href="#features"
              className="text-slate-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              See How It Works
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-4">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">How it works</h2>
          <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
            Three steps to better SDR hires
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">1. Tell us what you need</h3>
              <p className="text-slate-400">
                Share your ideal SDR profile — experience, skills, compensation range.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">2. AI finds & screens candidates</h3>
              <p className="text-slate-400">
                Our AI sources from LinkedIn, GitHub, and 50+ platforms — then screens them.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">3. Review & hire</h3>
              <p className="text-slate-400">
                Get a shortlist of qualified candidates with AI-generated interview questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Simple pricing</h2>
          <p className="text-slate-400 text-center mb-12">Pay a fraction of what agencies charge</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-white font-semibold text-xl mb-1">Starter</h3>
              <p className="text-slate-400 text-sm mb-4">For small teams</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$99</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-3 text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> 10 candidate searches/mo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> AI screening
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Email outreach
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Candidate dashboard
                </li>
              </ul>
              <a 
                href="#contact"
                className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors text-center"
              >
                Get Started
              </a>
            </div>
            <div className="bg-gradient-to-b from-blue-900/50 to-slate-800/50 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-white font-semibold text-xl">Pro</h3>
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Most Popular</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">For growing teams</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$199</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-3 text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Unlimited searches
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Everything in Starter
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Interview scheduling
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Priority support
                </li>
              </ul>
              <a 
                href="#contact"
                className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Signup */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to hire better SDRs?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join startups who are hiring SDRs in days, not months—and saving thousands per hire.
          </p>
          
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
              <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-white font-semibold text-xl mb-2">You're on the list!</h3>
              <p className="text-blue-100">We'll be in touch soon with your free trial access.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
                >
                  {loading ? "Joining..." : "Start Free"}
                </button>
              </div>
              <p className="text-blue-200 text-sm mt-3">No credit card required • 14-day free trial</p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700/50">
        <div className="container mx-auto px-4 text-center text-slate-500">
          <p>© 2026 AI SDR Recruiter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
