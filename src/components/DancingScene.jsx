export default function DancingScene() {
  return (
    <svg
      viewBox="0 0 360 280"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        <radialGradient id="dsc-glow">
          <stop offset="0%" stopColor="#fff8e0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fff8e0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dsc-dress" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f5ede5" />
        </linearGradient>
        <linearGradient id="dsc-suit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d1f26" />
          <stop offset="100%" stopColor="#1a1015" />
        </linearGradient>
      </defs>

      <ellipse cx="155" cy="258" rx="100" ry="5" fill="rgba(79,54,64,0.05)" />
      <ellipse cx="295" cy="258" rx="35" ry="4" fill="rgba(79,54,64,0.04)" />

      <g className="dsc-couple">
        <circle cx="148" cy="88" r="13" fill="#dbb896" />
        <path d="M135 84 Q148 72 161 84" fill="#3a2520" />
        <path d="M135 85 Q140 83 148 82 Q156 83 161 85" fill="#3a2520" />

        <rect x="142" y="101" width="12" height="6" rx="3" fill="#dbb896" />
        <path d="M134 107 Q140 104 156 104 Q162 107 161 150 L135 150 Z" fill="url(#dsc-suit)" />
        <path d="M143 107 L148 120 L153 107" fill="#f5f0eb" />
        <path d="M146 106 L148 109 L150 106 L148 103.5 Z" fill="#9b5a6e" />
        <rect x="147" y="109" width="2" height="6" rx="0.5" fill="#9b5a6e" />

        <path d="M160 110 Q172 118 174 134" stroke="#2d1f26" strokeWidth="8" strokeLinecap="round" />
        <circle cx="175" cy="136" r="4.5" fill="#dbb896" />
        <path d="M134 110 Q120 118 114 130" stroke="#2d1f26" strokeWidth="8" strokeLinecap="round" />
        <circle cx="113" cy="132" r="4.5" fill="#dbb896" />

        <path d="M137 150 L134 218 L142 218 L148 162 L154 218 L162 218 L159 150" fill="url(#dsc-suit)" />
        <path d="M131 216 L134 218 L143 218 L143 222 L129 222 Z" fill="#1a0f14" />
        <path d="M153 216 L154 218 L163 218 L165 222 L151 222 Z" fill="#1a0f14" />

        <path
          d="M180 72 Q198 76 202 96 Q196 114 189 118 Q183 104 181 90"
          fill="rgba(255,255,255,0.3)"
          className="dsc-veil"
        />
        <path
          d="M189 118 Q195 140 192 170 Q186 180 180 172 Q184 140 182 118"
          fill="rgba(255,255,255,0.18)"
          className="dsc-veil"
        />

        <circle cx="176" cy="84" r="13" fill="#dbb896" />
        <path d="M163 79 Q168 68 176 66 Q184 68 189 79 Q185 74 176 73 Q167 74 163 79" fill="#5a3322" />
        <ellipse cx="182" cy="71" r="5.5" ry="5" fill="#5a3322" />
        <circle cx="186" cy="69" r="3" fill="#e8a0b0" />
        <circle cx="184" cy="67" r="1.5" fill="#edb8c8" />

        <rect x="170" y="97" width="12" height="5" rx="2.5" fill="#dbb896" />
        <path d="M166 102 Q172 99 186 99 Q190 102 188 120 L168 120 Z" fill="#ffffff" stroke="#ece4dc" strokeWidth="0.5" />
        <path d="M167 106 Q170 103 176 102 Q182 103 185 106" stroke="rgba(228,218,208,0.5)" strokeWidth="0.5" fill="none" />

        <path
          d="M168 120 Q154 165 140 250 Q176 264 212 250 Q198 165 188 120 Z"
          fill="url(#dsc-dress)"
          stroke="#ece4dc"
          strokeWidth="0.5"
          className="dsc-dress"
        />
        <path d="M168 120 Q160 155 148 240" stroke="rgba(228,218,208,0.35)" strokeWidth="0.7" fill="none" className="dsc-dress" />
        <path d="M188 120 Q196 155 208 240" stroke="rgba(228,218,208,0.35)" strokeWidth="0.7" fill="none" className="dsc-dress" />
        <path d="M178 120 Q178 175 176 250" stroke="rgba(228,218,208,0.2)" strokeWidth="0.5" fill="none" />

        <path d="M166 104 Q152 114 116 128" stroke="#dbb896" strokeWidth="6" strokeLinecap="round" />
        <circle cx="114" cy="130" r="4" fill="#dbb896" />
        <path d="M188 104 Q192 112 190 120" stroke="#dbb896" strokeWidth="6" strokeLinecap="round" />

        <g>
          <circle cx="114" cy="136" r="4" fill="#e8a0b0" opacity="0.85" />
          <circle cx="118" cy="133" r="3" fill="#d4708a" opacity="0.75" />
          <circle cx="111" cy="133" r="3" fill="#edb8c8" opacity="0.75" />
          <circle cx="115" cy="140" r="2.5" fill="#c85a7c" opacity="0.6" />
          <circle cx="110" cy="137" r="2" fill="#edb8c8" opacity="0.5" />
          <path d="M112 140 L113 152 M116 140 L115 150" stroke="#6b8f5e" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      </g>

      <g className="dsc-heart1" style={{ opacity: 0 }}>
        <path d="M130 56 C130 52 126 50 123 52 C120 50 116 52 116 56 C116 62 123 66 123 66 C123 66 130 62 130 56 Z" fill="#e8a0b0" opacity="0.6" />
      </g>
      <g className="dsc-heart2" style={{ opacity: 0 }}>
        <path d="M186 48 C186 45 183 43 181 45 C179 43 176 45 176 48 C176 52 181 55 181 55 C181 55 186 52 186 48 Z" fill="#d4708a" opacity="0.5" />
      </g>
      <g className="dsc-heart3" style={{ opacity: 0 }}>
        <path d="M160 60 C160 57.5 157.5 56 155.5 57.5 C153.5 56 151 57.5 151 60 C151 63.5 155.5 66 155.5 66 C155.5 66 160 63.5 160 60 Z" fill="#edb8c8" opacity="0.55" />
      </g>

      <g className="dsc-cam">
        <circle cx="295" cy="115" r="11" fill="#c9a07a" />
        <path d="M284 111 Q295 101 306 111" fill="#3a3a3a" />
        <path d="M282 111 L308 111 L306 114 L283 114 Z" fill="#3a3a3a" />
        <path d="M306 112 L318 110 L317 113 L306 114 Z" fill="#333" />

        <rect x="287" y="126" width="16" height="5" rx="2" fill="#c9a07a" />
        <path d="M283 131 Q289 128 301 128 Q307 131 306 166 L284 166 Z" fill="#5a6672" />
        <path d="M291 131 L295 138 L299 131" fill="#f0ebe5" />
        <path d="M283 131 L282 134 L286 135 L284 131" fill="#5a6672" />
        <path d="M307 131 L308 134 L304 135 L306 131" fill="#5a6672" />

        <g className="dsc-camera">
          <rect x="258" y="111" width="26" height="16" rx="3" fill="#2a2a2a" />
          <rect x="262" y="107" width="10" height="6" rx="1.5" fill="#3a3a3a" />
          <circle cx="271" cy="119" r="6" fill="#3a3a3a" stroke="#4a4a4a" strokeWidth="0.8" />
          <circle cx="271" cy="119" r="3.5" fill="#1a1a2e" />
          <circle cx="269.5" cy="117.5" r="1.2" fill="rgba(255,255,255,0.3)" />
          <rect x="278" y="113" width="5" height="4" rx="1" fill="#3a3a3a" />
          <rect x="266" y="105" width="10" height="4" rx="1" fill="#444" />
        </g>

        <g className="dsc-flash">
          <circle cx="271" cy="105" r="22" fill="url(#dsc-glow)" />
          <line x1="271" y1="80" x2="271" y2="88" stroke="#fff8e0" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
          <line x1="253" y1="95" x2="258" y2="99" stroke="#fff8e0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <line x1="289" y1="95" x2="284" y2="99" stroke="#fff8e0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
          <line x1="260" y1="85" x2="264" y2="90" stroke="#fff8e0" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
          <line x1="282" y1="85" x2="278" y2="90" stroke="#fff8e0" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        </g>

        <path d="M283 136 Q275 128 270 124" stroke="#c9a07a" strokeWidth="6" strokeLinecap="round" />
        <path d="M307 136 Q300 126 284 122" stroke="#c9a07a" strokeWidth="6" strokeLinecap="round" />

        <path d="M286 164 L284 225 L291 225 L295 174 L299 225 L306 225 L304 164" fill="#3d4550" />
        <path d="M281 223 L284 225 L292 225 L292 228 L279 228 Z" fill="#222" />
        <path d="M298 223 L299 225 L307 225 L309 228 L296 228 Z" fill="#222" />

        <path d="M283 131 Q276 142 271 128" stroke="#5a6672" strokeWidth="1.5" fill="none" opacity="0.5" />
      </g>
    </svg>
  );
}
