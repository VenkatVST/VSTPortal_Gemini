import React from 'react';

interface HeaderLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical' | 'iconOnly';
}

export default function HeaderLogo({ className = '', size = 'md', layout = 'horizontal' }: HeaderLogoProps) {
  // Map size keys to dimensions
  const dimensions = {
    sm: { icon: 32, text: 'text-lg', spacing: 'gap-2' },
    md: { icon: 44, text: 'text-2xl', spacing: 'gap-3' },
    lg: { icon: 140, text: 'text-4xl', spacing: 'gap-5' },
  }[size];

  // Precise brand SVG configuration mimicking physical logo
  const logoIcon = (
    <svg
      width={dimensions.icon}
      height={dimensions.icon}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      id="vsquare-logo-svg"
    >
      <defs>
        {/* Subtle gradient for gold to match high-end corporate feeling */}
        <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFB658" />
          <stop offset="60%" stopColor="#CE9A36" />
          <stop offset="100%" stopColor="#A47522" />
        </linearGradient>
        {/* Deep navy logo color */}
        <linearGradient id="logoNavy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1C304A" />
          <stop offset="100%" stopColor="#132B43" />
        </linearGradient>
        {/* Secure rounded rectangular frame clip */}
        <clipPath id="logoClip">
          <rect x="15" y="15" width="170" height="170" rx="42" />
        </clipPath>
      </defs>

      {/* Main clipped logo shape */}
      <g clipPath="url(#logoClip)">
        {/* Golden top portion */}
        <rect x="0" y="0" width="200" height="200" fill="url(#logoGold)" />
        
        {/* Wave divider and deep navy bottom portion */}
        <path
          d="M 0,112 C 65,108 120,62 200,82 L 200,200 L 0,200 Z"
          fill="url(#logoNavy)"
          stroke="url(#logoGold)"
          strokeWidth="3"
        />
        
        {/* White "V" centered at top-middle of the gold gradient area */}
        <text
          x="100"
          y="84"
          fill="#FFFFFF"
          fontFamily="'Outfit', 'Inter', sans-serif"
          fontWeight="500"
          fontSize="72"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          V
        </text>
      </g>
    </svg>
  );

  if (layout === 'iconOnly') {
    return <div className={`flex items-center inline-block ${className}`}>{logoIcon}</div>;
  }

  if (layout === 'vertical') {
    return (
      <div className={`flex flex-col items-center ${dimensions.spacing} ${className}`}>
        {logoIcon}
        <div className="font-sans tracking-tight text-center leading-none text-xl">
          <span className="text-gold-500 font-semibold uppercase">VS</span>
          <span className="text-[#1C304A] font-bold">quare</span>
          <span className="text-gold-500 font-light">Thoughts</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${stylesForLayout(layout)} ${dimensions.spacing} group ${className}`}>
      {logoIcon}
      <div className={`font-sans tracking-[0.015em] leading-none ${dimensions.text}`}>
        <span className="text-gold-500 font-semibold uppercase">VS</span>
        <span className="text-[#1C304A] group-hover:text-gold-500 transition-colors duration-200 font-bold">quare</span>
        <span className="text-gold-500 font-light">Thoughts</span>
      </div>
    </div>
  );
}

function stylesForLayout(layout: 'horizontal' | 'vertical' | 'iconOnly') {
  switch (layout) {
    case 'horizontal': return 'flex-row';
    default: return '';
  }
}
