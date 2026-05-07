import { motion } from 'framer-motion';
import { BarChart3, CheckCircle2, XCircle } from 'lucide-react';

const competitors = [
  {
    name: 'Carbonmark',
    colors: ['#1B5E20', '#4CAF50', '#FFFFFF'],
    colorLabel: 'Corporate green, banker\'s feel.',
    whatItDoes: 'Carbon credit marketplace',
    keyFeatures: 'Project listings, price transparency',
    strength: 'Detailed project data',
    weakness: 'Complex interface for small users',
  },
  {
    name: 'Patch',
    colors: ['#111111', '#A6FF4D', '#F5F5F5'],
    colorLabel: 'Stark B&W with a neon hit.',
    whatItDoes: 'Carbon credit API platform',
    keyFeatures: 'Offset purchasing infrastructure',
    strength: 'Reliable system for companies',
    weakness: 'Designed for developers, not small businesses',
  },
  {
    name: 'Terrapass',
    colors: ['#2E7D32', '#81C784', '#F5F5DC'],
    colorLabel: 'Soft, retail, friendly.',
    whatItDoes: 'Carbon offset purchase platform',
    keyFeatures: 'Carbon calculator, offset packages',
    strength: 'Simple purchase flow',
    weakness: 'Limited customization for businesses',
  },
  {
    name: 'Klima',
    colors: ['#00C896', '#0A1F1C', '#EAF7F2'],
    colorLabel: 'App-first, mint-forward.',
    whatItDoes: 'Consumer carbon offsetting app',
    keyFeatures: 'Personal footprint tracking',
    strength: 'Mobile-first, clean UI',
    weakness: 'Individual-focused, not B2B',
  },
  {
    name: 'Wren',
    colors: ['#1F4D3A', '#D9C8A9', '#F8F4EC'],
    colorLabel: 'Editorial, earthy, beige.',
    whatItDoes: 'Subscription carbon offset',
    keyFeatures: 'Monthly plan, project storytelling',
    strength: 'Strong narrative, editorial design',
    weakness: 'Subscription model, no B2B tools',
  },
  {
    name: 'Pachama',
    colors: ['#0F2E2B', '#6FA88E', '#EFE9DD'],
    colorLabel: 'Forest + cream, premium.',
    whatItDoes: 'Forest carbon verification',
    keyFeatures: 'Satellite-verified forest projects',
    strength: 'Premium credibility, data-rich',
    weakness: 'Enterprise-only, very expensive',
  },
];

// Positioning data: x = Friendly(0)→Corporate(100), y = Simple(0)→Technical(100)
const positions = [
  { name: 'Carbonmark', x: 78, y: 72 },
  { name: 'Patch', x: 85, y: 82 },
  { name: 'Pachama', x: 72, y: 50 },
  { name: 'Wren', x: 55, y: 22 },
  { name: 'Terrapass', x: 48, y: 35 },
  { name: 'Klima', x: 30, y: 28 },
  { name: 'CARBON LEAF', x: 12, y: 10, isOurs: true },
];

export function CompetitorAudit() {
  return (
    <section className="px-6 py-20 bg-linear-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 rounded-full">
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-300">Market Research</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-3">Competitive Audit</h3>
            <p className="text-lg text-gray-400">What other carbon offset platforms look like</p>
          </div>

          {/* Color palettes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {competitors.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <p className="font-bold text-white mb-3 text-sm">{c.name}</p>
                <div className="flex gap-2 mb-3">
                  {c.colors.map((color, j) => (
                    <div key={j} className="flex-1 h-8 rounded-lg border border-white/10" style={{ backgroundColor: color }} />
                  ))}
                </div>
                <p className="text-xs text-gray-400 italic mb-3">{c.colorLabel}</p>
                <div className="space-y-1">
                  <p className="text-xs text-gray-300"><span className="text-gray-500">Does: </span>{c.whatItDoes}</p>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 mt-0.5 shrink-0" />
                    <p className="text-xs text-gray-300">{c.strength}</p>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <XCircle className="w-3 h-3 text-red-400 mt-0.5 shrink-0" />
                    <p className="text-xs text-gray-300">{c.weakness}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Positioning Map */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold text-white text-center mb-2">Competitive Positioning Map</h4>
            <p className="text-gray-400 text-center mb-10">Where Carbon Leaf sits — the open quadrant no one owns</p>

            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
              {/* Axis labels */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-400 tracking-widest uppercase">SIMPLE</div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-400 tracking-widest uppercase">TECHNICAL</div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 tracking-widest uppercase" style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}>FRIENDLY</div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 tracking-widest uppercase" style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%)' }}>CORPORATE</div>

              {/* Grid */}
              <div className="relative border border-white/20 rounded-xl overflow-hidden" style={{ paddingTop: '100%' }}>
                {/* Quadrant backgrounds */}
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                  <div className="bg-emerald-500/10 border-r border-b border-white/10 rounded-tl-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-emerald-400 text-xs font-bold">OPEN QUADRANT</p>
                      <p className="text-emerald-300/60 text-xs mt-1">No serious competitor<br />lives here</p>
                    </div>
                  </div>
                  <div className="bg-white/2 border-b border-white/10 rounded-tr-xl" />
                  <div className="bg-white/2 border-r border-white/10 rounded-bl-xl" />
                  <div className="bg-red-500/5 rounded-br-xl flex items-center justify-center">
                    <p className="text-red-400/40 text-xs font-semibold text-center px-4">Enterprise Zone</p>
                  </div>
                </div>

                {/* Axis lines */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-px bg-white/20" />
                </div>
                <div className="absolute inset-0 flex justify-center">
                  <div className="h-full w-px bg-white/20" />
                </div>

                {/* Competitor dots */}
                {positions.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: 'spring' }}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  >
                    {p.isOurs ? (
                      <div className="relative flex flex-col items-center gap-1">
                        <div className="w-5 h-5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-500/50 ring-2 ring-white/40" />
                        <div className="bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-lg">
                          🌿 CARBON LEAF
                        </div>
                      </div>
                    ) : (
                      <div className="relative flex flex-col items-center gap-0.5">
                        <div className="w-3 h-3 rounded-full bg-gray-400 ring-1 ring-white/30" />
                        <p className="text-[9px] text-gray-300 whitespace-nowrap">{p.name}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-emerald-400">💡</span> Key Insights from Competitive Research
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Most carbon platforms are designed for corporations, not small businesses.',
                'Interfaces use technical jargon that non-experts find difficult to understand.',
                'Few platforms provide simple tools for small businesses to calculate and communicate emissions.',
                'Existing platforms focus on carbon trading rather than sustainability branding.',
                'No Indian app combines: simplified calculator + verified credit purchase + sustainability branding.',
                'India\'s CCTS (2025) now opens voluntary participation to non-obligated entities like cafés.',
              ].map((insight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-0.5 shrink-0 font-bold text-sm">{i + 1}.</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
