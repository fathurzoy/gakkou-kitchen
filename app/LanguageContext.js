'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export const LANGUAGES = [
  { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' }
];

export const DICTIONARY = {
  // Navigation / Header
  "nav.Resep": { id: "Resep", en: "Recipes", ja: "レシピ" },
  "nav.Tentang": { id: "Tentang", en: "About", ja: "概要" },
  
  // Header Toggles
  "toggle.Furigana": { id: "Furigana", en: "Furigana", ja: "ふりがな" },
  "toggle.Terjemahan": { id: "Terjemahan", en: "Translation", ja: "翻訳" },
  "toggle.ON": { id: "ON", en: "ON", ja: "オン" },
  "toggle.OFF": { id: "OFF", en: "OFF", ja: "オフ" },

  // Hero
  "hero.Badge": { id: "Untuk Warga Asing di Jepang", en: "For Foreigners in Japan", ja: "外国人向けレシピ" },
  "hero.Subtitle": { id: "Resep internasional dengan bahan dari", en: "International recipes with ingredients from", ja: "から買える材料で作れる国際的なレシピ" },
  
  // Search
  "search.Placeholder": { id: "Cari resep... (例: ayam, nasi, 卵)", en: "Search recipes... (e.g., chicken, rice, 卵)", ja: "レシピを検索... (例: 鶏肉, ご飯, 卵)" },
  
  // Stats
  "stat.Resep": { id: "Resep", en: "Recipes", ja: "レシピ" },
  "stat.Negara": { id: "Negara", en: "Countries", ja: "国" },
  
  // Filter Bar
  "filter.Kategori": { id: "Kategori:", en: "Category:", ja: "カテゴリー:" },
  "filter.Tingkat": { id: "Tingkat:", en: "Difficulty:", ja: "難易度:" },
  "filter.Semua": { id: "Semua", en: "All", ja: "すべて" },
  "filter.Mudah": { id: "🟢 Mudah", en: "🟢 Easy", ja: "🟢 簡単" },
  "filter.Sedang": { id: "🟡 Sedang", en: "🟡 Medium", ja: "🟡 普通" },
  "filter.Sulit": { id: "🔴 Sulit", en: "🔴 Hard", ja: "🔴 難しい" },
  "filter.HalalOnly": { id: "Halal Only", en: "Halal Only", ja: "ハラールのみ" },
  "filter.Reset": { id: "Reset filter", en: "Reset filters", ja: "フィルターをリセット" },
  "filter.Found": { id: "resep ditemukan", en: "recipes found", ja: "件のレシピが見つかりました" },
  
  // Empty State
  "empty.Title": { id: "Resep tidak ditemukan", en: "No recipes found", ja: "レシピが見つかりません" },
  "empty.Desc": { id: "Coba ubah kata kunci atau filter kamu", en: "Try changing your keywords or filters", ja: "キーワードやフィルターを変更してください" },
  
  // Recipe Card
  "card.Halal": { id: "Halal", en: "Halal", ja: "ハラール" },
  "card.Time": { id: "m", en: "m", ja: "分" },
  "card.View": { id: "Lihat Resep →", en: "View Recipe →", ja: "レシピを見る →" },

  // About Section
  "about.Title": { id: "Kenapa Gakkou Kitchen?", en: "Why Gakkou Kitchen?", ja: "なぜ学校キッチン？" },
  "about.Furigana.Title": { id: "Furigana Interaktif", en: "Interactive Furigana", ja: "インタラクティブなふりがな" },
  "about.Furigana.Desc": { id: "Semua kanji bisa diklik untuk lihat cara baca dan artinya. Belajar bahasa sambil masak!", en: "Click any kanji to see how to read it and its meaning. Learn Japanese while cooking!", ja: "漢字をクリックして読み方を確認！料理しながら日本語を学ぼう！" },
  "about.Halal.Title": { id: "Halal Check", en: "Halal Check", ja: "ハラールチェック" },
  "about.Halal.Desc": { id: "Filter resep halal dengan sekali klik. Ada peringatan otomatis untuk bahan syubhat.", en: "Filter halal recipes with one click. Automatic warnings for doubtful ingredients.", ja: "ハラールレシピをワンクリックで絞り込み。疑わしい材料の自動警告。" },
  "about.Substitusi.Title": { id: "Substitusi Cerdas", en: "Smart Substitution", ja: "賢い代替食材" },
  "about.Substitusi.Desc": { id: "Bahan susah dicari? Kami sarankan alternatif yang tersedia di Gyomu Super atau Aeon!", en: "Hard to find ingredients? We suggest alternatives available at Gyomu Super or Aeon!", ja: "代替食材のご提案。業務スーパーやイオンで手に入る材料を提案します！" },
  "about.TikTok.Title": { id: "Video TikTok", en: "TikTok Videos", ja: "TikTok動画" },
  "about.TikTok.Desc": { id: "Lihat tutorial memasak dari TikTok langsung di halaman resep. Mudah diikuti!", en: "Watch cooking tutorials from TikTok directly on the recipe page. Easy to follow!", ja: "レシピページで直接TikTokの料理動画を見られます。わかりやすい！" },

  // Breadcrumb
  "breadcrumb.Home": { id: "Beranda", en: "Home", ja: "ホーム" },

  // Video Sidebar
  "video.Watch": { id: "Lihat Videonya!", en: "Watch the Video!", ja: "動画で見る" },
  "video.Fallback": { id: "Jika video tidak muncul, buka langsung: ", en: "If video doesn't load, open: ", ja: "動画が見られない場合：" },
  "video.Recipe": { id: "Lihat video resep", en: "Watch recipe video", ja: "レシピ動画を見る" },

  // Shopping Tips Sidebar
  "tips.Title": { id: "Tips Belanja", en: "Shopping Tips", ja: "お買い物のコツ" },
  "tips.Gyomu.Title": { id: "Gyomu Super (業務スーパー)", en: "Gyomu Super (業務スーパー)", ja: "Gyomu Super (業務スーパー)" },
  "tips.Gyomu.Desc": { id: "Harga murah, beli banyak. Beku OK!", en: "Cheap and large quantity. Frozen food OK!", ja: "安くて大容量。冷凍食品もOK！" },
  "tips.Aeon.Title": { id: "Aeon (イオン)", en: "Aeon (イオン)", ja: "Aeon (イオン)" },
  "tips.Aeon.Desc": { id: "Produk impor, ada label halal", en: "Imported products, has halal label", ja: "輸入品あり、ハラールマーク付き" },
  "tips.Kaldi.Title": { id: "Kaldi Coffee Farm", en: "Kaldi Coffee Farm", ja: "Kaldi Coffee Farm" },
  "tips.Kaldi.Desc": { id: "Bumbu impor: cumin, turmeric, dll", en: "Imported spices: cumin, turmeric, etc", ja: "クミンやターメリックなどの輸入スパイス" },
  "tips.Amazon.Title": { id: "Amazon Japan", en: "Amazon Japan", ja: "Amazon Japan" },
  "tips.Amazon.Desc": { id: "Bahan langka: tempe, kecap, santan", en: "Rare ingredients: tempeh, sweet soy sauce, coconut milk", ja: "テンペ、ケチャップマニス、ココナッツミルク" },

  // Footer
  "footer.Desc": { id: "Resep masakan internasional sederhana dengan bahan yang mudah didapat di supermarket Jepang (Gyomu Super, Aeon, dll).", en: "Simple international recipes with easy-to-find ingredients at Japanese supermarkets (Gyomu Super, Aeon, etc).", ja: "日本のスーパー（業務スーパー、イオンなど）で簡単に手に入る材料を使ったシンプルな国際的なレシピ。" },
  "footer.Navigasi": { id: "Navigasi", en: "Navigation", ja: "ナビゲーション" },
  "footer.SemuaResep": { id: "Semua Resep", en: "All Recipes", ja: "すべてのレシピ" },
  "footer.TentangKami": { id: "Tentang Kami", en: "About Us", ja: "私たちについて" },
  "footer.Legal": { id: "Legal", en: "Legal", ja: "法的情報" },
  "footer.Privasi": { id: "Kebijakan Privasi", en: "Privacy Policy", ja: "プライバシーポリシー" },
  "footer.Copyright": { id: "Dibuat untuk warga asing di Jepang.", en: "Made for foreigners in Japan.", ja: "在日外国人のために作成されました。" },

  // Recipe Detail
  "detail.Kembali": { id: "Kembali ke Beranda", en: "Back to Home", ja: "ホームに戻る" },
  "detail.Waktu": { id: "Waktu", en: "Time", ja: "時間" },
  "detail.Porsi": { id: "Porsi", en: "Servings", ja: "分量" },
  "detail.Bahan": { id: "Bahan-bahan", en: "Ingredients", ja: "材料" },
  "detail.Langkah": { id: "Langkah-langkah", en: "Instructions", ja: "作り方" },
  "detail.Catatan": { id: "Catatan & Tips", en: "Notes & Tips", ja: "メモとヒント" },
  "detail.Belanja": { id: "Panduan Belanja", en: "Shopping Guide", ja: "買い物ガイド" },
  "detail.Video": { id: "Video Tutorial", en: "Video Tutorial", ja: "動画チュートリアル" },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('id'); // Default Indonesia
  const [isLoaded, setIsLoaded] = useState(false);

  // Load language preference from local storage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('gakkou_language');
    if (savedLang && LANGUAGES.some(l => l.code === savedLang)) {
      setCurrentLang(savedLang);
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('gakkou_language', currentLang);
    }
  }, [currentLang, isLoaded]);

  // Helper untuk mendapatkan translasi teks statis (UI)
  const t = (textKey, fallbackOrParams, params) => {
    if (!textKey) return typeof fallbackOrParams === 'string' ? fallbackOrParams : '';
    
    let fallback = typeof fallbackOrParams === 'string' ? fallbackOrParams : undefined;
    let actualParams = typeof fallbackOrParams === 'object' ? fallbackOrParams : params;

    let text = DICTIONARY[textKey]?.[currentLang] || DICTIONARY[textKey]?.id || fallback || textKey;
    
    if (actualParams && typeof text === 'string') {
      Object.entries(actualParams).forEach(([key, value]) => {
        text = text.replace(new RegExp(`{${key}}`, 'g'), value);
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
