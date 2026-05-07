import { motion } from 'framer-motion';
import { GitBranch } from 'lucide-react';

interface NodeProps {
  label: string;
  type?: 'start' | 'end' | 'action' | 'decision' | 'process' | 'screen';
  delay?: number;
  small?: boolean;
}

function FlowNode({ label, type = 'action', delay = 0, small = false }: NodeProps) {
  const base = `inline-flex items-center justify-center text-center ${small ? 'px-3 py-1.5 text-[9px]' : 'px-4 py-2 text-xs'} font-semibold rounded-xl shadow-sm`;
  const variants = {
    start: 'bg-gray-900 text-white rounded-full',
    end: 'bg-gray-700 text-white rounded-full',
    action: 'bg-white border-2 border-[#0A6E6E] text-gray-800',
    decision: 'bg-amber-50 border-2 border-amber-400 text-amber-900 italic',
    process: 'bg-emerald-50 border-2 border-emerald-500 text-emerald-900',
    screen: 'bg-[#0A6E6E] text-white',
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`${base} ${variants[type]}`}
    >
      {label}
    </motion.div>
  );
}

const mainFlow: Array<{
  node: NodeProps;
  connector?: { label?: string; dir?: string };
  branch?: { label: string };
}> = [
  { node: { label: '▶  START', type: 'start' } },
  { node: { label: '📱  Open App / Sign Up', type: 'screen' }, connector: { label: 'New user' } },
  { node: { label: '🔀  Calculate carbon footprint?', type: 'decision' }, connector: { label: 'YES', dir: 'yes' }, branch: { label: 'NO → Education page → GO HOME' } },
  { node: { label: '⚡  Carbon Footprint Calculator', type: 'screen' }, connector: {} },
  { node: { label: '🏪  Create Business Profile', type: 'action' }, connector: {} },
  { node: { label: '📊  Display Emissions Result', type: 'process' }, connector: { label: 'Next step' } },
  { node: { label: '🔀  Offset emissions?', type: 'decision' }, connector: { label: 'YES', dir: 'yes' }, branch: { label: 'NO → Save Report → GO HOME' } },
  { node: { label: '✨  Show Recommended Credits', type: 'action' }, connector: {} },
  { node: { label: '🌳  Browse Climate Projects', type: 'screen' }, connector: {} },
  { node: { label: '🔀  Project selected?', type: 'decision' }, connector: { label: 'YES', dir: 'yes' }, branch: { label: 'NO → Return to project list' } },
  { node: { label: '💳  Purchase Carbon Credits', type: 'screen' }, connector: {} },
  { node: { label: '🔀  Payment successful?', type: 'decision' }, connector: { label: 'YES', dir: 'yes' }, branch: { label: 'NO → Retry Payment' } },
  { node: { label: '✅  Retire Carbon Credits', type: 'process' }, connector: {} },
  { node: { label: '🏆  Generate Carbon Neutral Certificate', type: 'screen' }, connector: {} },
  { node: { label: '📊  Sustainability Dashboard', type: 'screen' }, connector: {} },
  { node: { label: '⏹  END', type: 'end' } },
];

export function UserFlowDiagram() {
  return (
    <section className="px-6 py-20 bg-linear-to-br from-teal-900 via-slate-900 to-gray-900 text-white">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 rounded-full">
              <GitBranch className="w-4 h-4 text-teal-400" />
              <span className="text-sm font-semibold text-teal-300">UX Design</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-3">User Flow</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Scenario: A small café owner wants to calculate his carbon footprint and buy carbon credits to make his café carbon neutral
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Main flow — left column */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h4 className="text-sm font-semibold text-teal-300 mb-6 tracking-widest uppercase">Main Flow — Happy Path</h4>
              <div className="flex flex-col items-center gap-1">
                {mainFlow.map((step, i) => (
                  <div key={i} className="flex flex-col items-center w-full">
                    <div className="flex items-center w-full">
                      {/* Main node */}
                      <div className="flex-1 flex justify-center">
                        <FlowNode {...step.node} delay={i * 0.04} />
                      </div>
                      {/* Side branch */}
                      {step.branch && (
                        <div className="flex items-center gap-1 ml-2">
                          <div className="h-px w-6 bg-gray-500" />
                          <div className="bg-red-900/40 border border-red-500/30 rounded-lg px-2 py-1">
                            <p className="text-[8px] text-red-300 font-medium">{step.branch.label}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    {step.connector && (
                      <div className="flex flex-col items-center gap-0.5 my-0.5">
                        {step.connector.label && (
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${step.connector.dir !== 'yes' ? 'text-gray-400 border-gray-600' : 'text-emerald-400 border-emerald-600'}`}>{step.connector.label}</span>
                        )}
                        <div className="w-px h-3 bg-gray-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — IA + scenarios */}
            <div className="space-y-5">
              {/* Navigation map */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h4 className="text-sm font-semibold text-teal-300 mb-4 tracking-widest uppercase">Navigation Map</h4>
                <div className="space-y-2">
                  {[
                    { icon: '🏠', label: 'Home', sub: 'Why carbon matters · Our partners' },
                    { icon: '🔐', label: 'Sign Up / Login', sub: 'User login · User sign up' },
                    { icon: '🏪', label: 'Business Profile', sub: 'Type · Details · Energy · Gas' },
                    { icon: '🧮', label: 'Carbon Calculator', sub: 'Input → Emission result → Save' },
                    { icon: '🌿', label: 'Offset Marketplace', sub: 'Forest · Solar · Methane · Details' },
                    { icon: '💳', label: 'Purchase Credits', sub: 'Select → Payment → Confirmation' },
                    { icon: '🏆', label: 'Certificate', sub: 'Registry ID · Download · Share badge' },
                    { icon: '📊', label: 'Dashboard', sub: 'Footprint · Credits · Impact · Verra' },
                    { icon: '📚', label: 'Education / Learn', sub: 'Carbon credits · Offsets · Tips' },
                    { icon: '👤', label: 'User Profile', sub: 'Business info · Settings · Logout' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-start gap-3 bg-white/5 rounded-xl px-3 py-2"
                    >
                      <span className="text-base shrink-0">{item.icon}</span>
                      <div>
                        <p className="text-[10px] font-semibold text-white">{item.label}</p>
                        <p className="text-[8px] text-gray-400">{item.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decision scenarios */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h4 className="text-sm font-semibold text-teal-300 mb-4 tracking-widest uppercase">Decision Branches</h4>
                <div className="space-y-3">
                  {[
                    {
                      q: 'Calculate footprint?',
                      yes: '→ Carbon Footprint Calculator',
                      no: '→ Show Sustainability Education',
                    },
                    {
                      q: 'Offset emissions?',
                      yes: '→ Show Recommended Credits',
                      no: '→ Save Report for Later',
                    },
                    {
                      q: 'Project selected?',
                      yes: '→ Purchase Carbon Credits',
                      no: '→ Return to Project List',
                    },
                    {
                      q: 'Payment successful?',
                      yes: '→ Retire Credits → Certificate',
                      no: '→ Retry Payment',
                    },
                  ].map((d, i) => (
                    <div key={i} className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3">
                      <p className="text-[9px] font-bold text-amber-300 mb-2">🔀 {d.q}</p>
                      <div className="flex gap-4">
                        <div>
                          <p className="text-[8px] text-emerald-400 font-semibold">YES</p>
                          <p className="text-[8px] text-gray-300">{d.yes}</p>
                        </div>
                        <div>
                          <p className="text-[8px] text-red-400 font-semibold">NO</p>
                          <p className="text-[8px] text-gray-300">{d.no}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { color: 'bg-[#0A6E6E]', label: 'Screen / UI' },
              { color: 'bg-white border-2 border-[#0A6E6E]', label: 'User Action' },
              { color: 'bg-amber-50 border-2 border-amber-400', label: 'Decision Point' },
              { color: 'bg-emerald-50 border-2 border-emerald-500', label: 'System Process' },
              { color: 'bg-gray-900 border border-white/20', label: 'Start / End' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded ${item.color}`} />
                <span className="text-xs text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}