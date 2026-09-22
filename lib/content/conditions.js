// "We Deal With" — wellness areas, migrated from https://yogiccompany.com/aboutus
// Each condition opens its own enquiry form, as on the live site.
export const conditions = [
  {
    slug: "stress-and-anxiety",
    title: "Stress & Anxiety",
    description:
      "Discover profound serenity through yoga and breathing practices that empower you to alleviate stress, quiet anxiety, and clear mental chaos, fostering a transformative sense of inner peace.",
    image: "/images/conditions/stress-anxiety.jpg",
    imageAlt: "A hand reaching upward out of still water",
    formSlug: "stress",
  },
  {
    slug: "back-pain",
    title: "Back Pain",
    description:
      "Easily manage chronic pain, including back pain and muscle stiffness, through carefully designed yoga postures and exercises.",
    image: "/images/conditions/back-pain.jpg",
    imageAlt: "Surreal artwork of a figure suspended in mid-air",
    formSlug: "back-pain",
  },
  {
    slug: "infertility",
    title: "Infertility",
    description:
      "Our fertility-boosting practices harness natural techniques for men and women, expertly crafted to optimize reproductive health and empower your journey toward conception.",
    image: "/images/conditions/infertility.jpg",
    imageAlt: "Gold seed-and-flame motif on a deep red ground",
    formSlug: "fertility",
  },
  {
    slug: "mental-health",
    title: "Mental Health",
    description:
      "Unlock mental clarity and emotional resilience with practices that sharpen focus, stabilize mood, and promote enduring well-being, revolutionizing your mental health.",
    image: "/images/conditions/mental-health.jpg",
    imageAlt: "Figure whose head is obscured by a low cloud",
    formSlug: "mental-wellness",
  },
  {
    slug: "chronic-diseases",
    title: "Chronic Diseases",
    description:
      "Transform long-term health challenges like asthma, arthritis, diabetes, and thyroid issues with holistic practices that promote lasting wellness and vitality.",
    image: "/images/conditions/chronic-diseases.jpg",
    imageAlt: "Human figure rendered as a constellation of particles above a DNA helix",
    formSlug: "chronic-disease",
  },
];

export function getCondition(slug) {
  return conditions.find((c) => c.slug === slug);
}

// "Book your call if you are facing these issues" — from https://yogiccompany.com/cure
export const consultationIssues = [
  { title: "Stress/Depression", icon: "stress", text: "If you are suffering from stress, anxiety, or depression due to personal or professional life." },
  { title: "Infertility", icon: "fertility", text: "If you have been struggling to conceive for a very long time (both men & women)." },
  { title: "Back Pain", icon: "back", text: "If you are suffering from acute back pain due to long sitting hours or any other reason." },
  { title: "Diabetes", icon: "diabetes", text: "If you have been suffering from diabetes for a very long time or are in the early stages." },
  { title: "Thyroid", icon: "thyroid", text: "If you are suffering from hypothyroidism or hyperthyroidism and facing difficulties in doing regular chores." },
  { title: "Lethargy", icon: "energy", text: "If you constantly feel unenergetic, lazy, and distracted due to long working hours." },
  { title: "Chronic Diseases", icon: "chronic", text: "If you have been suffering with chronic diseases like Ashtama, Arthritis, Cystic Fibrosis, etc. for a very long time." },
  { title: "Muscle/Bone Pains", icon: "muscle", text: "If you are suffering from any kind of muscle/bone pain from childhood or due to some other reason." },
  { title: "Skin Related Issues", icon: "skin", text: "If you are suffering from Psoriasis, Eczema, Acne, Varicose veins, irritation, or any type of allergy." },
];

// "Changes you will feel in your body after attending the classes" — /cure
export const bodyChanges = [
  "Relief from back pain.",
  "Improved sleep quality.",
  "Improved heart health.",
  "Increased muscle strength.",
  "Improved posture and aligned spine.",
  "Stimulated digestive organs & better gut health.",
  "Relief from stress, depression & anxiety.",
  "Enhanced focus, concentration & clear thoughts.",
  "Improved lung capacity & respiratory strength.",
  "Weight loss & reduced body fat percentage.",
  "Reduced PTSD symptoms.",
];

// "Do you know yoga has some special benefits for a woman" — /cure
export const womensBenefits = [
  { lead: "Treat", strong: "hormonal imbalance" },
  { lead: "Get relief from", strong: "period cramps." },
  { lead: "Body to become more ready to", strong: "conceive." },
  { lead: "In postpartum", strong: "recovery." },
  { lead: "Reduce", strong: "PMS symptoms." },
  { lead: "Reduce", strong: "menopause-related symptoms." },
  { lead: "In improving their", strong: "bone health." },
  { lead: "Treat", strong: "skin-related issues." },
];

// "What will you get after booking your call?" — /cure
export const consultationTakeaways = [
  "Importance of exercise in everyday life.",
  "How yoga keeps our internal organs healthy.",
  "How to detoxify your body, mind & soul.",
  "Ways to improve concentration level and focus.",
  "You'll learn different forms of breathing & yoga to treat your back pain.",
  "Discover how breathing and yoga help in infertility for both men and women.",
  "The ways to overcome stress, anxiety, depression, and any mental health-related issues.",
  "Different breathing techniques and yoga to cure your Diabetes, Arthritis, Asthma, and many more diseases.",
  "Know the secrets to rewire your mind and connect with soul power.",
  "Understand the power of our ancient Indian roots that can help treat any disease.",
  "The secret to living a happy, peaceful, and prosperous life.",
];

// FAQ shown on /cure
export const consultationFaqs = [
  {
    q: "I'm not able to conceive, how will you help me out?",
    a: "Through yoga, breathing exercises, and lifestyle guidance, we aim to enhance fertility and overall reproductive health naturally.",
  },
  {
    q: "How will you help me get rid of back pain?",
    a: "We provide targeted yoga postures, breathing techniques, and lifestyle practices to relieve back pain and strengthen your spine.",
  },
];

// "Do You Struggle With Any of These?" — from the healing landing page
export const struggles = [
  "Obesity & Weight Gain",
  "Stress & Anxiety",
  "Sleep Disorders & Fatigue",
  "PCOD & Infertility",
  "Attention Deficit / Lack of Focus",
  "Diabetes & Hormonal Imbalance",
  "Bloating & Digestive Issues",
  "Chronic Pain & Joint Stiffness",
];

// "Our Remote Healing Approach" — from the healing landing page
export const remoteApproach = [
  {
    title: "Yoga & Postures",
    text: "Feel lighter, stronger, and free from stiffness right from your living room.",
    icon: "stillness",
  },
  {
    title: "Pranayama & Breathwork",
    text: "Recharge your body with energy, melt away stress, and restore balance in just minutes a day.",
    icon: "wave",
  },
  {
    title: "Meditation & Mindfulness",
    text: "Sleep deeper, focus sharper, and experience a calmer mind with guided online practice.",
    icon: "lotus",
  },
];
