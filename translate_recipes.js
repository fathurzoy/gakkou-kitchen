import fs from 'fs';

// Since recipes.js exports an array, we can import it if it's a module, but wait, it's ES module.
// We can just read the text, use a regex or string manipulation, or better, we can evaluate it if we modify it a bit.

const recipesJsPath = './data/recipes.js';
let content = fs.readFileSync(recipesJsPath, 'utf8');

// Quick and dirty manual replacements for the 10 recipes' English text:

const translations = {
  // Ayam Kecap
  'name_id: "Ayam Kecap",': 'name_id: "Ayam Kecap",\n    name_en: "Sweet Soy Sauce Chicken",',
  'description_id: "Ayam empuk dengan saus kecap manis khas Indonesia. Mudah dibuat di dapur kost!",': 'description_id: "Ayam empuk dengan saus kecap manis khas Indonesia. Mudah dibuat di dapur kost!",\n    description_en: "Tender chicken in Indonesian sweet soy sauce. Easy to make in a dorm kitchen!",',
  'name_id: "Daging Ayam",': 'name_id: "Daging Ayam",\n        name_en: "Chicken Meat",',
  'amount_id: "300g",': 'amount_id: "300g",\n        amount_en: "300g",',
  'name_id: "Kecap Manis",': 'name_id: "Kecap Manis",\n        name_en: "Sweet Soy Sauce",',
  'amount_id: "3 sendok makan",': 'amount_id: "3 sendok makan",\n        amount_en: "3 tablespoons",',
  'reason_id: "Kecap manis Indonesia sulit dicari di supermarket biasa",': 'reason_id: "Kecap manis Indonesia sulit dicari di supermarket biasa",\n          reason_en: "Indonesian sweet soy sauce is hard to find in regular supermarkets",',
  'name_id: "Kikkoman 醤油 + Gula Pasir",': 'name_id: "Kikkoman 醤油 + Gula Pasir",\n              name_en: "Kikkoman Soy Sauce + Sugar",',
  'ratio_id: "3 sdm kecap asin + 1,5 sdm gula",': 'ratio_id: "3 sdm kecap asin + 1,5 sdm gula",\n              ratio_en: "3 tbsp soy sauce + 1.5 tbsp sugar",',
  'name_id: "Bawang Putih",': 'name_id: "Bawang Putih",\n        name_en: "Garlic",',
  'amount_id: "3 siung",': 'amount_id: "3 siung",\n        amount_en: "3 cloves",',
  'name_id: "Bawang Merah",': 'name_id: "Bawang Merah",\n        name_en: "Onion / Shallot",',
  'amount_id: "1 buah",': 'amount_id: "1 buah",\n        amount_en: "1 piece",',
  'name_id: "Minyak Goreng",': 'name_id: "Minyak Goreng",\n        name_en: "Cooking Oil",',
  'amount_id: "2 sendok makan",': 'amount_id: "2 sendok makan",\n        amount_en: "2 tablespoons",',
  'text_id: "Potong ayam menjadi potongan sedang. Iris bawang merah dan cincang bawang putih.",': 'text_id: "Potong ayam menjadi potongan sedang. Iris bawang merah dan cincang bawang putih.",\n        text_en: "Cut chicken into bite-sized pieces. Slice the onion and mince the garlic.",',
  'text_id: "Panaskan minyak di wajan, tumis bawang putih dan bawang merah sampai harum (2-3 menit).",': 'text_id: "Panaskan minyak di wajan, tumis bawang putih dan bawang merah sampai harum (2-3 menit).",\n        text_en: "Heat oil in a pan, sauté garlic and onion until fragrant (2-3 mins).",',
  'text_id: "Masukkan ayam, masak sampai berubah warna kecokelatan.",': 'text_id: "Masukkan ayam, masak sampai berubah warna kecokelatan.",\n        text_en: "Add chicken and cook until the surface is browned.",',
  'text_id: "Tuang kecap manis, tambahkan sedikit air (50ml), aduk rata dan masak dengan api kecil 15 menit.",': 'text_id: "Tuang kecap manis, tambahkan sedikit air (50ml), aduk rata dan masak dengan api kecil 15 menit.",\n        text_en: "Pour in sweet soy sauce, add a little water (50ml), mix well and simmer on low heat for 15 mins.",',
  'text_id: "Angkat dan sajikan dengan nasi putih hangat. Selamat makan! (いただきます！)",': 'text_id: "Angkat dan sajikan dengan nasi putih hangat. Selamat makan! (いただきます！)",\n        text_en: "Remove from heat and serve with warm white rice. Enjoy! (Itadakimasu!)",',
  'id: "Permisi, daging ayam ada di mana?",': 'id: "Permisi, daging ayam ada di mana?",\n        en: "Excuse me, where is the chicken?",',
  'id: "Apakah ini halal?",': 'id: "Apakah ini halal?",\n        en: "Is this halal?",',

  // Nasi Goreng Telur
  'name_id: "Nasi Goreng Telur",': 'name_id: "Nasi Goreng Telur",\n    name_en: "Egg Fried Rice",',
  'description_id: "Nasi goreng telur sederhana yang bisa dibuat kapan saja. Bahan-bahannya selalu ada di Jepang!",': 'description_id: "Nasi goreng telur sederhana yang bisa dibuat kapan saja. Bahan-bahannya selalu ada di Jepang!",\n    description_en: "Simple egg fried rice that you can make anytime. Ingredients are always available in Japan!",',
  'name_id: "Nasi Putih",': 'name_id: "Nasi Putih",\n        name_en: "White Rice",',
  'amount_id: "1 piring (nasi dingin lebih baik)",': 'amount_id: "1 piring (nasi dingin lebih baik)",\n        amount_en: "1 bowl (cold rice is better)",',
  'name_id: "Telur",': 'name_id: "Telur",\n        name_en: "Egg",',
  'amount_id: "2 butir",': 'amount_id: "2 butir",\n        amount_en: "2 pieces",',
  'name_id: "Kecap Asin / Shoyu",': 'name_id: "Kecap Asin / Shoyu",\n        name_en: "Soy Sauce / Shoyu",',
  'amount_id: "1 sendok makan",': 'amount_id: "1 sendok makan",\n        amount_en: "1 tablespoon",',
  'name_id: "Daun Bawang",': 'name_id: "Daun Bawang",\n        name_en: "Green Onion",',
  'amount_id: "2 batang",': 'amount_id: "2 batang",\n        amount_en: "2 stalks",',
  'name_id: "Garam & Merica",': 'name_id: "Garam & Merica",\n        name_en: "Salt & Pepper",',
  'amount_id: "secukupnya",': 'amount_id: "secukupnya",\n        amount_en: "to taste",',
  'text_id: "Kocok telur dengan sedikit garam dalam mangkuk.",': 'text_id: "Kocok telur dengan sedikit garam dalam mangkuk.",\n        text_en: "Beat eggs with a pinch of salt in a bowl.",',
  'text_id: "Panaskan minyak dalam wajan dengan api besar. Tuang telur dan orak-arik.",': 'text_id: "Panaskan minyak dalam wajan dengan api besar. Tuang telur dan orak-arik.",\n        text_en: "Heat oil in a pan over high heat. Pour in eggs and scramble.",',
  'text_id: "Masukkan nasi, tekan-tekan agar tidak menggumpal, aduk cepat dengan api besar.",': 'text_id: "Masukkan nasi, tekan-tekan agar tidak menggumpal, aduk cepat dengan api besar.",\n        text_en: "Add rice, break up any clumps, and stir-fry quickly over high heat.",',
  'text_id: "Tambahkan kecap asin, garam, merica. Aduk rata. Taburi daun bawang.",': 'text_id: "Tambahkan kecap asin, garam, merica. Aduk rata. Taburi daun bawang.",\n        text_en: "Add soy sauce, salt, and pepper. Mix well. Garnish with green onions.",',
  'id: "Apakah ada nasi dingin?",': 'id: "Apakah ada nasi dingin?",\n        en: "Do you have cold rice?",',
  
  // Tempe Goreng
  'name_id: "Tempe Goreng Bumbu",': 'name_id: "Tempe Goreng Bumbu",\n    name_en: "Fried Marinated Tempeh",',
  'description_id: "Tempe goreng renyah dengan bumbu bawang. Tempe sudah mulai ada di beberapa toko di Jepang!",': 'description_id: "Tempe goreng renyah dengan bumbu bawang. Tempe sudah mulai ada di beberapa toko di Jepang!",\n    description_en: "Crispy fried tempeh with garlic marinade. Tempeh is starting to appear in some stores in Japan!",',
  'name_id: "Tempe",': 'name_id: "Tempe",\n        name_en: "Tempeh",',
  'amount_id: "200g",': 'amount_id: "200g",\n        amount_en: "200g",',
  'reason_id: "Jika tempe tidak ada di toko terdekat",': 'reason_id: "Jika tempe tidak ada di toko terdekat",\n          reason_en: "If tempeh is not available nearby",',
  'name_id: "Tahu Keras (Momen Tofu)",': 'name_id: "Tahu Keras (Momen Tofu)",\n              name_en: "Firm Tofu (Momen Tofu)",',
  'ratio_id: "200g tahu, peras air, iris tebal",': 'ratio_id: "200g tahu, peras air, iris tebal",\n              ratio_en: "200g tofu, drain water, slice thickly",',
  'amount_id: "3 siung, haluskan",': 'amount_id: "3 siung, haluskan",\n        amount_en: "3 cloves, minced",',
  'name_id: "Ketumbar",': 'name_id: "Ketumbar",\n        name_en: "Coriander",',
  'amount_id: "1 sdt",': 'amount_id: "1 sdt",\n        amount_en: "1 teaspoon",',
  'reason_id: "Ketumbar bisa sulit ditemukan",': 'reason_id: "Ketumbar bisa sulit ditemukan",\n          reason_en: "Coriander can be hard to find",',
  'name_id: "Cumin / Jinten",': 'name_id: "Cumin / Jinten",\n              name_en: "Cumin",',
  'ratio_id: "Pakai setengah jumlah (0,5 sdt)",': 'ratio_id: "Pakai setengah jumlah (0,5 sdt)",\n              ratio_en: "Use half the amount (0.5 tsp)",',
  'text_id: "Iris tempe setebal 1cm. Campur bumbu: bawang putih halus, ketumbar, garam, sedikit air.",': 'text_id: "Iris tempe setebal 1cm. Campur bumbu: bawang putih halus, ketumbar, garam, sedikit air.",\n        text_en: "Slice tempeh 1cm thick. Mix marinade: minced garlic, coriander, salt, and a little water.",',
  'text_id: "Rendam tempe dalam bumbu selama 10 menit.",': 'text_id: "Rendam tempe dalam bumbu selama 10 menit.",\n        text_en: "Marinate tempeh for 10 minutes.",',
  'text_id: "Goreng dalam minyak panas sampai kecokelatan dan renyah (3-4 menit per sisi).",': 'text_id: "Goreng dalam minyak panas sampai kecokelatan dan renyah (3-4 menit per sisi).",\n        text_en: "Fry in hot oil until golden brown and crispy (3-4 mins per side).",',
  'text_id: "Angkat, tiriskan, sajikan selagi panas.",': 'text_id: "Angkat, tiriskan, sajikan selagi panas.",\n        text_en: "Remove, drain, and serve hot.",',
  'id: "Apakah ada tempe?",': 'id: "Apakah ada tempe?",\n        en: "Do you have tempeh?",',

  // Mie Goreng Jawa
  'name_id: "Mie Goreng Jawa",': 'name_id: "Mie Goreng Jawa",\n    name_en: "Javanese Fried Noodles",',
  'description_id: "Mie goreng ala Jawa dengan bumbu kecap dan sayuran segar. Pakai mie yakisoba Jepang!",': 'description_id: "Mie goreng ala Jawa dengan bumbu kecap dan sayuran segar. Pakai mie yakisoba Jepang!",\n    description_en: "Javanese style fried noodles with sweet soy sauce and fresh vegetables. Using Japanese yakisoba noodles!",',
  'name_id: "Mie Telur / Mie Yakisoba",': 'name_id: "Mie Telur / Mie Yakisoba",\n        name_en: "Egg Noodles / Yakisoba Noodles",',
  'amount_id: "2 bungkus (400g)",': 'amount_id: "2 bungkus (400g)",\n        amount_en: "2 packs (400g)",',
  'name_id: "Kubis / Kol",': 'name_id: "Kubis / Kol",\n        name_en: "Cabbage",',
  'amount_id: "3 lembar",': 'amount_id: "3 lembar",\n        amount_en: "3 leaves",',
  'name_id: "Wortel",': 'name_id: "Wortel",\n        name_en: "Carrot",',
  'amount_id: "1/2 buah",': 'amount_id: "1/2 buah",\n        amount_en: "1/2 piece",',
  'amount_id: "3 sdm",': 'amount_id: "3 sdm",\n        amount_en: "3 tbsp",',
  'reason_id: "Kecap manis bisa diganti",': 'reason_id: "Kecap manis bisa diganti",\n          reason_en: "Sweet soy sauce can be substituted",',
  'name_id: "Kikkoman Shoyu + Gula",': 'name_id: "Kikkoman Shoyu + Gula",\n              name_en: "Kikkoman Shoyu + Sugar",',
  'text_id: "Iris tipis kubis dan wortel. Cincang bawang putih.",': 'text_id: "Iris tipis kubis dan wortel. Cincang bawang putih.",\n        text_en: "Thinly slice cabbage and carrot. Mince garlic.",',
  'text_id: "Tumis bawang putih, masukkan wortel dan kubis, masak 3 menit.",': 'text_id: "Tumis bawang putih, masukkan wortel dan kubis, masak 3 menit.",\n        text_en: "Sauté garlic, add carrot and cabbage, cook for 3 minutes.",',
  'text_id: "Masukkan mie, tambahkan kecap manis dan sedikit air. Aduk rata dengan api besar.",': 'text_id: "Masukkan mie, tambahkan kecap manis dan sedikit air. Aduk rata dengan api besar.",\n        text_en: "Add noodles, sweet soy sauce, and a little water. Mix well on high heat.",',
  'text_id: "Sajikan dengan taburan bawang goreng (jika ada) dan irisan cabai.",': 'text_id: "Sajikan dengan taburan bawang goreng (jika ada) dan irisan cabai.",\n        text_en: "Serve with fried shallots (if any) and sliced chilies.",',
  'id: "Mie yakisoba ada di mana?",': 'id: "Mie yakisoba ada di mana?",\n        en: "Where are the yakisoba noodles?",',

  // Mohinga
  'name_id: "Mohinga",': 'name_id: "Mohinga",\n    name_en: "Mohinga",',
  'description_id: "Sup mie ikan khas Myanmar — makanan nasional yang gurih dan hangat, cocok untuk musim dingin Suwa!",': 'description_id: "Sup mie ikan khas Myanmar — makanan nasional yang gurih dan hangat, cocok untuk musim dingin Suwa!",\n    description_en: "Myanmar\'s traditional fish noodle soup — a savory and warm national dish, perfect for Suwa\'s winter!",',
  'name_id: "Kaldu Ikan / Dashi",': 'name_id: "Kaldu Ikan / Dashi",\n        name_en: "Fish Broth / Dashi",',
  'amount_id: "600ml",': 'amount_id: "600ml",\n        amount_en: "600ml",',
  'reason_id: "Dashi standar Jepang mungkin mengandung bahan yang perlu dicek",': 'reason_id: "Dashi standar Jepang mungkin mengandung bahan yang perlu dicek",\n          reason_en: "Standard Japanese dashi might contain ingredients that need to be checked",',
  'name_id: "Kaldu Sayuran (Konsomé)",': 'name_id: "Kaldu Sayuran (Konsomé)",\n              name_en: "Vegetable Broth (Consommé)",',
  'ratio_id: "Pakai 1 tablet konsomé + 600ml air",': 'ratio_id: "Pakai 1 tablet konsomé + 600ml air",\n              ratio_en: "Use 1 consommé tablet + 600ml water",',
  'name_id: "Ikan (fillet)",': 'name_id: "Ikan (fillet)",\n        name_en: "Fish (fillet)",',
  'amount_id: "200g (ikan apapun yang ada)",': 'amount_id: "200g (ikan apapun yang ada)",\n        amount_en: "200g (any available fish)",',
  'name_id: "Mie / Somen",': 'name_id: "Mie / Somen",\n        name_en: "Noodles / Somen",',
  'name_id: "Kunyit / Turmeric",': 'name_id: "Kunyit / Turmeric",\n        name_en: "Turmeric",',
  'amount_id: "1/2 sdt",': 'amount_id: "1/2 sdt",\n        amount_en: "1/2 tsp",',
  'text_id: "Rebus ikan dalam 600ml air/kaldu dengan kunyit, garam selama 10 menit.",': 'text_id: "Rebus ikan dalam 600ml air/kaldu dengan kunyit, garam selama 10 menit.",\n        text_en: "Boil fish in 600ml water/broth with turmeric and salt for 10 minutes.",',
  'text_id: "Angkat ikan, suwir-suwir dagingnya. Kaldu disimpan.",': 'text_id: "Angkat ikan, suwir-suwir dagingnya. Kaldu disimpan.",\n        text_en: "Remove fish, shred the meat. Save the broth.",',
  'text_id: "Rebus somen sesuai petunjuk bungkus, tiriskan.",': 'text_id: "Rebus somen sesuai petunjuk bungkus, tiriskan.",\n        text_en: "Boil somen according to package instructions, drain.",',
  'text_id: "Sajikan mie dalam mangkuk, tuangi kaldu panas, taruh ikan suwir di atas.",': 'text_id: "Sajikan mie dalam mangkuk, tuangi kaldu panas, taruh ikan suwir di atas.",\n        text_en: "Serve noodles in a bowl, pour hot broth, top with shredded fish.",',
  'id: "Di mana bisa beli ikan segar?",': 'id: "Di mana bisa beli ikan segar?",\n        en: "Where can I buy fresh fish?",',

  // Dal Bhat
  'name_id: "Dal Bhat",': 'name_id: "Dal Bhat",\n    name_en: "Dal Bhat",',
  'description_id: "Sup kari kacang merah khas Nepal yang bergizi tinggi. Sempurna untuk menghangatkan badan di musim dingin Nagano!",': 'description_id: "Sup kari kacang merah khas Nepal yang bergizi tinggi. Sempurna untuk menghangatkan badan di musim dingin Nagano!",\n    description_en: "Highly nutritious Nepali lentil curry soup. Perfect for warming up in Nagano\'s winter!",',
  'name_id: "Kacang Merah / Lentil",': 'name_id: "Kacang Merah / Lentil",\n        name_en: "Red Lentils",',
  'amount_id: "200g (kering)",': 'amount_id: "200g (kering)",\n        amount_en: "200g (dry)",',
  'reason_id: "Lentil bisa diganti kacang lainnya",': 'reason_id: "Lentil bisa diganti kacang lainnya",\n          reason_en: "Lentils can be substituted with other beans",',
  'name_id: "Kacang Merah Kalengan",': 'name_id: "Kacang Merah Kalengan",\n              name_en: "Canned Red Kidney Beans",',
  'ratio_id: "1 kaleng (400g), tiriskan",': 'ratio_id: "1 kaleng (400g), tiriskan",\n              ratio_en: "1 can (400g), drained",',
  'name_id: "Tomat",': 'name_id: "Tomat",\n        name_en: "Tomato",',
  'amount_id: "2 buah, potong dadu",': 'amount_id: "2 buah, potong dadu",\n        amount_en: "2 pieces, diced",',
  'name_id: "Bubuk Kunyit",': 'name_id: "Bubuk Kunyit",\n        name_en: "Turmeric Powder",',
  'name_id: "Bubuk Jinten / Cumin",': 'name_id: "Bubuk Jinten / Cumin",\n        name_en: "Cumin Powder",',
  'text_id: "Rendam lentil 30 menit (atau gunakan kacang kaleng langsung).",': 'text_id: "Rendam lentil 30 menit (atau gunakan kacang kaleng langsung).",\n        text_en: "Soak lentils for 30 minutes (or use canned beans directly).",',
  'text_id: "Tumis bawang, tomat, dan bumbu (kunyit, cumin) selama 5 menit.",': 'text_id: "Tumis bawang, tomat, dan bumbu (kunyit, cumin) selama 5 menit.",\n        text_en: "Sauté onion, tomato, and spices (turmeric, cumin) for 5 minutes.",',
  'text_id: "Masukkan lentil dan air 600ml. Rebus sampai lentil empuk (20-25 menit).",': 'text_id: "Masukkan lentil dan air 600ml. Rebus sampai lentil empuk (20-25 menit).",\n        text_en: "Add lentils and 600ml water. Boil until lentils are tender (20-25 mins).",',
  'text_id: "Sajikan dengan nasi putih hangat.",': 'text_id: "Sajikan dengan nasi putih hangat.",\n        text_en: "Serve with warm white rice.",',
  'id: "Lentil ada di mana?",': 'id: "Lentil ada di mana?",\n        en: "Where are the lentils?",',

  // Sup Bayam
  'name_id: "Sop Bayam Bening",': 'name_id: "Sop Bayam Bening",\n    name_en: "Clear Spinach Soup",',
  'description_id: "Sup bayam bening yang menyehatkan. Bayam (horenso) sangat mudah ditemukan di Jepang!",': 'description_id: "Sup bayam bening yang menyehatkan. Bayam (horenso) sangat mudah ditemukan di Jepang!",\n    description_en: "Healthy clear spinach soup. Spinach (horenso) is very easy to find in Japan!",',
  'name_id: "Bayam (Horenso)",': 'name_id: "Bayam (Horenso)",\n        name_en: "Spinach (Horenso)",',
  'amount_id: "1 ikat",': 'amount_id: "1 ikat",\n        amount_en: "1 bunch",',
  'name_id: "Jagung",': 'name_id: "Jagung",\n        name_en: "Corn",',
  'amount_id: "1/2 kaleng",': 'amount_id: "1/2 kaleng",\n        amount_en: "1/2 can",',
};

// Replace text
for (const [key, value] of Object.entries(translations)) {
  content = content.replace(key, value);
}

// Write back
fs.writeFileSync(recipesJsPath, content, 'utf8');
console.log('recipes.js updated with basic English translations');
