import { motion } from 'framer-motion';
import { PhoneMockup } from './PhoneMockup';

// Reusable lo-fi UI primitives
function LoBox({ w = 'w-full', h = 'h-6', className = '' }: { w?: string; h?: string; className?: string }) {
  return <div className={`${w} ${h} bg-gray-200 rounded ${className}`} />;
}
function LoText({ lines = 1, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={`h-2 bg-gray-200 rounded ${i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'}`} />
      ))}
    </div>
  );
}
function LoBtn({ label = 'Button', primary = true }: { label?: string; primary?: boolean }) {
  return (
    <div className={`w-full rounded-lg py-2.5 flex items-center justify-center text-[10px] font-semibold ${primary ? 'bg-gray-700 text-white' : 'border border-gray-400 text-gray-600'}`}>
      {label}
    </div>
  );
}
function LoInput({ label = 'Field' }: { label?: string }) {
  return (
    <div className="w-full">
      <div className="text-[8px] text-gray-400 mb-0.5">{label}</div>
      <div className="w-full h-7 border border-gray-300 rounded bg-gray-50" />
    </div>
  );
}
function LoNav() {
  return (
    <div className="flex justify-around items-center border-t border-gray-200 pt-1.5 pb-1 mt-auto">
      {['Home', 'Calc', 'Mkt', 'Learn', 'Me'].map((n, i) => (
        <div key={i} className="flex flex-col items-center gap-0.5">
          <div className={`w-4 h-4 rounded-sm ${i === 0 ? 'bg-gray-700' : 'bg-gray-300'}`} />
          <span className="text-[7px] text-gray-500">{n}</span>
        </div>
      ))}
    </div>
  );
}
function LoBack() {
  return <div className="flex items-center gap-1 mb-2"><div className="w-3 h-3 bg-gray-300 rounded-sm" /><div className="w-8 h-1.5 bg-gray-200 rounded" /></div>;
}
function LoProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="w-full h-1 bg-gray-200 rounded-full mb-3">
      <div className="h-1 bg-gray-600 rounded-full" style={{ width: `${(step / total) * 100}%` }} />
    </div>
  );
}

// Screen content components
function SignUpScreen() {
  return (
    <div className="p-3 flex flex-col gap-2.5 h-full">
      <LoBack />
      <div className="text-xs font-bold text-gray-700">Sign Up</div>
      <div className="w-16 h-16 bg-gray-200 rounded-xl mx-auto" />
      <LoInput label="Full name" />
      <LoInput label="Phone number" />
      <LoInput label="Password" />
      <LoBtn label="Create account →" />
      <div className="text-center"><div className="h-1.5 w-24 bg-gray-200 rounded mx-auto" /></div>
      <div className="text-[8px] text-gray-400 text-center">Carbon Leaf Design System v2.0</div>
    </div>
  );
}
function LoginScreen() {
  return (
    <div className="p-3 flex flex-col gap-2.5 h-full">
      <LoBack />
      <div className="text-xs font-bold text-gray-700">Log In</div>
      <div className="w-16 h-16 bg-gray-200 rounded-xl mx-auto" />
      <LoInput label="Phone" />
      <LoInput label="Password" />
      <LoBtn label="Log in" />
      <div className="text-center"><div className="h-1.5 w-24 bg-gray-200 rounded mx-auto" /></div>
    </div>
  );
}
function BusinessTypeScreen() {
  return (
    <div className="p-3 flex flex-col gap-2 h-full">
      <LoBack />
      <LoProgressBar step={1} total={2} />
      <div className="text-xs font-bold text-gray-700">What kind of business?</div>
      <LoText lines={1} />
      <div className="grid grid-cols-2 gap-1.5">
        {['Retail', 'Food ✓', 'Salon', 'Tailor', 'Office', 'Other'].map((b, i) => (
          <div key={i} className={`rounded-lg border text-[9px] text-center py-2 ${i === 1 ? 'border-gray-700 bg-gray-100 font-bold' : 'border-gray-200'}`}>{b}</div>
        ))}
      </div>
      <div className="flex-1" />
      <LoBtn label="Continue →" />
    </div>
  );
}
function BusinessDetailsScreen() {
  return (
    <div className="p-3 flex flex-col gap-2.5 h-full">
      <LoBack />
      <LoProgressBar step={2} total={2} />
      <div className="text-xs font-bold text-gray-700">Tell us about your shop</div>
      <LoInput label="City" />
      <LoInput label="Employees" />
      <LoInput label="Years operating" />
      <LoBtn label="Continue →" />
    </div>
  );
}
function CalcElectricityScreen() {
  return (
    <div className="p-3 flex flex-col gap-2 h-full">
      <LoBack />
      <LoProgressBar step={1} total={3} />
      <div className="text-[9px] text-gray-500">Step 1/3</div>
      <div className="text-xs font-bold text-gray-700">⚡ Electricity</div>
      <div className="text-[9px] text-gray-500">Enter your monthly electricity use.</div>
      <div className="w-full h-10 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center text-sm text-gray-600">0 kWh</div>
      <div className="bg-gray-100 rounded-lg p-2 flex items-start gap-1">
        <div className="text-[9px] text-gray-500">ℹ Not sure? A typical café uses 400–800 units/month</div>
      </div>
      <div className="flex-1" />
      <LoBtn label="Next →" />
      <LoNav />
    </div>
  );
}
function CalcLPGScreen() {
  return (
    <div className="p-3 flex flex-col gap-2 h-full">
      <LoBack />
      <LoProgressBar step={2} total={3} />
      <div className="text-[9px] text-gray-500">Step 2/3</div>
      <div className="text-xs font-bold text-gray-700">🔥 LPG</div>
      <div className="text-[9px] text-gray-500">Enter your monthly LPG use.</div>
      <div className="flex items-center justify-center gap-4 bg-gray-100 border border-gray-300 rounded-lg py-3">
        <div className="w-7 h-7 bg-gray-300 rounded flex items-center justify-center text-sm font-bold text-gray-600">−</div>
        <div className="text-sm font-bold text-gray-800">4</div>
        <div className="w-7 h-7 bg-gray-300 rounded flex items-center justify-center text-sm font-bold text-gray-600">+</div>
      </div>
      <div className="text-[9px] text-gray-400 text-center">cylinders / month</div>
      <div className="flex items-center gap-3 mt-1">
        <div className="text-[9px] text-gray-600">Piped gas (PNG)?</div>
        {['Yes', 'No'].map(o => <div key={o} className="px-3 py-0.5 bg-gray-200 rounded-full text-[9px]">{o}</div>)}
      </div>
      <div className="flex-1" />
      <LoBtn label="Next →" />
      <LoNav />
    </div>
  );
}
function CalcWasteScreen() {
  return (
    <div className="p-3 flex flex-col gap-2 h-full">
      <LoBack />
      <LoProgressBar step={3} total={3} />
      <div className="text-[9px] font-bold text-gray-600">Almost done! 🎉</div>
      <div className="text-xs font-bold text-gray-700">🗑 Waste & Transport</div>
      <div className="space-y-1">
        {['Under 5 kg', '5–15 kg ✓', 'More than 15 kg'].map((opt, i) => (
          <div key={i} className={`rounded-lg border px-3 py-1.5 text-[9px] ${i === 1 ? 'border-gray-700 bg-gray-100 font-bold' : 'border-gray-200'}`}>{opt}</div>
        ))}
      </div>
      <div className="text-[9px] text-gray-600 mt-1">🛵 Delivery services?</div>
      <div className="flex gap-1.5">
        {['Yes ✓', 'No'].map((opt, i) => (
          <div key={i} className={`rounded-lg border px-3 py-1.5 text-[9px] ${i === 0 ? 'border-gray-700 bg-gray-100 font-bold' : 'border-gray-200'}`}>{opt}</div>
        ))}
      </div>
      <div className="flex-1" />
      <LoBtn label="Calculate My Footprint 🌿" />
      <LoNav />
    </div>
  );
}
function ResultScreen() {
  return (
    <div className="p-3 flex flex-col gap-2 h-full">
      <div className="text-xs font-bold text-gray-700">Your Impact</div>
      {/* Arc gauge placeholder */}
      <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-center">
        <div className="text-xl font-bold text-gray-800">1.2</div>
        <div className="text-[9px] text-gray-500">t CO₂e / mo</div>
        <LoBox h="h-2" className="mt-2 w-full" />
        <div className="flex justify-between text-[7px] text-gray-400 mt-0.5"><span>Low</span><span>Moderate</span><span>High</span></div>
      </div>
      <div className="space-y-1">
        {[['Electricity', '52%'], ['LPG', '31%'], ['Waste/Transport', '17%']].map(([k, v]) => (
          <div key={k} className="flex items-center gap-2">
            <div className="text-[9px] text-gray-600 w-24">{k}</div>
            <div className="flex-1 h-2 bg-gray-200 rounded-full"><div className="h-2 bg-gray-500 rounded-full" style={{ width: v }} /></div>
            <div className="text-[9px] text-gray-600">{v}</div>
          </div>
        ))}
      </div>
      <div className="text-[9px] text-gray-500 text-center">≈ 14 trees absorb yearly</div>
      <LoBtn label="Offset now →" />
      <LoNav />
    </div>
  );
}
function MarketplaceScreen() {
  return (
    <div className="p-3 flex flex-col gap-2 h-full">
      <div className="text-xs font-bold text-gray-700">Marketplace</div>
      <div className="w-full h-6 border border-gray-300 rounded-lg flex items-center px-2 gap-1.5 bg-gray-50">
        <div className="w-3 h-3 bg-gray-300 rounded-sm" />
        <div className="text-[9px] text-gray-400">Search projects</div>
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {['All ✓', 'Forest', 'Solar', 'Biogas'].map((t, i) => (
          <div key={i} className={`px-2 py-0.5 rounded-full text-[9px] ${i === 0 ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-600'}`}>{t}</div>
        ))}
      </div>
      {[1, 2].map(n => (
        <div key={n} className="border border-gray-200 rounded-xl overflow-hidden">
          <LoBox h="h-14" className="rounded-none" />
          <div className="p-2 flex justify-between items-center">
            <LoText lines={1} className="w-24" />
            <div className="text-[9px] text-gray-600">₹420/t ✅</div>
          </div>
        </div>
      ))}
      <LoNav />
    </div>
  );
}
function BuyCreditsScreen() {
  return (
    <div className="p-3 flex flex-col gap-2 h-full">
      <LoBack />
      <div className="text-xs font-bold text-gray-700">Buy credits</div>
      <div className="text-[9px] text-gray-500">Tonnes to offset</div>
      <div className="flex items-center justify-center gap-4 bg-gray-100 border border-gray-300 rounded-lg py-2">
        <div className="w-6 h-6 bg-gray-300 rounded text-center text-sm font-bold">−</div>
        <div className="text-sm font-bold">3</div>
        <div className="w-6 h-6 bg-gray-300 rounded text-center text-sm font-bold">+</div>
      </div>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 space-y-1.5">
        {[['Tonnes × 3', '3'], ['Price/t', '₹420'], ['Platform fee', '₹40'], ['Total', '₹1,300']].map(([k, v]) => (
          <div key={k} className="flex justify-between text-[9px]">
            <span className="text-gray-500">{k}</span>
            <span className={k === 'Total' ? 'font-bold text-gray-800' : 'text-gray-700'}>{v}</span>
          </div>
        ))}
      </div>
      <div className="flex-1" />
      <LoBtn label="Pay ₹1,300 →" />
      <LoNav />
    </div>
  );
}
function PaymentScreen() {
  return (
    <div className="p-3 flex flex-col gap-2 h-full">
      <LoBack />
      <div className="text-xs font-bold text-gray-700">Payment</div>
      <div className="bg-gray-100 rounded-xl p-3 text-center">
        <div className="text-[9px] text-gray-500">Amount Payable</div>
        <div className="text-base font-bold text-gray-800">₹ 7,140</div>
      </div>
      <div className="text-[9px] font-semibold text-gray-600">Payment Method</div>
      {['UPI ✓', 'Credit / Debit Card', 'Net Banking', 'Wallet'].map((m, i) => (
        <div key={i} className={`border rounded-lg px-3 py-2 text-[9px] ${i === 0 ? 'border-gray-700 bg-gray-50 font-bold' : 'border-gray-200 text-gray-500'}`}>{m}</div>
      ))}
      <LoInput label="Enter UPI ID" />
      <div className="flex items-center gap-1 text-[8px] text-gray-400">🔒 256-bit encrypted</div>
      <LoBtn label="Pay Now" />
      <LoNav />
    </div>
  );
}
function CertificateScreen() {
  return (
    <div className="p-3 flex flex-col gap-2 items-center h-full">
      <div className="text-2xl">✓</div>
      <div className="text-xs font-bold text-gray-700">Offset Successful!</div>
      <div className="text-[9px] text-gray-500">You offset ___ tCO₂</div>
      <div className="w-full border-2 border-dashed border-gray-300 rounded-xl p-4 text-center">
        <div className="text-[8px] tracking-widest text-gray-400 mb-1">CERTIFICATE</div>
        <div className="text-[9px] font-bold text-gray-700">of Carbon Offset</div>
        <div className="text-[8px] text-gray-400 mt-1">Verified · Blockchain ID</div>
      </div>
      <div className="flex gap-2 w-full">
        <LoBtn label="⬇ Download" primary={false} />
        <LoBtn label="↗ Share" />
      </div>
      <LoBtn label="Back to Dashboard" primary={false} />
      <LoNav />
    </div>
  );
}
function DashboardScreen() {
  return (
    <div className="p-3 flex flex-col gap-2 h-full">
      <div className="text-xs font-bold text-gray-700">Hi, ___</div>
      <div className="text-[9px] text-gray-500">Your impact this month</div>
      <div className="bg-gray-100 rounded-xl p-3 flex justify-between">
        <div>
          <div className="text-[8px] text-gray-500">Net Footprint</div>
          <div className="text-sm font-bold text-gray-800">___ tCO₂</div>
          <div className="text-[8px] text-emerald-600">▼ 12% vs last month</div>
        </div>
        <div className="w-12 h-12 bg-gray-200 rounded-full" />
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {['Emitted ___', 'Offset ___'].map(l => (
          <div key={l} className="bg-gray-50 border border-gray-200 rounded-lg p-2 text-[9px] text-gray-600 text-center">{l}</div>
        ))}
      </div>
      <LoBox h="h-10" className="rounded-xl" />
      <div className="text-[9px] font-semibold text-gray-600">Recent Activity</div>
      <LoText lines={2} />
      <LoNav />
    </div>
  );
}

const lofiScreens = [
  { component: <SignUpScreen />, label: 'Sign Up', screen: 'Screen 2/17' },
  { component: <LoginScreen />, label: 'Log In', screen: 'Screen 3/17' },
  { component: <BusinessTypeScreen />, label: 'Business Type', screen: 'Screen 4/17' },
  { component: <BusinessDetailsScreen />, label: 'Business Details', screen: 'Screen 5/17' },
  { component: <CalcElectricityScreen />, label: 'Calculator — Electricity', screen: 'Screen 6/17' },
  { component: <CalcLPGScreen />, label: 'Calculator — LPG', screen: 'Screen 7/17' },
  { component: <CalcWasteScreen />, label: 'Calculator — Waste', screen: 'Screen 8/17' },
  { component: <ResultScreen />, label: 'Emissions Result', screen: 'Screen 9/17' },
  { component: <MarketplaceScreen />, label: 'Offset Marketplace', screen: 'Screen 10/17' },
  { component: <BuyCreditsScreen />, label: 'Buy Credits', screen: 'Screen 12/17' },
  { component: <PaymentScreen />, label: 'Payment', screen: 'Screen 13/17' },
  { component: <CertificateScreen />, label: 'Certificate', screen: 'Screen 14/17' },
  { component: <DashboardScreen />, label: 'Dashboard', screen: 'Screen 15/17' },
];

export function LoFiWireframes() {
  return (
    <section className="px-6 py-20 bg-linear-to-br from-gray-100 to-slate-200">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-gray-800 rounded-full">
              <span className="text-sm font-semibold text-gray-200">LO-FI</span>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 mb-3">Low-Fidelity Wireframes</h3>
            <p className="text-lg text-gray-500">13 key screens — structure & layout before visual design</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {lofiScreens.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex justify-center"
              >
                <PhoneMockup label={s.label} screen={s.screen} variant="lofi">
                  {s.component}
                </PhoneMockup>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
