/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { Code, Lightbulb, RefreshCw, Compass, Users, PhoneOff, BarChart3, Target, Zap, ShieldCheck, TrendingUp, Layout, FileSpreadsheet, Instagram, Megaphone, Share2, Globe, PenTool, Video, Star, Play, Quote, MessageSquare } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
          <span className="text-xl font-bold tracking-tight">LOGO</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h1 className="text-7xl font-bold tracking-tight mb-6">
              Your Website
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg mb-6">
              We Help Businesses Generate Lakhs in Revenue — Not Just Leads
            </p>
            
            <div className="mb-12 space-y-6">
              <p className="text-gray-300 font-medium text-lg leading-relaxed border-l-2 border-indigo-500 pl-4 py-1">
                We build systems that bring in leads, convert them into customers, and help you scale consistently.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <HighlightItem 
                  value="₹32L" 
                  label="In 3.4 Months" 
                  tag="Performance"
                />
                <HighlightItem 
                  value="₹20L+" 
                  label="1 Month (Event Clients) 🔥" 
                  tag="Record Scale"
                />
                <HighlightItem 
                  value="Growth" 
                  label="Consistent Organic Expansion" 
                  tag="Sustainability"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <button className="flex-1 sm:flex-none px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] active:scale-95">
                  Get Started
                </button>
                <button className="flex-1 sm:flex-none px-8 py-4 bg-[#1a1a20] hover:bg-[#25252d] border border-white/5 rounded-xl font-semibold transition-all active:scale-95">
                  Learn More
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-all group active:scale-95 flex items-center justify-center gap-2">
                  <span className="text-indigo-400 group-hover:text-indigo-300">✦</span>
                  Book Free Strategy Call
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 rounded-xl font-medium transition-all text-[#25D366] active:scale-95 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image with Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* The Purple Glow/Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-purple-600/40 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[140%] h-[140%] bg-indigo-500/30 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/30 to-transparent border border-white/10 group shadow-[0_0_50px_rgba(168,85,247,0.15)]">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" 
                alt="Representative" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Why Most Businesses Don't Get Results Section */}
        <section className="mt-40">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight"
          >
            Why Most Businesses <span className="text-indigo-500">Don't Get Results</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ResultCard 
              index={0}
              icon={<Compass className="w-6 h-6" />}
              title="No clear strategy"
              description="Generic approaches lead to generic results. We build unique performance roadmaps."
            />
            <ResultCard 
              index={1}
              icon={<Users className="w-6 h-6" />}
              title="Leads but no conversions"
              description="Traffic is meaningless without a sales-optimized funnel that converts visitors."
            />
            <ResultCard 
              index={2}
              icon={<PhoneOff className="w-6 h-6" />}
              title="No follow-up system"
              description="Most sales are lost in the follow-up. We automate your backend systems."
            />
            <ResultCard 
              index={3}
              icon={<BarChart3 className="w-6 h-6" />}
              title="Focus on vanity metrics"
              description="Likes don't pay bills. We focus on cold hard revenue and actual profit margins."
            />
          </div>
        </section>

        {/* How We Deliver Results Section */}
        <section className="mt-48 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              How We <span className="text-indigo-500 underline decoration-indigo-500/30 underline-offset-8">Deliver Results</span> — And Why It Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              We don’t just generate leads — we build systems that convert them into revenue.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <DeliveryCard 
              index={0}
              icon={<Target className="w-7 h-7" />}
              title="Smart Targeting"
              description="Laser-focused audience segmentation using advanced data analytics to find your most profitable customers."
            />
            <DeliveryCard 
              index={1}
              icon={<Zap className="w-7 h-7" />}
              title="Conversion Strategy"
              description="Scientific copywriting and psychological triggers designed to turn passive browsers into active buyers."
            />
            <DeliveryCard 
              index={2}
              icon={<ShieldCheck className="w-7 h-7" />}
              title="Funnel Support"
              description="End-to-end technical support and automation systems that ensure no lead ever slips through the cracks."
            />
            <DeliveryCard 
              index={3}
              icon={<TrendingUp className="w-7 h-7" />}
              title="Continuous Optimization"
              description="Iterative A/B testing and performance tracking to keep your acquisition cost low and your profit high."
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <p className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 font-semibold tracking-wide">
              Built to generate consistent business growth.
            </p>
          </motion.div>
        </section>

        {/* Results Section */}
        <section className="mt-60 border-y border-white/5 py-32 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-500 mb-20"
            >
              Results Section
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
              <StatItem 
                targetValue={32} 
                prefix="₹" 
                suffix="L+" 
                label="Total Revenue Generated" 
              />
              <StatItem 
                targetValue={20} 
                prefix="₹" 
                suffix="L+" 
                label="Revenue in 1 Month (Events)" 
              />
              <StatItem 
                targetValue={1000} 
                suffix="+" 
                label="Qualified Leads" 
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="max-w-xl mx-auto"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px bg-white/10 flex-1" />
                <span className="text-white font-bold text-lg uppercase tracking-wider">Organic</span>
                <div className="h-px bg-white/10 flex-1" />
              </div>
              <p className="text-gray-400 text-lg leading-relaxed font-medium italic">
                Multiple reels generating thousands of views organically through high-impact storytelling and strategic content loops.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="mt-60 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-500 mb-4">Success Stories</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Case Studies</h3>
            </div>
            <p className="text-gray-400 max-w-md">
              Real results for real businesses. See how we've scaled revenue and organic reach across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CaseStudyCard 
              index={0}
              title="₹32 Lakhs in 3.4 Months"
              tag="E-commerce"
              icon={<Layout className="w-5 h-5" />}
              toolName="Ads Dashboard"
              description="Scaled a direct-to-consumer brand from scratch using high-intent targeting and aggressive CRO."
            />
            <CaseStudyCard 
              index={1}
              title="₹20 Lakhs+ in 1 Month"
              tag="Event Clients"
              isUpdated={true}
              icon={<FileSpreadsheet className="w-5 h-5" />}
              toolName="Excel Lead Sheets"
              description="Massive spike in registrations and sales for a high-ticket event through short-burst, high-impact campaigns."
            />
            <CaseStudyCard 
              index={2}
              title="Consistent Organic Reach"
              tag="Content Strategy"
              icon={<Instagram className="w-5 h-5" />}
              toolName="Instagram Insights"
              description="Building long-term brand equity through viral content loops and community-first storytelling."
            />
          </div>
        </section>

        {/* Our Services Section */}
        <section className="mt-60 px-8 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Our <span className="text-indigo-500">Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Complete digital marketing solutions designed to generate leads and drive conversions.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <ServiceCard 
              index={0}
              icon={<Megaphone className="w-10 h-10" />}
              title="Performance Marketing"
              description="Data-driven ad campaigns that prioritize ROI and business growth over vanity metrics."
            />
            <ServiceCard 
              index={1}
              icon={<Share2 className="w-10 h-10" />}
              title="Social Media Marketing"
              description="Building an active, engaged community around your brand to drive long-term loyalty."
            />
            <ServiceCard 
              index={2}
              icon={<Globe className="w-10 h-10" />}
              title="SEO & Organic Growth"
              description="Strategic SEO and content loops that bring sustainable, high-intent organic traffic."
            />
            <ServiceCard 
              index={3}
              icon={<PenTool className="w-10 h-10" />}
              title="Content Creation & Strategy"
              description="High-impact storytelling and strategic content planning that resonates with your audience."
            />
            <ServiceCard 
              index={4}
              icon={<Video className="w-10 h-10" />}
              title="Creative Services"
              description="Premium video editing and graphic design (Creative Services) that capture attention."
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-60 pb-20">
          <div className="max-w-7xl mx-auto px-8 text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              What Our <span className="text-indigo-500">Clients Say</span>
            </motion.h2>
          </div>
          <TestimonialCarousel />
        </section>

        {/* Experience Section */}
        <section className="mt-60 max-w-7xl mx-auto px-8 py-24 bg-white/[0.02] rounded-[4rem] border border-white/5 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[100px] -mr-48 -mt-48" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-500 mb-6 block"
              >
                Our Legacy
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Built on <span className="text-indigo-500">Experience & Passion</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed italic border-l-4 border-indigo-500/30 pl-6">
                "Experience that drives strategy. Passion that drives results."
              </p>
              <p className="text-gray-400 text-lg mb-12">
                A team with 5+ years of experience in digital marketing, focused on delivering real results. We've navigated the evolving digital landscape to keep our clients ahead of the curve.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Strategic Insight</h4>
                    <p className="text-sm text-gray-500">Deep market analysis and planning.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Execution Focus</h4>
                    <p className="text-sm text-gray-500">Relentless drive for performance.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-12 bg-indigo-600 rounded-[3rem] overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -mr-32 -mt-32 rounded-full" />
              <div className="relative z-10 text-center py-12">
                <span className="text-9xl font-black text-white/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter select-none">5+</span>
                <div className="relative">
                  <h3 className="text-6xl font-black text-white mb-4 tracking-tighter">5+ YEARS</h3>
                  <p className="text-indigo-100 font-bold uppercase tracking-widest text-sm">Industry Excellence</p>
                </div>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full px-12">
                <div className="h-px bg-white/20 w-full mb-8" />
                <p className="text-indigo-50 white text-center font-medium">
                  Focused on delivering real results that impact your bottom line.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mt-60 pb-40 px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 rounded-[4rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative bg-[#0a0a0f] border border-white/10 rounded-[4rem] p-12 md:p-24 text-center overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/10 blur-[120px] -mt-40 rounded-full" />
              
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                  Ready to Build Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-purple-400">Growth Engine?</span>
                </h2>
                
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                  Join the elite businesses scaling with our data-driven strategies. Experience that drives strategy, passion that drives results.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-[0_20px_50px_rgba(79,70,229,0.3)] hover:shadow-indigo-500/50 flex items-center gap-3 group/btn"
                  >
                    Book Your Free Strategy Call
                    <Zap className="w-5 h-5 group-hover/btn:fill-white transition-all" />
                  </motion.button>
                  <motion.button 
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl transition-all"
                  >
                    View Our Plans
                  </motion.button>
                </div>
                
                <p className="mt-10 text-gray-500 text-sm font-medium">
                  No generic templates. No fluff. Just real, measurable ROI.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-x-12 gap-y-16 mt-40 border-t border-white/5 pt-20"
        >
          <FeatureCard 
            icon={<Code className="w-5 h-5 text-gray-300" />}
            title="Revenue Scaling"
            description="We go beyond vanity metrics. Our focus is on optimizing your entire funnel for maximum ROI and sustainable revenue growth."
          />
          <FeatureCard 
            icon={<Lightbulb className="w-5 h-5 text-gray-300" />}
            title="Strategic Insights"
            description="Data-driven strategies that help you understand your market deeply and build a brand that resonates with your ideal customers."
          />
          <FeatureCard 
            icon={<RefreshCw className="w-5 h-5 text-gray-300" />}
            title="Performance Media"
            description="High-performance ad campaigns managed by experts who treat your budget as their own to ensure every rupee counts."
          />
        </motion.div>
      </main>
    </div>
  );
}

function TestimonialCarousel() {
  const testimonials = [
    {
      type: "whatsapp",
      title: "WhatsApp Chat",
      content: "The lead quality is amazing! We've already closed 3 high-ticket clients this week. Thanks team! 🙏",
      client: "Marketing Manager",
      icon: <MessageSquare className="w-5 h-5 text-[#25D366]" />
    },
    {
      type: "review",
      title: "Client Review",
      content: "Scaling from ₹5L to ₹30L was only possible with their targeted ads strategy. Completely changed our business trajectory.",
      client: "Founder, Luxe Decor",
      icon: <Star className="w-5 h-5 text-yellow-500" />
    },
    {
      type: "video",
      title: "Video Feedback",
      content: "Check out how we managed to get a 6x ROI on our last launch within 30 days.",
      client: "E-com Entrepreneur",
      icon: <Play className="w-5 h-5 text-indigo-500" />
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 overflow-hidden h-[450px] flex items-center">
      <div 
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((t, i) => (
          <div key={i} className="min-w-full h-full flex items-center justify-center p-4">
            <div className="bg-[#121218] border border-white/5 p-12 rounded-[3.5rem] w-full max-w-3xl relative overflow-hidden group hover:border-indigo-500/20 transition-colors">
              <Quote className="absolute top-12 right-12 w-24 h-24 text-white/5 -rotate-12" />
              
              <div className="flex items-center gap-6 mb-10">
                <div className="p-4 bg-white/5 rounded-2xl">
                  {t.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{t.title}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-black">{t.client}</p>
                </div>
              </div>

              <p className="text-2xl md:text-3xl font-medium text-gray-200 leading-snug mb-10">
                "{t.content}"
              </p>

              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-indigo-500 text-indigo-500" />)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {testimonials.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-10 bg-indigo-600' : 'bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}

function DeliveryCard({ index, icon, title, description }: { index: number, icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
      <div className="relative bg-[#0f0f15] border border-white/5 p-8 rounded-3xl flex items-start gap-6 leading-none">
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-500 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ResultCard({ index, icon, title, description }: { index: number, icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-[#121218] border border-white/5 p-8 rounded-3xl hover:border-indigo-500/40 transition-all duration-300 group"
    >
      <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-snug">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function ServiceCard({ index, icon, title, description }: { index: number, icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-sm"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-0 group-hover:opacity-40 transition duration-500" />
      <div className="relative bg-[#0f0f15] border border-white/5 p-10 rounded-[2.5rem] h-full flex flex-col items-center text-center">
        <div className="mb-8 text-indigo-500 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function CaseStudyCard({ index, title, tag, icon, toolName, description, isUpdated = false }: { index: number, title: string, tag: string, icon: React.ReactNode, toolName: string, description: string, isUpdated?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-[#0f0f15] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col p-8 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          {tag}
        </span>
        {isUpdated && (
          <span className="text-[10px] font-black uppercase tracking-tighter text-white bg-red-500 px-2 py-0.5 rounded flex items-center gap-1">
            UPDATED 🔥
          </span>
        )}
      </div>

      <div className="flex-1">
        <h4 className="text-2xl font-bold mb-4 group-hover:text-indigo-300 transition-colors">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed mb-8">
          {description}
        </p>
      </div>

      <div className="mt-auto">
        <div className="flex items-center gap-3 p-4 bg-white/[0.03] border border-white/5 rounded-2xl group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all duration-300">
          <div className="text-indigo-500 bg-indigo-500/10 p-2 rounded-lg">
            {icon}
          </div>
          <span className="text-xs font-bold text-gray-300 tracking-wide uppercase">{toolName}</span>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors" />
    </motion.div>
  );
}

function StatItem({ targetValue, prefix = "", suffix = "", label }: { targetValue: number, prefix?: string, suffix?: string, label: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) {
      let start = 0;
      const duration = 2000;
      const increment = targetValue / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [hasStarted, targetValue]);

  return (
    <motion.div 
      onViewportEnter={() => setHasStarted(true)}
      className="flex flex-col gap-2"
    >
      <div className="text-6xl md:text-7xl font-bold tracking-tighter text-white">
        {prefix}{count}{suffix}
      </div>
      <p className="text-gray-400 font-medium tracking-wide uppercase text-xs">{label}</p>
    </motion.div>
  );
}

function HighlightItem({ value, label, tag }: { value: string, label: string, tag: string }) {
  return (
    <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 hover:border-indigo-500/30 transition-colors group">
      <div className="flex items-center justify-between mb-1">
        <span className="text-2xl font-bold text-white tracking-tight">{value}</span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400/80 bg-indigo-500/10 px-2 py-0.5 rounded-full">
          {tag}
        </span>
      </div>
      <p className="text-sm text-gray-400 font-medium">{label}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col gap-4 group cursor-default">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center transition-transform group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      </div>
      <p className="text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

