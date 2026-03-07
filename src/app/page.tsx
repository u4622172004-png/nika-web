'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Zap, Globe, Lock, Users, TrendingUp, Search, Mail, Phone, Eye, Database, Brain } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            🥝 NIKA OSINT
          </div>
          
          <div className="flex gap-4">
            <Link href="/auth/login">
              <button className="px-6 py-2 text-white hover:text-purple-400 transition-colors">
                Login
              </button>
            </Link>
            <Link href="/auth/signup">
              <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Logo */}
            <motion.div 
              className="mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent glow-text mb-4">
                NIKA OSINT
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 font-light">
                Advanced Intelligence Gathering Platform
              </p>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Professional OSINT toolkit with 150+ data sources. Breach monitoring, social footprinting, 
              domain analysis, and AI-powered risk assessment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex gap-6 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/auth/signup">
                <button className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg font-bold text-white text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transition-all glow">
                  Start Free Trial
                </button>
              </Link>
              
              <Link href="#features">
                <button className="px-10 py-4 border-2 border-purple-500 rounded-lg font-bold text-white text-lg hover:bg-purple-500/10 hover:scale-105 transition-all">
                  Learn More
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {stats.map((stat, i) => (
                <StatCard key={i} {...stat} index={i} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need for professional OSINT investigations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Choose the plan that fits your needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <PricingCard key={i} {...plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                🥝 NIKA OSINT
              </div>
              <p className="text-gray-400 text-sm">
                Advanced Intelligence Gathering Platform
              </p>
            </div>
            
            <div className="flex gap-8 text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
              <a href="https://github.com/u4622172004-png/nika-osint" target="_blank" className="hover:text-purple-400 transition-colors">GitHub</a>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 NIKA OSINT. Made with ❤️ by kiwi & 777
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all group cursor-pointer"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  )
}

// Stat Card Component
function StatCard({ value, label, index }: any) {
  return (
    <motion.div 
      className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7 + index * 0.1 }}
    >
      <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text mb-2">
        {value}
      </div>
      <div className="text-gray-400 font-medium">{label}</div>
    </motion.div>
  )
}

// Pricing Card Component
function PricingCard({ name, price, features, popular, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`p-8 rounded-2xl ${popular ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500 scale-105' : 'bg-white/5 border border-white/10'} backdrop-blur-lg hover:scale-105 transition-all`}
    >
      {popular && (
        <div className="text-center mb-4">
          <span className="px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm rounded-full font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <h3 className="text-3xl font-bold text-white mb-2">{name}</h3>
      <div className="mb-6">
        <span className="text-5xl font-bold text-white">${price}</span>
        <span className="text-gray-400 text-lg">/month</span>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start text-gray-300">
            <Zap className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${popular ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/50' : 'bg-white/10 text-white hover:bg-white/20'}`}>
        Get Started
      </button>
    </motion.div>
  )
}

// Data
const features = [
  {
    icon: Mail,
    title: 'Email Intelligence',
    description: 'Comprehensive email analysis with breach checking, validation, and reputation scoring across 45+ data sources'
  },
  {
    icon: Globe,
    title: 'Domain Analysis',
    description: 'Deep domain investigation including WHOIS, DNS records, subdomains, security headers, and reputation checks'
  },
  {
    icon: Users,
    title: 'Social Footprint',
    description: 'Username search across 50+ platforms including GitHub, Reddit, Twitter, Instagram, and professional networks'
  },
  {
    icon: Lock,
    title: 'Breach Monitor',
    description: 'Real-time data leak detection with HaveIBeenPwned integration and continuous monitoring'
  },
  {
    icon: Brain,
    title: 'AI Analysis',
    description: 'Intelligent risk assessment with automated recommendations and threat scoring'
  },
  {
    icon: Database,
    title: 'Comprehensive Reports',
    description: 'Professional PDF and JSON reports with visualizations, timelines, and actionable insights'
  }
]

const stats = [
  { value: '150+', label: 'Data Sources', index: 0 },
  { value: '50+', label: 'Platforms', index: 1 },
  { value: '10K+', label: 'Daily Scans', index: 2 },
  { value: '99.9%', label: 'Uptime', index: 3 }
]

const pricingPlans = [
  {
    name: 'Free',
    price: 0,
    features: [
      '10 scans per day',
      'Basic email verification',
      'Username search (25 platforms)',
      'Community support',
      'Standard reports'
    ]
  },
  {
    name: 'Professional',
    price: 29,
    popular: true,
    features: [
      '100 scans per day',
      'All scan types',
      'API access (1000 calls/day)',
      'Priority support',
      'Advanced PDF reports',
      'Breach monitoring alerts',
      'Export to JSON/CSV'
    ]
  },
  {
    name: 'Enterprise',
    price: 99,
    features: [
      'Unlimited scans',
      'White-label reports',
      '24/7 dedicated support',
      'Custom integrations',
      'Team collaboration (10 users)',
      'SLA guarantee',
      'On-premise deployment option'
    ]
  }
]
