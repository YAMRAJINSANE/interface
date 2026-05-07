import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
  label?: string;
  screen?: string;
  variant?: 'lofi' | 'hifi';
}

export function PhoneMockup({ children, label, screen, variant = 'hifi' }: PhoneMockupProps) {
  const phoneH = variant === 'lofi' ? 390 : 430;
  const phoneW = variant === 'lofi' ? 200 : 220;

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`relative shrink-0 shadow-2xl overflow-hidden rounded-[2.8rem] ${
          variant === 'lofi'
            ? 'border-10 border-gray-800'
            : 'border-10 border-gray-900'
        }`}
        style={{ width: `${phoneW}px`, height: `${phoneH}px`, display: 'flex', flexDirection: 'column' }}
      >
        {/* Notch */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 rounded-b-2xl z-10 ${
            variant === 'lofi' ? 'bg-gray-800' : 'bg-gray-900'
          }`}
        />
        {/* Status bar */}
        <div
          className={`shrink-0 flex items-center justify-between px-5 text-[9px] font-medium z-0 ${
            variant === 'lofi' ? 'bg-gray-50 text-gray-600' : 'bg-white text-gray-700'
          }`}
          style={{ paddingTop: '22px', paddingBottom: '3px' }}
        >
          <span>9:41</span>
          <div className="flex items-center gap-0.5">
            <span>●●●</span>
            <span className="ml-1">100%</span>
          </div>
        </div>
        {/* Screen content — scrollable */}
        <div
          className="flex-1 overflow-y-auto overflow-x-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
        >
          {children}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-700/60 rounded-full z-10" />
      </div>
      {label && (
        <div className="text-center">
          {screen && (
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">{screen}</p>
          )}
          <p className="text-xs font-medium text-gray-600 max-w-[200px] text-center">{label}</p>
        </div>
      )}
    </div>
  );
}
