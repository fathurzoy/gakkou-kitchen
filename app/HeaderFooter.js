'use client';

import Link from 'next/link';
import styles from './headerfooter.module.css';
import { useGlobalState } from './GlobalStateProvider';
import { useLanguage, LANGUAGES } from './LanguageContext';

import Image from 'next/image';

export function Header() {
  const { showFurigana, setShowFurigana, showTranslation, setShowTranslation } = useGlobalState();
  const { currentLang, setCurrentLang, t, isLoaded } = useLanguage();

  const currentLangObj = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  return (
    <header className={styles.siteHeader}>
      <div className="container">
        <nav className={styles.siteNav}>
          <Link href="/" className={styles.siteLogo}>
            <Image src="/logo.png" alt="Gakkou Kitchen Logo" width={40} height={40} className={styles.logoImage} />
            <div className={styles.logoText}>
              <span className={styles.logoEn}>Gakkou Kitchen</span>
              <span className={`${styles.logoJp} jp`}>学校キッチン</span>
            </div>
          </Link>
          <div className={styles.navRight}>
            <div className={styles.globalToggles}>
              <button
                onClick={() => setShowFurigana(!showFurigana)}
                className={`${styles.toggleBtn} ${showFurigana ? styles.toggleActive : ''}`}
                title="Toggle Furigana"
              >
                あ {t('toggle.Furigana')}: {showFurigana ? t('toggle.ON') : t('toggle.OFF')}
              </button>
              {currentLang !== 'ja' && (
                <button
                  onClick={() => setShowTranslation(!showTranslation)}
                  className={`${styles.toggleBtn} ${showTranslation ? styles.toggleActive : ''}`}
                  title="Toggle Translation"
                >
                  {currentLangObj.flag} {t('toggle.Terjemahan')} ({currentLang.toUpperCase()}): {showTranslation ? t('toggle.ON') : t('toggle.OFF')}
                </button>
              )}
            </div>
            <Link href="/" className={styles.navLink}>{t('nav.Resep')}</Link>
            <Link href="/tentang" className={styles.navLink}>{t('nav.Tentang')}</Link>

            {isLoaded && (
              <select
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
                className="ml-2 bg-white border border-slate-300 text-slate-700 text-sm rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                aria-label="Language Selector"
              >
                {LANGUAGES.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className={styles.siteFooter}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3>Gakkou Kitchen (学校キッチン)</h3>
            <p>{t('footer.Desc')}</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <h4>{t('footer.Navigasi')}</h4>
              <Link href="/">{t('footer.SemuaResep')}</Link>
              <Link href="/tentang">{t('footer.TentangKami')}</Link>
            </div>
            <div className={styles.footerCol}>
              <h4>{t('footer.Legal')}</h4>
              <Link href="/privasi">{t('footer.Privasi')}</Link>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Gakkou Kitchen. {t('footer.Copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
