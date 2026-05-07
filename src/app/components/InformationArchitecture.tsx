import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

const iaTree = [
  {
    label: '🏠 Home',
    color: 'bg-teal-600',
    textColor: 'text-white',
    children: [
      { label: 'Why carbon matters' },
      { label: 'Our partners (Verra, EKI)' },
      { label: 'How the app works' },
    ],
  },
  {
    label: '📖 About',
    color: 'bg-blue-500',
    textColor: 'text-white',
    children: [
      { label: 'What is carbon footprint' },
      { label: 'Why sustainability matters' },
      { label: 'How the app works' },
    ],
  },
  {
    label: '🔐 Sign Up / Login',
    color: 'bg-indigo-500',
    textColor: 'text-white',
    children: [
      { label: 'User login' },
      { label: 'User sign up' },
    ],
  },
  {
    label: '🏪 Business Profile',
    color: 'bg-purple-500',
    textColor: 'text-white',
    children: [
      { label: 'Select business type' },
      { label: 'Business details' },
      { label: 'Energy usage' },
      { label: 'Gas usage' },
    ],
  },
  {
    label: '🧮 Carbon Calculator',
    color: 'bg-emerald-600',
    textColor: 'text-white',
    children: [
      { label: 'Enter usage data' },
      { label: 'Emission result' },
      { label: 'Save report' },
    ],
  },
  {
    label: '🌿 Offset Marketplace',
    color: 'bg-green-600',
    textColor: 'text-white',
    children: [
      { label: 'Forest projects' },
      { label: 'Renewable energy' },
      { label: 'Methane projects' },
      { label: 'Project details' },
      { label: 'Project ID + Verra link' },
    ],
  },
  {
    label: '💳 Purchase Credits',
    color: 'bg-yellow-600',
    textColor: 'text-white',
    children: [
      { label: 'Select credits' },
      { label: 'Payment' },
      { label: 'Confirmation' },
    ],
  },
  {
    label: '🏆 Certificate',
    color: 'bg-orange-500',
    textColor: 'text-white',
    children: [
      { label: 'Registry ID on cert' },
      { label: 'Download certificate' },
      { label: 'Share badge' },
    ],
  },
  {
    label: '📊 Dashboard',
    color: 'bg-cyan-600',
    textColor: 'text-white',
    children: [
      { label: 'Carbon footprint' },
      { label: 'Credits purchased' },
      { label: 'Impact stats' },
      { label: 'Verify on Verra' },
    ],
  },
  {
    label: '📚 Education / Learn',
    color: 'bg-lime-600',
    textColor: 'text-white',
    children: [
      { label: 'What is carbon credit' },
      { label: 'How offset works' },
      { label: 'Sustainability tips' },
    ],
  },
  {
    label: '❓ Support',
    color: 'bg-gray-600',
    textColor: 'text-white',
    children: [
      { label: 'Help' },
      { label: 'FAQ' },
      { label: 'Contact' },
    ],
  },
  {
    label: '👤 User Profile',
    color: 'bg-slate-600',
    textColor: 'text-white',
    children: [
      { label: 'Business info' },
      { label: 'Settings' },
      { label: 'Logout' },
    ],
  },
];

export function InformationArchitecture() {
  return (
    <section className="px-6 py-20 bg-linear-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-teal-100 rounded-full">
              <Layers className="w-4 h-4 text-teal-700" />
              <span className="text-sm font-semibold text-teal-800">Site Structure</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-3">Information Architecture</h3>
            <p className="text-lg text-gray-500">Complete site map of the Carbon Leaf app</p>
          </div>

          {/* Root node */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500 rounded-2xl blur-xl opacity-30 scale-110" />
              <div className="relative bg-linear-to-br from-teal-600 to-emerald-700 text-white px-8 py-4 rounded-2xl text-center shadow-xl">
                <p className="text-xs font-semibold opacity-70 tracking-widest uppercase mb-1">Entry Point</p>
                <p className="font-bold text-lg">🌿 Carbon Leaf App</p>
                <p className="text-xs opacity-70 mt-0.5">GreenMark by Ritika Kumari</p>
              </div>
              {/* Connector down */}
              <div className="flex justify-center">
                <div className="w-px h-6 bg-teal-400" />
              </div>
            </div>
          </div>

          {/* Bottom nav (primary navigation) */}
          <div className="flex justify-center mb-2">
            <div className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-xs font-semibold tracking-wide shadow-lg flex items-center gap-4">
              <span>🏠 Home</span>
              <span className="text-gray-500">|</span>
              <span>🧮 Calculate</span>
              <span className="text-gray-500">|</span>
              <span>🌿 Offset</span>
              <span className="text-gray-500">|</span>
              <span>📊 Stats</span>
              <span className="text-gray-500">|</span>
              <span>👤 Profile</span>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mb-10">Bottom Navigation — Every Screen</p>

          {/* Connector line */}
          <div className="flex justify-center mb-8">
            <div className="w-px h-6 bg-gray-300" />
          </div>

          {/* Section grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {iaTree.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Header */}
                <div className={`${section.color} ${section.textColor} px-4 py-3`}>
                  <p className="font-semibold text-sm">{section.label}</p>
                </div>
                {/* Children */}
                <div className="p-3 space-y-1">
                  {section.children.map((child, j) => (
                    <div key={j} className="flex items-center gap-2 py-1 px-2 rounded-lg bg-gray-50">
                      <div className="w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                      <p className="text-xs text-gray-600">{child.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-10 bg-teal-50 border border-teal-200 rounded-2xl p-6 text-center">
            <p className="text-sm text-teal-800 font-medium">
              🔗 <strong>Trust Layer:</strong> Every certificate is linked to a <strong>Verra VCS Registry ID</strong> and <strong>EKI project code</strong> for third-party verification
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
