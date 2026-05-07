import { motion } from 'framer-motion';
import {
  Palette, Home, ShoppingCart, User, Bell, Star, Search, Plus, CheckCircle2, Leaf
} from 'lucide-react';

const semanticColors = [
  { label: 'SUCCESS', hex: '#12B886', wcag: '4.6:1', example: '✓  Offset verified', bg: 'bg-[#12B886]' },
  { label: 'INFO', hex: '#1971C2', wcag: '6.8:1', example: 'ℹ  Receipt emailed', bg: 'bg-[#1971C2]' },
  { label: 'WARNING', hex: '#E67700', wcag: '4.5:1', example: '⚠  Verify GSTIN', bg: 'bg-[#E67700]' },
  { label: 'ERROR', hex: '#D9480F', wcag: '5.4:1', example: '✕  Payment failed', bg: 'bg-[#D9480F]' },
];

const colorScales = [
  {
    name: 'Teal',
    subtitle: 'Primary Brand',
    shades: [
      { shade: '100', hex: '#E6F2F2' },
      { shade: '200', hex: '#C7E1E1' },
      { shade: '300', hex: '#98C9C9' },
      { shade: '400', hex: '#5EAFAF' },
      { shade: '500', hex: '#2BA3A3' },
      { shade: '600', hex: '#0A6E6E' },
      { shade: '700', hex: '#085959' },
      { shade: '800', hex: '#064B4B' },
      { shade: '900', hex: '#053838' },
      { shade: '1000', hex: '#032626' },
    ],
  },
  {
    name: 'Action',
    subtitle: 'Interactive / CTA',
    shades: [
      { shade: '100', hex: '#E6F8F1' },
      { shade: '200', hex: '#C8EEDC' },
      { shade: '300', hex: '#9FE2C2' },
      { shade: '400', hex: '#6FD4A3' },
      { shade: '500', hex: '#35C390' },
      { shade: '600', hex: '#12B886' },
      { shade: '700', hex: '#0CA678' },
      { shade: '800', hex: '#0B8E6A' },
      { shade: '900', hex: '#08654C' },
      { shade: '1000', hex: '#063D2E' },
    ],
  },
  {
    name: 'Marigold',
    subtitle: 'Accent / Warning',
    shades: [
      { shade: '100', hex: '#FFF4D6' },
      { shade: '200', hex: '#FFE9AD' },
      { shade: '300', hex: '#FFD86B' },
      { shade: '400', hex: '#FFC233' },
      { shade: '500', hex: '#F5A623' },
      { shade: '600', hex: '#F59F00' },
      { shade: '700', hex: '#D98D00' },
      { shade: '800', hex: '#B57400' },
      { shade: '900', hex: '#7A4F00' },
      { shade: '1000', hex: '#4A3000' },
    ],
  },
];

const typographyScale = [
  { name: 'Display', size: '28pt', example: 'Climate action.', weight: 'font-bold', textSize: 'text-3xl', font: 'Sora' },
  { name: 'H1', size: '22pt', example: 'Offset your week', weight: 'font-bold', textSize: 'text-2xl', font: 'Sora' },
  { name: 'H2', size: '18pt', example: 'Verified projects', weight: 'font-semibold', textSize: 'text-xl', font: 'Sora' },
  { name: 'H3', size: '14pt', example: 'Your impact', weight: 'font-semibold', textSize: 'text-base', font: 'Sora' },
  { name: 'Body L', size: '12pt', example: 'Pay ₹450 to offset 30 kg CO₂.', weight: 'font-normal', textSize: 'text-sm', font: 'Inter' },
  { name: 'Body', size: '11pt', example: 'Receipt sent to your registered email.', weight: 'font-normal', textSize: 'text-xs', font: 'Inter' },
  { name: 'Caption', size: '9pt', example: 'Verified by Verra · 18 Apr 2026', weight: 'font-normal', textSize: 'text-[10px]', font: 'Inter' },
];

const icons = [
  { icon: Home, label: 'Home' },
  { icon: ShoppingCart, label: 'Buy / Cart' },
  { icon: User, label: 'Profile' },
  { icon: CheckCircle2, label: 'Trust / Done' },
  { icon: Bell, label: 'Notifications' },
  { icon: Star, label: 'Impact' },
  { icon: Leaf, label: 'Offset' },
  { icon: Search, label: 'Search' },
  { icon: Plus, label: 'Add / New' },
];

export function DesignSystemFull() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-teal-100 rounded-full">
              <Palette className="w-4 h-4 text-teal-700" />
              <span className="text-sm font-semibold text-teal-800">Carbon Leaf Design System v2.0</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-3">Design System</h3>
            <p className="text-lg text-gray-500">Friendly + Simple — the Paytm of climate action</p>
          </div>

          {/* Positioning statement */}
          <div className="bg-linear-to-r from-teal-600 to-emerald-700 rounded-3xl p-8 mb-14 text-white">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold mb-1">FRIENDLY</p>
                <p className="text-sm opacity-70">Warm, welcoming, human</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-4xl">+</div>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">SIMPLE</p>
                <p className="text-sm opacity-70">Clear, effortless, no jargon</p>
              </div>
            </div>
            <p className="text-center text-sm opacity-80 mt-6 border-t border-white/20 pt-4">
              Indian small businesses don't want a carbon spreadsheet — they want the <strong>Paytm of climate action</strong>. No serious competitor lives in the Friendly + Simple quadrant.
            </p>
          </div>

          {/* Semantic Colors */}
          <div className="mb-14">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Semantic Colors</h4>
            <p className="text-gray-500 text-sm mb-6">Signal & feedback colors — all WCAG AA compliant</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {semanticColors.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden"
                >
                  <div className={`${c.bg} h-16 flex items-center justify-center`}>
                    <p className="text-white text-sm font-semibold">{c.label}</p>
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-xs text-gray-600 mb-2">{c.hex}</p>
                    <div className="bg-white rounded-lg px-3 py-2 border border-gray-100 mb-2">
                      <p className="text-xs text-gray-700">{c.example}</p>
                    </div>
                    <p className="text-[10px] text-gray-400">WCAG {c.wcag}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Color Scales */}
          <div className="mb-14">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Color Scales</h4>
            <p className="text-gray-500 text-sm mb-6">Tint & shade ramps — 100 to 1000</p>
            <div className="space-y-6">
              {colorScales.map((scale, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <p className="font-bold text-gray-900">{scale.name}</p>
                    <p className="text-xs text-gray-500">{scale.subtitle}</p>
                  </div>
                  <div className="flex gap-1.5 overflow-x-auto pb-1">
                    {scale.shades.map((s, j) => (
                      <div key={j} className="flex flex-col items-center gap-1 shrink-0">
                        <div
                          className="w-12 h-12 rounded-xl shadow-sm"
                          style={{ backgroundColor: s.hex }}
                        />
                        <span className="text-[9px] text-gray-500">{s.shade}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="mb-14">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Typography</h4>
            <p className="text-gray-500 text-sm mb-6">
              <strong>Sora</strong> (Headings · Display · Numbers) + <strong>Inter</strong> (Body · UI · Labels) — the same pair Stripe, Linear & Razorpay trust.
            </p>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              {typographyScale.map((t, i) => (
                <div key={i} className={`flex items-center gap-6 px-6 py-4 ${i !== typographyScale.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="w-16 shrink-0">
                    <p className="text-xs font-semibold text-gray-500">{t.name}</p>
                    <p className="text-[10px] text-gray-400">{t.size}</p>
                  </div>
                  <div className="w-12 shrink-0">
                    <p className="text-[10px] text-gray-400 font-mono">{t.font}</p>
                  </div>
                  <p className={`${t.textSize} ${t.weight} text-gray-900`}>{t.example}</p>
                </div>
              ))}
            </div>
            {/* Live example card */}
            <div className="mt-6 bg-[#064B4B] rounded-2xl p-6 text-white">
              <p className="text-[10px] font-semibold text-teal-300 tracking-widest uppercase mb-3">THIS WEEK</p>
              <p className="text-2xl font-bold mb-1">You offset 84 kg of CO₂.</p>
              <p className="text-sm text-teal-100 mb-4">That's the equivalent of planting 4 trees in Karnataka — verified by your local partner.</p>
              <div className="flex items-end gap-6">
                <div>
                  <p className="text-2xl font-bold">₹1,260</p>
                  <p className="text-xs text-teal-300">paid this week</p>
                </div>
                <div>
                  <p className="text-emerald-400 font-semibold text-sm">+18%</p>
                  <p className="text-xs text-teal-300">vs last week</p>
                </div>
              </div>
              <button className="mt-4 text-sm font-semibold text-teal-300 flex items-center gap-1">Offset next week →</button>
            </div>
          </div>

          {/* Iconography */}
          <div className="mb-14">
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Iconography</h4>
            <p className="text-gray-500 text-sm mb-6">Icons everyone already understands — lucide-react system</p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {icons.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-2"
                >
                  <item.icon className="w-7 h-7 text-teal-600" />
                  <p className="text-xs text-gray-500 text-center">{item.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Bottom nav in context */}
            <div className="mt-6 bg-gray-900 rounded-2xl p-4">
              <p className="text-xs text-gray-500 text-center mb-3 tracking-widest uppercase">Bottom Navigation · Every Screen</p>
              <div className="flex justify-around items-center">
                {[
                  { icon: Home, label: 'Home' },
                  { icon: Leaf, label: 'Offset' },
                  { icon: Star, label: 'Impact' },
                  { icon: CheckCircle2, label: 'Proof' },
                  { icon: User, label: 'Account' },
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col items-center gap-1 ${i === 0 ? 'text-teal-400' : 'text-gray-500'}`}>
                    <item.icon className="w-5 h-5" />
                    <p className="text-[9px]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Components */}
          <div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Core Components</h4>
            <p className="text-gray-500 text-sm mb-6">Reusable UI building blocks</p>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Buttons */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">BUTTONS</p>
                <div className="space-y-3">
                  <button className="w-full bg-[#0A6E6E] text-white rounded-xl py-3 font-semibold text-sm hover:bg-[#085959] transition-colors flex items-center justify-center gap-2">
                    Offset Now <span>→</span>
                  </button>
                  <button className="w-full border-2 border-[#0A6E6E] text-[#0A6E6E] rounded-xl py-3 font-semibold text-sm hover:bg-teal-50 transition-colors">
                    Learn more
                  </button>
                  <button className="w-full text-gray-500 text-sm py-2">
                    Cancel
                  </button>
                </div>
              </div>

              {/* Input */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">INPUT</p>
                <div className="space-y-3">
                  <div className="bg-white border-2 border-teal-500 rounded-xl px-4 py-3">
                    <p className="text-[10px] text-teal-600 font-semibold mb-1">GSTIN</p>
                    <p className="text-sm text-gray-400 font-mono">29ABCDE1234F1Z5</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl px-4 py-3">
                    <p className="text-[10px] text-gray-400 font-semibold mb-1">BUSINESS NAME</p>
                    <p className="text-sm text-gray-300">Brew & Beans Café</p>
                  </div>
                </div>
              </div>

              {/* Verified Badge + Certificate */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4">VERIFIED BADGE</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <p className="text-sm font-semibold text-emerald-800">Verified by Verra</p>
                  </div>
                  {/* Mini certificate */}
                  <div className="bg-[#064B4B] rounded-xl p-4 text-white">
                    <div className="text-[9px] tracking-[0.3em] font-semibold text-teal-300 mb-2">CERTIFIED</div>
                    <p className="font-bold text-sm">Carbon Neutral</p>
                    <p className="text-[10px] text-teal-300 mt-1">Apr 2026</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <p className="text-[9px] text-teal-300">VERIFIED</p>
                    </div>
                    <p className="text-[9px] text-gray-400 mt-1">Brew & Beans Café · Verra VCS-2024-0418</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
