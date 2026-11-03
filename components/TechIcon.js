const icons = {
  react: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <g fill="none" stroke="#61DAFB" strokeWidth="1.2">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#111" />
      <path
        d="M9 7.5h1.6l4.2 6.3V7.5H16.5V16.5h-1.5L10.7 10v6.5H9V7.5Z"
        fill="#fff"
      />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M11 18.2c0 1.7-.9 2.5-2.4 2.5-1.1 0-1.9-.5-2.4-1.3l1.3-.8c.2.4.5.7 1 .7.5 0 .8-.2.8-1.1V12h1.7v6.2Zm4.5 2.5c-1.5 0-2.5-.7-3-1.6l1.3-.8c.3.5.7.9 1.5.9.6 0 1-.3 1-.7 0-.5-.4-.7-1.1-.9l-.4-.2c-1.1-.5-1.9-1.1-1.9-2.4 0-1.2.9-2.1 2.4-2.1 1 0 1.8.4 2.3 1.3l-1.3.8c-.3-.4-.6-.6-1.1-.6-.5 0-.8.3-.8.6 0 .4.3.6 1 .9l.4.2c1.3.6 2 1.2 2 2.5 0 1.4-1.1 2.2-2.6 2.2Z"
        fill="#111"
      />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M13.2 11.1h-2.1V9.6H17v1.5h-2.1V19h-1.7V11.1Zm-5.7 4.4c.2.4.5.7 1 .7.5 0 .8-.2.8-.7v-6h1.7v6.1c0 1.7-.9 2.5-2.5 2.5-1.1 0-1.9-.5-2.4-1.3l1.4-.8Z"
        fill="#fff"
      />
    </svg>
  ),
  redux: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#764ABC"
        d="M16.6 15.8c.7-1.2.9-2.6.5-3.9.8-.2 1.4-.8 1.6-1.6.3-1.2-.4-2.4-1.6-2.7-.4-.1-.8-.1-1.1 0-1.2-1.4-2.9-2.2-4.7-2.3 0-.5-.1-.9-.4-1.3-.7-1-2-1.2-3-.5-.7.5-1 1.3-.8 2.1-1.5.6-2.6 1.9-2.9 3.5-.4 0-.8.2-1.1.4-1 .7-1.2 2.1-.5 3.1.3.4.7.7 1.2.8-.1 1.6.5 3.2 1.7 4.2.3.3.7.5 1 .6.1 1.1.9 2 2 2.2 1.1.2 2.2-.4 2.6-1.5.9.3 1.9.3 2.8 0 .6 1 1.9 1.4 3 1 .8-.3 1.4-1 1.6-1.8.2-.1.3-.3.5-.4 1-.7 1.2-2.1.5-3.1-.2-.3-.4-.5-.7-.6Zm-8.5-7.8c.3 0 .5.1.7.3-.8.4-1.5 1-1.9 1.8-.1-.1-.2-.1-.3-.1-.5 0-.9-.4-.9-.9s.4-.9.9-.9c.5-.2 1-.2 1.5-.2Zm1.8 11.5c-.5 0-.9-.4-.9-.9 0-.1 0-.2.1-.3.5.2 1 .3 1.5.3.2 0 .4 0 .6-.1 0 .1.1.3.1.4 0 .5-.4.9-.9.9-.2 0-.3 0-.5-.3Zm7.2-1.3c-.2.1-.3.1-.5.1-.3 0-.5-.1-.7-.2.4-.6.7-1.3.8-2 .4.1.7.4.8.8.1.5-.1.9-.4 1.3Z"
      />
    </svg>
  ),
  mui: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#007FFF" d="M0 2.4 12 0l12 2.4v8.4L12 24 0 10.8V2.4Z" />
      <path fill="#fff" d="M7 7.2 12 6l5 1.2v3.2L12 16 7 10.4V7.2Z" opacity=".9" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#38BDF8"
        d="M12 6.5c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.4-1.5.7.2 1.3.7 1.9 1.3 1 1.1 2.1 2.2 4.2 2.2 2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.3-.7-1.9-1.3-1-1.1-2.1-2.2-4.2-2.2Zm-5 5.5c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.4-1.5.7.2 1.3.7 1.9 1.3 1 1.1 2.1 2.2 4.2 2.2 2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.3-.7-1.9-1.3-1-1.1-2.1-2.2-4.2-2.2Z"
      />
    </svg>
  ),
  android: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#3DDC84"
        d="M17.5 14.8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-11 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.1 8.2l1.4-2.5a.4.4 0 0 0-.7-.4l-1.4 2.5A8.3 8.3 0 0 0 12 7.2c-1.3 0-2.5.3-3.4.7L7.1 5.3a.4.4 0 1 0-.7.4l1.4 2.5C5.6 9.3 4.5 11.1 4.3 13.2h15.4c-.2-2.1-1.3-3.9-3.6-5Z"
      />
    </svg>
  ),
  apple: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#111"
        d="M16.7 12.5c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.8-2.8-.7-1.4.1-2.8.9-3.5 2.2-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.2 0 1.9-1 2.6-2 .8-1.2 1.1-2.3 1.2-2.4-.1 0-2.2-.8-2.2-3.7ZM14.8 6.4c.6-.7 1-1.7.9-2.7-0.9.1-1.9.6-2.5 1.3-.6.6-1.1 1.6-.9 2.5 1 .1 1.9-.4 2.5-1.1Z"
      />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#FF9900"
        d="M6.8 14.8c0 .2.2.3.5.4 1 .5 2 .7 3.1.7 1.5 0 2.8-.4 3.9-1.1 1.1-.7 1.6-1.6 1.6-2.6 0-.9-.3-1.6-1-2.1-.7-.5-1.7-.8-3-.8h-1.4v-.9h1.4c1 0 1.7-.2 2.2-.5.5-.4.8-.9.8-1.5 0-.7-.3-1.3-.9-1.7-.6-.4-1.4-.6-2.4-.6-1 0-1.9.2-2.7.6-.3.1-.4 0-.4-.2V4.1c0-.2.1-.3.3-.4.9-.4 2-.6 3.2-.6 1.5 0 2.7.3 3.5 1 .8.7 1.3 1.5 1.3 2.6 0 1.1-.5 2-1.4 2.6v.1c1.2.6 1.8 1.6 1.8 3 0 1.2-.5 2.3-1.5 3.1-1 .8-2.4 1.2-4.2 1.2-1.3 0-2.5-.2-3.5-.7-.2-.1-.3-.2-.3-.4v-1.6c0-.2.2-.3.4-.2Z"
      />
      <path
        fill="#232F3E"
        d="M18.3 18.2c-2.1 1.6-5.2 2.4-7.9 2.4-3.7 0-7.1-1.4-9.6-3.7-.2-.2 0-.4.2-.3 2.7 1.6 6 2.5 9.4 2.5 2.3 0 4.9-.5 7.2-1.5.4-.1.6.2.7.6Z"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#181717"
        d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.4-3.4-1.4-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.2-4.6-5.1 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.7 0 4-2.3 4.8-4.6 5.1.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.6C22 6.6 17.5 2 12 2Z"
      />
    </svg>
  ),
  cicd: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6" cy="12" r="2.2" fill="#F0784A" />
      <circle cx="12" cy="6" r="2.2" fill="#7EB8E8" />
      <circle cx="18" cy="12" r="2.2" fill="#F2C94C" />
      <circle cx="12" cy="18" r="2.2" fill="#7C9A82" />
      <path
        d="M8 12h8M12 8v8"
        stroke="#5C5650"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  dns: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="#7EB8E8" strokeWidth="1.8" />
      <ellipse cx="12" cy="12" rx="4" ry="9" fill="none" stroke="#7EB8E8" strokeWidth="1.4" />
      <path d="M3 12h18" stroke="#7EB8E8" strokeWidth="1.4" />
    </svg>
  ),
  ssl: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="10" width="14" height="10" rx="2" fill="#F2C94C" />
      <path
        d="M8 10V8a4 4 0 0 1 8 0v2"
        fill="none"
        stroke="#1C1917"
        strokeWidth="1.8"
      />
    </svg>
  ),
  api: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8 8 4 12l4 4M16 8l4 4-4 4M14 5l-4 14"
        fill="none"
        stroke="#F0784A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  auth: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="10" r="3" fill="#7EB8E8" />
      <path
        d="M6 19c1.5-3 3.5-4.5 6-4.5S16.5 16 18 19"
        fill="none"
        stroke="#7EB8E8"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="#1C1917" strokeWidth="1.2" opacity=".25" />
    </svg>
  ),
  deploy: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3v10M8 9l4 4 4-4"
        fill="none"
        stroke="#F0784A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 16v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
        fill="none"
        stroke="#1C1917"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  responsive: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="12" height="10" rx="1.5" fill="none" stroke="#7C9A82" strokeWidth="1.6" />
      <rect x="16" y="8" width="5" height="9" rx="1.2" fill="none" stroke="#F0784A" strokeWidth="1.6" />
    </svg>
  ),
  product: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3 20 7.5v9L12 21 4 16.5v-9L12 3Z"
        fill="none"
        stroke="#F2C94C"
        strokeWidth="1.6"
      />
      <path d="M12 12 20 7.5M12 12 4 7.5M12 12v9" stroke="#F2C94C" strokeWidth="1.4" />
    </svg>
  ),
};

export default function TechIcon({ name, className = "" }) {
  return <span className={`tech-icon ${className}`}>{icons[name] || icons.api}</span>;
}
