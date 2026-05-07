import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Target,
  Users,
  TrendingUp,
  Search,
  BarChart3,
  Lightbulb,
  CheckCircle2,
  MapPin,
  Heart,
  ArrowRight,
  Globe,
  Zap,
  Coffee,
  Menu,
  X,
} from "lucide-react";

import { EmpathyMap } from "./components/EmpathyMap";
import { CompetitorAudit } from "./components/CompetitorAudit";
import { InformationArchitecture } from "./components/InformationArchitecture";
import { UserFlowDiagram } from "./components/UserFlowDiagram";
import { DesignSystemFull } from "./components/DesignSystemFull";
import { LoFiWireframes } from "./components/LoFiWireframes";
import { HiFiWireframes } from "./components/HiFiWireframes";
import { UXLawsPerScreen } from "./components/UXLawsPerScreen";

const navSections = [
  { id: "hero", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "methodology", label: "Research" },
  { id: "findings", label: "Findings" },
  { id: "competitor", label: "Competitors" },
  { id: "empathy", label: "Empathy Map" },
  { id: "personas", label: "Personas" },
  { id: "ia", label: "IA" },
  { id: "userflow", label: "User Flow" },
  { id: "designsystem", label: "Design System" },
  { id: "lofi", label: "Lo-Fi" },
  { id: "hifi", label: "Hi-Fi" },
  { id: "journey", label: "Journey Map" },
  { id: "uxlaws", label: "UX Laws" },
  { id: "impact", label: "Impact" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
    setActiveSection(id);
  };

  return (
    <div className="size-full overflow-y-auto bg-white relative">
      {/* Floating Nav */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <Leaf className="w-4 h-4 text-teal-600" />
            <span className="font-bold text-sm text-gray-900">Carbon Leaf</span>
          </div>
          <div className="hidden md:flex gap-1 flex-wrap max-w-2xl">
            {navSections.slice(0, 8).map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-medium transition-colors ${activeSection === s.id ? "bg-teal-600 text-white" : "text-gray-600 hover:bg-gray-100"}`}
              >
                {s.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden p-1.5 rounded-lg bg-gray-100"
          >
            {navOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
        {navOpen && (
          <div className="mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl p-3 grid grid-cols-3 gap-1">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="px-2 py-1.5 rounded-lg text-[10px] font-medium text-gray-600 hover:bg-gray-100 text-left"
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-emerald-100 rounded-full"
          >
            <Leaf className="w-6 h-6 text-emerald-600" />
            <span className="font-medium text-emerald-800">
              UI/UX Case Study
            </span>
          </motion.div>

          <div className="mb-3">
            <span className="text-sm font-semibold tracking-[0.3em] text-teal-600 uppercase">
              Carbon Leaf · GreenMark
            </span>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Simple Carbon Offsetting
          </h1>
          <h2 className="text-3xl text-gray-600 mb-6">
            Platform for Small Businesses
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Empowering Indian cafés & restaurants to measure, offset, and
            showcase their carbon neutrality through an accessible, mobile-first
            platform
          </p>

          <div className="flex items-center justify-center gap-4 mb-10 flex-wrap">
            {[
              { label: "Presented by", value: "Ritika Kumari" },
              { label: "Target", value: "Small Businesses" },
              { label: "Context", value: "India · 2025" },
              { label: "Platform", value: "Mobile App" },
              { label: "Screens", value: "17 Screens" },
            ].map((item, i) => (
              <div
                key={i}
                className="px-5 py-3 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="font-semibold text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Section index */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-3xl mx-auto mb-10">
            {[
              { icon: "🔬", label: "Research" },
              { icon: "👤", label: "Personas" },
              { icon: "🗺️", label: "IA & Flow" },
              { icon: "🎨", label: "Design System" },
              { icon: "📱", label: "Wireframes" },
              { icon: "🗂️", label: "Lo-Fi" },
              { icon: "✨", label: "Hi-Fi" },
              { icon: "🗺️", label: "Journey Map" },
              { icon: "⚖️", label: "UX Laws" },
              { icon: "🌍", label: "Impact" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/80 border border-gray-100 rounded-xl px-3 py-2.5 text-center"
              >
                <span className="text-lg">{item.icon}</span>
                <p className="text-xs text-gray-600 mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400"
          >
            <p className="text-sm mb-2">Scroll to explore</p>
            <ArrowRight className="w-6 h-6 mx-auto rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. PURPOSE ──────────────────────────────────────────── */}
      <section
        id="purpose"
        className="min-h-screen flex items-center px-6 py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-4 text-emerald-600">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Purpose of Research</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Research Objective
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To understand how existing carbon credit platforms work, how
                their interfaces are designed, and whether they are accessible
                for small businesses such as cafés and restaurants and other
                small businesses.
              </p>

              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  Relevance in Indian Context
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Small business owners in India are embracing sustainable
                  practices but lack accessible tools to measure and offset
                  their carbon emissions. Existing carbon markets are complex
                  and designed for large corporations, leaving small businesses
                  without a simple platform to participate in climate action.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-teal-500 to-emerald-600 p-8 rounded-2xl text-white">
                <Coffee className="w-12 h-12 mb-4 opacity-80" />
                <h4 className="text-2xl font-bold mb-2">Problem Statement</h4>
                <p className="leading-relaxed opacity-90">
                  Small café and restaurant owners in India are increasingly
                  interested in attracting climate-conscious customers and
                  building sustainable brand identities. However, they lack
                  awareness, accessible tools, and simple platforms to measure,
                  offset, and communicate their business's carbon emissions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-emerald-600 mb-3" />
                  <p className="font-semibold text-gray-900 mb-1">$15.8B</p>
                  <p className="text-sm text-gray-600">
                    Voluntary carbon market value (2025)
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <Users className="w-8 h-8 text-emerald-600 mb-3" />
                  <p className="font-semibold text-gray-900 mb-1">58%</p>
                  <p className="text-sm text-gray-600">
                    Urban Indians prefer eco-responsible brands
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. RESEARCH METHODS ─────────────────────────────────── */}
      <section
        id="methodology"
        className="min-h-screen flex items-center px-6 py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 text-blue-600">
                <Search className="w-5 h-5" />
                <span className="font-semibold">Methodology</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Research Approach
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A comprehensive four-step research process to understand the
                market, users, and opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: "01",
                  color: "blue",
                  title: "Secondary Research",
                  desc: "Understanding carbon markets, sustainability awareness, and environmental practices among small businesses in India",
                  objective:
                    "Understand sustainability awareness, carbon emissions, and environmental practices among small businesses in India.",
                },
                {
                  num: "02",
                  color: "emerald",
                  title: "Primary Research",
                  desc: "Understanding real user behavior, needs, and pain points through direct surveys",
                  objective:
                    "Understand real user behaviour, needs, and pain points.",
                },
                {
                  num: "03",
                  color: "purple",
                  title: "Competitive Analysis",
                  desc: "Analyzing existing platforms like Carbonmark, Patch, and Terrapass",
                  objective:
                    "Understand existing platforms related to carbon offsetting.",
                },
                {
                  num: "04",
                  color: "orange",
                  title: "Research Synthesis",
                  desc: "Organizing findings to identify design gaps and opportunities",
                  objective:
                    "After collecting data, organize and synthesize findings.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div
                    className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center mb-4`}
                  >
                    <span
                      className={`text-xl font-bold text-${item.color}-600`}
                    >
                      {item.num}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                  <div
                    className={`bg-${item.color}-50 rounded-lg p-3 border border-${item.color}-100`}
                  >
                    <p
                      className={`text-xs font-semibold text-${item.color}-700 mb-1`}
                    >
                      Objective
                    </p>
                    <p className={`text-xs text-${item.color}-600`}>
                      {item.objective}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Primary Research Questions */}
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-600" />
                Primary Research Survey Questions
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "What are your main sources of energy for business operations?",
                  'Have you heard "carbon credit" before?',
                  "Would a 'carbon neutral' badge on your menu attract customers?",
                  "How much would you pay monthly for this? (₹0 / ₹200 / ₹500 / ₹1000+)",
                  "What would make you trust such a certificate is real?",
                ].map((q, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-blue-50 rounded-xl p-4 border border-blue-100"
                  >
                    <span className="font-bold text-blue-600 text-sm flex-shrink-0">
                      {i + 1}.
                    </span>
                    <p className="text-sm text-gray-700">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. KEY FINDINGS ─────────────────────────────────────── */}
      <section
        id="findings"
        className="min-h-screen flex items-center px-6 py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 text-emerald-600">
                <Lightbulb className="w-5 h-5" />
                <span className="font-semibold">
                  Secondary Research Insights
                </span>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Key Research Findings
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: CheckCircle2,
                  color: "emerald",
                  bg: "from-emerald-50 to-teal-50",
                  border: "border-emerald-200",
                  title: "Carbon markets = offset mechanism",
                  desc: "1 credit = 1 tonne CO₂ reduced. Voluntary market valued $15.8B in 2025 (World Bank / MSCI).",
                },
                {
                  icon: Coffee,
                  color: "orange",
                  bg: "from-orange-50 to-red-50",
                  border: "border-orange-200",
                  title: "F&B sector is high-impact, low-awareness",
                  desc: "Restaurants have high carbon footprints from energy, transport & waste but lack measurement tools (Filimonau 2021).",
                },
                {
                  icon: Heart,
                  color: "blue",
                  bg: "from-blue-50 to-indigo-50",
                  border: "border-blue-200",
                  title: "Customers reward sustainability",
                  desc: "58% of urban Indian consumers prefer eco-responsible brands. Willing to pay premium for net-zero practices (BCG 2023).",
                },
                {
                  icon: BarChart3,
                  color: "purple",
                  bg: "from-purple-50 to-pink-50",
                  border: "border-purple-200",
                  title: "Existing platforms exclude small business",
                  desc: "Carbonmark, Patch, Terrapass — all enterprise-focused with technical interfaces, no F&B customization (Haya 2020).",
                },
                {
                  icon: Globe,
                  color: "green",
                  bg: "from-green-50 to-emerald-50",
                  border: "border-green-200",
                  title: "India's CCTS opens the door",
                  desc: "Non-obligated entities (like cafés) can now participate via the voluntary mechanism under BEE. Active from 2025.",
                },
                {
                  icon: Zap,
                  color: "yellow",
                  bg: "from-yellow-50 to-orange-50",
                  border: "border-yellow-200",
                  title: "Design gap = our opportunity",
                  desc: "No Indian app offers: simplified calculator + verified credit purchase + sustainability branding in one place.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${item.bg} p-8 rounded-2xl border ${item.border}`}
                >
                  <item.icon
                    className={`w-10 h-10 text-${item.color}-600 mb-4`}
                  />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. COMPETITOR AUDIT ─────────────────────────────────── */}
      <div id="competitor">
        <CompetitorAudit />
      </div>

      {/* ── 6. EMPATHY MAP ──────────────────────────────────────── */}
      <div id="empathy">
        <EmpathyMap />
      </div>

      {/* ── 7. USER PERSONAS ────────────────────────────────────── */}
      <section
        id="personas"
        className="min-h-screen flex items-center px-6 py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 text-purple-600">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Understanding Users</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                User Personas
              </h3>
              <p className="text-lg text-gray-600">
                Meeting the needs of our target audience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Persona 1 — Mukul Raj */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    MR
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      Mukul Raj
                    </h4>
                    <p className="text-gray-600">Coffee Shop Owner · Age 29</p>
                    <p className="text-sm text-gray-500">📍 Bengaluru</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4">
                    <p className="text-sm font-semibold text-emerald-800">
                      🎯 Key Motivation: Build a sustainable brand identity
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Mukul is a 29-year-old café owner in Bengaluru who wants his
                    business to be environmentally responsible and attract
                    customers who prefer sustainable brands.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Goals</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Reduce café's carbon footprint affordably</li>
                      <li>• Integrate sustainability into daily operations</li>
                      <li>• Attract climate-conscious customers</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Pain Points
                    </h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Unable to showcase sustainable practices</li>
                      <li>• Platforms too complex for daily use</li>
                      <li>• Tools target large corporations only</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Persona 2 — Ramesh Verma */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    RV
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      Ramesh Verma
                    </h4>
                    <p className="text-gray-600">
                      Small Restaurant Owner · Age 48
                    </p>
                    <p className="text-sm text-gray-500">📍 Maharashtra</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 bg-orange-100 rounded-full mb-4">
                    <p className="text-sm font-semibold text-orange-800">
                      🎯 Key Motivation: Stand out from competitors
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Ramesh runs a small restaurant and wants to attract young
                    and environmentally conscious customers. He wants to show
                    his business follows sustainable practices but doesn't
                    understand carbon emissions or carbon credits.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Goals</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Make restaurant environmentally responsible</li>
                      <li>• Attract climate-conscious customers</li>
                      <li>• Improve brand image & trust</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Pain Points
                    </h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Carbon credit platforms too complex</li>
                      <li>• Sustainability certifications expensive</li>
                      <li>• No simple app for small businesses</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. INFORMATION ARCHITECTURE ────────────────────────── */}
      <div id="ia">
        <InformationArchitecture />
      </div>

      {/* ── 9. USER FLOW DIAGRAM ────────────────────────────────── */}
      <div id="userflow">
        <UserFlowDiagram />
      </div>

      {/* ── 10. DESIGN SYSTEM ───────────────────────────────────── */}
      <div id="designsystem">
        <DesignSystemFull />
      </div>

      {/* ── 11. LO-FI WIREFRAMES ────────────────────────────────── */}
      <div id="lofi">
        <LoFiWireframes />
      </div>

      {/* ── 12. HI-FI WIREFRAMES ────────────────────────────────── */}
      <div id="hifi">
        <HiFiWireframes />
      </div>

      {/* ── 13. USER JOURNEY MAP ────────────────────────────────── */}
      <section
        id="journey"
        className="min-h-screen flex items-center px-6 py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4 text-indigo-600">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">User Experience</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                User Journey Map
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Scenario: A café owner wants to attract climate-conscious
                customers and build a sustainable brand but does not know how to
                measure or offset their café's carbon emissions.
              </p>
            </div>

            {/* Journey table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr>
                    <th className="text-left text-xs font-bold text-gray-500 uppercase tracking-widest p-3 w-36">
                      Phase
                    </th>
                    {[
                      "Discovery",
                      "Research",
                      "Selection",
                      "Purchase",
                      "Loyalty / Impact",
                    ].map((p) => (
                      <th
                        key={p}
                        className="text-center text-xs font-bold text-indigo-600 uppercase tracking-widest p-3 bg-indigo-50 border border-indigo-100 rounded-t"
                      >
                        {p}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      row: "User Actions",
                      cells: [
                        "Searches for eco-friendly business practices",
                        "Learns about carbon emissions and offsetting",
                        "Compares carbon offset projects and tools",
                        "Buys carbon credits to offset café emissions",
                        "Shares sustainability badge and tracks impact",
                      ],
                      bg: "bg-white",
                    },
                    {
                      row: "Touchpoints",
                      cells: [
                        "Social media, Google search, customer feedback",
                        "Sustainability blogs, business forums, app websites",
                        "Carbon calculator tool, project marketplace",
                        "Payment page, offset purchase interface",
                        "Email updates, dashboard, certificate",
                      ],
                      bg: "bg-blue-50",
                    },
                    {
                      row: "Sentiments",
                      cells: [
                        "😐 Curious but unsure",
                        "😊 Interested and hopeful",
                        "😕 Slightly confused",
                        "😌 Relieved and confident",
                        "😄 Proud and motivated",
                      ],
                      bg: "bg-white",
                    },
                    {
                      row: "Pain Points",
                      cells: [
                        "Hard to find right platform",
                        "Technical jargon confusing",
                        "Too many choices, unclear verification",
                        "Fear of hidden costs or scams",
                        "—",
                      ],
                      bg: "bg-red-50",
                    },
                    {
                      row: "Opportunities",
                      cells: [
                        "Simple guides about sustainability",
                        "Easy carbon footprint calculator",
                        "Transparent project information",
                        "Simple checkout and certification",
                        "Impact dashboard and shareable badge",
                      ],
                      bg: "bg-green-50",
                    },
                  ].map((r, i) => (
                    <tr key={i}>
                      <td
                        className={`p-3 font-semibold text-xs text-gray-700 ${r.bg} border border-gray-100`}
                      >
                        {r.row}
                      </td>
                      {r.cells.map((cell, j) => (
                        <td
                          key={j}
                          className={`p-3 text-xs text-gray-600 ${r.bg} border border-gray-100 text-center`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 14. UX LAWS PER SCREEN ──────────────────────────────── */}
      <div id="uxlaws">
        <UXLawsPerScreen />
      </div>

      {/* ── 15. IMPACT ──────────────────────────────────────────── */}
      <section
        id="impact"
        className="min-h-screen flex items-center px-6 py-20 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 text-white"
      >
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-5xl font-bold mb-6">Designed for Impact</h3>
            <p className="text-2xl mb-12 opacity-90">
              Making climate action accessible to every small business in India
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { stat: "17", label: "Screen Designs" },
                { stat: "100%", label: "Mobile-First" },
                { stat: "3-Step", label: "Calculator" },
                { stat: "UPI", label: "First Payment" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <p className="text-4xl font-bold mb-2">{item.stat}</p>
                  <p className="opacity-90">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-left">
                <h4 className="text-lg font-bold mb-4">
                  🎯 How Carbon Leaf is Different
                </h4>
                <ul className="space-y-2">
                  {[
                    "Designed for small businesses, not large corporations",
                    "Simple carbon footprint calculator for non-technical users",
                    "Focuses on sustainability branding, not only carbon trading",
                    "Carbon-neutral certificate and badge for customer trust",
                    "Uses UPI-first payment that Indian users already know",
                    "Helps businesses measure, offset & communicate in one app",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm opacity-90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-left">
                <h4 className="text-lg font-bold mb-4">📚 References</h4>
                <ul className="space-y-1.5 text-sm opacity-80">
                  {[
                    "World Bank (2023) — Voluntary Carbon Markets",
                    "Ecosystem Marketplace (2022) — VCM Report",
                    "Haya et al. (2020) — Carbon Offset Platforms",
                    "Filimonau & De Coteau (2019) — F&B Carbon Footprints",
                    "Filimonau et al. (2021) — Restaurant Emissions",
                    "Han & Hyun (2018) — Customer Sustainability Preference",
                    "Boston Consulting Group (2023) — Net-Zero Consumer Report",
                    "BEE / India CCTS (2025) — Carbon Trading Scheme",
                  ].map((ref, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-300 flex-shrink-0">›</span>
                      <span>{ref}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-3xl mx-auto mb-12">
              <h4 className="text-2xl font-bold mb-4">The Vision</h4>
              <p className="text-lg leading-relaxed opacity-90">
                Carbon Leaf bridges the gap between small business
                sustainability ambitions and accessible climate action. By
                combining simple calculation tools, verified carbon credits, and
                shareable certificates, we enable café and restaurant owners to
                build genuine sustainable brands that customers trust and value.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-px bg-white/30" />
                <Leaf className="w-6 h-6 text-emerald-300" />
                <div className="w-12 h-px bg-white/30" />
              </div>
              <p className="text-xl mb-1 opacity-70">Presented by</p>
              <p className="text-3xl font-bold">Ritika Kumari</p>
              <p className="text-lg opacity-60 mt-1">
                Carbon Leaf Design System v2.0 · GreenMark
              </p>
              <p className="text-sm opacity-40 mt-2">🌿 Thank You</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
