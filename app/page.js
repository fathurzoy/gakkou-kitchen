'use client';

import { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import { recipes, categories } from '@/data/recipes';
import styles from './page.module.css';
import { useGlobalState } from './GlobalStateProvider';
import { useLanguage } from './LanguageContext';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('semua');
  const [halalOnly, setHalalOnly] = useState(false);
  const [activeDifficulty, setActiveDifficulty] = useState('semua');
  const gridRef = useRef(null);
  const { showTranslation, showFurigana } = useGlobalState();
  const { t, currentLang } = useLanguage();

  const filtered = useMemo(() => {
    const result = recipes.filter((r) => {
      const matchSearch =
        search === '' ||
        r.name_id.toLowerCase().includes(search.toLowerCase()) ||
        (r.name_en && r.name_en.toLowerCase().includes(search.toLowerCase())) ||
        r.name_jp_plain.includes(search) ||
        r.description_id.toLowerCase().includes(search.toLowerCase()) ||
        (r.description_en && r.description_en.toLowerCase().includes(search.toLowerCase()));
      const matchCategory = activeCategory === 'semua' || r.category === activeCategory;
      const matchHalal = !halalOnly || r.isHalal;
      const matchDiff = activeDifficulty === 'semua' || r.difficulty === activeDifficulty;
      return matchSearch && matchCategory && matchHalal && matchDiff;
    });

    result.sort((a, b) => {
      if (a.category === 'jepang' && b.category !== 'jepang') return -1;
      if (a.category !== 'jepang' && b.category === 'jepang') return 1;
      return 0;
    });

    return result;
  }, [search, activeCategory, halalOnly, activeDifficulty]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setTimeout(() => gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  };

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBgPattern} aria-hidden="true" />
        <div className={`container ${styles.heroContent}`}>
          <div className={`${styles.heroBadge} animate-in`}>
            <span>🗾</span>
            <span>{t('hero.Badge')}</span>
          </div>
          <h1 className={`${styles.heroTitle} animate-in`} style={{ animationDelay: '0.1s' }}>
            <span className={styles.heroTitleEn}>Gakkou Kitchen</span>
            <span className={`${styles.heroTitleJp} jp`}>
              <ruby>学校<rt>がっこう</rt></ruby>キッチン
            </span>
          </h1>
          <p className={`${styles.heroSubtitle} animate-in`} style={{ animationDelay: '0.2s' }}>
            <span className="jp">
              {currentLang === 'ja' ? (
                <>
                  <ruby>業務<rt style={{ opacity: showFurigana ? 1 : 0 }}>ぎょうむ</rt></ruby>スーパーやイオンから
                  <ruby>買<rt style={{ opacity: showFurigana ? 1 : 0 }}>か</rt></ruby>える
                  <ruby>材料<rt style={{ opacity: showFurigana ? 1 : 0 }}>ざいりょう</rt></ruby>で
                  <ruby>作<rt style={{ opacity: showFurigana ? 1 : 0 }}>つく</rt></ruby>れる
                  <ruby>国際的<rt style={{ opacity: showFurigana ? 1 : 0 }}>こくさいてき</rt></ruby>なレシピ 🏪
                </>
              ) : (
                <>
                  {t('hero.Subtitle')}{' '}
                  <strong>Gyomu Super &amp; Aeon</strong> 🏪
                </>
              )}
            </span>
          </p>

          {/* Search */}
          <div className={`${styles.heroSearch} animate-in`} style={{ animationDelay: '0.3s' }}>
            <div className={styles.searchWrap}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                id="search-recipes"
                type="search"
                placeholder={t('search.Placeholder')}
                value={search}
                onChange={handleSearch}
                className={styles.searchInput}
                aria-label="Cari resep"
              />
              {search && (
                <button onClick={() => setSearch('')} className={styles.searchClear} aria-label="Hapus pencarian">
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className={`${styles.heroStats} animate-in`} style={{ animationDelay: '0.4s' }}>
            {[
              { num: '10', label: t('stat.Resep') },
              { num: '✓', label: t('about.Halal.Title') },
              { num: '5', label: t('stat.Negara') },
              { num: 'あ', label: 'Furigana' },
            ].map((s, i) => (
              <div key={i} className={styles.statGroup}>
                {i > 0 && <div className={styles.statDivider} />}
                <div className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className={styles.filterSection} ref={gridRef} id="recipes">
        <div className="container">
          <div className={styles.filterBar}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>🌏 {t('filter.Kategori')}</span>
              <div className={styles.filterChips}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    id={`filter-cat-${cat.id}`}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`${styles.filterChip} ${activeCategory === cat.id ? styles.filterChipActive : ''}`}
                    aria-pressed={activeCategory === cat.id}
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.id === 'semua' ? t('filter.Semua') : (currentLang === 'en' && cat.label_en ? cat.label_en : cat.label_id)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>📊 {t('filter.Tingkat')}</span>
              <div className={styles.filterChips}>
                {[
                  { id: 'semua', label: t('filter.Semua') },
                  { id: 'mudah', label: t('filter.Mudah') },
                  { id: 'sedang', label: t('filter.Sedang') },
                ].map((d) => (
                  <button
                    key={d.id}
                    id={`filter-diff-${d.id}`}
                    onClick={() => setActiveDifficulty(d.id)}
                    className={`${styles.filterChip} ${activeDifficulty === d.id ? styles.filterChipActive : ''}`}
                    aria-pressed={activeDifficulty === d.id}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <button
                id="toggle-halal"
                onClick={() => setHalalOnly(!halalOnly)}
                className={`${styles.halalToggle} ${halalOnly ? styles.halalToggleActive : ''}`}
                aria-pressed={halalOnly}
              >
                <span>☪️</span>
                <span>{t('filter.HalalOnly')}</span>
                <span className={`${styles.halalDot} ${halalOnly ? styles.halalDotOn : ''}`} />
              </button>
            </div>
          </div>

          <div className={styles.resultsInfo}>
            <span className={styles.resultsCount}>{filtered.length} {t('filter.Found')}</span>
            {(search || activeCategory !== 'semua' || halalOnly || activeDifficulty !== 'semua') && (
              <button
                id="clear-filters"
                onClick={() => { setSearch(''); setActiveCategory('semua'); setHalalOnly(false); setActiveDifficulty('semua'); }}
                className={styles.clearFilters}
              >
                {t('filter.Reset')}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* RECIPE GRID */}
      <section className={styles.recipesSection}>
        <div className="container">
          {filtered.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyEmoji}>🍽️</div>
              <h3>{t('empty.Title')}</h3>
              <p>{t('empty.Desc')}</p>
            </div>
          ) : (
            <div className={styles.recipeGrid}>
              {filtered.map((recipe, i) => (
                <RecipeCard key={recipe.id} recipe={recipe} index={i} t={t} showTranslation={showTranslation} showFurigana={showFurigana} currentLang={currentLang} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className={styles.aboutSection} id="about">
        <div className="container">
          <div className={styles.aboutHeader}>
            <h2 className={styles.aboutTitle}>
              {t('about.Title')}
            </h2>
          </div>
          <div className={styles.aboutGrid}>
            {[
              { icon: '🔤', title: t('about.Furigana.Title'), desc: t('about.Furigana.Desc') },
              { icon: '☪️', title: t('about.Halal.Title'), desc: t('about.Halal.Desc') },
              { icon: '🔄', title: t('about.Substitusi.Title'), desc: t('about.Substitusi.Desc') },
              { icon: '🎵', title: t('about.TikTok.Title'), desc: t('about.TikTok.Desc') },
            ].map((f, i) => (
              <div key={i} className={styles.aboutCard}>
                <div className={styles.aboutIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const DIFFICULTY = {
  mudah: { bg: '#EAFAF1', color: '#27AE60', id: 'mudah' },
  sedang: { bg: '#FEF9E7', color: '#F39C12', id: 'sedang' },
  sulit: { bg: '#FDEDEC', color: '#E74C3C', id: 'sulit' },
};

const COUNTRY_FLAG = {
  indonesia: '🇮🇩', jepang: '🇯🇵', myanmar: '🇲🇲', nepal: '🇳🇵', vietnam: '🇻🇳',
};

function RecipeCard({ recipe, index, t, showTranslation, showFurigana, currentLang }) {
  const diff = DIFFICULTY[recipe.difficulty] || DIFFICULTY.mudah;

  return (
    <Link
      href={`/resep/${recipe.slug}`}
      id={`recipe-card-${recipe.slug}`}
      className={styles.recipeCard}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <div className={styles.cardImageWrap}>
        <div
          className={styles.cardImage}
          style={{ background: `linear-gradient(135deg, ${recipe.image_color}30 0%, ${recipe.image_color}60 100%)` }}
        >
          <span className={styles.cardEmoji}>{recipe.emoji}</span>
        </div>
        <div className={styles.cardBadges}>
          {recipe.isHalal && <span className={styles.cardBadgeHalal}>☪️ {t('card.Halal')}</span>}
          <span className={styles.cardBadgeTime}>⏱ {recipe.time_min}{t('card.Time')}</span>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className={`${styles.recipeTitleJp} jp`} style={{ position: 'relative' }}>
              {recipe.furigana_name?.map((part, i) =>
                part.reading ? (
                  <ruby key={i} style={{ display: 'inline-flex', flexDirection: 'column-reverse', alignItems: 'center', verticalAlign: 'bottom', lineHeight: 1 }}>
                    <rb>{part.text}</rb>
                    <rt style={{ opacity: showFurigana ? 1 : 0, transition: 'opacity 250ms', fontSize: '0.55em', color: 'var(--text-secondary)', textAlign: 'center' }}>{part.reading}</rt>
                  </ruby>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )}
            </h3>
            {showTranslation && currentLang !== 'ja' && (
              <h4 className={styles.recipeTitleId}>
                {currentLang === 'en' && recipe.name_en ? recipe.name_en : recipe.name_id}
              </h4>
            )}
          </div>
          <span className={styles.cardFlag}>{COUNTRY_FLAG[recipe.category]}</span>
        </div>
        {(!showTranslation || currentLang === 'ja') ? (
          <p className={`${styles.cardDesc} jp`}>
            {recipe.description_jp}
          </p>
        ) : (
          <p className={styles.cardDesc}>
            {currentLang === 'en' && recipe.description_en ? recipe.description_en : recipe.description_id}
          </p>
        )}
        <div className={styles.cardFooter}>
          <span
            className={styles.cardDiff}
            style={{ background: diff.bg, color: diff.color }}
          >
            {diff.id === 'mudah' ? t('filter.Mudah') : diff.id === 'sedang' ? t('filter.Sedang') : t('filter.Sulit')}
          </span>
          <span className={styles.cardArrow}>{t('card.View')}</span>
        </div>
      </div>
    </Link>
  );
}
