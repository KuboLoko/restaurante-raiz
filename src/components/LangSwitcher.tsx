import { LANGS, useI18n } from '../lib/i18n'

/** PT · EN · ES language toggle. Styled for a dark background (header / drawer). */
export function LangSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang, t } = useI18n()

  return (
    <div
      className={`flex items-center gap-1.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label={t.header.langGroup}
    >
      {LANGS.map((l, i) => (
        <span key={l.code} className="flex items-center">
          {i > 0 && (
            <span aria-hidden className="mr-1.5 text-raiz-cream/25">
              ·
            </span>
          )}
          <button
            type="button"
            onClick={() => setLang(l.code)}
            aria-current={l.code === lang ? 'true' : undefined}
            className={`uppercase tracking-widest2 transition-colors ${
              l.code === lang
                ? 'text-raiz-gold'
                : 'text-raiz-cream/55 hover:text-raiz-cream'
            }`}
          >
            {l.short}
          </button>
        </span>
      ))}
    </div>
  )
}
