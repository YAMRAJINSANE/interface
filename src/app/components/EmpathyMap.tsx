import { motion } from 'framer-motion';
import { MessageSquare, Brain, Eye, Ear, Frown, Smile } from 'lucide-react';

const quadrants = [
  {
    title: 'SAYS',
    icon: MessageSquare,
    color: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    iconColor: 'text-blue-600',
    items: [
      '"Customers are asking for healthier and eco-friendly options."',
      '"I want my business to stand out."',
      '"Sustainability sounds good, but I don\'t know how to do it."',
      '"I don\'t have time for complex systems."',
    ],
  },
  {
    title: 'THINKS',
    icon: Brain,
    color: 'from-purple-50 to-purple-100',
    border: 'border-purple-200',
    iconColor: 'text-purple-600',
    items: [
      '"Will this really help my business grow?"',
      '"Is sustainability worth the cost?"',
      '"How do I prove my business is eco-friendly?"',
      '"I don\'t understand carbon credits."',
    ],
  },
  {
    title: 'SEES',
    icon: Eye,
    color: 'from-emerald-50 to-emerald-100',
    border: 'border-emerald-200',
    iconColor: 'text-emerald-600',
    items: [
      'Competitors promoting sustainability on social media',
      'Customers preferring eco-conscious brands',
      'Growing trend of "green businesses"',
      'Complex tools and certifications online',
    ],
  },
  {
    title: 'HEARS',
    icon: Ear,
    color: 'from-orange-50 to-orange-100',
    border: 'border-orange-200',
    iconColor: 'text-orange-600',
    items: [
      'Customers talking about environment and sustainability',
      'Social media trends about eco-friendly lifestyle',
      'Advice from peers about sustainable branding',
      'News about India\'s CCTS & BEE regulations',
    ],
  },
];

export function EmpathyMap() {
  return (
    <section className="min-h-screen flex items-center px-6 py-20 bg-linear-to-br from-slate-50 via-gray-50 to-zinc-100">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-slate-100 rounded-full">
              <Brain className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-semibold text-slate-700">Qualitative Research</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-3">Empathy Map</h3>
            <p className="text-lg text-gray-500">Understanding the café owner's world — their thoughts, feelings & frustrations</p>
          </div>

          {/* Central persona */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-teal-400 to-emerald-500 rounded-3xl blur-xl opacity-40 scale-110" />
              <div className="relative bg-linear-to-br from-teal-500 to-emerald-600 text-white px-10 py-5 rounded-3xl text-center shadow-xl">
                <div className="text-4xl mb-2">☕</div>
                <p className="font-bold text-lg">Café Owner</p>
                <p className="text-sm opacity-80">Age 25–35 · Urban India</p>
              </div>
            </div>
          </div>

          {/* 4 quadrants */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {quadrants.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-linear-to-br ${q.color} border ${q.border} p-6 rounded-2xl`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm`}>
                    <q.icon className={`w-5 h-5 ${q.iconColor}`} />
                  </div>
                  <h4 className="font-bold text-gray-900 text-base tracking-wide">{q.title}</h4>
                </div>
                <ul className="space-y-2">
                  {q.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700">
                      <span className="mt-1 text-gray-400 shrink-0">›</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Pains + Gains */}
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-red-50 to-rose-100 border border-red-200 p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Frown className="w-5 h-5 text-red-500" />
                </div>
                <h4 className="font-bold text-gray-900 text-base tracking-wide">PAINS</h4>
              </div>
              <ul className="space-y-2">
                {[
                  'Lack of awareness about carbon emissions',
                  'Complex, jargon-heavy carbon credit systems',
                  'Expensive sustainability certifications',
                  'No simple tools designed for small businesses',
                  'Fear of investing without clear return on investment',
                ].map((pain, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-400 mt-0.5 shrink-0 font-bold">✕</span>
                    <span className="text-sm">{pain}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-green-50 to-emerald-100 border border-green-200 p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Smile className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 text-base tracking-wide">GAINS</h4>
              </div>
              <ul className="space-y-2">
                {[
                  'Attract more climate-conscious customers',
                  'Build a strong, differentiated brand identity',
                  'Stand out visibly from local competitors',
                  'Simple, affordable, one-stop solution',
                  'Clear proof of sustainability via certificate & badge',
                ].map((gain, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-500 mt-0.5 shrink-0 font-bold">✓</span>
                    <span className="text-sm">{gain}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
