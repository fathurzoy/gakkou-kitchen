// data/recipes.js
// 10 resep internasional untuk warga asing di Jepang (Gakkou Kitchen)

export const recipes = [
  {
    "id": 1,
    "slug": "ayam-kecap",
    "emoji": "🍗",
    "name_id": "Ayam Kecap",
    "name_en": "Sweet Soy Sauce Chicken",
    "name_jp": "鶏肉の甘辛煮",
    "name_jp_plain": "鶏肉の甘辛煮",
    "furigana_name": [
      {
        "text": "鶏肉",
        "reading": "とりにく",
        "meaning": "Daging Ayam"
      },
      {
        "text": "の",
        "reading": "",
        "meaning": ""
      },
      {
        "text": "甘辛煮",
        "reading": "あまからに",
        "meaning": "Masakan Manis-Pedas"
      }
    ],
    "isHalal": true,
    "category": "indonesia",
    "difficulty": "mudah",
    "time_min": 30,
    "servings": 2,
    "description_id": "Ayam empuk dengan saus kecap manis khas Indonesia. Mudah dibuat di dapur kost!",
    "description_en": "Tender chicken in Indonesian sweet soy sauce. Easy to make in a dorm kitchen!",
    "description_jp": "インドネシア風甘辛チキン。寮のキッチンでも簡単に作れます！",
    "tiktok_video_id": "7332475191303425298",
    "image_color": "#8B4513",
    "ingredients": [
      {
        "id": 1,
        "name_id": "Daging Ayam",
        "name_en": "Chicken Meat",
        "name_jp": "鶏肉",
        "furigana": "とりにく",
        "meaning": "Daging Ayam",
        "amount_id": "300g",
        "amount_en": "300g",
        "amount_jp": "300グラム",
        "isHalal": true,
        "store_tip": "Gyomu Super / Aeon — ムネ肉 (mune niku) atau モモ肉 (momo niku)"
      },
      {
        "id": 2,
        "name_id": "Kecap Manis",
        "name_en": "Sweet Soy Sauce",
        "name_jp": "甘口醤油",
        "furigana": "あまくちしょうゆ",
        "meaning": "Kecap Manis",
        "amount_id": "3 sendok makan",
        "amount_en": "3 tablespoons",
        "amount_jp": "大さじ3",
        "isHalal": true,
        "store_tip": "Cari 'インドネシア醤油' atau pakai campuran 醤油 + gula",
        "substitute": {
          "reason_id": "Kecap manis Indonesia sulit dicari di supermarket biasa",
          "reason_en": "Indonesian sweet soy sauce is hard to find in regular supermarkets",
          "reason_jp": "インドネシアの甘口醤油はスーパーで見つけにくいです",
          "options": [
            {
              "name_id": "Kikkoman 醤油 + Gula Pasir",
              "name_en": "Kikkoman Soy Sauce + Sugar",
              "name_jp": "キッコーマン醤油＋砂糖",
              "ratio_id": "3 sdm kecap asin + 1,5 sdm gula",
              "ratio_en": "3 tbsp soy sauce + 1.5 tbsp sugar",
              "ratio_jp": "醤油大さじ3＋砂糖大さじ1.5",
              "store": "Semua supermarket"
            }
          ]
        }
      },
      {
        "id": 3,
        "name_id": "Bawang Putih",
        "name_en": "Garlic",
        "name_jp": "にんにく",
        "furigana": "にんにく",
        "meaning": "Bawang Putih",
        "amount_id": "3 siung",
        "amount_en": "3 cloves",
        "amount_jp": "3かけ",
        "isHalal": true,
        "store_tip": "Semua supermarket — にんにく"
      },
      {
        "id": 4,
        "name_id": "Bawang Merah",
        "name_en": "Onion / Shallot",
        "name_jp": "玉ねぎ",
        "furigana": "たまねぎ",
        "meaning": "Bawang Bombay",
        "amount_id": "1 buah",
        "amount_en": "1 piece",
        "amount_jp": "1個",
        "isHalal": true,
        "store_tip": "Gyomu Super sangat murah — 玉ねぎ"
      },
      {
        "id": 5,
        "name_id": "Minyak Goreng",
        "name_en": "Cooking Oil",
        "name_jp": "サラダ油",
        "furigana": "サラダゆ",
        "meaning": "Minyak Sayur",
        "amount_id": "2 sendok makan",
        "amount_en": "2 tablespoons",
        "amount_jp": "大さじ2",
        "isHalal": true,
        "store_tip": "Semua supermarket — サラダ油 atau 植物油"
      }
    ],
    "steps": [
      {
        "id": 1,
        "text_id": "Potong ayam menjadi potongan sedang. Iris bawang merah dan cincang bawang putih.",
        "text_en": "Cut chicken into bite-sized pieces. Slice the onion and mince the garlic.",
        "text_jp": "鶏肉を一口大に切ります。玉ねぎを薄切りに、にんにくをみじん切りにします。",
        "furigana_words": [
          {
            "kanji": "鶏肉",
            "reading": "とりにく"
          },
          {
            "kanji": "玉ねぎ",
            "reading": "たまねぎ"
          },
          {
            "kanji": "薄切",
            "reading": "うすぎり"
          },
          {
            "kanji": "切",
            "reading": "き"
          },
          {
            "kanji": "肉",
            "reading": "にく"
          }
        ]
      },
      {
        "id": 2,
        "text_id": "Panaskan minyak di wajan, tumis bawang putih dan bawang merah sampai harum (2-3 menit).",
        "text_en": "Heat oil in a pan, sauté garlic and onion until fragrant (2-3 mins).",
        "text_jp": "フライパンに油を熱し、にんにくと玉ねぎを香りが出るまで炒めます（2〜3分）。",
        "furigana_words": [
          {
            "kanji": "炒",
            "reading": "いた"
          },
          {
            "kanji": "玉ねぎ",
            "reading": "たまねぎ"
          },
          {
            "kanji": "油",
            "reading": "あぶら"
          },
          {
            "kanji": "熱",
            "reading": "ねつ"
          },
          {
            "kanji": "香",
            "reading": "かお"
          },
          {
            "kanji": "出",
            "reading": "で"
          }
        ]
      },
      {
        "id": 3,
        "text_id": "Masukkan ayam, masak sampai berubah warna kecokelatan.",
        "text_en": "Add chicken and cook until the surface is browned.",
        "text_jp": "鶏肉を加え、表面が焼けるまで炒めます。",
        "furigana_words": [
          {
            "kanji": "鶏肉",
            "reading": "とりにく"
          },
          {
            "kanji": "表面",
            "reading": "ひょうめん"
          },
          {
            "kanji": "炒",
            "reading": "いた"
          },
          {
            "kanji": "焼",
            "reading": "や"
          },
          {
            "kanji": "加",
            "reading": "くわ"
          },
          {
            "kanji": "肉",
            "reading": "にく"
          }
        ]
      },
      {
        "id": 4,
        "text_id": "Tuang kecap manis, tambahkan sedikit air (50ml), aduk rata dan masak dengan api kecil 15 menit.",
        "text_en": "Pour in sweet soy sauce, add a little water (50ml), mix well and simmer on low heat for 15 mins.",
        "text_jp": "甘口醤油を加え、水50mlを入れて弱火で15分煮込みます。",
        "furigana_words": [
          {
            "kanji": "弱火",
            "reading": "よわび"
          },
          {
            "kanji": "煮込",
            "reading": "にこ"
          },
          {
            "kanji": "油",
            "reading": "あぶら"
          },
          {
            "kanji": "甘口醤油",
            "reading": "あまくちしょうゆ"
          },
          {
            "kanji": "加",
            "reading": "くわ"
          },
          {
            "kanji": "水",
            "reading": "みず"
          },
          {
            "kanji": "入",
            "reading": "い"
          },
          {
            "kanji": "込",
            "reading": "こ"
          }
        ]
      },
      {
        "id": 5,
        "text_id": "Angkat dan sajikan dengan nasi putih hangat. Selamat makan! (いただきます！)",
        "text_en": "Remove from heat and serve with warm white rice. Enjoy! (Itadakimasu!)",
        "text_jp": "盛り付けて、白いご飯と一緒に召し上がれ！いただきます！",
        "furigana_words": [
          {
            "kanji": "白",
            "reading": "しろ"
          },
          {
            "kanji": "召し上がれ",
            "reading": "めしあがれ"
          },
          {
            "kanji": "盛",
            "reading": "も"
          },
          {
            "kanji": "付",
            "reading": "つ"
          },
          {
            "kanji": "飯",
            "reading": "はん"
          },
          {
            "kanji": "一緒",
            "reading": "いっしょ"
          }
        ]
      }
    ],
    "survival_phrases": [
      {
        "jp": "すみません、鶏肉はどこですか？",
        "romaji": "Sumimasen, toriniku wa doko desu ka?",
        "id": "Permisi, daging ayam ada di mana?",
        "en": "Excuse me, where is the chicken?"
      },
      {
        "jp": "これはハラールですか？",
        "romaji": "Kore wa haraaru desu ka?",
        "id": "Apakah ini halal?",
        "en": "Is this halal?"
      }
    ]
  },
  {
    "id": 2,
    "slug": "nasi-goreng-telur",
    "emoji": "🍳",
    "name_id": "Nasi Goreng Telur",
    "name_en": "Egg Fried Rice",
    "name_jp": "卵チャーハン",
    "name_jp_plain": "卵チャーハン",
    "furigana_name": [
      {
        "text": "卵",
        "reading": "たまご",
        "meaning": "Telur"
      },
      {
        "text": "チャーハン",
        "reading": "",
        "meaning": "Nasi Goreng"
      }
    ],
    "isHalal": true,
    "category": "indonesia",
    "difficulty": "mudah",
    "time_min": 15,
    "servings": 1,
    "description_id": "Nasi goreng telur sederhana yang bisa dibuat kapan saja. Bahan-bahannya selalu ada di Jepang!",
    "description_en": "Simple egg fried rice that you can make anytime. Ingredients are always available in Japan!",
    "description_jp": "シンプルな卵チャーハン。材料はどのスーパーでも揃います！",
    "tiktok_video_id": "7332475191303425298",
    "image_color": "#DAA520",
    "ingredients": [
      {
        "id": 1,
        "name_id": "Nasi Putih",
        "name_en": "White Rice",
        "name_jp": "ご飯",
        "furigana": "ごはん",
        "meaning": "Nasi",
        "amount_id": "1 piring (nasi dingin lebih baik)",
        "amount_en": "1 bowl (cold rice is better)",
        "amount_jp": "茶碗1杯分（冷やご飯がベスト）",
        "isHalal": true,
        "store_tip": "Gyomu Super — パックご飯 (nasi instan) kalau tidak punya nasi dingin"
      },
      {
        "id": 2,
        "name_id": "Telur",
        "name_en": "Egg",
        "name_jp": "卵",
        "furigana": "たまご",
        "meaning": "Telur",
        "amount_id": "2 butir",
        "amount_en": "2 pieces",
        "amount_jp": "2個",
        "isHalal": true,
        "store_tip": "Gyomu Super — 10個入り yang sangat murah"
      },
      {
        "id": 3,
        "name_id": "Kecap Asin / Shoyu",
        "name_en": "Soy Sauce / Shoyu",
        "name_jp": "醤油",
        "furigana": "しょうゆ",
        "meaning": "Kecap Asin",
        "amount_id": "1 sendok makan",
        "amount_en": "1 tablespoon",
        "amount_jp": "大さじ1",
        "isHalal": true,
        "store_tip": "Semua supermarket — キッコーマン醤油"
      },
      {
        "id": 4,
        "name_id": "Daun Bawang",
        "name_en": "Green Onion",
        "name_jp": "ねぎ",
        "furigana": "ねぎ",
        "meaning": "Daun Bawang",
        "amount_id": "2 batang",
        "amount_en": "2 stalks",
        "amount_jp": "2本",
        "isHalal": true,
        "store_tip": "Gyomu Super / Aeon — 長ねぎ"
      },
      {
        "id": 5,
        "name_id": "Garam & Merica",
        "name_en": "Salt & Pepper",
        "name_jp": "塩とこしょう",
        "furigana": "しおとこしょう",
        "meaning": "Garam & Lada",
        "amount_id": "secukupnya",
        "amount_en": "to taste",
        "amount_jp": "少々",
        "isHalal": true,
        "store_tip": "Semua supermarket"
      }
    ],
    "steps": [
      {
        "id": 1,
        "text_id": "Kocok telur dengan sedikit garam dalam mangkuk.",
        "text_en": "Beat eggs with a pinch of salt in a bowl.",
        "text_jp": "ボウルに卵を割り入れ、塩少々を加えてよく混ぜます。",
        "furigana_words": [
          {
            "kanji": "塩",
            "reading": "しお"
          },
          {
            "kanji": "加",
            "reading": "くわ"
          },
          {
            "kanji": "入",
            "reading": "い"
          },
          {
            "kanji": "ボウル",
            "reading": "ぼうる"
          },
          {
            "kanji": "割",
            "reading": "わ"
          },
          {
            "kanji": "混",
            "reading": "ま"
          },
          {
            "kanji": "少",
            "reading": "すこ"
          }
        ]
      },
      {
        "id": 2,
        "text_id": "Panaskan minyak dalam wajan dengan api besar. Tuang telur dan orak-arik.",
        "text_en": "Heat oil in a pan over high heat. Pour in eggs and scramble.",
        "text_jp": "フライパンを強火で熱し、油を入れて卵を流し込みスクランブル状にします。",
        "furigana_words": [
          {
            "kanji": "強火",
            "reading": "つよび"
          },
          {
            "kanji": "油",
            "reading": "あぶら"
          },
          {
            "kanji": "熱",
            "reading": "ねつ"
          },
          {
            "kanji": "入",
            "reading": "い"
          },
          {
            "kanji": "流",
            "reading": "なが"
          },
          {
            "kanji": "込",
            "reading": "こ"
          }
        ]
      },
      {
        "id": 3,
        "text_id": "Masukkan nasi, tekan-tekan agar tidak menggumpal, aduk cepat dengan api besar.",
        "text_en": "Add rice, break up any clumps, and stir-fry quickly over high heat.",
        "text_jp": "ご飯を加え、強火でほぐしながらパラパラになるまで炒めます。",
        "furigana_words": [
          {
            "kanji": "強火",
            "reading": "つよび"
          },
          {
            "kanji": "炒",
            "reading": "いた"
          },
          {
            "kanji": "加",
            "reading": "くわ"
          },
          {
            "kanji": "飯",
            "reading": "はん"
          }
        ]
      },
      {
        "id": 4,
        "text_id": "Tambahkan kecap asin, garam, merica. Aduk rata. Taburi daun bawang.",
        "text_en": "Add soy sauce, salt, and pepper. Mix well. Garnish with green onions.",
        "text_jp": "醤油・塩・こしょうで味付けし、ねぎを加えて完成です！",
        "furigana_words": [
          {
            "kanji": "味付け",
            "reading": "あじつけ"
          },
          {
            "kanji": "油",
            "reading": "あぶら"
          },
          {
            "kanji": "加",
            "reading": "くわ"
          },
          {
            "kanji": "付",
            "reading": "つ"
          },
          {
            "kanji": "塩",
            "reading": "しお"
          },
          {
            "kanji": "完成",
            "reading": "かんせい"
          }
        ]
      }
    ],
    "survival_phrases": [
      {
        "jp": "冷たいご飯がありますか？",
        "romaji": "Tsumetai gohan ga arimasu ka?",
        "id": "Apakah ada nasi dingin?",
        "en": "Do you have cold rice?"
      }
    ]
  },
  {
    "id": 3,
    "slug": "tempe-goreng",
    "emoji": "🟫",
    "name_id": "Tempe Goreng Bumbu",
    "name_en": "Fried Marinated Tempeh",
    "name_jp": "テンペの唐揚げ風",
    "name_jp_plain": "テンペの唐揚げ風",
    "furigana_name": [
      {
        "text": "テンペの",
        "reading": "",
        "meaning": "Tempe"
      },
      {
        "text": "唐揚",
        "reading": "からあ",
        "meaning": "Gorengan"
      },
      {
        "text": "げ風",
        "reading": "ふう",
        "meaning": "Gaya"
      }
    ],
    "isHalal": true,
    "category": "indonesia",
    "difficulty": "mudah",
    "time_min": 20,
    "servings": 2,
    "description_id": "Tempe goreng renyah dengan bumbu bawang. Tempe sudah mulai ada di beberapa toko di Jepang!",
    "description_en": "Crispy fried tempeh with garlic marinade. Tempeh is starting to appear in some stores in Japan!",
    "description_jp": "カリカリのインドネシア風揚げテンペ。日本でもテンペが買えるお店が増えています！",
    "tiktok_video_id": "7332475191303425298",
    "image_color": "#8B6914",
    "ingredients": [
      {
        "id": 1,
        "name_id": "Tempe",
        "name_en": "Tempeh",
        "name_jp": "テンペ",
        "furigana": "",
        "meaning": "Tempe (fermented soybean)",
        "amount_id": "200g",
        "amount_en": "200g",
        "amount_jp": "200グラム",
        "isHalal": true,
        "store_tip": "Cari di toko Asia / 業務スーパー beberapa cabang / Amazon Japan",
        "substitute": {
          "reason_id": "Jika tempe tidak ada di toko terdekat",
          "reason_en": "If tempeh is not available nearby",
          "reason_jp": "近くの店でテンペが見つからない場合",
          "options": [
            {
              "name_id": "Tahu Keras (Momen Tofu)",
              "name_en": "Firm Tofu (Momen Tofu)",
              "name_jp": "木綿豆腐",
              "ratio_id": "200g tahu, peras air, iris tebal",
              "ratio_en": "200g tofu, drain water, slice thickly",
              "ratio_jp": "木綿豆腐200g、水を切って厚めに切る",
              "store": "Semua supermarket — 木綿豆腐"
            }
          ]
        }
      },
      {
        "id": 2,
        "name_id": "Bawang Putih",
        "name_jp": "にんにく",
        "furigana": "にんにく",
        "meaning": "Bawang Putih",
        "amount_id": "3 siung, haluskan",
        "amount_en": "3 cloves, minced",
        "amount_jp": "3かけ（すりおろし）",
        "isHalal": true,
        "store_tip": "Semua supermarket"
      },
      {
        "id": 3,
        "name_id": "Ketumbar",
        "name_en": "Coriander",
        "name_jp": "コリアンダーパウダー",
        "furigana": "",
        "meaning": "Bubuk Ketumbar",
        "amount_id": "1 sdt",
        "amount_en": "1 teaspoon",
        "amount_jp": "小さじ1",
        "isHalal": true,
        "store_tip": "Aeon / Kaldy / Kaldi Coffee Farm — スパイスコーナー",
        "substitute": {
          "reason_id": "Ketumbar bisa sulit ditemukan",
          "reason_en": "Coriander can be hard to find",
          "reason_jp": "コリアンダーが見つからない場合",
          "options": [
            {
              "name_id": "Cumin / Jinten",
              "name_en": "Cumin",
              "name_jp": "クミンパウダー",
              "ratio_id": "Pakai setengah jumlah (0,5 sdt)",
              "ratio_en": "Use half the amount (0.5 tsp)",
              "ratio_jp": "半量（小さじ0.5）使用",
              "store": "Kaldi Coffee Farm"
            }
          ]
        }
      }
    ],
    "steps": [
      {
        "id": 1,
        "text_id": "Iris tempe setebal 1cm. Campur bumbu: bawang putih halus, ketumbar, garam, sedikit air.",
        "text_en": "Slice tempeh 1cm thick. Mix marinade: minced garlic, coriander, salt, and a little water.",
        "text_jp": "テンペを1cm厚に切ります。タレを作る：すりおろしにんにく、コリアンダー、塩、少量の水を混ぜます。",
        "furigana_words": [
          {
            "kanji": "切",
            "reading": "き"
          },
          {
            "kanji": "水",
            "reading": "みず"
          },
          {
            "kanji": "塩",
            "reading": "しお"
          },
          {
            "kanji": "混",
            "reading": "ま"
          },
          {
            "kanji": "少",
            "reading": "すこ"
          }
        ]
      },
      {
        "id": 2,
        "text_id": "Rendam tempe dalam bumbu selama 10 menit.",
        "text_en": "Marinate tempeh for 10 minutes.",
        "text_jp": "テンペをタレに10分漬けます。",
        "furigana_words": [
          {
            "kanji": "漬",
            "reading": "つ"
          }
        ]
      },
      {
        "id": 3,
        "text_id": "Goreng dalam minyak panas sampai kecokelatan dan renyah (3-4 menit per sisi).",
        "text_en": "Fry in hot oil until golden brown and crispy (3-4 mins per side).",
        "text_jp": "熱した油で両面がきつね色になるまで揚げます（片面3〜4分）。",
        "furigana_words": [
          {
            "kanji": "両面",
            "reading": "りょうめん"
          },
          {
            "kanji": "揚",
            "reading": "あ"
          },
          {
            "kanji": "油",
            "reading": "あぶら"
          },
          {
            "kanji": "熱",
            "reading": "ねつ"
          }
        ]
      },
      {
        "id": 4,
        "text_id": "Angkat, tiriskan, sajikan selagi panas.",
        "text_en": "Remove, drain, and serve hot.",
        "text_jp": "油を切って、熱いうちに召し上がれ！",
        "furigana_words": [
          {
            "kanji": "召し上がれ",
            "reading": "めしあがれ"
          },
          {
            "kanji": "切",
            "reading": "き"
          },
          {
            "kanji": "油",
            "reading": "あぶら"
          },
          {
            "kanji": "熱",
            "reading": "ねつ"
          }
        ]
      }
    ],
    "survival_phrases": [
      {
        "jp": "テンペはありますか？",
        "romaji": "Tenpe wa arimasu ka?",
        "id": "Apakah ada tempe?",
        "en": "Do you have tempeh?"
      }
    ]
  },
  {
    "id": 4,
    "slug": "mie-goreng-jawa",
    "emoji": "🍜",
    "name_id": "Mie Goreng Jawa",
    "name_en": "Javanese Fried Noodles",
    "name_jp": "ジャワ風焼きそば",
    "name_jp_plain": "ジャワ風焼きそば",
    "furigana_name": [
      {
        "text": "ジャワ風",
        "reading": "ふう",
        "meaning": "Gaya Jawa"
      },
      {
        "text": "焼きそば",
        "reading": "やきそば",
        "meaning": "Mie Goreng"
      }
    ],
    "isHalal": true,
    "category": "indonesia",
    "difficulty": "sedang",
    "time_min": 25,
    "servings": 2,
    "description_id": "Mie goreng ala Jawa dengan bumbu kecap dan sayuran segar. Pakai mie yakisoba Jepang!",
    "description_en": "Javanese style fried noodles with sweet soy sauce and fresh vegetables. Using Japanese yakisoba noodles!",
    "description_jp": "ジャワ風焼きそば。日本の焼きそば麺で作れます！",
    "tiktok_video_id": "7332475191303425298",
    "image_color": "#8B0000",
    "ingredients": [
      {
        "id": 1,
        "name_id": "Mie Telur / Mie Yakisoba",
        "name_en": "Egg Noodles / Yakisoba Noodles",
        "name_jp": "焼きそば麺",
        "furigana": "やきそばめん",
        "meaning": "Mie untuk Yakisoba",
        "amount_id": "2 bungkus (400g)",
        "amount_en": "2 packs (400g)",
        "amount_jp": "2袋（400g）",
        "isHalal": true,
        "store_tip": "Semua supermarket — 焼きそば麺"
      },
      {
        "id": 2,
        "name_id": "Kubis / Kol",
        "name_en": "Cabbage",
        "name_jp": "キャベツ",
        "furigana": "キャベツ",
        "meaning": "Kubis",
        "amount_id": "3 lembar",
        "amount_en": "3 leaves",
        "amount_jp": "3枚",
        "isHalal": true,
        "store_tip": "Gyomu Super murah — キャベツ"
      },
      {
        "id": 3,
        "name_id": "Wortel",
        "name_en": "Carrot",
        "name_jp": "にんじん",
        "furigana": "にんじん",
        "meaning": "Wortel",
        "amount_id": "1/2 buah",
        "amount_en": "1/2 piece",
        "amount_jp": "1/2本",
        "isHalal": true,
        "store_tip": "Gyomu Super — にんじん"
      },
      {
        "id": 4,
        "name_id": "Kecap Manis",
        "name_jp": "甘口醤油",
        "furigana": "あまくちしょうゆ",
        "meaning": "Kecap Manis",
        "amount_id": "3 sdm",
        "amount_en": "3 tbsp",
        "amount_jp": "大さじ3",
        "isHalal": true,
        "store_tip": "Cari di toko Asia, atau pakai 醤油 + gula",
        "substitute": {
          "reason_id": "Kecap manis bisa diganti",
          "reason_en": "Sweet soy sauce can be substituted",
          "reason_jp": "甘口醤油の代わり",
          "options": [
            {
              "name_id": "Kikkoman Shoyu + Gula",
              "name_en": "Kikkoman Shoyu + Sugar",
              "name_jp": "醤油＋砂糖",
              "ratio_id": "3 sdm shoyu + 1,5 sdm gula pasir",
              "ratio_jp": "醤油大さじ3＋砂糖大さじ1.5",
              "store": "Semua supermarket"
            }
          ]
        }
      }
    ],
    "steps": [
      {
        "id": 1,
        "text_id": "Iris tipis kubis dan wortel. Cincang bawang putih.",
        "text_en": "Thinly slice cabbage and carrot. Mince garlic.",
        "text_jp": "キャベツとにんじんを細切りにします。にんにくをみじん切りにします。",
        "furigana_words": [
          {
            "kanji": "細切",
            "reading": "ほそぎ"
          },
          {
            "kanji": "切",
            "reading": "き"
          }
        ]
      },
      {
        "id": 2,
        "text_id": "Tumis bawang putih, masukkan wortel dan kubis, masak 3 menit.",
        "text_en": "Sauté garlic, add carrot and cabbage, cook for 3 minutes.",
        "text_jp": "にんにくを炒め、にんじんとキャベツを加えて3分炒めます。",
        "furigana_words": [
          {
            "kanji": "炒",
            "reading": "いた"
          },
          {
            "kanji": "加",
            "reading": "くわ"
          }
        ]
      },
      {
        "id": 3,
        "text_id": "Masukkan mie, tambahkan kecap manis dan sedikit air. Aduk rata dengan api besar.",
        "text_en": "Add noodles, sweet soy sauce, and a little water. Mix well on high heat.",
        "text_jp": "麺を加え、甘口醤油と少量の水を入れて強火で炒め合わせます。",
        "furigana_words": [
          {
            "kanji": "強火",
            "reading": "つよび"
          },
          {
            "kanji": "炒め合わせ",
            "reading": "いためあわせ"
          },
          {
            "kanji": "油",
            "reading": "あぶら"
          },
          {
            "kanji": "炒",
            "reading": "いた"
          },
          {
            "kanji": "甘口醤油",
            "reading": "あまくちしょうゆ"
          },
          {
            "kanji": "加",
            "reading": "くわ"
          },
          {
            "kanji": "水",
            "reading": "みず"
          },
          {
            "kanji": "入",
            "reading": "い"
          },
          {
            "kanji": "少",
            "reading": "すこ"
          }
        ]
      },
      {
        "id": 4,
        "text_id": "Sajikan dengan taburan bawang goreng (jika ada) dan irisan cabai.",
        "text_en": "Serve with fried shallots (if any) and sliced chilies.",
        "text_jp": "フライドオニオンをトッピングして完成！",
        "furigana_words": [
          {
            "kanji": "完成",
            "reading": "かんせい"
          }
        ]
      }
    ],
    "survival_phrases": [
      {
        "jp": "焼きそば麺はどこですか？",
        "romaji": "Yakisoba men wa doko desu ka?",
        "id": "Mie yakisoba ada di mana?",
        "en": "Where are the yakisoba noodles?"
      }
    ]
  },
  {
    "id": 5,
    "slug": "mohinga",
    "emoji": "🍵",
    "name_id": "Mohinga",
    "name_en": "Mohinga",
    "name_jp": "モヒンガー（ミャンマー魚介麺）",
    "name_jp_plain": "モヒンガー",
    "furigana_name": [
      {
        "text": "モヒンガー",
        "reading": "",
        "meaning": "Mohinga"
      },
      {
        "text": "（ミャンマー",
        "reading": "",
        "meaning": "(Myanmar"
      },
      {
        "text": "魚介麺",
        "reading": "ぎょかいめん",
        "meaning": "Mie Seafood)"
      },
      {
        "text": "）",
        "reading": "",
        "meaning": ""
      }
    ],
    "isHalal": true,
    "category": "myanmar",
    "difficulty": "sedang",
    "time_min": 35,
    "servings": 2,
    "description_id": "Sup mie ikan khas Myanmar — makanan nasional yang gurih dan hangat, cocok untuk musim dingin Suwa!",
    "description_en": "Myanmar's traditional fish noodle soup — a savory and warm national dish, perfect for Suwa's winter!",
    "description_jp": "ミャンマーの国民食・モヒンガー。諏訪の寒い冬にぴったりの温かいスープ麺です！",
    "tiktok_video_id": "7332475191303425298",
    "image_color": "#CD853F",
    "ingredients": [
      {
        "id": 1,
        "name_id": "Kaldu Ikan / Dashi",
        "name_en": "Fish Broth / Dashi",
        "name_jp": "だし",
        "furigana": "だし",
        "meaning": "Kaldu Ikan",
        "amount_id": "600ml",
        "amount_en": "600ml",
        "amount_jp": "600ミリリットル",
        "isHalal": true,
        "store_tip": "Gyomu Super — だしパック atau かつおだし (cek label: tanpa alkohol)",
        "substitute": {
          "reason_id": "Dashi standar Jepang mungkin mengandung bahan yang perlu dicek",
          "reason_en": "Standard Japanese dashi might contain ingredients that need to be checked",
          "reason_jp": "通常の出汁はアルコール添加の可能性があります",
          "options": [
            {
              "name_id": "Kaldu Sayuran (Konsomé)",
              "name_en": "Vegetable Broth (Consommé)",
              "name_jp": "野菜コンソメ",
              "ratio_id": "Pakai 1 tablet konsomé + 600ml air",
              "ratio_en": "Use 1 consommé tablet + 600ml water",
              "ratio_jp": "コンソメ1個＋水600ml",
              "store": "Semua supermarket"
            }
          ]
        }
      },
      {
        "id": 2,
        "name_id": "Ikan (fillet)",
        "name_en": "Fish (fillet)",
        "name_jp": "魚の切り身",
        "furigana": "さかなのきりみ",
        "meaning": "Potongan Ikan",
        "amount_id": "200g (ikan apapun yang ada)",
        "amount_en": "200g (any available fish)",
        "amount_jp": "200グラム",
        "isHalal": true,
        "store_tip": "Gyomu Super — 鮭 (salmon) atau タラ (cod) yang murah"
      },
      {
        "id": 3,
        "name_id": "Mie / Somen",
        "name_en": "Noodles / Somen",
        "name_jp": "そうめん",
        "furigana": "そうめん",
        "meaning": "Mie Tipis",
        "amount_id": "200g",
        "amount_jp": "200グラム",
        "isHalal": true,
        "store_tip": "Semua supermarket — そうめん paling cocok"
      },
      {
        "id": 4,
        "name_id": "Kunyit / Turmeric",
        "name_en": "Turmeric",
        "name_jp": "ターメリック",
        "furigana": "",
        "meaning": "Kunyit",
        "amount_id": "1/2 sdt",
        "amount_en": "1/2 tsp",
        "amount_jp": "小さじ1/2",
        "isHalal": true,
        "store_tip": "Kaldi Coffee Farm — ターメリックパウダー"
      }
    ],
    "steps": [
      {
        "id": 1,
        "text_id": "Rebus ikan dalam 600ml air/kaldu dengan kunyit, garam selama 10 menit.",
        "text_en": "Boil fish in 600ml water/broth with turmeric and salt for 10 minutes.",
        "text_jp": "鍋に水600mlと魚、ターメリック、塩を入れて10分煮ます。",
        "furigana_words": [
          {
            "kanji": "煮",
            "reading": "に"
          },
          {
            "kanji": "水",
            "reading": "みず"
          },
          {
            "kanji": "入",
            "reading": "い"
          },
          {
            "kanji": "塩",
            "reading": "しお"
          },
          {
            "kanji": "魚",
            "reading": "さかな"
          }
        ]
      },
      {
        "id": 2,
        "text_id": "Angkat ikan, suwir-suwir dagingnya. Kaldu disimpan.",
        "text_en": "Remove fish, shred the meat. Save the broth.",
        "text_jp": "魚を取り出してほぐします。スープはとっておきます。",
        "furigana_words": [
          {
            "kanji": "出",
            "reading": "で"
          },
          {
            "kanji": "魚",
            "reading": "さかな"
          }
        ]
      },
      {
        "id": 3,
        "text_id": "Rebus somen sesuai petunjuk bungkus, tiriskan.",
        "text_en": "Boil somen according to package instructions, drain.",
        "text_jp": "そうめんを袋の通りに茹でて、水気を切ります。",
        "furigana_words": [
          {
            "kanji": "茹",
            "reading": "ゆ"
          },
          {
            "kanji": "水気",
            "reading": "みずけ"
          },
          {
            "kanji": "切",
            "reading": "き"
          },
          {
            "kanji": "水",
            "reading": "みず"
          }
        ]
      },
      {
        "id": 4,
        "text_id": "Sajikan mie dalam mangkuk, tuangi kaldu panas, taruh ikan suwir di atas.",
        "text_en": "Serve noodles in a bowl, pour hot broth, top with shredded fish.",
        "text_jp": "器にそうめんを入れ、熱いスープを注いで魚をのせて完成！",
        "furigana_words": [
          {
            "kanji": "器",
            "reading": "うつわ"
          },
          {
            "kanji": "熱",
            "reading": "ねつ"
          },
          {
            "kanji": "入",
            "reading": "い"
          },
          {
            "kanji": "魚",
            "reading": "さかな"
          },
          {
            "kanji": "完成",
            "reading": "かんせい"
          }
        ]
      }
    ],
    "survival_phrases": [
      {
        "jp": "新鮮な魚はどこで買えますか？",
        "romaji": "Shinsen na sakana wa doko de kaemasu ka?",
        "id": "Di mana bisa beli ikan segar?",
        "en": "Where can I buy fresh fish?"
      }
    ]
  },
  {
    "id": 6,
    "slug": "dal-bhat",
    "emoji": "🍛",
    "name_id": "Dal Bhat",
    "name_en": "Dal Bhat",
    "name_jp": "ダルバート（ネパール豆カレー）",
    "name_jp_plain": "ダルバート",
    "furigana_name": [
      {
        "text": "ダルバート",
        "reading": "",
        "meaning": "Dal Bhat"
      },
      {
        "text": "（ネパール",
        "reading": "",
        "meaning": "(Nepal"
      },
      {
        "text": "豆",
        "reading": "まめ",
        "meaning": "Kacang"
      },
      {
        "text": "カレー）",
        "reading": "",
        "meaning": "Kari)"
      }
    ],
    "isHalal": true,
    "category": "nepal",
    "difficulty": "sedang",
    "time_min": 40,
    "servings": 2,
    "description_id": "Sup kari kacang merah khas Nepal yang bergizi tinggi. Sempurna untuk menghangatkan badan di musim dingin Nagano!",
    "description_en": "Highly nutritious Nepali lentil curry soup. Perfect for warming up in Nagano's winter!",
    "description_jp": "ネパールの定番料理ダルバート。長野の冬を温めてくれる栄養満点のスープです！",
    "tiktok_video_id": "7332475191303425298",
    "image_color": "#FF8C00",
    "ingredients": [
      {
        "id": 1,
        "name_id": "Kacang Merah / Lentil",
        "name_en": "Red Lentils",
        "name_jp": "レンズ豆",
        "furigana": "レンズまめ",
        "meaning": "Lentil",
        "amount_id": "200g (kering)",
        "amount_en": "200g (dry)",
        "amount_jp": "200グラム（乾燥）",
        "isHalal": true,
        "store_tip": "Kaldi Coffee Farm / Costco / Amazon Japan — レンズ豆",
        "substitute": {
          "reason_id": "Lentil bisa diganti kacang lainnya",
          "reason_en": "Lentils can be substituted with other beans",
          "reason_jp": "レンズ豆の代わりに",
          "options": [
            {
              "name_id": "Kacang Merah Kalengan",
              "name_en": "Canned Red Kidney Beans",
              "name_jp": "赤いんげん豆の缶詰",
              "ratio_id": "1 kaleng (400g), tiriskan",
              "ratio_en": "1 can (400g), drained",
              "ratio_jp": "1缶（400g）、水気を切る",
              "store": "Semua supermarket — 缶詰コーナー"
            }
          ]
        }
      },
      {
        "id": 2,
        "name_id": "Tomat",
        "name_en": "Tomato",
        "name_jp": "トマト",
        "furigana": "トマト",
        "meaning": "Tomat",
        "amount_id": "2 buah, potong dadu",
        "amount_en": "2 pieces, diced",
        "amount_jp": "2個（角切り）",
        "isHalal": true,
        "store_tip": "Gyomu Super — トマト atau kaleng ホールトマト lebih murah"
      },
      {
        "id": 3,
        "name_id": "Bubuk Kunyit",
        "name_en": "Turmeric Powder",
        "name_jp": "ターメリック",
        "furigana": "",
        "meaning": "Kunyit Bubuk",
        "amount_id": "1 sdt",
        "amount_jp": "小さじ1",
        "isHalal": true,
        "store_tip": "Kaldi Coffee Farm"
      },
      {
        "id": 4,
        "name_id": "Bubuk Jinten / Cumin",
        "name_en": "Cumin Powder",
        "name_jp": "クミンパウダー",
        "furigana": "",
        "meaning": "Jinten Bubuk",
        "amount_id": "1 sdt",
        "amount_jp": "小さじ1",
        "isHalal": true,
        "store_tip": "Kaldi Coffee Farm / Aeon Global Kitchen corner"
      }
    ],
    "steps": [
      {
        "id": 1,
        "text_id": "Rendam lentil 30 menit (atau gunakan kacang kaleng langsung).",
        "text_en": "Soak lentils for 30 minutes (or use canned beans directly).",
        "text_jp": "レンズ豆を30分水に浸します（缶詰の場合はそのままでOK）。",
        "furigana_words": [
          {
            "kanji": "浸",
            "reading": "ひた"
          },
          {
            "kanji": "水",
            "reading": "みず"
          }
        ]
      },
      {
        "id": 2,
        "text_id": "Tumis bawang, tomat, dan bumbu (kunyit, cumin) selama 5 menit.",
        "text_en": "Sauté onion, tomato, and spices (turmeric, cumin) for 5 minutes.",
        "text_jp": "玉ねぎ、トマト、スパイスを5分炒めます。",
        "furigana_words": [
          {
            "kanji": "炒",
            "reading": "いた"
          },
          {
            "kanji": "玉ねぎ",
            "reading": "たまねぎ"
          }
        ]
      },
      {
        "id": 3,
        "text_id": "Masukkan lentil dan air 600ml. Rebus sampai lentil empuk (20-25 menit).",
        "text_en": "Add lentils and 600ml water. Boil until lentils are tender (20-25 mins).",
        "text_jp": "レンズ豆と水600mlを加えて、豆が柔らかくなるまで20〜25分煮ます。",
        "furigana_words": [
          {
            "kanji": "柔らかく",
            "reading": "やわらかく"
          },
          {
            "kanji": "煮",
            "reading": "に"
          },
          {
            "kanji": "加",
            "reading": "くわ"
          },
          {
            "kanji": "水",
            "reading": "みず"
          }
        ]
      },
      {
        "id": 4,
        "text_id": "Sajikan dengan nasi putih hangat.",
        "text_en": "Serve with warm white rice.",
        "text_jp": "白いご飯と一緒に盛り付けて完成！",
        "furigana_words": [
          {
            "kanji": "盛り付け",
            "reading": "もりつけ"
          },
          {
            "kanji": "盛",
            "reading": "も"
          },
          {
            "kanji": "付",
            "reading": "つ"
          },
          {
            "kanji": "白",
            "reading": "しろ"
          },
          {
            "kanji": "飯",
            "reading": "はん"
          },
          {
            "kanji": "一緒",
            "reading": "いっしょ"
          },
          {
            "kanji": "完成",
            "reading": "かんせい"
          }
        ]
      }
    ],
    "survival_phrases": [
      {
        "jp": "レンズ豆はどこですか？",
        "romaji": "Renzu mame wa doko desu ka?",
        "id": "Lentil ada di mana?",
        "en": "Where are the lentils?"
      }
    ]
  },
  {
    "id": 7,
    "slug": "sup-bayam",
    "emoji": "🥬",
    "name_id": "Sop Bayam Bening",
    "name_en": "Clear Spinach Soup",
    "name_jp": "ほうれん草の澄まし汁",
    "name_jp_plain": "ほうれん草の澄まし汁",
    "furigana_name": [
      {
        "text": "ほうれん草",
        "reading": "そう",
        "meaning": "Bayam"
      },
      {
        "text": "の",
        "reading": "",
        "meaning": ""
      },
      {
        "text": "澄まし汁",
        "reading": "すましじる",
        "meaning": "Sup Bening"
      }
    ],
    "isHalal": true,
    "category": "indonesia",
    "difficulty": "mudah",
    "time_min": 15,
    "servings": 2,
    "description_id": "Sup bayam bening yang menyehatkan. Bayam (horenso) sangat mudah ditemukan di Jepang!",
    "description_en": "Healthy clear spinach soup. Spinach (horenso) is very easy to find in Japan!",
    "description_jp": "シンプルで健康的なほうれん草スープ。ほうれん草はどのスーパーでも手に入ります！",
    "tiktok_video_id": "7332475191303425298",
    "image_color": "#228B22",
    "ingredients": [
      {
        "id": 1,
        "name_id": "Bayam (Horenso)",
        "name_en": "Spinach (Horenso)",
        "name_jp": "ほうれん草",
        "furigana": "ほうれんそう",
        "meaning": "Bayam Jepang",
        "amount_id": "1 ikat",
        "amount_en": "1 bunch",
        "amount_jp": "1束",
        "isHalal": true,
        "store_tip": "Semua supermarket — ほうれん草. Di Gyomu Super sangat murah!"
      },
      {
        "id": 2,
        "name_id": "Wortel",
        "name_jp": "にんじん",
        "furigana": "にんじん",
        "meaning": "Wortel",
        "amount_id": "1/2 buah",
        "amount_jp": "1/2本",
        "isHalal": true,
        "store_tip": "Gyomu Super — にんじん",
        "name_en": "Carrot",
        "amount_en": "1/2 piece"
      },
      {
        "id": 3,
        "name_id": "Jagung",
        "name_en": "Corn",
        "name_jp": "コーン",
        "furigana": "コーン",
        "meaning": "Jagung",
        "amount_id": "1/2 kaleng",
        "amount_en": "1/2 can",
        "amount_jp": "缶詰1/2",
        "isHalal": true,
        "store_tip": "Semua supermarket — コーン缶"
      },
      {
        "id": 4,
        "name_id": "Bawang Putih",
        "name_jp": "にんにく",
        "furigana": "にんにく",
        "meaning": "Bawang Putih",
        "amount_id": "2 siung",
        "amount_jp": "2かけ",
        "isHalal": true,
        "store_tip": "Semua supermarket",
        "name_en": "Garlic",
        "amount_en": "2 cloves"
      }
    ],
    "steps": [
      {
        "id": 1,
        "text_id": "Rebus 600ml air dengan bawang putih geprek. Tambahkan garam dan merica.",
        "text_jp": "鍋に水600mlとつぶしたにんにくを入れて沸騰させ、塩・こしょうで味付けします。",
        "furigana_words": [
          {
            "kanji": "鍋",
            "reading": "なべ"
          },
          {
            "kanji": "水",
            "reading": "みず"
          },
          {
            "kanji": "沸騰",
            "reading": "ふっとう"
          },
          {
            "kanji": "塩",
            "reading": "しお"
          },
          {
            "kanji": "味付け",
            "reading": "あじつけ"
          },
          {
            "kanji": "入",
            "reading": "い"
          },
          {
            "kanji": "付",
            "reading": "つ"
          }
        ],
        "text_en": "Boil 600ml water with crushed garlic. Add salt and pepper."
      },
      {
        "id": 2,
        "text_id": "Masukkan wortel iris, jagung. Rebus 5 menit.",
        "text_jp": "薄切りにんじんとコーンを加えて5分煮ます。",
        "furigana_words": [
          {
            "kanji": "薄切",
            "reading": "うすぎり"
          },
          {
            "kanji": "加",
            "reading": "くわ"
          },
          {
            "kanji": "煮",
            "reading": "に"
          },
          {
            "kanji": "切",
            "reading": "き"
          }
        ],
        "text_en": "Add sliced carrots and corn. Boil for 5 minutes."
      },
      {
        "id": 3,
        "text_id": "Terakhir masukkan bayam, rebus 1-2 menit saja agar tetap hijau segar.",
        "text_jp": "最後にほうれん草を加えて1〜2分で完成。色が鮮やかなうちに食べましょう！",
        "furigana_words": [
          {
            "kanji": "最後",
            "reading": "さいご"
          },
          {
            "kanji": "加",
            "reading": "くわ"
          },
          {
            "kanji": "完成",
            "reading": "かんせい"
          },
          {
            "kanji": "色",
            "reading": "いろ"
          },
          {
            "kanji": "鮮やか",
            "reading": "あざやか"
          },
          {
            "kanji": "食",
            "reading": "た"
          }
        ],
        "text_en": "Lastly, add spinach, boil for just 1-2 minutes to keep it fresh green."
      }
    ],
    "survival_phrases": [
      {
        "jp": "ほうれん草はどこですか？",
        "romaji": "Horenso wa doko desu ka?",
        "id": "Bayam ada di mana?",
        "en": "Where is the spinach?"
      }
    ]
  },
  {
    "id": 8,
    "slug": "onigiri-tuna",
    "emoji": "🍙",
    "name_id": "Onigiri Tuna Mayo",
    "name_jp": "ツナマヨおにぎり",
    "name_jp_plain": "ツナマヨおにぎり",
    "furigana_name": [
      {
        "text": "ツナマヨ",
        "reading": "",
        "meaning": "Tuna Mayo"
      },
      {
        "text": "おにぎり",
        "reading": "",
        "meaning": "Nasi Kepal"
      }
    ],
    "isHalal": true,
    "category": "jepang",
    "difficulty": "mudah",
    "time_min": 15,
    "servings": 3,
    "description_id": "Onigiri isi tuna mayo — paling populer di Jepang! Bisa jadi bekal ke sekolah bahasa.",
    "description_jp": "定番ツナマヨおにぎり！語学学校のお弁当にぴったりです。",
    "tiktok_video_id": "7332475191303425298",
    "image_color": "#F5F5DC",
    "ingredients": [
      {
        "id": 1,
        "name_id": "Nasi Putih Hangat",
        "name_jp": "温かいご飯",
        "furigana": "あたたかいごはん",
        "meaning": "Nasi Hangat",
        "amount_id": "2 piring (400g)",
        "amount_jp": "茶碗2杯分",
        "isHalal": true,
        "store_tip": "Gyomu Super — パックご飯untuk praktis",
        "name_en": "Warm White Rice",
        "amount_en": "2 bowls (400g)"
      },
      {
        "id": 2,
        "name_id": "Tuna Kaleng",
        "name_jp": "ツナ缶",
        "furigana": "ツナかん",
        "meaning": "Tuna Kalengan",
        "amount_id": "1 kaleng (70g)",
        "amount_jp": "1缶（70グラム）",
        "isHalal": true,
        "store_tip": "Semua supermarket — ツナ缶 (cek tanpa alkohol/mirin)",
        "name_en": "Canned Tuna",
        "amount_en": "1 can (70g)"
      },
      {
        "id": 3,
        "name_id": "Mayones",
        "name_jp": "マヨネーズ",
        "furigana": "マヨネーズ",
        "meaning": "Mayones",
        "amount_id": "2 sdm",
        "amount_jp": "大さじ2",
        "isHalal": true,
        "store_tip": "Semua supermarket — キューピーマヨネーズ",
        "name_en": "Mayonnaise",
        "amount_en": "2 tbsp"
      },
      {
        "id": 4,
        "name_id": "Nori (Rumput Laut)",
        "name_jp": "のり",
        "furigana": "のり",
        "meaning": "Rumput Laut",
        "amount_id": "3 lembar",
        "amount_jp": "3枚",
        "isHalal": true,
        "store_tip": "Semua supermarket — 焼のり",
        "name_en": "Nori (Seaweed)",
        "amount_en": "3 sheets"
      },
      {
        "id": 5,
        "name_id": "Garam",
        "name_jp": "塩",
        "furigana": "しお",
        "meaning": "Garam",
        "amount_id": "sedikit",
        "amount_jp": "少々",
        "isHalal": true,
        "store_tip": "Semua supermarket",
        "name_en": "Salt",
        "amount_en": "a little"
      }
    ],
    "steps": [
      {
        "id": 1,
        "text_id": "Tiriskan tuna kaleng, campurkan dengan mayones, aduk rata.",
        "text_jp": "ツナ缶の水気を切り、マヨネーズと混ぜ合わせます。",
        "furigana_words": [
          {
            "kanji": "水気",
            "reading": "みずけ"
          },
          {
            "kanji": "切",
            "reading": "き"
          },
          {
            "kanji": "混",
            "reading": "ま"
          },
          {
            "kanji": "水",
            "reading": "みず"
          }
        ],
        "text_en": "Drain the canned tuna, mix with mayonnaise."
      },
      {
        "id": 2,
        "text_id": "Basahi tangan dengan air, taburi sedikit garam di telapak tangan.",
        "text_jp": "手を水で濡らして塩をなじませます。",
        "furigana_words": [
          {
            "kanji": "手",
            "reading": "て"
          },
          {
            "kanji": "水",
            "reading": "みず"
          },
          {
            "kanji": "濡らして",
            "reading": "ぬらして"
          },
          {
            "kanji": "塩",
            "reading": "しお"
          }
        ],
        "text_en": "Wet your hands with water, sprinkle a little salt on your palms."
      },
      {
        "id": 3,
        "text_id": "Ambil segenggam nasi, buat cekungan di tengah, isi dengan tuna mayo.",
        "text_jp": "ご飯を手に取り、中央にくぼみを作ってツナマヨを入れます。",
        "furigana_words": [
          {
            "kanji": "取",
            "reading": "と"
          },
          {
            "kanji": "中央",
            "reading": "ちゅうおう"
          },
          {
            "kanji": "入",
            "reading": "い"
          },
          {
            "kanji": "飯",
            "reading": "はん"
          }
        ],
        "text_en": "Take a handful of rice, make a hollow in the center, fill with tuna mayo."
      },
      {
        "id": 4,
        "text_id": "Kepal nasi menjadi bentuk segitiga. Bungkus dengan nori.",
        "text_jp": "三角形に握って、のりを巻いたら完成！",
        "furigana_words": [
          {
            "kanji": "三角形",
            "reading": "さんかっけい"
          },
          {
            "kanji": "握って",
            "reading": "にぎって"
          },
          {
            "kanji": "巻",
            "reading": "ま"
          },
          {
            "kanji": "完成",
            "reading": "かんせい"
          }
        ],
        "text_en": "Shape the rice into a triangle. Wrap with nori."
      }
    ],
    "survival_phrases": [
      {
        "jp": "ツナ缶はどこですか？",
        "romaji": "Tsuna kan wa doko desu ka?",
        "id": "Tuna kalengan ada di mana?",
        "en": "Where is the canned tuna?"
      },
      {
        "jp": "のりはどこですか？",
        "romaji": "Nori wa doko desu ka?",
        "id": "Nori ada di mana?",
        "en": "Where is the nori?"
      }
    ],
    "name_en": "Tuna Mayo Onigiri",
    "description_en": "Tuna mayo filled onigiri — the most popular in Japan! Great for language school lunch."
  },
  {
    "id": 9,
    "slug": "pho-vietnam",
    "emoji": "🍲",
    "name_id": "Phở Sapi Sederhana",
    "name_jp": "フォー（ベトナム牛肉スープ）",
    "name_jp_plain": "フォー",
    "furigana_name": [
      {
        "text": "フォー",
        "reading": "",
        "meaning": "Phở"
      },
      {
        "text": "（ベトナム",
        "reading": "",
        "meaning": "(Vietnam"
      },
      {
        "text": "牛肉",
        "reading": "ぎゅうにく",
        "meaning": "Daging Sapi"
      },
      {
        "text": "スープ）",
        "reading": "",
        "meaning": "Sup)"
      }
    ],
    "isHalal": true,
    "category": "vietnam",
    "difficulty": "sedang",
    "time_min": 30,
    "servings": 2,
    "description_id": "Phở sapi yang hangat dan menyehatkan. Gunakan mie beras Jepang sebagai pengganti!",
    "description_jp": "温かくて体に優しいベトナム風フォー。日本のビーフンで代用できます！",
    "tiktok_video_id": "7332475191303425298",
    "image_color": "#D2691E",
    "ingredients": [
      {
        "id": 1,
        "name_id": "Mie Beras / Bihun",
        "name_jp": "ビーフン",
        "furigana": "ビーフン",
        "meaning": "Bihun",
        "amount_id": "200g",
        "amount_jp": "200グラム",
        "isHalal": true,
        "store_tip": "Gyomu Super / Aeon — ビーフン (kalau tidak ada, pakai そうめん)",
        "name_en": "Rice Noodles / Bihun",
        "amount_en": "200g"
      },
      {
        "id": 2,
        "name_id": "Daging Sapi Iris Tipis",
        "name_jp": "薄切り牛肉",
        "furigana": "うすぎりぎゅうにく",
        "meaning": "Sapi Iris",
        "amount_id": "150g",
        "amount_jp": "150グラム",
        "isHalal": true,
        "store_tip": "Gyomu Super — 牛バラ肉スライス. Cek label: pastikan halal",
        "name_en": "Thinly Sliced Beef",
        "amount_en": "150g"
      },
      {
        "id": 3,
        "name_id": "Kaldu Sapi / Konsomé",
        "name_jp": "コンソメ",
        "furigana": "コンソメ",
        "meaning": "Kaldu Sapi",
        "amount_id": "2 tablet + 600ml air",
        "amount_jp": "2個＋水600ml",
        "isHalal": true,
        "store_tip": "Semua supermarket — コンソメキューブ",
        "name_en": "Beef Broth / Consommé",
        "amount_en": "2 tablets + 600ml water"
      },
      {
        "id": 4,
        "name_id": "Jahe",
        "name_jp": "しょうが",
        "furigana": "しょうが",
        "meaning": "Jahe",
        "amount_id": "1 ruas kecil",
        "amount_jp": "少量",
        "isHalal": true,
        "store_tip": "Semua supermarket — しょうが (チューブ型 juga OK)",
        "name_en": "Ginger",
        "amount_en": "1 small piece"
      }
    ],
    "steps": [
      {
        "id": 1,
        "text_id": "Rebus air 600ml dengan konsomé dan jahe iris. Didihkan.",
        "text_jp": "鍋に水600mlとコンソメ、スライスしょうがを入れて沸騰させます。",
        "furigana_words": [
          {
            "kanji": "鍋",
            "reading": "なべ"
          },
          {
            "kanji": "水",
            "reading": "みず"
          },
          {
            "kanji": "入",
            "reading": "い"
          },
          {
            "kanji": "沸騰",
            "reading": "ふっとう"
          }
        ],
        "text_en": "Boil 600ml water with consommé and sliced ginger."
      },
      {
        "id": 2,
        "text_id": "Rendam bihun dalam air panas sesuai petunjuk, tiriskan.",
        "text_jp": "ビーフンをパッケージの通りに戻して水気を切ります。",
        "furigana_words": [
          {
            "kanji": "戻",
            "reading": "もど"
          },
          {
            "kanji": "水気",
            "reading": "みずけ"
          },
          {
            "kanji": "切",
            "reading": "き"
          },
          {
            "kanji": "水",
            "reading": "みず"
          }
        ],
        "text_en": "Soak rice noodles in hot water according to package, drain."
      },
      {
        "id": 3,
        "text_id": "Masukkan daging sapi iris tipis ke dalam kaldu mendidih, masak 2-3 menit.",
        "text_jp": "薄切り牛肉を沸騰したスープに入れて2〜3分煮ます。",
        "furigana_words": [
          {
            "kanji": "薄切",
            "reading": "うすぎり"
          },
          {
            "kanji": "牛肉",
            "reading": "ぎゅうにく"
          },
          {
            "kanji": "沸騰",
            "reading": "ふっとう"
          },
          {
            "kanji": "入",
            "reading": "い"
          },
          {
            "kanji": "煮",
            "reading": "に"
          },
          {
            "kanji": "切",
            "reading": "き"
          },
          {
            "kanji": "肉",
            "reading": "にく"
          }
        ],
        "text_en": "Add thinly sliced beef into the boiling broth, cook for 2-3 mins."
      },
      {
        "id": 4,
        "text_id": "Sajikan bihun dalam mangkuk, tuangi kaldu panas dan daging.",
        "text_jp": "器にビーフンを盛り、熱いスープと牛肉をかけて完成！",
        "furigana_words": [
          {
            "kanji": "器",
            "reading": "うつわ"
          },
          {
            "kanji": "盛",
            "reading": "も"
          },
          {
            "kanji": "熱",
            "reading": "あつ"
          },
          {
            "kanji": "牛肉",
            "reading": "ぎゅうにく"
          },
          {
            "kanji": "完成",
            "reading": "かんせい"
          },
          {
            "kanji": "肉",
            "reading": "にく"
          }
        ],
        "text_en": "Serve noodles in a bowl, pour hot broth and beef."
      }
    ],
    "survival_phrases": [
      {
        "jp": "ビーフンはどこですか？",
        "romaji": "Biifun wa doko desu ka?",
        "id": "Bihun ada di mana?",
        "en": "Where are the rice noodles?"
      }
    ],
    "name_en": "Simple Beef Phở",
    "description_en": "Warm and healthy beef Phở. Use Japanese rice noodles as a substitute!"
  },
  {
    "id": 10,
    "slug": "tamago-meshi",
    "emoji": "🥚",
    "name_id": "Tamago Kake Gohan (TKG)",
    "name_jp": "卵かけご飯",
    "name_jp_plain": "卵かけご飯",
    "furigana_name": [
      {
        "text": "卵",
        "reading": "たまご",
        "meaning": "Telur"
      },
      {
        "text": "かけ",
        "reading": "",
        "meaning": "siram"
      },
      {
        "text": "ご飯",
        "reading": "ごはん",
        "meaning": "Nasi"
      }
    ],
    "isHalal": true,
    "category": "jepang",
    "difficulty": "mudah",
    "time_min": 5,
    "servings": 1,
    "description_id": "TKG alias Tamago Kake Gohan — nasi panas + telur mentah kocok + kecap. Menu sarapan 5 menit orang Jepang!",
    "description_jp": "TKG（卵かけご飯）は日本の定番朝食。5分で作れる最速レシピです！",
    "tiktok_video_id": "7332475191303425298",
    "image_color": "#FFD700",
    "ingredients": [
      {
        "id": 1,
        "name_id": "Nasi Putih Panas",
        "name_jp": "炊き立てご飯",
        "furigana": "たきたてごはん",
        "meaning": "Nasi Baru Masak",
        "amount_id": "1 piring",
        "amount_jp": "茶碗1杯",
        "isHalal": true,
        "store_tip": "Gyomu Super — パックご飯 (microwave 2 menit)",
        "name_en": "Hot White Rice",
        "amount_en": "1 bowl"
      },
      {
        "id": 2,
        "name_id": "Telur Segar",
        "name_jp": "新鮮な卵",
        "furigana": "しんせんなたまご",
        "meaning": "Telur Segar",
        "amount_id": "1 butir (pastikan fresh)",
        "amount_jp": "1個（新鮮なもの）",
        "isHalal": true,
        "store_tip": "Gyomu Super — 10個入り. TKG pakai telur mentah, pilih yang fresh!",
        "name_en": "Fresh Egg",
        "amount_en": "1 piece (must be fresh)"
      },
      {
        "id": 3,
        "name_id": "Kecap Asin / Shoyu",
        "name_jp": "醤油",
        "furigana": "しょうゆ",
        "meaning": "Kecap Asin",
        "amount_id": "1 sdt",
        "amount_jp": "小さじ1",
        "isHalal": true,
        "store_tip": "Semua supermarket — キッコーマン醤油",
        "name_en": "Soy Sauce / Shoyu",
        "amount_en": "1 tsp"
      },
      {
        "id": 4,
        "name_id": "Daun Bawang (opsional)",
        "name_jp": "ねぎ（お好みで）",
        "furigana": "ねぎ",
        "meaning": "Daun Bawang",
        "amount_id": "sedikit, iris halus",
        "amount_jp": "少々（小口切り）",
        "isHalal": true,
        "store_tip": "Semua supermarket",
        "name_en": "Green Onion (optional)",
        "amount_en": "a little, finely sliced"
      }
    ],
    "steps": [
      {
        "id": 1,
        "text_id": "Taruh nasi panas dalam mangkuk.",
        "text_jp": "熱いご飯を茶碗に盛ります。",
        "furigana_words": [
          {
            "kanji": "熱い",
            "reading": "あつい"
          },
          {
            "kanji": "茶碗",
            "reading": "ちゃわん"
          },
          {
            "kanji": "盛",
            "reading": "も"
          },
          {
            "kanji": "熱",
            "reading": "ねつ"
          },
          {
            "kanji": "飯",
            "reading": "はん"
          }
        ],
        "text_en": "Put hot rice in a bowl."
      },
      {
        "id": 2,
        "text_id": "Pecahkan telur langsung di atas nasi panas.",
        "text_jp": "卵をご飯の上に直接割り入れます。",
        "furigana_words": [
          {
            "kanji": "卵",
            "reading": "たまご"
          },
          {
            "kanji": "上",
            "reading": "うえ"
          },
          {
            "kanji": "直接",
            "reading": "ちょくせつ"
          },
          {
            "kanji": "割",
            "reading": "わ"
          },
          {
            "kanji": "入",
            "reading": "い"
          },
          {
            "kanji": "飯",
            "reading": "はん"
          }
        ],
        "text_en": "Crack the egg directly onto the hot rice."
      },
      {
        "id": 3,
        "text_id": "Tuangi kecap asin. Aduk sampai telur tercampur dengan nasi.",
        "text_jp": "醤油をかけてよくかき混ぜます。",
        "furigana_words": [
          {
            "kanji": "醤油",
            "reading": "しょうゆ"
          },
          {
            "kanji": "混",
            "reading": "ま"
          },
          {
            "kanji": "油",
            "reading": "あぶら"
          }
        ],
        "text_en": "Pour soy sauce. Stir until egg is mixed with rice."
      },
      {
        "id": 4,
        "text_id": "Taburi daun bawang. Selamat menikmati! (いただきます！)",
        "text_jp": "ねぎをのせていただきます！",
        "furigana_words": [
          {
            "kanji": "頂",
            "reading": "いただ"
          }
        ],
        "text_en": "Sprinkle green onions. Enjoy! (Itadakimasu!)"
      }
    ],
    "survival_phrases": [
      {
        "jp": "新鮮な卵はどこですか？",
        "romaji": "Shinsen na tamago wa doko desu ka?",
        "id": "Telur segar ada di mana?",
        "en": "Where are the fresh eggs?"
      }
    ],
    "name_en": "Tamago Kake Gohan (TKG)",
    "description_en": "TKG aka Tamago Kake Gohan — hot rice + raw egg + soy sauce. A 5-minute Japanese breakfast!"
  }
];

export const getRecipeBySlug = (slug) => recipes.find((r) => r.slug === slug);

export const categories = [
  { id: "semua", label_id: "Semua", label_en: "All", label_jp: "すべて", emoji: "🌏" },
  { id: "jepang", label_id: "Jepang", label_en: "Japan", label_jp: "日本", emoji: "🇯🇵" },
  { id: "indonesia", label_id: "Indonesia", label_en: "Indonesia", label_jp: "インドネシア", emoji: "🇮🇩" },
  { id: "myanmar", label_id: "Myanmar", label_en: "Myanmar", label_jp: "ミャンマー", emoji: "🇲🇲" },
  { id: "nepal", label_id: "Nepal", label_en: "Nepal", label_jp: "ネパール", emoji: "🇳🇵" },
  { id: "vietnam", label_id: "Vietnam", label_en: "Vietnam", label_jp: "ベトナム", emoji: "🇻🇳" }
];
