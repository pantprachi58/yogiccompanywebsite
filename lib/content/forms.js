// Multi-step enquiry quizzes, reproduced field-for-field from the live
// Yogic Company website (/form1 … /form6 and /accesstostillness).
//
// NOTE: the live site posts these to Tilda's form service using a Tilda form
// key. That key is a credential belonging to the old site and is deliberately
// NOT reproduced here. Each quiz posts to /api/enquiry, which is wired to
// whatever endpoint you configure (see app/api/enquiry/route.js).

const CONTACT_STEP = {
  id: "contact",
  title: "Contact Information",
  intro:
    "This is a contact form. Please provide your contact information below, and we'll get in touch to assist you with any questions or requests you may have.",
  fields: [
    { name: "name", label: "Name (Optional)", type: "text", autoComplete: "name", required: false },
    { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel", required: true },
    { name: "email", label: "Email address", type: "email", autoComplete: "email", required: true },
  ],
};

export const enquiryForms = [
  {
    slug: "stress",
    legacyPath: "/form1",
    name: "Stress & Anxiety enquiry",
    title: "Take the First Step Toward Calm",
    intro:
      "Answer a few quick questions to help us understand your stress and guide you toward the right support.",
    startLabel: "Let's Get Started",
    conditionSlug: "stress-and-anxiety",
    steps: [
      {
        id: "trigger",
        question: "What made you explore stress or anxiety support right now?",
        type: "multi",
        options: [
          "Work-related pressure",
          "Family or relationship concerns",
          "Health issues",
          "General daily overwhelm",
          "Just curious / want to learn",
        ],
        allowOther: true,
      },
      {
        id: "symptoms",
        question: "What symptoms or challenges do you face most often? (Select all that apply)",
        type: "multi",
        options: [
          "Trouble sleeping",
          "Irritability or mood swings",
          "Muscle tension / headaches",
          "Difficulty concentrating",
          "Feeling overwhelmed or fatigued",
          "Panic / racing thoughts",
        ],
        allowOther: true,
      },
      {
        id: "severity",
        question: "On a scale of 1–10, how would you rate your current stress/anxiety?",
        type: "scale",
        min: 1,
        max: 10,
        minLabel: "1 – Low",
        maxLabel: "10 – Severe",
      },
      {
        id: "support",
        question: "What kind of support would help you most?",
        type: "multi",
        options: [
          "Guided yoga or meditation practices",
          "Breathwork techniques",
          "One-on-one personalized sessions",
          "Group classes or workshops",
          "Online self-paced resources",
          "Not sure yet, need guidance",
        ],
        allowOther: true,
      },
      CONTACT_STEP,
    ],
  },
  {
    slug: "back-pain",
    legacyPath: "/form2",
    name: "Back Pain enquiry",
    title: "Take the First Step Toward a Pain-Free Back",
    intro:
      "Share a few quick details so we can guide you toward the right practices for relief and long-term back health.",
    startLabel: "Let's Get Started",
    conditionSlug: "back-pain",
    steps: [
      {
        id: "concern",
        question: "What best describes your current concern?",
        type: "multi",
        options: [
          "Lower back pain",
          "Upper back or neck stiffness",
          "General muscle tightness",
          "Posture-related discomfort",
        ],
        allowOther: true,
      },
      {
        id: "duration",
        question: "How long have you been experiencing this issue?",
        type: "single",
        options: ["1–6 months", "6–12 months", "Over a year"],
        allowOther: true,
      },
      {
        id: "timing",
        question: "When do you feel the pain or stiffness most?",
        type: "multi",
        options: [
          "During/after work hours",
          "While exercising or after physical activity",
          "At rest / while sleeping",
          "Throughout the day",
        ],
        allowOther: true,
      },
      {
        id: "tried",
        question: "What approaches have you tried so far? (Select all that apply)",
        type: "multi",
        options: [
          "Pain medication",
          "Physiotherapy",
          "Yoga or stretching",
          "Massage therapy",
          "Nothing yet",
        ],
        allowOther: true,
      },
      {
        id: "support",
        question: "What kind of support would help you most?",
        type: "multi",
        options: [
          "Guided yoga/stretching for back health",
          "Personalized one-on-one sessions",
          "Group classes for posture & flexibility",
          "Breathwork / relaxation techniques",
          "Not sure yet, need guidance",
        ],
        allowOther: true,
      },
      CONTACT_STEP,
    ],
  },
  {
    slug: "fertility",
    legacyPath: "/form3",
    name: "Fertility enquiry",
    title: "Take the First Step Toward Hope & Healing",
    intro:
      "Share a few details with us so we can support your fertility journey with care, compassion, and the right practices.",
    startLabel: "Let's Get Started",
    conditionSlug: "infertility",
    steps: [
      {
        id: "reason",
        question: "What brings you to explore infertility support with us?",
        type: "multi",
        options: [
          "Difficulty conceiving",
          "Irregular menstrual cycles",
          "Stress or anxiety related to fertility",
          "Exploring holistic approaches to fertility",
        ],
        allowOther: true,
      },
      {
        id: "duration",
        question: "How long have you been trying to conceive?",
        type: "single",
        options: [
          "Less than 6 months",
          "6–12 months",
          "1–2 years",
          "More than 2 years",
          "Prefer not to say",
        ],
        allowOther: true,
      },
      {
        id: "tried",
        question: "Have you tried any approaches so far? (Select all that apply)",
        type: "multi",
        options: [
          "Medical consultation / fertility treatments",
          "Yoga or lifestyle changes",
          "Nutrition or dietary adjustments",
          "Stress management / counseling",
          "Nothing yet",
        ],
        allowOther: true,
      },
      {
        id: "support",
        question: "What kind of support are you most interested in?",
        type: "multi",
        options: [
          "Yoga and mindfulness for fertility",
          "Stress and emotional balance techniques",
          "Lifestyle and nutrition guidance",
          "One-on-one personalized sessions",
          "Group workshops / community support",
          "Not sure yet, need guidance",
        ],
        allowOther: true,
      },
      CONTACT_STEP,
    ],
  },
  {
    slug: "mental-wellness",
    legacyPath: "/form4",
    name: "Mental wellness enquiry",
    title: "Take the First Step Toward Mental Clarity",
    intro:
      "Share a few quick details so we can understand your needs and guide you toward the right mental health support with care and confidentiality.",
    startLabel: "Let's Get Started",
    conditionSlug: "mental-health",
    steps: [
      {
        id: "area",
        question: "What area of mental health support are you seeking?",
        type: "multi",
        options: [
          "Stress or anxiety",
          "Low mood / depression",
          "Sleep issues",
          "Relationship or family concerns",
          "Work-related challenges",
        ],
        allowOther: true,
      },
      {
        id: "frequency",
        question: "How often do these concerns affect your daily life?",
        type: "single",
        options: [
          "Rarely (few times a month)",
          "Sometimes (1–2 times a week)",
          "Often (most days)",
          "Constantly (daily, persistent)",
        ],
        allowOther: true,
      },
      {
        id: "tried",
        question: "What have you tried so far to manage your mental health? (Select all that apply)",
        type: "multi",
        options: [
          "Counseling or therapy",
          "Meditation or yoga",
          "Exercise or lifestyle changes",
          "Medication",
          "Nothing yet",
        ],
        allowOther: true,
      },
      {
        id: "support",
        question: "What kind of support would you like from us?",
        type: "multi",
        options: [
          "One-on-one sessions",
          "Group workshops / community support",
          "Yoga or mindfulness practices",
          "Stress-relief techniques",
          "Not sure yet, need guidance",
        ],
        allowOther: true,
      },
      CONTACT_STEP,
    ],
  },
  {
    slug: "chronic-disease",
    legacyPath: "/form5",
    name: "Chronic condition enquiry",
    title: "Take the First Step Toward a Healthier Tomorrow",
    intro:
      "Share a few quick details so we can better understand your health journey and guide you with long-term care and support.",
    startLabel: "Let's Get Started",
    conditionSlug: "chronic-diseases",
    steps: [
      {
        id: "condition",
        question: "What chronic condition are you seeking support for?",
        type: "multi",
        options: [
          "Diabetes",
          "Hypertension (high blood pressure)",
          "Heart disease",
          "Asthma / respiratory issues",
          "Arthritis / joint pain",
        ],
        allowOther: true,
      },
      {
        id: "duration",
        question: "How long have you been managing this condition?",
        type: "single",
        options: ["Less than 6 months", "6–12 months", "1–3 years", "More than 3 years"],
        allowOther: true,
      },
      {
        id: "challenges",
        question: "What challenges do you face most often? (Select all that apply)",
        type: "multi",
        options: [
          "Medication side effects",
          "Difficulty managing lifestyle (diet, exercise, routine)",
          "Stress or anxiety related to the condition",
          "Lack of energy or fatigue",
          "Pain or physical limitations",
        ],
        allowOther: true,
      },
      {
        id: "managing",
        question:
          "On a scale of 1–10, how well do you feel you are currently managing your condition?",
        type: "scale",
        min: 0,
        max: 10,
        minLabel: "Not managing at all",
        maxLabel: "Managing very well",
      },
      {
        id: "support",
        question: "What kind of support would help you most?",
        type: "multi",
        options: [
          "Lifestyle guidance (yoga, diet, exercise)",
          "Stress management / mindfulness practices",
          "One-on-one personalized sessions",
          "Group workshops for chronic care",
          "Not sure yet, need guidance",
        ],
        allowOther: true,
      },
      CONTACT_STEP,
    ],
  },
  {
    slug: "general",
    legacyPath: "/form6",
    name: "General enquiry",
    title: "Take the First Step Toward a Healthier Tomorrow",
    intro:
      "Share a few quick details so we can better understand your health journey and guide you with long-term care and support.",
    startLabel: "Let's Get Started",
    conditionSlug: null,
    steps: [
      {
        id: "condition",
        question: "What condition are you seeking support for?",
        type: "multi",
        options: [
          "Stress & Anxiety",
          "Infertility",
          "Back Pain",
          "Diabetes",
          "Hypertension (high blood pressure)",
          "Asthma / respiratory issues",
          "Arthritis / joint pain",
          "Sleep Disorder",
        ],
        allowOther: true,
      },
      {
        id: "duration",
        question: "How long have you been managing this condition?",
        type: "single",
        options: ["Less than 6 months", "6–12 months", "1–3 years", "More than 3 years"],
        allowOther: true,
      },
      {
        id: "challenges",
        question: "What challenges do you face most often? (Select all that apply)",
        type: "multi",
        options: [
          "Medication side effects",
          "Difficulty managing lifestyle (diet, exercise, routine)",
          "Stress or anxiety related to the condition",
          "Lack of energy or fatigue",
          "Pain or physical limitations",
        ],
        allowOther: true,
      },
      {
        id: "managing",
        question:
          "On a scale of 1–10, how well do you feel you are currently managing your condition?",
        type: "scale",
        min: 0,
        max: 10,
        minLabel: "Not managing at all",
        maxLabel: "Managing very well",
      },
      {
        id: "support",
        question: "What kind of support would help you most?",
        type: "multi",
        options: [
          "Lifestyle guidance (yoga, diet, exercise)",
          "Stress management / mindfulness practices",
          "One-on-one personalized sessions",
          "Group workshops for chronic care",
          "Not sure yet, need guidance",
        ],
        allowOther: true,
      },
      CONTACT_STEP,
    ],
  },
];

// /accesstostillness — "Let us Talk"
export const stillnessForm = {
  slug: "access-to-stillness",
  legacyPath: "/accesstostillness",
  name: "Access to Stillness",
  title: "Let us Talk",
  intro: "A few quiet questions before we welcome you.",
  startLabel: "Get started",
  conditionSlug: null,
  steps: [
    {
      id: "interests",
      question: "Which aspects interest you the most?",
      type: "multi",
      options: [
        "Guided breathwork",
        "Meditation and stillness",
        "Emotional grounding",
        "Stress regulation",
        "Yogic philosophy",
        "Sleep and recovery",
        "Presence and awareness",
        "Community gatherings",
        "Something Else",
      ],
      allowOther: false,
    },
    {
      id: "format",
      question: "How would you like to experience this?",
      type: "multi",
      options: [
        "Intimate Group Workshop",
        "One-on-one Personalized Session",
        "Large Community Gatherings",
      ],
      allowOther: false,
    },
    {
      id: "contact",
      title: "Your details",
      fields: [
        { name: "name", label: "Your Name", type: "text", autoComplete: "name", required: true },
        { name: "phone", label: "Your Phone Number", type: "tel", autoComplete: "tel", required: true },
        { name: "email", label: "Email address", type: "email", autoComplete: "email", required: true },
      ],
    },
  ],
};

export const allForms = [...enquiryForms, stillnessForm];

export function getForm(slug) {
  return allForms.find((f) => f.slug === slug);
}
