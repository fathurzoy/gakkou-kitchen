import fs from 'fs';

async function main() {
  const filePath = './data/recipes.js';
  let content = fs.readFileSync(filePath, 'utf8');

  let jsCode = content.replace(/export const/g, 'const');
  jsCode += '\nexport { recipes, categories };\n';

  const tempPath = './data/recipes_temp.js';
  fs.writeFileSync(tempPath, jsCode, 'utf8');

  // Need a cache bust just in case
  const { recipes, categories } = await import('./data/recipes_temp.js?t=' + Date.now());

  const augmentation = {
    "sup-bayam": {
      name_en: "Clear Spinach Soup",
      description_en: "Healthy clear spinach soup. Spinach (horenso) is very easy to find in Japan!",
      ingredients: {
        1: { name_en: "Spinach (Horenso)", amount_en: "1 bunch", furigana: "ほうれんそう" },
        2: { name_en: "Carrot", amount_en: "1/2 piece", furigana: "にんじん" },
        3: { name_en: "Corn", amount_en: "1/2 can", furigana: "コーン" },
        4: { name_en: "Garlic", amount_en: "2 cloves", furigana: "にんにく" },
      },
      steps: {
        1: { text_en: "Boil 600ml water with crushed garlic. Add salt and pepper.", furigana_words: [{kanji: "鍋", reading: "なべ"}, {kanji: "水", reading: "みず"}, {kanji: "沸騰", reading: "ふっとう"}, {kanji: "塩", reading: "しお"}, {kanji: "味付け", reading: "あじつけ"}] },
        2: { text_en: "Add sliced carrots and corn. Boil for 5 minutes.", furigana_words: [{kanji: "薄切", reading: "うすぎり"}, {kanji: "加", reading: "くわ"}, {kanji: "煮", reading: "に"}] },
        3: { text_en: "Lastly, add spinach, boil for just 1-2 minutes to keep it fresh green.", furigana_words: [{kanji: "最後", reading: "さいご"}, {kanji: "加", reading: "くわ"}, {kanji: "完成", reading: "かんせい"}, {kanji: "色", reading: "いろ"}, {kanji: "鮮やか", reading: "あざやか"}, {kanji: "食", reading: "た"}] },
      },
      survival_phrases: {
        0: { en: "Where is the spinach?" }
      }
    },
    "onigiri-tuna": {
      name_en: "Tuna Mayo Onigiri",
      description_en: "Tuna mayo filled onigiri — the most popular in Japan! Great for language school lunch.",
      ingredients: {
        1: { name_en: "Warm White Rice", amount_en: "2 bowls (400g)", furigana: "あたたかいごはん" },
        2: { name_en: "Canned Tuna", amount_en: "1 can (70g)", furigana: "ツナかん" },
        3: { name_en: "Mayonnaise", amount_en: "2 tbsp", furigana: "マヨネーズ" },
        4: { name_en: "Nori (Seaweed)", amount_en: "3 sheets", furigana: "のり" },
        5: { name_en: "Salt", amount_en: "a little", furigana: "しお" },
      },
      steps: {
        1: { text_en: "Drain the canned tuna, mix with mayonnaise.", furigana_words: [{kanji: "水気", reading: "みずけ"}, {kanji: "切", reading: "き"}, {kanji: "混", reading: "ま"}] },
        2: { text_en: "Wet your hands with water, sprinkle a little salt on your palms.", furigana_words: [{kanji: "手", reading: "て"}, {kanji: "水", reading: "みず"}, {kanji: "濡らして", reading: "ぬらして"}, {kanji: "塩", reading: "しお"}] },
        3: { text_en: "Take a handful of rice, make a hollow in the center, fill with tuna mayo.", furigana_words: [{kanji: "取", reading: "と"}, {kanji: "中央", reading: "ちゅうおう"}, {kanji: "入", reading: "い"}] },
        4: { text_en: "Shape the rice into a triangle. Wrap with nori.", furigana_words: [{kanji: "三角形", reading: "さんかっけい"}, {kanji: "握って", reading: "にぎって"}, {kanji: "巻", reading: "ま"}, {kanji: "完成", reading: "かんせい"}] },
      },
      survival_phrases: {
        0: { en: "Where is the canned tuna?" },
        1: { en: "Where is the nori?" }
      }
    },
    "pho-vietnam": {
      name_en: "Simple Beef Phở",
      description_en: "Warm and healthy beef Phở. Use Japanese rice noodles as a substitute!",
      ingredients: {
        1: { name_en: "Rice Noodles / Bihun", amount_en: "200g", furigana: "ビーフン" },
        2: { name_en: "Thinly Sliced Beef", amount_en: "150g", furigana: "うすぎりぎゅうにく" },
        3: { name_en: "Beef Broth / Consommé", amount_en: "2 tablets + 600ml water", furigana: "コンソメ" },
        4: { name_en: "Ginger", amount_en: "1 small piece", furigana: "しょうが" },
      },
      steps: {
        1: { text_en: "Boil 600ml water with consommé and sliced ginger.", furigana_words: [{kanji: "鍋", reading: "なべ"}, {kanji: "水", reading: "みず"}, {kanji: "入", reading: "い"}, {kanji: "沸騰", reading: "ふっとう"}] },
        2: { text_en: "Soak rice noodles in hot water according to package, drain.", furigana_words: [{kanji: "戻", reading: "もど"}, {kanji: "水気", reading: "みずけ"}, {kanji: "切", reading: "き"}] },
        3: { text_en: "Add thinly sliced beef into the boiling broth, cook for 2-3 mins.", furigana_words: [{kanji: "薄切", reading: "うすぎり"}, {kanji: "牛肉", reading: "ぎゅうにく"}, {kanji: "沸騰", reading: "ふっとう"}, {kanji: "入", reading: "い"}, {kanji: "煮", reading: "に"}] },
        4: { text_en: "Serve noodles in a bowl, pour hot broth and beef.", furigana_words: [{kanji: "器", reading: "うつわ"}, {kanji: "盛", reading: "も"}, {kanji: "熱", reading: "あつ"}, {kanji: "牛肉", reading: "ぎゅうにく"}, {kanji: "完成", reading: "かんせい"}] },
      },
      survival_phrases: {
        0: { en: "Where are the rice noodles?" }
      }
    },
    "tamago-meshi": {
      name_en: "Tamago Kake Gohan (TKG)",
      description_en: "TKG aka Tamago Kake Gohan — hot rice + raw egg + soy sauce. A 5-minute Japanese breakfast!",
      ingredients: {
        1: { name_en: "Hot White Rice", amount_en: "1 bowl", furigana: "たきたてごはん" },
        2: { name_en: "Fresh Egg", amount_en: "1 piece (must be fresh)", furigana: "しんせんなたまご" },
        3: { name_en: "Soy Sauce / Shoyu", amount_en: "1 tsp", furigana: "しょうゆ" },
        4: { name_en: "Green Onion (optional)", amount_en: "a little, finely sliced", furigana: "ねぎ" },
      },
      steps: {
        1: { text_en: "Put hot rice in a bowl.", furigana_words: [{kanji: "熱い", reading: "あつい"}, {kanji: "茶碗", reading: "ちゃわん"}, {kanji: "盛", reading: "も"}] },
        2: { text_en: "Crack the egg directly onto the hot rice.", furigana_words: [{kanji: "卵", reading: "たまご"}, {kanji: "上", reading: "うえ"}, {kanji: "直接", reading: "ちょくせつ"}, {kanji: "割", reading: "わ"}, {kanji: "入", reading: "い"}] },
        3: { text_en: "Pour soy sauce. Stir until egg is mixed with rice.", furigana_words: [{kanji: "醤油", reading: "しょうゆ"}, {kanji: "混", reading: "ま"}] },
        4: { text_en: "Sprinkle green onions. Enjoy! (Itadakimasu!)", furigana_words: [{kanji: "頂", reading: "いただ"}] },
      },
      survival_phrases: {
        0: { en: "Where are the fresh eggs?" }
      }
    }
  };

  const fullFuriganaDict = {
    "鶏肉": "とりにく", "玉ねぎ": "たまねぎ", "薄切": "うすぎり", "切": "き", 
    "油": "あぶら", "熱": "ねつ", "香": "かお", "出": "で", "炒": "いた", "表面": "ひょうめん", "焼": "や", 
    "甘口醤油": "あまくちしょうゆ", "加": "くわ", "水": "みず", "入": "い", "弱火": "よわび", "煮込": "にこ", "盛": "も", 
    "付": "つ", "白": "しろ", "飯": "はん", "一緒": "いっしょ", "召し上がれ": "めしあがれ",
    "ボウル": "ぼうる", "塩": "しお", "割": "わ", "混": "ま", "強火": "つよび", "流": "なが", "込": "こ", "味付け": "あじつけ",
    "肉": "にく", "魚": "さかな", "野菜": "やさい", "少": "すこ", "水気": "みずけ", "揚": "あ", "両面": "りょうめん", 
    "器": "うつわ", "浸": "ひた", "細切": "ほそぎ", "茹": "ゆ", "完成": "かんせい", "柔らかく": "やわらかく"
  };

  recipes.forEach(r => {
    if (augmentation[r.slug]) {
      const aug = augmentation[r.slug];
      r.name_en = aug.name_en;
      r.description_en = aug.description_en;
      
      r.ingredients.forEach(ing => {
        if (aug.ingredients[ing.id]) {
          ing.name_en = aug.ingredients[ing.id].name_en;
          ing.amount_en = aug.ingredients[ing.id].amount_en;
          if(aug.ingredients[ing.id].furigana) ing.furigana = aug.ingredients[ing.id].furigana;
        }
      });

      r.steps.forEach(step => {
        if (aug.steps[step.id]) {
          step.text_en = aug.steps[step.id].text_en;
          if (aug.steps[step.id].furigana_words) {
            step.furigana_words = aug.steps[step.id].furigana_words;
          }
        }
      });

      if (r.survival_phrases) {
        r.survival_phrases.forEach((ph, i) => {
          if (aug.survival_phrases[i]) {
            ph.en = aug.survival_phrases[i].en;
          }
        });
      }
    }

    r.steps.forEach(step => {
      let existingKanjis = new Set((step.furigana_words || []).map(f => f.kanji));
      if(!step.furigana_words) step.furigana_words = [];
      
      for (const [kanji, reading] of Object.entries(fullFuriganaDict)) {
        if (step.text_jp.includes(kanji) && !existingKanjis.has(kanji)) {
          step.furigana_words.push({ kanji, reading });
        }
      }
    });
  });

  let newCode = `// data/recipes.js
// 10 resep internasional untuk warga asing di Jepang (Gakkou Kitchen)

export const recipes = ${JSON.stringify(recipes, null, 2)};

export const getRecipeBySlug = (slug) => recipes.find((r) => r.slug === slug);

export const categories = ${JSON.stringify(categories, null, 2)};
`;

  fs.writeFileSync(filePath, newCode, 'utf8');
  fs.unlinkSync(tempPath);
  console.log('Successfully augmented recipes with furigana and English!');
}

main().catch(console.error);
