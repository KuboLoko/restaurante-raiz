import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z" />
    </svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 005.5 5.5l1.5-2 4 1.5v3a2 2 0 01-2 2A16.5 16.5 0 014.5 5.5a2 2 0 012-2z" />
    </svg>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 10-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20l1.4-4.1A8 8 0 1112 20a7.9 7.9 0 01-3.9-1L4 20z" />
      <path d="M9 8.5c-.3 0-.6.1-.8.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.7 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.4l-1.6-.8c-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.6-.7-2.5-1.7-.7-.8-1.1-1.6-1.3-1.9-.1-.2 0-.4.1-.5l.5-.6c.1-.2.2-.3.3-.5v-.5l-.8-1.9c-.2-.4-.4-.4-.6-.4H9z" />
    </svg>
  )
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function RootMark(props: IconProps) {
  // Small decorative "root" glyph used as a section divider.
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" {...props}>
      <path
        d="M12 2v7m0 0c0 2-2 3-3.5 4.2C7 14.4 6 15.8 6 18m6-9c0 2 2 3 3.5 4.2C17 14.4 18 15.8 18 18M12 9c0 2.5 0 4.5-1.2 6M12 9c0 2.5 0 4.5 1.2 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}
