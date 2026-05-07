import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, ChevronDown } from 'lucide-react';

const screenLaws = [
  {
    screen: 'Splash / Home Screen',
    screenNum: '1',
    icon: '🌿',
    laws: [
      { law: "Fitts's Law", desc: 'CTA at bottom center, full width, 56px height — largest thumb target' },
      { law: "Hick's Law", desc: 'Only 2 choices on screen — Sign Up or Log In, nothing else' },
      { law: 'Picture Superiority Effect', desc: "Full-bleed hero communicates 'sustainable café' in <1 second" },
      { law: 'Von Restorff Effect', desc: 'Solid dark green primary button stands out on light card' },
    ],
  },
  {
    screen: 'Sign Up Screen',
    screenNum: '2',
    icon: '👤',
    laws: [
      { law: "Hick's Law", desc: 'Google sign-in prominently first to reduce decision fatigue' },
      { law: "Miller's Law", desc: 'Only 4 fields — no unnecessary information collected' },
      { law: "Jakob's Law", desc: 'Form layout matches Google/Facebook signup familiarity' },
      { law: 'Picture Superiority', desc: 'Relatable illustration builds trust before user fills any form' },
    ],
  },
  {
    screen: 'Log In Screen',
    screenNum: '3',
    icon: '🔓',
    laws: [
      { law: "Fitts's Law", desc: 'Log In button full width bottom, 56px height — thumb reachable' },
      { law: "Hick's Law", desc: 'Only 2 fields + 2 buttons, minimal decisions' },
      { law: "Jakob's Law", desc: 'Standard login pattern — users know exactly what to do' },
      { law: 'Aesthetic Usability', desc: 'Warm welcoming illustration reduces login anxiety for non-technical users' },
    ],
  },
  {
    screen: 'Business Type Selection',
    screenNum: '4',
    icon: '☕',
    laws: [
      { law: "Fitts's Law", desc: 'Large card touch targets min 120px height — easy to tap accurately' },
      { law: "Hick's Law", desc: 'Only 5 clearly labelled options · icons reduce reading load' },
      { law: 'Picture Superiority', desc: 'Icons on cards communicate business type faster than text alone' },
      { law: 'Feedback Principle', desc: 'Card turns green immediately on tap — instant visual confirmation' },
    ],
  },
  {
    screen: 'Business Profile Details',
    screenNum: '5',
    icon: '🏪',
    laws: [
      { law: "Miller's Law", desc: 'Only 4 inputs total — no overwhelm' },
      { law: "Fitts's Law", desc: 'Stepper ± buttons min 44px · chip toggles full tap area' },
      { law: "Jakob's Law", desc: 'Searchable city dropdown matches Zomato/Swiggy familiar pattern' },
      { law: 'Trust Principle', desc: 'Privacy note reduces hesitation to share business info' },
    ],
  },
  {
    screen: 'Carbon Calculator — Electricity',
    screenNum: '6',
    icon: '⚡',
    laws: [
      { law: 'Progressive Disclosure', desc: 'Only electricity on this screen — gas and waste on next screens' },
      { law: 'Aesthetic Usability', desc: 'Friendly illustration reduces anxiety about technical input' },
      { law: 'Error Prevention', desc: 'Helper card shows expected range so user can self-validate entry' },
      { law: 'Flexibility', desc: '"Use average" option for users without bills handy' },
    ],
  },
  {
    screen: 'Carbon Calculator — LPG',
    screenNum: '7',
    icon: '🔥',
    laws: [
      { law: "Fitts's Law", desc: '+/– stepper buttons min 64px wide — large thumb-friendly targets' },
      { law: "Hick's Law", desc: 'Stepper replaces keyboard input — one-tap interaction, not typing' },
      { law: "Jakob's Law", desc: 'Stepper pattern familiar from Swiggy/Zomato quantity selector' },
      { law: 'Error Prevention', desc: 'Starts at 2 (realistic default) not 0 — reduces wrong input chance' },
    ],
  },
  {
    screen: 'Carbon Calculator — Waste',
    screenNum: '8',
    icon: '🗑',
    laws: [
      { law: 'Goal Gradient Effect', desc: 'Full progress bar + \'Almost done\' increases motivation to complete' },
      { law: 'Progressive Disclosure', desc: 'Delivery details only appear if Yes selected' },
      { law: 'Von Restorff Effect', desc: 'Final CTA has leaf emoji & different wording — signals climax action' },
      { law: "Hick's Law", desc: 'Chips replace number input — 3 clear waste options, yes/no for delivery' },
    ],
  },
  {
    screen: 'Emissions Result Screen',
    screenNum: '9',
    icon: '📊',
    laws: [
      { law: 'Framing Effect', desc: "Show positive comparison '12% less than average' — reduces guilt, increases confidence" },
      { law: 'Von Restorff Effect', desc: '48px result number stands out as most important element on screen' },
      { law: 'Analogical Reasoning', desc: "'Like driving 35,000 km' makes abstract CO₂ number relatable" },
      { law: 'Picture Superiority', desc: 'Arc gauge communicates level faster than number alone' },
    ],
  },
  {
    screen: 'Offset Marketplace',
    screenNum: '10',
    icon: '🌳',
    laws: [
      { law: "Jakob's Law", desc: 'Card-based list mirrors Zomato/Amazon shopping familiarity' },
      { law: 'Von Restorff Effect', desc: '"Recommended for you" tag guides non-experts to best choice' },
      { law: 'Trust Principle', desc: '"Gold Standard Verified" badge on every legitimate project' },
      { law: "Fitts's Law", desc: 'Each card = large tappable area · sticky CTA always accessible' },
    ],
  },
  {
    screen: 'Project Detail Screen',
    screenNum: '11',
    icon: '🔍',
    laws: [
      { law: 'Trust Principle', desc: 'Real photo + verified badge + 3 concrete stats = layered trust building' },
      { law: 'Social Proof', desc: '"340 families benefited" creates emotional connection to purchase' },
      { law: 'Cognitive Load Reduction', desc: 'Max 3 sentences in description — no technical carbon jargon' },
      { law: "Fitts's Law", desc: 'Select button sticky bottom full width — always accessible while scrolling' },
    ],
  },
  {
    screen: 'Purchase Credits Screen',
    screenNum: '12',
    icon: '💳',
    laws: [
      { law: 'Transparency Principle', desc: 'Price per credit + total shown clearly, no hidden fees' },
      { law: 'Anchoring Effect', desc: 'Show recommended amount 8.4 as default — users keep defaults' },
      { law: 'Trust Signals', desc: '3 trust bullets below button reduce payment abandonment' },
      { law: 'Goal Gradient Effect', desc: '"Carbon neutral for 1 year" callout reinforces finish line feeling' },
    ],
  },
  {
    screen: 'Payment Screen',
    screenNum: '13',
    icon: '📱',
    laws: [
      { law: "Jakob's Law", desc: 'UPI first — exact pattern of Swiggy/Zomato/Amazon checkout Indians know' },
      { law: "Hick's Law", desc: 'UPI tab default — most likely choice first, others accessible not pushed' },
      { law: 'Trust Principle', desc: 'Razorpay named — Indian users recognize and trust it specifically' },
      { law: 'Error Prevention', desc: 'Amount shown IN the pay button — user confirms total before tapping' },
    ],
  },
  {
    screen: 'Certificate Screen',
    screenNum: '14',
    icon: '🏆',
    laws: [
      { law: 'Peak-End Rule', desc: 'Confetti + congratulations + certificate = most memorable positive moment' },
      { law: 'Endowment Effect', desc: 'Certificate with their business name = feels personally owned → more likely to share' },
      { law: 'Von Restorff Effect', desc: 'Share button is primary (not download) — app\'s key differentiator' },
      { law: 'Social Proof Nudge', desc: '"3x more customers" stat above share button motivates immediate action' },
    ],
  },
  {
    screen: 'Dashboard (Home)',
    screenNum: '15',
    icon: '🏠',
    laws: [
      { law: 'Zeigarnik Effect', desc: '72% progress ring creates psychological pull to reach 100%' },
      { law: 'Chunking', desc: 'Screen in clear sections: Progress → Actions → Impact → Activity → Tip' },
      { law: 'Endowment Effect', desc: "Personalized 'Mukul's Café' + impact numbers make dashboard feel owned" },
      { law: "Fitts's Law", desc: 'Bottom nav 56px · quick action cards 80px each · thumb zone optimized' },
    ],
  },
  {
    screen: 'Learn / Education Screen',
    screenNum: '16',
    icon: '📚',
    laws: [
      { law: 'Progressive Disclosure', desc: 'Featured article first — best entry for new users, full list below' },
      { law: 'Serial Position Effect', desc: '"Start Here" at top — users click first items most frequently' },
      { law: 'Endowment Effect', desc: 'Unread green dot creates sense of content waiting — motivates return visits' },
      { law: "Fitts's Law", desc: 'Article cards full width — large tappable area, no small links' },
    ],
  },
  {
    screen: 'User Profile Screen',
    screenNum: '17',
    icon: '👤',
    laws: [
      { law: 'Endowment Effect', desc: 'Personalized banner with café name makes profile feel owned not generic' },
      { law: "Fitts's Law", desc: 'Menu items full width, 56px height — large easy tap targets' },
      { law: "Hick's Law", desc: '7 menu items maximum — at limit of comfortable scanning' },
      { law: 'Error Prevention', desc: 'Log Out uses red, no icon, separated by divider — signals destructive action' },
    ],
  },
];

const lawColors: Record<string, string> = {
  "Fitts's Law": 'bg-blue-100 text-blue-800 border-blue-200',
  "Hick's Law": 'bg-purple-100 text-purple-800 border-purple-200',
  "Jakob's Law": 'bg-indigo-100 text-indigo-800 border-indigo-200',
  "Miller's Law": 'bg-cyan-100 text-cyan-800 border-cyan-200',
  'Picture Superiority': 'bg-orange-100 text-orange-800 border-orange-200',
  'Picture Superiority Effect': 'bg-orange-100 text-orange-800 border-orange-200',
  'Von Restorff Effect': 'bg-pink-100 text-pink-800 border-pink-200',
  'Peak-End Rule': 'bg-rose-100 text-rose-800 border-rose-200',
  'Progressive Disclosure': 'bg-teal-100 text-teal-800 border-teal-200',
  'Goal Gradient Effect': 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'Framing Effect': 'bg-lime-100 text-lime-800 border-lime-200',
  'Endowment Effect': 'bg-amber-100 text-amber-800 border-amber-200',
  'Zeigarnik Effect': 'bg-violet-100 text-violet-800 border-violet-200',
  'Trust Principle': 'bg-green-100 text-green-800 border-green-200',
  'Social Proof': 'bg-sky-100 text-sky-800 border-sky-200',
  'Social Proof Nudge': 'bg-sky-100 text-sky-800 border-sky-200',
  'Anchoring Effect': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'Chunking': 'bg-gray-100 text-gray-800 border-gray-200',
  'Aesthetic Usability': 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
  'Error Prevention': 'bg-red-100 text-red-800 border-red-200',
  'Feedback Principle': 'bg-green-100 text-green-800 border-green-200',
  'Flexibility': 'bg-slate-100 text-slate-800 border-slate-200',
  'Analogical Reasoning': 'bg-cyan-100 text-cyan-800 border-cyan-200',
  'Cognitive Load Reduction': 'bg-purple-100 text-purple-800 border-purple-200',
  'Transparency Principle': 'bg-teal-100 text-teal-800 border-teal-200',
  'Trust Signals': 'bg-green-100 text-green-800 border-green-200',
  'Serial Position Effect': 'bg-orange-100 text-orange-800 border-orange-200',
};

function getLawColor(law: string) {
  return lawColors[law] || 'bg-gray-100 text-gray-800 border-gray-200';
}

export function UXLawsPerScreen() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-emerald-100 rounded-full">
              <Scale className="w-4 h-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-800">Evidence-Based Design</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-3">UX Laws Applied — Per Screen</h3>
            <p className="text-lg text-gray-500">Every design decision is backed by a UX principle. Click any screen to expand.</p>
          </div>

          {/* Summary badges */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {Object.entries(lawColors).slice(0, 18).map(([law, color]) => (
              <span key={law} className={`text-[10px] font-semibold px-3 py-1 rounded-full border ${color}`}>{law}</span>
            ))}
          </div>

          {/* Screen accordion */}
          <div className="space-y-2">
            {screenLaws.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  className="w-full flex items-center gap-4 px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <span className="text-xl">{s.icon}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm">Screen {s.screenNum}/17 — {s.screen}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{s.laws.length} UX laws applied</p>
                  </div>
                  <div className="flex gap-1.5 flex-wrap justify-end max-w-[280px]">
                    {s.laws.slice(0, 2).map((l, j) => (
                      <span key={j} className={`text-[9px] px-2 py-0.5 rounded-full border ${getLawColor(l.law)}`}>{l.law}</span>
                    ))}
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${expanded === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-4 bg-white grid md:grid-cols-2 gap-3">
                        {s.laws.map((l, j) => (
                          <div key={j} className="flex gap-3">
                            <span className={`flex-shrink-0 text-[9px] font-bold px-2 py-1 rounded-lg border self-start whitespace-nowrap ${getLawColor(l.law)}`}>{l.law}</span>
                            <p className="text-sm text-gray-600 leading-relaxed">{l.desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
