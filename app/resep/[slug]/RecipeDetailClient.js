'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './detail.module.css';
import { useGlobalState } from '../../GlobalStateProvider';
import { useLanguage } from '../../LanguageContext';

export default function RecipeDetailClient({ recipe }) {
  const { showFurigana, showTranslation } = useGlobalState();
  const { currentLang, t } = useLanguage();
  const [expandedSubs, setExpandedSubs] = useState({});
  const [activeTooltip, setActiveTooltip] = useState(null);

  const survivalFurigana = {
    "すみません、鶏肉はどこですか？": [{kanji: "鶏肉", reading: "とりにく"}],
    "これはハラールですか？": [],
    "冷たいご飯がありますか？": [{kanji: "冷", reading: "つめ"}, {kanji: "飯", reading: "はん"}],
    "テンペはありますか？": [],
    "鶏肉": [{kanji: "鶏肉", reading: "とりにく"}]
  };

  // Load TikTok embed script
  useEffect(() => {
    if (!recipe.tiktok_video_id) return;

    const existingScript = document.getElementById('tiktok-embed-script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'tiktok-embed-script';
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('tiktok-embed-script');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [recipe.tiktok_video_id]);

  const toggleSub = (id) => setExpandedSubs((prev) => ({ ...prev, [id]: !prev[id] }));

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'ja-JP';
      window.speechSynthesis.speak(utt);
    }
  };

  const categoryEmoji = {
    indonesia: '🇮🇩', jepang: '🇯🇵', myanmar: '🇲🇲', nepal: '🇳🇵', vietnam: '🇻🇳',
  };

  const difficultyStyle = {
    mudah: { label: '🟢 Mudah', color: '#27AE60', bg: '#EAFAF1' },
    sedang: { label: '🟡 Sedang', color: '#F39C12', bg: '#FEF9E7' },
    sulit: { label: '🔴 Sulit', color: '#E74C3C', bg: '#FDEDEC' },
  };
  const diff = difficultyStyle[recipe.difficulty] || difficultyStyle.mudah;

  return (
    <div className={showFurigana ? '' : 'furigana-hidden'}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>🏠 {t('breadcrumb.Home')}</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span className={styles.breadcrumbCurrent}>
              {currentLang === 'ja' ? recipe.name_jp_plain : (currentLang === 'en' && recipe.name_en ? recipe.name_en : recipe.name_id)}
            </span>
          </nav>
        </div>
      </div>

      <div className={`container ${styles.detailLayout}`}>
        {/* ===== MAIN ===== */}
        <article>
          {/* Recipe Header */}
          <header className={styles.recipeHeader}>
            <div className={styles.recipeEmojiWrap}>
              <span className={styles.recipeEmojiBig}>{recipe.emoji}</span>
            </div>
            <div className={styles.recipeTitleArea}>
              <div className={styles.recipeBadgesRow}>
                {recipe.isHalal ? (
                  <span className="badge badge-halal">☪️ Halal</span>
                ) : (
                  <span className="badge badge-warning">⚠️ Cek Halal</span>
                )}
                <span className="badge badge-category">
                  {categoryEmoji[recipe.category]} {recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}
                </span>
                <span
                  className="badge"
                  style={{ background: diff.bg, color: diff.color, border: `1px solid ${diff.color}33` }}
                >
                  {diff.label}
                </span>
              </div>

              {/* Japanese Title is now PRIMARY */}
              <h1 className={`${styles.recipeTitleJp} jp`}>
                {recipe.furigana_name?.map((part, i) =>
                  part.reading ? (
                    <ruby key={i} title={part.meaning} style={{ cursor: 'help' }}>
                      <rb>{part.text}</rb>
                      <rt>{part.reading}</rt>
                    </ruby>
                  ) : (
                    <span key={i}>{part.text}</span>
                  )
                )}
              </h1>

              {/* Translation is SECONDARY and togglable */}
              {showTranslation && currentLang !== 'ja' && (
                <div className={styles.recipeTitleId}>
                  {currentLang === 'en' && recipe.name_en ? recipe.name_en : recipe.name_id}
                </div>
              )}

              {/* Description - Japanese First */}
              <p className={`${styles.recipeDescJp} jp`}>
                {recipe.description_jp}
              </p>
              {showTranslation && currentLang !== 'ja' && (
                <p className={styles.recipeDescId}>
                  {currentLang === 'en' && recipe.description_en ? recipe.description_en : recipe.description_id}
                </p>
              )}

              <div className={styles.recipeMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>⏱</span>
                  <span className={styles.metaLabel}>Waktu</span>
                  <span className={styles.metaVal}>{recipe.time_min} menit</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>👥</span>
                  <span className={styles.metaLabel}>Porsi</span>
                  <span className={styles.metaVal}>{recipe.servings} orang</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaIcon}>📊</span>
                  <span className={styles.metaLabel}>Tingkat</span>
                  <span className={styles.metaVal}>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
          </header>

          {/* ---- INGREDIENTS ---- */}
          <section className={styles.sectionBlock} aria-labelledby="ingredients-title">
            <h2 id="ingredients-title" className={styles.sectionBlockTitle}>
              <span className={`${styles.sectionBlockTitleJp} jp`}>
                {renderStepJP("材料", [{kanji: "材料", reading: "ざいりょう"}], showFurigana)}
              </span>
              {showTranslation && currentLang !== 'ja' && (
                <span className={styles.sectionBlockTitleId}>
                  {currentLang === 'en' ? '🛒 Ingredients' : '🛒 Bahan-bahan'}
                </span>
              )}
            </h2>
            <ul className={styles.ingredientsList} role="list">
              {recipe.ingredients.map((ing) => (
                <li key={ing.id} className={styles.ingredientItem}>
                  <div className={styles.ingredientMain}>
                    <div className={styles.ingredientNameWrap}>
                      <div className={styles.ingredientNames}>
                        <span
                          className={`${styles.ingNameJp} jp furigana-word`}
                          onClick={() =>
                            setActiveTooltip(activeTooltip === `ing-${ing.id}` ? null : `ing-${ing.id}`)
                          }
                          style={{ position: 'relative' }}
                        >
                          {ing.furigana ? (
                            <ruby>
                              <rb>{ing.name_jp}</rb>
                              <rt>{ing.furigana}</rt>
                            </ruby>
                          ) : (
                            ing.name_jp
                          )}
                          {activeTooltip === `ing-${ing.id}` && ing.meaning && (
                            <span className="tooltip" role="tooltip">
                              {ing.meaning}
                            </span>
                          )}
                        </span>
                        {showTranslation && currentLang !== 'ja' && (
                          <>
                            <span className={styles.ingNameSep}>・</span>
                            <span className={styles.ingNameId}>{currentLang === 'en' && ing.name_en ? ing.name_en : ing.name_id}</span>
                          </>
                        )}
                      </div>
                      {ing.store_tip && (
                        <p className={styles.storeTip}>
                          <span>🏪</span>
                          {ing.store_tip}
                        </p>
                      )}
                    </div>
                    <div className={styles.ingredientRight}>
                      <div className={styles.ingAmountGroup}>
                        <span className={`${styles.ingAmountJp} jp`}>{ing.amount_jp}</span>
                        {showTranslation && currentLang !== 'ja' && (
                          <span className={styles.ingAmountId}>
                            {currentLang === 'en' && ing.amount_en ? ing.amount_en : ing.amount_id}
                          </span>
                        )}
                      </div>
                      {ing.isHalal && <span className={styles.ingHalal}>✓</span>}
                      {ing.name_jp && (
                        <button
                          className={styles.speakBtn}
                          onClick={() => speak(ing.name_jp)}
                          title={`Dengar: ${ing.name_jp}`}
                          aria-label={`Dengar: ${ing.name_jp}`}
                        >
                          🔊
                        </button>
                      )}
                    </div>
                  </div>

                  {ing.substitute && (
                    <div className={styles.substituteWrap}>
                      <button
                        id={`sub-toggle-${ing.id}`}
                        className={styles.subToggle}
                        onClick={() => toggleSub(ing.id)}
                        aria-expanded={!!expandedSubs[ing.id]}
                      >
                        <span>💡</span>
                        <span className={`${styles.subReasonJp} jp`}>{ing.substitute.reason_jp}</span>
                        {showTranslation && currentLang !== 'ja' && (
                          <span className={styles.subReasonId}>
                            ({currentLang === 'en' && ing.substitute.reason_en ? ing.substitute.reason_en : ing.substitute.reason_id})
                          </span>
                        )}
                        <span className={`${styles.subArrow} ${expandedSubs[ing.id] ? styles.subArrowOpen : ''}`}>▼</span>
                      </button>
                      {expandedSubs[ing.id] && (
                        <div className={styles.subContent} role="region" aria-label="Bahan pengganti">
                          {ing.substitute.options.map((opt, i) => (
                            <div key={i} className={styles.subOption}>
                              <div className={styles.subOptionHeader}>
                                <span className={`${styles.subOptionNameJp} jp`}>{opt.name_jp}</span>
                                {showTranslation && currentLang !== 'ja' && (
                                  <span className={styles.subOptionNameId}>
                                    — {currentLang === 'en' && opt.name_en ? opt.name_en : opt.name_id}
                                  </span>
                                )}
                                <span className={styles.subOptionStore}>🏪 {opt.store}</span>
                              </div>
                              <p className={`${styles.subOptionRatioJp} jp`}>{opt.ratio_jp}</p>
                              {showTranslation && currentLang !== 'ja' && (
                                <p className={styles.subOptionRatioId}>
                                  {currentLang === 'en' && opt.ratio_en ? opt.ratio_en : opt.ratio_id}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* ---- STEPS ---- */}
          <section className={styles.sectionBlock} aria-labelledby="steps-title">
            <h2 id="steps-title" className={styles.sectionBlockTitle}>
              <span className={`${styles.sectionBlockTitleJp} jp`}>
                {renderStepJP("作り方", [{kanji: "作", reading: "つく"}, {kanji: "方", reading: "かた"}], showFurigana)}
              </span>
              {showTranslation && currentLang !== 'ja' && (
                <span className={styles.sectionBlockTitleId}>
                  {currentLang === 'en' ? '👨‍🍳 Instructions' : '👨‍🍳 Cara Memasak'}
                </span>
              )}
            </h2>
            <ol className={styles.stepsList}>
              {recipe.steps.map((step) => (
                <li key={step.id} className={styles.stepItem}>
                  <div className={styles.stepNum}>{step.id}</div>
                  <div className={styles.stepContent}>
                    <div className={`${styles.stepTextJp} jp`}>
                      {renderStepJP(step.text_jp, step.furigana_words, showFurigana)}
                      <button
                        className={`${styles.speakBtn} ${styles.stepSpeak}`}
                        onClick={() => speak(step.text_jp)}
                        title="Dengar dalam bahasa Jepang"
                        aria-label="Dengar langkah dalam bahasa Jepang"
                      >
                        🔊
                      </button>
                    </div>
                    {showTranslation && currentLang !== 'ja' && (
                      <p className={styles.stepTextId}>
                        {currentLang === 'en' && step.text_en ? step.text_en : step.text_id}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ---- SURVIVAL PHRASES ---- */}
          {recipe.survival_phrases?.length > 0 && (
            <section className={styles.sectionBlock} aria-labelledby="phrases-title">
              <h2 id="phrases-title" className={styles.sectionBlockTitle}>
                <span className={`${styles.sectionBlockTitleJp} jp`}>
                  {renderStepJP("スーパーで使える一言", [{kanji: "使", reading: "つか"}, {kanji: "一言", reading: "ひとこと"}], showFurigana)}
                </span>
                {showTranslation && currentLang !== 'ja' && (
                  <span className={styles.sectionBlockTitleId}>
                    {currentLang === 'en' ? '💬 Survival Phrases' : '💬 Survival Phrases'}
                  </span>
                )}
              </h2>
              {showTranslation && (
                <p className={styles.survivalIntro}>
                  Bingung saat di supermarket? Klik 🔊 dan tunjukkan ke pelayan toko!
                </p>
              )}
              <div className={styles.phrasesList}>
                {recipe.survival_phrases.map((ph, i) => (
                  <div key={i} className={styles.phraseCard}>
                    <div className={styles.phraseTop}>
                      <div className={styles.phraseTexts}>
                        <p className={`${styles.phraseJp} jp`}>{renderStepJP(ph.jp, survivalFurigana[ph.jp] || [], showFurigana)}</p>
                        <p className={styles.phraseRomaji}>{ph.romaji}</p>
                        {showTranslation && currentLang !== 'ja' && (
                          <p className={styles.phraseId}>
                            {currentLang === 'en' && ph.en ? `🇬🇧 ${ph.en}` : `🇮🇩 ${ph.id}`}
                          </p>
                        )}
                      </div>
                      <button
                        id={`speak-phrase-${i}`}
                        className={styles.speakBtnLg}
                        onClick={() => speak(ph.jp)}
                        aria-label={`Dengar: ${ph.jp}`}
                        title="Klik untuk dengar"
                      >
                        🔊
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* ===== SIDEBAR ===== */}
        <aside className={styles.detailSidebar}>
          {/* TikTok */}
          {recipe.tiktok_video_id && (
            <div className={styles.sidebarBlock}>
              <h3 className={styles.sidebarTitle}>
                <span className={`${styles.sidebarTitleJp} jp`}>
                  {renderStepJP("動画で見る", [{kanji: "動画", reading: "どうが"}, {kanji: "見", reading: "み"}], showFurigana)}
                </span>
                {showTranslation && currentLang !== 'ja' && <span className={styles.sidebarTitleId}>🎵 {t('video.Watch')}</span>}
              </h3>
              {/* Removed minHeight and overflow hidden to fix stretched/gepeng aspect ratio */}
              <div className={styles.tiktokWrap}>
                <blockquote
                  className="tiktok-embed"
                  cite={`https://www.tiktok.com/@ayuwdriii_/video/${recipe.tiktok_video_id}`}
                  data-video-id={recipe.tiktok_video_id}
                  style={{ maxWidth: '100%', width: '325px' }}
                >
                  <section>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="@ayuwdriii_"
                      href={`https://www.tiktok.com/@ayuwdriii_?refer=embed`}
                    >
                      @ayuwdriii_
                    </a>{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.tiktok.com/@ayuwdriii_/video/${recipe.tiktok_video_id}`}
                    >
                      ▶ {t('video.Recipe')}
                    </a>
                  </section>
                </blockquote>
              </div>
              <p className={styles.tiktokFallback}>
                {currentLang !== 'ja' ? t('video.Fallback') : (
                  renderStepJP("動画が見られない場合：", [{kanji: "動画", reading: "どうが"}, {kanji: "見", reading: "み"}, {kanji: "場合", reading: "ばあい"}], showFurigana)
                )}
                <a
                  href={`https://www.tiktok.com/@ayuwdriii_/video/${recipe.tiktok_video_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tiktokLink}
                >
                  TikTok →
                </a>
              </p>
            </div>
          )}

          {/* Shopping Tips */}
          <div className={styles.sidebarBlock}>
            <h3 className={styles.sidebarTitle}>
              <span className={`${styles.sidebarTitleJp} jp`}>
                {renderStepJP("お買い物のコツ", [{kanji: "買", reading: "か"}, {kanji: "物", reading: "もの"}], showFurigana)}
              </span>
              {showTranslation && currentLang !== 'ja' && <span className={styles.sidebarTitleId}>💡 {t('tips.Title')}</span>}
            </h3>
            <div className={styles.tipsList}>
              {[
                { icon: '🏪', titleKey: 'tips.Gyomu.Title', descJp: '安くて大容量。冷凍食品もOK！', descIdKey: 'tips.Gyomu.Desc', furigana: [{kanji: '安', reading: 'やす'}, {kanji: '大容量', reading: 'だいようりょう'}, {kanji: '冷凍食品', reading: 'れいとうしょくひん'}] },
                { icon: '🛒', titleKey: 'tips.Aeon.Title', descJp: '輸入品あり、ハラールマーク付き', descIdKey: 'tips.Aeon.Desc', furigana: [{kanji: '輸入品', reading: 'ゆにゅうひん'}, {kanji: '付', reading: 'つ'}] },
                { icon: '☕', titleKey: 'tips.Kaldi.Title', descJp: 'クミンやターメリックなどの輸入スパイス', descIdKey: 'tips.Kaldi.Desc', furigana: [{kanji: '輸入', reading: 'ゆにゅう'}] },
                { icon: '📦', titleKey: 'tips.Amazon.Title', descJp: 'テンペ、ケチャップマニス、ココナッツミルク', descIdKey: 'tips.Amazon.Desc', furigana: [] },
              ].map((tip, i) => (
                <div key={i} className={styles.tipItem}>
                  <span className={styles.tipIcon}>{tip.icon}</span>
                  <div>
                    <strong>{t(tip.titleKey)}</strong>
                    <p className={`${styles.tipDescJp} jp`}>{renderStepJP(tip.descJp, tip.furigana, showFurigana)}</p>
                    {showTranslation && currentLang !== 'ja' && <p className={styles.tipDescId}>{t(tip.descIdKey)}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back */}
          <div className={styles.sidebarBlock}>
            <Link href="/" id="back-to-recipes" className={styles.backBtn}>
              ← {currentLang !== 'ja' ? t('detail.Kembali') : renderStepJP("レシピ一覧へ戻る", [{kanji: "一覧", reading: "いちらん"}, {kanji: "戻", reading: "もど"}], showFurigana)}
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

// Helper: render Japanese step text with furigana
function renderStepJP(text, furiganaWords, showFurigana) {
  if (!furiganaWords || furiganaWords.length === 0) return text;

  let parts = [text];

  furiganaWords.forEach(({ kanji, reading }) => {
    const newParts = [];
    parts.forEach((part) => {
      if (typeof part !== 'string') { newParts.push(part); return; }
      const idx = part.indexOf(kanji);
      if (idx === -1) { newParts.push(part); return; }
      if (idx > 0) newParts.push(part.slice(0, idx));
      newParts.push(
        <ruby key={`${kanji}-${Math.random()}`} style={{ display: 'inline-flex', flexDirection: 'column-reverse', alignItems: 'center', verticalAlign: 'bottom', lineHeight: 1 }}>
          <rb>{kanji}</rb>
          <rt style={{ opacity: showFurigana ? 1 : 0, transition: 'opacity 250ms', fontSize: '0.55em', color: 'var(--text-secondary)', textAlign: 'center' }}>{reading}</rt>
        </ruby>
      );
      if (idx + kanji.length < part.length) newParts.push(part.slice(idx + kanji.length));
    });
    parts = newParts;
  });

  return parts;
}
