import React, { createContext, useContext, useState } from "react";

export type Lang = "en" | "hi";

const EN = {
  /* language gate */
  gateEyebrow: "With folded hands we welcome you",
  gateTitle: "Choose Your Language",
  gateSub: "Enjoy this invitation in the language closest to your heart",
  gateEnLabel: "English",
  gateHiLabel: "हिन्दी",

  /* envelope */
  envEyebrow: "With love, two families invite you",
  envCardTitle: "The Wedding Invitation",
  envCardDate: "Thursday · 03 · 12 · 2026 · Chas",
  envTagline: "the night finds its light",
  envHint: "Tap the seal to open your invitation",

  /* nav */
  navStory: "Our Story",
  navSessions: "Sessions",
  navGallery: "Gallery",
  navVenue: "Venue",
  navContact: "Contact",
  navBrand: "Nisha & Roshan",

  /* hero */
  heroEyebrow: "The Wedding Celebration of",
  brideName: "Nisha",
  groomName: "Roshan",
  heroAnd: "&",
  heroTagline: "the night has found its light",
  heroDate: "Thursday · 03 December 2026",
  heroTime: "Seven in the Evening · Chas · Jharkhand",
  heroScroll: "Scroll",

  /* marquee */
  marq: [
    "Nisha Weds Roshan",
    "03 · 12 · 2026",
    "Save The Date",
    "Chas · Jharkhand",
    "#NishaWedsRoshan",
    "Two Families · One Celebration",
  ],

  /* blessing */
  blessSub: "With the divine blessings of Lord Ganesha",
  blessTogether: "together with",
  blessParents1: "Mrs. Radha Devi & Mr. Suresh Sah",
  blessParents2: "Mrs. Nagina Devi & Mr. Raghu Nath Sah",
  blessBody:
    "request the honour of your presence as their children exchange vows of a lifetime — an evening of sacred fire, marigold air and two families becoming one.",
  blessWeds: "weds",

  /* couple */
  coupleEyebrow: "Two Souls · One Story",
  coupleTitleA: "The Bride",
  coupleAmp: "&",
  coupleTitleB: "Groom",
  coupleSub: "— when the night met its light —",
  brideRole: "The Bride",
  groomRole: "The Groom",
  brideParents: "Daughter of Radha Devi & Suresh Sah",
  groomParents: "Son of Nagina Devi & Raghu Nath Sah",
  brideQuote:
    "A poet's heart with moonlight in her laughter — she turns strangers into family and evenings into memories.",
  groomQuote:
    "Steady as dawn, warm as a winter lamp — he loved her first as a friend, and then for life.",

  /* countdown */
  cdEyebrow: "Counting the Moments",
  cdTitleA: "Until We Say",
  cdTitleScript: "forever",
  cdDateLine: "Thursday, the third of December, two thousand twenty-six",
  cdUnits: ["Days", "Hours", "Minutes", "Seconds"],

  /* save-the-date */
  sdIntro: "Share the joy with family — take the invitation card with you",
  sdBtn: "Download Save-the-Date Card",
  sdBusy: "Crafting your card…",
  sdDone: "Saved to your device",
  sdMeta: "PNG · 1080 × 1350 · perfect for WhatsApp & print",

  /* sessions */
  evEyebrow: "Three Days · Five Sessions",
  evTitleA: "The Wedding",
  evTitleScript: "sessions",
  evIntro: "Every ceremony is its own little universe — walk through each one with us.",
  evSession: "Session",
  evFeatured: "The Main Ceremony",
  evDress: "Dress code — festive Indian attire in jewel tones & gold",
  sessions: [
    {
      title: "Mehndi",
      day: "Tuesday",
      date: "01 December 2026",
      time: "11:00 AM Onwards",
      venue: "Ram Nagar Colony, Chas",
      text: "A morning of henna, marigolds and mango sherbet — Nisha's hands painted with little stories in mehndi while the aunties compete over whose design blooms best.",
    },
    {
      title: "Haldi",
      day: "Wednesday",
      date: "02 December 2026",
      time: "11:00 AM Onwards",
      venue: "Ram Nagar Colony, Chas",
      text: "Turmeric, laughter and a golden glow that no filter can match. Wear yellow — and expect to leave drenched in joy (and possibly haldi).",
    },
    {
      title: "Sangeet",
      day: "Wednesday",
      date: "02 December 2026",
      time: "07:00 PM Onwards",
      venue: "Ram Nagar Colony, Chas",
      text: "An evening of music and dance beneath strings of lights, where two families battle it out on stage. Bring your best moves — bragging rights are eternal.",
    },
    {
      title: "The Wedding",
      day: "Thursday",
      date: "03 December 2026",
      time: "07:00 PM · The Muhurtham",
      venue: "Ram Nagar Colony, Chas",
      text: "Pheras around the sacred fire, seven vows beneath a winter-night sky — the luminous moment the night finally finds its light.",
    },
    {
      title: "The Reception",
      day: "Thursday",
      date: "03 December 2026",
      time: "07:00 PM Onwards",
      venue: "Bholu Bandh, Near Bichali Dukan",
      text: "Dinner, blessings and an evening glowing gold — a joyful first celebration for the newlyweds, hosted by both families together.",
    },
  ],

  /* gallery */
  gaEyebrow: "Captured in Candlelight — tap any frame",
  gaTitleA: "Moments in",
  gaTitleScript: "gold",
  gaHash: "Share yours with",

  /* venue */
  vnEyebrow: "Where We Celebrate",
  vnTitleA: "The",
  vnTitleScript: "venue",
  vnPara:
    "Celebrations unfold at the family courtyard in Chas — doorways strung with marigolds, lamps at every step, and the whole neighbourhood singing along.",
  vnCeremonyLabel: "Mehndi · Haldi · Sangeet · Wedding",
  vnCeremonyAddr: ["Ram Nagar Colony, Chas,", "Jharkhand, India"],
  vnReceptionLabel: "Reception",
  vnReceptionAddr: ["Bholu Bandh, Near Bichali Dukan,", "Thursday, 03 December · 7 PM onwards"],
  vnDress:
    "Festive Indian attire in jewel tones & gold. December evenings in Chas are cool — carry a warm shawl.",
  vnDirections: "Get Directions",
  vnGuestTitle: "Guest Note",
  vnGuestNote:
    "After the pheras, join us the same evening for the Reception at Bholu Bandh, near Bichali Dukan — dinner, blessings and warm Jharkhand winter cheer.",
  vnCapEyebrow: "The Family Home",
  vnCapTitle: "Ram Nagar Colony, Chas",

  /* contact */
  ctEyebrow: "With Love · The Sah Family",
  ctTitleA: "One call",
  ctTitleScript: "away",
  ctIntro:
    "Timings, directions or a helping hand on the day — Mr. Suresh Sah and family welcome your call.",
  ctTags: ["Primary", "Alternate"],
  ctPerson: "Suresh Sah",
  ctSide: "The Bride's Family · Nisha",
  ctCall: "Call",
  ctWa: "WhatsApp",
  ctClose: "WhatsApp messages open with a greeting ready — just say namaste and ask away.",

  /* footer */
  ftDate: "03 · 12 · 2026 — Chas · Jharkhand",
  ftQuote: "“Every love story is beautiful — ours is written in gold.”",
  ftMade: "Crafted with love · Two families, one celebration · MMXXVI",
};

export type Strings = typeof EN;

const HI: Strings = {
  gateEyebrow: "ज़ुककर नमस्ते, हम आपका स्वागत करते हैं",
  gateTitle: "अपनी भाषा चुनिए",
  gateSub: "इस निमंत्रण का आनंद अपने मन की भाषा में लीजिए",
  gateEnLabel: "English",
  gateHiLabel: "हिन्दी",

  envEyebrow: "प्रेम सहित, दो परिवार आपका हार्दिक आह्वान करते हैं",
  envCardTitle: "विवाह निमंत्रण",
  envCardDate: "गुरुवार · 03 · 12 · 2026 · चास",
  envTagline: "रात को मिली उसकी रोशनी",
  envHint: "निमंत्रण खोलने के लिए मुहर को स्पर्श करें",

  navStory: "हमारी कहानी",
  navSessions: "समारोह",
  navGallery: "झलकियाँ",
  navVenue: "समारोह स्थल",
  navContact: "संपर्क",
  navBrand: "निशा व रोशन",

  heroEyebrow: "शुभ विवाह समारोह",
  brideName: "निशा",
  groomName: "रोशन",
  heroAnd: "व",
  heroTagline: "रात को मिली उसकी रोशनी",
  heroDate: "गुरुवार · 03 दिसंबर 2026",
  heroTime: "संध्या सात बजे · चास · झारखंड",
  heroScroll: "नीचे देखें",

  marq: [
    "निशा व रोशन",
    "03 · 12 · 2026",
    "तारीख़ याद रखें",
    "चास · झारखंड",
    "#NishaWedsRoshan",
    "दो परिवार · एक उत्सव",
  ],

  blessSub: "भगवान श्री गणेश के दिव्य आशीर्वाद से",
  blessTogether: "सहयोग से",
  blessParents1: "श्रीमती राधा देवी एवं श्री सुरेश साह",
  blessParents2: "श्रीमती नगीना देवी एवं श्री रघुनाथ साह",
  blessBody:
    "अपने प्रिय बच्चों के वैवाहिक बंधन में आपकी उपस्थिति का आग्रह करते हैं — पावन अग्नि, गेंदे की सुगंध और दो परिवारों के मिलन की वह मधुर संध्या।",
  blessWeds: "व",

  coupleEyebrow: "दो आत्माएँ · एक कहानी",
  coupleTitleA: "वर",
  coupleAmp: "एवं",
  coupleTitleB: "वधू",
  coupleSub: "— जब रात को मिली उसकी रोशनी —",
  brideRole: "वधू",
  groomRole: "वर",
  brideParents: "राधा देवी व सुरेश साह की सुपुत्री",
  groomParents: "नगीना देवी व रघुनाथ साह के सुपुत्र",
  brideQuote:
    "कविता-सा भावुक हृदय, मुस्कान में चाँदनी — वह अनजाने लोगों को अपना बना लेती है और शामों को यादों में बदल देती है।",
  groomQuote:
    "सुबह की तरह स्थिर, दीये जैसा स्नेहमय — उसने निशा से पहले दोस्त के रूप में प्रेम किया, और फिर जीवन भर के लिए।",

  cdEyebrow: "पल पल की गिनती",
  cdTitleA: "जब तक हम कहें",
  cdTitleScript: "सदा के लिए",
  cdDateLine: "गुरुवार, तीन दिसंबर, दो हज़ार छब्बीस",
  cdUnits: ["दिन", "घंटे", "मिनट", "सेकंड"],

  sdIntro: "परिवार के साथ यह खुशी बाँटिए — निमंत्रण कार्ड साथ ले जाइए",
  sdBtn: "सेव-द-डेट कार्ड डाउनलोड करें",
  sdBusy: "कार्ड तैयार हो रहा है…",
  sdDone: "आपके डिवाइस में सहेजा गया",
  sdMeta: "PNG · 1080 × 1350 · व्हाट्सऐप व प्रिंट के लिए उत्तम",

  evEyebrow: "तीन दिन · पाँच समारोह",
  evTitleA: "विवाह के",
  evTitleScript: "समारोह",
  evIntro: "हर रस्म अपने आप में एक संसार है — हर एक में हमारे साथ चलिए।",
  evSession: "समारोह",
  evFeatured: "मुख्य समारोह",
  evDress: "पोशाक — ज्वेल रंगों व सुनहरे भारतीय परिधान",
  sessions: [
    {
      title: "मेहंदी",
      day: "मंगलवार",
      date: "01 दिसंबर 2026",
      time: "सुबह 11:00 बजे से",
      venue: "राम नगर कॉलोनी, चास",
      text: "मेहंदी, गेंदे और खुशियों की सुबह — निशा के हाथों पर मेहंदी की सुंदर कहानियाँ रचेंगी, और मौसियाँ-बुआओं में होगी डिज़ाइन की नोंक-झोंक।",
    },
    {
      title: "हल्दी",
      day: "बुधवार",
      date: "02 दिसंबर 2026",
      time: "सुबह 11:00 बजे से",
      venue: "राम नगर कॉलोनी, चास",
      text: "हल्दी, हँसी और सुनहरा नूर — कोई फ़िल्टर ऐसी चमक नहीं दे सकता। पीला पहनकर आइए — खुशी (और हल्दी) से सराबोर होकर जाएँगे।",
    },
    {
      title: "संगीत",
      day: "बुधवार",
      date: "02 दिसंबर 2026",
      time: "शाम 07:00 बजे से",
      venue: "राम नगर कॉलोनी, चास",
      text: "रोशनी और धुनों की संध्या, जहाँ दोनों परिवार मंच पर आमने-सामने होंगे। अपना बेहतरीन मूव लेकर आइए — हारने वालों की नोकरी नहीं जाएगी!",
    },
    {
      title: "विवाह",
      day: "गुरुवार",
      date: "03 दिसंबर 2026",
      time: "शाम 07:00 · शुभ मुहूर्त",
      venue: "राम नगर कॉलोनी, चास",
      text: "पवित्र अग्नि के चारों ओर फेरे, सर्द रात के आकाश तले सात वचन — वह दमदार क्षण जब रात को मिलती है उसकी रोशनी।",
    },
    {
      title: "स्वागत भोज",
      day: "गुरुवार",
      date: "03 दिसंबर 2026",
      time: "शाम 07:00 बजे से",
      venue: "भोलू बांध, बिचली दुकान के पास",
      text: "भोजन, आशीर्वाद और सुनहरी संध्या — नवदंपति का पहला आनन्दमय उत्सव, जिसमें दोनों परिवार मिलकर आपका स्वागत करेंगे।",
    },
  ],

  gaEyebrow: "दीपों की रोशनी में क़ैद — किसी भी तस्वीर को छूएँ",
  gaTitleA: "सुनहरी",
  gaTitleScript: "झलकियाँ",
  gaHash: "अपनी तस्वीरें साझा करें —",

  vnEyebrow: "उत्सव स्थल",
  vnTitleA: "मंगल",
  vnTitleScript: "स्थल",
  vnPara:
    "समारोह चास के पारिवारिक आंगन में होगा — द्वारों पर गेंदे की लड़ियाँ, हर क़दम पर दीये, और पूरा मोहल्ला गुनगुनाता हुआ।",
  vnCeremonyLabel: "मेहंदी · हल्दी · संगीत · विवाह",
  vnCeremonyAddr: ["राम नगर कॉलोनी, चास,", "झारखंड, भारत"],
  vnReceptionLabel: "स्वागत भोज",
  vnReceptionAddr: ["भोलू बांध, बिचली दुकान के पास,", "गुरुवार, 03 दिसंबर · शाम 7 बजे से"],
  vnDress:
    "ज्वेल रंगों व सुनहरे रंग के भारतीय परिधान — चास में दिसंबर की शाम ठंडी होती है, शॉल साथ अवश्य रखें।",
  vnDirections: "रास्ता देखें",
  vnGuestTitle: "अतिथि सूचना",
  vnGuestNote:
    "फेरों के बाद उसी शाम भोलू बांध, बिचली दुकान के पास स्वागत भोज में अवश्य पधारें — भोजन, आशीर्वाद और झारखंड की सर्द सिये की मिठास।",
  vnCapEyebrow: "पारिवारिक आंगन",
  vnCapTitle: "राम नगर कॉलोनी, चास",

  ctEyebrow: "स्नेह सहित · साह परिवार",
  ctTitleA: "बस एक",
  ctTitleScript: "फ़ोन दूर",
  ctIntro:
    "समय, रास्ता या उत्सव के दिन कोई मदद चाहिए — श्री सुरेश साह और परिवार आपके कॉल की प्रतीक्षा करेंगे।",
  ctTags: ["मुख्य", "वैकल्पिक"],
  ctPerson: "श्री सुरेश साह",
  ctSide: "वधू पक्ष · निशा के घर",
  ctCall: "कॉल करें",
  ctWa: "व्हाट्सऐप",
  ctClose: "व्हाट्सऐप संदेश नमस्ते के साथ तैयार खुलता है — बेझिझक पूछ लीजिए।",

  ftDate: "03 · 12 · 2026 — चास · झारखंड",
  ftQuote: "“हर प्रेम कहानी सुंदर होती है — हमारी कहानी सोने में लिखी है।”",
  ftMade: "प्रेम सहित निर्मित · दो परिवार, एक उत्सव · 2026",
};

type LangCtxType = { lang: Lang; setLang: (l: Lang) => void; t: Strings };

const LangCtx = createContext<LangCtxType | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      return localStorage.getItem("nr-lang") === "hi" ? "hi" : "en";
    } catch {
      return "en";
    }
  });

  const setLang = (l: Lang) => {
    try {
      localStorage.setItem("nr-lang", l);
    } catch {
      /* private mode */
    }
    setLangState(l);
  };

  return <LangCtx.Provider value={{ lang, setLang, t: STR_FOR(lang) }}>{children}</LangCtx.Provider>;
}

function STR_FOR(lang: Lang): Strings {
  return lang === "hi" ? HI : EN;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
