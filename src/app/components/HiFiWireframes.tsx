import { motion } from 'framer-motion';
import { PhoneMockup } from './PhoneMockup';
import { Home, Calculator, Leaf, BarChart2, User, Check, ChevronLeft, Bell } from 'lucide-react';

// ── Design tokens ──────────────────────────────────────────
const T = {
  teal600: '#0A6E6E',
  teal500: '#2BA3A3',
  action600: '#12B886',
  marigold500: '#F5A623',
  bg: '#F0F7F7',
  dark: '#032626',
};

function HiNav({ active = 0 }: { active?: number }) {
  const items = [
    { icon: Home, label: 'Home' },
    { icon: Calculator, label: 'Calc' },
    { icon: Leaf, label: 'Offset' },
    { icon: BarChart2, label: 'Stats' },
    { icon: User, label: 'Me' },
  ];
  return (
    <div className="flex justify-around items-center border-t border-gray-100 pt-1.5 pb-1 bg-white mt-auto">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-0.5">
          <item.icon className={`w-3.5 h-3.5 ${i === active ? 'text-[#0A6E6E]' : 'text-gray-400'}`} />
          <span className={`text-[7px] ${i === active ? 'text-[#0A6E6E] font-semibold' : 'text-gray-400'}`}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function HiBackBar({ title = '', step = '' }: { title?: string; step?: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2 bg-white border-b border-gray-100">
      <ChevronLeft className="w-3.5 h-3.5 text-gray-500" />
      <span className="text-[10px] font-semibold text-gray-800 flex-1">{title}</span>
      {step && <span className="text-[8px] text-gray-400">{step}</span>}
    </div>
  );
}

function HiBtn({ label = 'Continue', secondary = false, small = false }: { label?: string; secondary?: boolean; small?: boolean }) {
  return (
    <button
      className={`w-full rounded-xl font-semibold flex items-center justify-center gap-1 ${small ? 'py-2 text-[9px]' : 'py-2.5 text-[10px]'} ${secondary ? `border border-[${T.teal600}] text-[${T.teal600}] bg-white` : `bg-[${T.teal600}] text-white`}`}
      style={{ backgroundColor: secondary ? 'white' : T.teal600, color: secondary ? T.teal600 : 'white', border: secondary ? `1px solid ${T.teal600}` : 'none' }}
    >
      {label}
    </button>
  );
}

// ── Individual Screens ──────────────────────────────────────

function SplashScreen() {
  return (
    <div className="flex flex-col h-full" style={{ background: `linear-gradient(160deg, ${T.teal600} 0%, #035959 60%, #032626 100%)` }}>
      <div className="flex-1 flex flex-col items-center justify-center px-5 pt-4">
        <div className="text-3xl mb-2">🌿</div>
        <h1 className="text-xl font-bold text-white text-center mb-1.5">Make Your Business Carbon Neutral</h1>
        <p className="text-[9px] text-teal-200 text-center leading-relaxed">Simple tools for cafés & restaurants to measure, offset, and showcase sustainability</p>
      </div>
      <div className="px-5 pb-6 space-y-2">
        <HiBtn label="🌿  Get Started" />
        <button className="w-full text-[9px] text-teal-300 text-center">I already have an account →</button>
      </div>
    </div>
  );
}

function SignUpScreen() {
  return (
    <div className="flex flex-col h-full bg-white">
      <HiBackBar />
      <div className="px-4 pt-3 pb-3 flex-1 overflow-y-auto">
        <div className="w-14 h-14 rounded-2xl bg-teal-50 mx-auto mb-3 flex items-center justify-center text-2xl">😊</div>
        <h2 className="text-sm font-bold text-gray-900 text-center mb-0.5">Create Your Account</h2>
        <p className="text-[8px] text-center text-gray-400 mb-3">⭐⭐⭐⭐⭐ Join 500+ sustainable businesses</p>
        <button className="w-full border border-gray-200 rounded-xl py-2 text-[10px] font-semibold text-gray-700 flex items-center justify-center gap-2 mb-3">
          <span className="font-bold">G</span> Continue with Google
        </button>
        <div className="flex items-center gap-2 mb-3"><div className="flex-1 h-px bg-gray-200" /><span className="text-[8px] text-gray-400">or</span><div className="flex-1 h-px bg-gray-200" /></div>
        {['🏪  Business Name', '✉  Email address', '🔒  Password', '🔒  Confirm Password'].map((f, i) => (
          <div key={i} className="mb-2 border border-gray-200 rounded-xl px-3 py-2">
            <p className="text-[9px] text-gray-500">{f}</p>
          </div>
        ))}
        <HiBtn label="Create Account" />
        <p className="text-[8px] text-gray-400 text-center mt-2">Already have an account? <span style={{ color: T.teal600 }}>Log in</span></p>
      </div>
    </div>
  );
}

function LoginScreen() {
  return (
    <div className="flex flex-col h-full bg-white">
      <HiBackBar />
      <div className="px-4 pt-4 pb-3 flex-1">
        <div className="w-14 h-14 rounded-2xl bg-teal-50 mx-auto mb-3 flex items-center justify-center text-2xl">👋</div>
        <h2 className="text-sm font-bold text-gray-900 text-center mb-0.5">Welcome Back</h2>
        <p className="text-[8px] text-gray-400 text-center mb-4">Continue your sustainability journey</p>
        <button className="w-full border border-gray-200 rounded-xl py-2 text-[10px] font-semibold text-gray-700 flex items-center justify-center gap-2 mb-3">
          <span className="font-bold">G</span> Continue with Google
        </button>
        <div className="flex items-center gap-2 mb-3"><div className="flex-1 h-px bg-gray-200" /><span className="text-[8px] text-gray-400">or</span><div className="flex-1 h-px bg-gray-200" /></div>
        {['✉  Email address', '🔒  Password'].map((f, i) => (
          <div key={i} className="mb-2 border border-gray-200 rounded-xl px-3 py-2">
            <p className="text-[9px] text-gray-500">{f}</p>
          </div>
        ))}
        <p className="text-right text-[8px] mb-3" style={{ color: T.teal600 }}>Forgot Password?</p>
        <HiBtn label="Log In" />
        <p className="text-[8px] text-gray-400 text-center mt-2">New here? <span style={{ color: T.teal600 }}>Create an account</span></p>
      </div>
    </div>
  );
}

function BusinessTypeScreen() {
  return (
    <div className="flex flex-col h-full bg-white">
      <HiBackBar title="Step 1 of 2" />
      <div className="px-4 pt-3 pb-3 flex-1">
        <h2 className="text-sm font-bold text-gray-900 mb-1">What type of business do you run?</h2>
        <p className="text-[8px] text-gray-400 mb-4">We'll customize everything based on your type</p>
        <div className="space-y-2">
          {[
            { icon: '☕', label: 'Café', selected: true },
            { icon: '🍽', label: 'Restaurant', selected: false },
            { icon: '🥐', label: 'Bakery', selected: false },
            { icon: '🍱', label: 'Cloud Kitchen', selected: false },
            { icon: '🏪', label: 'Other Small Business', selected: false },
          ].map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl border"
              style={{ borderColor: b.selected ? T.teal600 : '#e5e7eb', backgroundColor: b.selected ? '#E6F2F2' : 'white' }}
            >
              <span className="text-base">{b.icon}</span>
              <span className="text-[10px] font-medium flex-1" style={{ color: b.selected ? T.teal600 : '#374151' }}>{b.label}</span>
              {b.selected && <Check className="w-3.5 h-3.5" style={{ color: T.teal600 }} />}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <HiBtn label="Continue →" />
        </div>
      </div>
    </div>
  );
}

function CalculatorResultScreen() {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-900">Your Café's Carbon Footprint</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {/* Arc gauge */}
        <div className="bg-linear-to-br from-teal-50 to-emerald-50 rounded-2xl p-4 text-center border border-teal-100">
          <div className="text-3xl font-bold mb-0.5" style={{ color: T.teal600 }}>8.4</div>
          <div className="text-[9px] text-gray-500 mb-2">tons CO₂ / year</div>
          <div className="flex justify-between text-[7px] text-gray-400 mb-1"><span>Low</span><span>Moderate</span><span>High</span></div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-2 rounded-full" style={{ width: '55%', background: `linear-gradient(90deg, ${T.action600}, ${T.teal500})` }} />
          </div>
        </div>
        {/* Breakdown */}
        <div className="space-y-2">
          {[['⚡ Electricity', '52%', 52], ['🔥 LPG', '31%', 31], ['🗑 Waste/Transport', '17%', 17]].map(([k, v, pct]) => (
            <div key={String(k)} className="flex items-center gap-2">
              <span className="text-[9px] text-gray-600 w-28">{k}</span>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full"><div className="h-1.5 rounded-full" style={{ width: `${pct}%`, backgroundColor: T.teal600 }} /></div>
              <span className="text-[9px] text-gray-600 w-7 text-right">{v}</span>
            </div>
          ))}
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 text-center">
          <p className="text-[9px] text-emerald-700">💡 Like driving 35,000 km by car/year</p>
          <p className="text-[9px] text-emerald-600 font-semibold mt-0.5">✅ You emit 12% less than average!</p>
        </div>
        <HiBtn label="Offset My Emissions 🌿" />
        <HiBtn label="Save Report for Later" secondary />
      </div>
      <HiNav active={1} />
    </div>
  );
}

function MarketplaceScreen() {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-sm font-bold text-gray-900">Offset Marketplace</h2>
        <Bell className="w-4 h-4 text-gray-400" />
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
          <span className="text-[9px] text-gray-400">🔍 Search projects…</span>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {['All ✓', '🌳', '☀', '💨', '🤝'].map((t, i) => (
            <div key={i} className="px-2.5 py-1 rounded-full text-[9px] font-medium" style={{ backgroundColor: i === 0 ? T.teal600 : '#f3f4f6', color: i === 0 ? 'white' : '#6b7280' }}>{t}</div>
          ))}
        </div>
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-2.5">
          <span className="text-[8px] font-bold" style={{ color: T.teal600 }}>⭐ RECOMMENDED FOR YOU</span>
        </div>
        {[
          { name: 'Rajasthan Solar Farm', loc: 'Rajasthan, India', price: '₹850/credit', color: 'from-orange-100 to-yellow-100' },
          { name: 'Kerala Forest Conservation', loc: 'Kerala', price: '₹720/credit', color: 'from-green-100 to-emerald-100' },
        ].map((p, i) => (
          <div key={i} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
            <div className={`h-12 bg-linear-to-r ${p.color}`} />
            <div className="p-2.5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-900">{p.name}</p>
                  <p className="text-[8px] text-gray-400">📍 {p.loc}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-bold" style={{ color: T.teal600 }}>{p.price}</p>
                  <p className="text-[7px] text-emerald-600">✅ Verified</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="bg-teal-50 border border-teal-100 rounded-xl p-2.5 text-center">
          <p className="text-[8px] text-teal-700">You need <strong>8.4 credits</strong> to go carbon neutral</p>
          <button className="mt-1.5 w-full py-1.5 rounded-lg text-[9px] font-semibold text-white" style={{ backgroundColor: T.teal600 }}>Offset Now →</button>
        </div>
      </div>
      <HiNav active={2} />
    </div>
  );
}

function PurchaseScreen() {
  return (
    <div className="flex flex-col h-full bg-white">
      <HiBackBar title="Review Your Offset Order" />
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        <div className="flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-xl p-3">
          <span className="text-lg">☀</span>
          <div>
            <p className="text-[10px] font-bold text-gray-800">Rajasthan Solar Farm</p>
            <p className="text-[8px] text-emerald-600">✅ Gold Standard Verified</p>
          </div>
        </div>
        <div className="border border-gray-100 rounded-xl p-3 space-y-2">
          {[['Credits needed', '8.4 tons CO₂'], ['Price/credit', '₹850'], ['Total', '₹7,140']].map(([k, v]) => (
            <div key={k} className="flex justify-between text-[9px]">
              <span className="text-gray-500">{k}</span>
              <span className={k === 'Total' ? 'font-bold text-gray-900' : 'text-gray-700'}>{v}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
          <span className="text-[9px] text-gray-600">Adjust credits:</span>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg border border-gray-300 flex items-center justify-center text-sm">−</div>
            <span className="text-[10px] font-bold" style={{ color: T.teal600 }}>8.4</span>
            <div className="w-6 h-6 rounded-lg border border-gray-300 flex items-center justify-center text-sm">+</div>
          </div>
        </div>
        <HiBtn label="Proceed to Payment →" />
        <div className="flex justify-around text-[8px] text-gray-400 text-center">
          <span>🔒 Secure</span>
          <span>✅ Credits retired immediately</span>
          <span>📄 Cert in 24hrs</span>
        </div>
      </div>
      <HiNav active={2} />
    </div>
  );
}

function PaymentScreen() {
  return (
    <div className="flex flex-col h-full bg-white">
      <HiBackBar title="Complete Payment" />
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        <div className="bg-linear-to-br from-teal-600 to-emerald-700 rounded-2xl p-4 text-white text-center">
          <p className="text-[9px] opacity-70 mb-0.5">Amount Payable</p>
          <p className="text-2xl font-bold">₹7,140</p>
          <p className="text-[8px] opacity-70 mt-0.5">8.4 credits · Rajasthan Solar Farm</p>
        </div>
        <div className="flex gap-2">
          {['📱 UPI', '💳 Card', '🏦 Net Banking'].map((m, i) => (
            <div key={i} className="flex-1 py-1.5 rounded-xl text-center text-[8px] font-semibold" style={{ backgroundColor: i === 0 ? T.teal600 : '#f9fafb', color: i === 0 ? 'white' : '#6b7280', border: i !== 0 ? '1px solid #e5e7eb' : 'none' }}>{m}</div>
          ))}
        </div>
        <div>
          <p className="text-[8px] text-gray-500 mb-2">Pay with:</p>
          <div className="flex gap-2">
            {['GPay', 'PhonePe', 'Paytm'].map(app => (
              <div key={app} className="flex-1 py-2 bg-gray-50 border border-gray-200 rounded-xl text-[9px] text-center text-gray-700 font-medium">{app}</div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2">
          <span className="text-[9px] text-gray-400">📱 yourname@upi</span>
        </div>
        <HiBtn label="Pay ₹7,140" />
        <p className="text-center text-[8px] text-gray-400">🔒 256-bit encrypted · Powered by Razorpay</p>
      </div>
      <HiNav active={2} />
    </div>
  );
}

function CertificateScreen() {
  return (
    <div className="flex flex-col h-full" style={{ background: `linear-gradient(160deg, #E6F8F1 0%, #C8EEDC 100%)` }}>
      <div className="flex-1 flex flex-col items-center justify-center px-5 py-4">
        <div className="w-12 h-12 rounded-full bg-emerald-400 flex items-center justify-center mb-3 shadow-lg">
          <Check className="w-7 h-7 text-white" strokeWidth={3} />
        </div>
        <h2 className="text-sm font-bold text-gray-900 text-center mb-1">🎉 Congratulations!</h2>
        <p className="text-[9px] text-gray-600 text-center mb-4">Mukul's Café is now officially carbon neutral</p>
        {/* Certificate */}
        <div className="w-full bg-[#032626] rounded-2xl p-4 text-white text-center shadow-2xl">
          <p className="text-[8px] tracking-[0.25em] text-teal-300 uppercase mb-1">Certificate</p>
          <p className="text-[9px] font-semibold text-teal-200">of Carbon Offset</p>
          <div className="my-3 border-t border-teal-700" />
          <p className="text-[10px] font-bold text-white">Mukul's Café</p>
          <p className="text-[8px] text-teal-300 mt-0.5">April 2026 · ID: GRM-2026-00847</p>
          <div className="mt-2 inline-flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/40 rounded-full px-3 py-1">
            <Check className="w-3 h-3 text-emerald-400" />
            <span className="text-[8px] text-emerald-300 font-semibold">CARBON NEUTRAL</span>
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 space-y-2">
        <HiBtn label="📱 Share on Instagram & WhatsApp" />
        <HiBtn label="📥 Download Certificate PDF" secondary />
        <button className="w-full text-[9px] text-gray-600 text-center" style={{ color: T.teal600 }}>Go to Dashboard →</button>
      </div>
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="px-4 py-2.5 flex items-center justify-between border-b border-gray-100">
        <div>
          <p className="text-[9px] text-gray-400">Hello,</p>
          <p className="text-[11px] font-bold text-gray-900">Mukul's Café ☀</p>
        </div>
        <Bell className="w-4 h-4 text-gray-400" />
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {/* Impact card */}
        <div className="bg-linear-to-br from-teal-600 to-emerald-700 rounded-2xl p-4 text-white">
          <p className="text-[8px] opacity-70 mb-1">Your impact this month</p>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xl font-bold">3.2 <span className="text-sm">tCO₂</span></p>
              <p className="text-[8px] text-emerald-300">▼ 12% vs last month</p>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-white/30 flex items-center justify-center">
              <span className="text-[9px] font-bold">72%</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            {[['Emitted', '4.2t'], ['Offset', '1.0t']].map(([k, v]) => (
              <div key={k} className="bg-white/10 rounded-xl p-2 text-center">
                <p className="text-[8px] opacity-70">{k}</p>
                <p className="text-[11px] font-bold">{v}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Quick actions */}
        <div className="grid grid-cols-4 gap-2">
          {[['🧮', 'Calculate'], ['🌿', 'Offset'], ['🏆', 'Certificate'], ['📤', 'Share Badge']].map(([icon, label]) => (
            <div key={label} className="bg-teal-50 rounded-xl p-2 text-center border border-teal-100">
              <span className="text-lg">{icon}</span>
              <p className="text-[7px] text-teal-700 mt-0.5 font-medium leading-tight">{label}</p>
            </div>
          ))}
        </div>
        {/* Impact stats */}
        <div className="grid grid-cols-3 gap-2">
          {[['🌳', '3 trees', 'equivalent'], ['⚡', '2,400 kWh', 'clean energy'], ['👨‍👩‍👧', '12', 'families']].map(([icon, val, label]) => (
            <div key={label} className="bg-gray-50 border border-gray-100 rounded-xl p-2 text-center">
              <span className="text-sm">{icon}</span>
              <p className="text-[10px] font-bold text-gray-800">{val}</p>
              <p className="text-[7px] text-gray-400">{label}</p>
            </div>
          ))}
        </div>
        {/* Recent activity */}
        <div>
          <p className="text-[9px] font-semibold text-gray-600 mb-2">Recent Activity</p>
          {[
            ['Rajasthan Solar Farm', '8.4 tons · Apr 2026', '✅'],
            ['Carbon Report Saved', 'Mar 2026', '📄'],
          ].map(([title, sub, icon]) => (
            <div key={String(title)} className="flex items-center gap-2 py-2 border-b border-gray-50">
              <span className="text-sm">{icon}</span>
              <div className="flex-1">
                <p className="text-[9px] font-medium text-gray-800">{title}</p>
                <p className="text-[7px] text-gray-400">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HiNav active={0} />
    </div>
  );
}

function LearnScreen() {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-900">Learn</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
          <span className="text-[9px] text-gray-400">🔍 Search articles…</span>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {['All', 'Basics', 'Carbon Offsets', 'Policy'].map((t, i) => (
            <div key={t} className="px-2.5 py-0.5 rounded-full text-[8px] font-medium" style={{ backgroundColor: i === 0 ? T.teal600 : '#f3f4f6', color: i === 0 ? 'white' : '#6b7280' }}>{t}</div>
          ))}
        </div>
        {/* Featured */}
        <div className="bg-linear-to-r from-teal-600 to-emerald-600 rounded-2xl p-4 text-white">
          <p className="text-[7px] font-bold uppercase tracking-widest opacity-70 mb-1">FEATURED · START HERE 👋</p>
          <p className="text-[11px] font-bold mb-0.5">What is a Carbon Credit?</p>
          <p className="text-[8px] opacity-80">5 min read</p>
        </div>
        {[
          ['🌍', 'How your café affects the climate', '3 min'],
          ['☕', 'What does carbon neutral mean?', '2 min'],
          ['💡', '5 easy ways to cut your emissions', '4 min'],
          ['🤝', 'How carbon offsetting works', '3 min'],
          ['🌱', 'Why customers prefer green businesses', '2 min'],
        ].map(([icon, title, time]) => (
          <div key={String(title)} className="flex items-center gap-3 py-2 border-b border-gray-50">
            <span className="text-base">{icon}</span>
            <div className="flex-1">
              <p className="text-[9px] font-medium text-gray-800">{title}</p>
              <p className="text-[7px] text-gray-400">{time} read</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
        ))}
      </div>
      <HiNav active={3} />
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="flex flex-col h-full bg-white">
      <div className="px-4 py-3 border-b border-gray-100">
        <h2 className="text-sm font-bold text-gray-900">Profile</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        {/* Profile banner */}
        <div className="bg-linear-to-r from-teal-600 to-emerald-700 px-4 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center text-lg font-bold">M</div>
            <div>
              <p className="text-[11px] font-bold">Mukul's Café</p>
              <p className="text-[8px] opacity-70">mukul@brewbeans.in</p>
              <div className="flex items-center gap-1 mt-0.5">
                <Check className="w-2.5 h-2.5 text-emerald-300" />
                <span className="text-[7px] text-emerald-200">Verified</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-3">
            {[['8.4t', 'Offsets'], ['1', 'Cert'], ['1 Yr', 'Active']].map(([v, l]) => (
              <div key={l} className="bg-white/10 rounded-lg py-1.5 text-center">
                <p className="text-[10px] font-bold">{v}</p>
                <p className="text-[7px] opacity-70">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 py-3 space-y-1">
          {[
            ['🏪', 'Edit Business Profile'],
            ['📄', 'My Certificates'],
            ['🔔', 'Notification Preferences'],
            ['🔒', 'Privacy & Security'],
            ['❓', 'Help & FAQ'],
            ['📞', 'Contact Support'],
            ['⭐', 'Rate GreenMark'],
          ].map(([icon, label]) => (
            <div key={String(label)} className="flex items-center gap-3 py-2.5 border-b border-gray-50">
              <span className="text-sm">{icon}</span>
              <p className="text-[10px] text-gray-700 flex-1">{label}</p>
              <span className="text-gray-300 text-xs">›</span>
            </div>
          ))}
          <div className="pt-2">
            <button className="w-full py-2 rounded-xl border border-red-200 text-[10px] font-semibold text-red-500 bg-red-50">Log Out</button>
          </div>
        </div>
      </div>
      <HiNav active={4} />
    </div>
  );
}

const hifiScreens = [
  { component: <SplashScreen />, label: 'Splash / Home', screen: 'Screen 1/17' },
  { component: <SignUpScreen />, label: 'Create Account', screen: 'Screen 2/17' },
  { component: <LoginScreen />, label: 'Welcome Back', screen: 'Screen 3/17' },
  { component: <BusinessTypeScreen />, label: 'Business Type', screen: 'Screen 4/17' },
  { component: <CalculatorResultScreen />, label: 'Emissions Result', screen: 'Screen 9/17' },
  { component: <MarketplaceScreen />, label: 'Offset Marketplace', screen: 'Screen 10/17' },
  { component: <PurchaseScreen />, label: 'Review Order', screen: 'Screen 12/17' },
  { component: <PaymentScreen />, label: 'Payment', screen: 'Screen 13/17' },
  { component: <CertificateScreen />, label: 'Carbon Neutral! 🎉', screen: 'Screen 14/17' },
  { component: <DashboardScreen />, label: 'Dashboard', screen: 'Screen 15/17' },
  { component: <LearnScreen />, label: 'Learn', screen: 'Screen 16/17' },
  { component: <ProfileScreen />, label: 'Profile', screen: 'Screen 17/17' },
];

export function HiFiWireframes() {
  return (
    <section className="px-6 py-20 bg-linear-to-br from-teal-900 via-emerald-950 to-gray-950">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-white/10 rounded-full">
              <span className="text-sm font-semibold text-emerald-300">HI-FI</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-3">High-Fidelity Wireframes</h3>
            <p className="text-lg text-teal-200">12 screens — final visual design with Carbon Leaf design system</p>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-400">17</p>
                <p className="text-xs text-gray-400">Total Screens</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-teal-400">100%</p>
                <p className="text-xs text-gray-400">Mobile-First</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">UPI</p>
                <p className="text-xs text-gray-400">First Payment</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {hifiScreens.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex justify-center"
              >
                <PhoneMockup label={s.label} screen={s.screen} variant="hifi">
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
