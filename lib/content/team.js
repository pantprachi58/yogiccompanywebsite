// Teacher biographies, migrated verbatim from https://yogiccompany.com/aboutus
// and https://yogiccompany.com/cure
export const team = [
  {
    slug: "yogacharya-manish",
    name: "Yogacharya Manish",
    role: "Mastering the Science of Breath for Mind & Body Healing",
    image: "/images/team/yogacharya-manish.jpg",
    imageAlt: "Yogacharya Manish seated in meditation outdoors",
    intro:
      "Yogacharya Manish bridges traditional Himalayan yogic science with modern mind health—guiding individuals away from chronic anxiety, stress, and medication, back to natural stillness and vitality.",
    bioHeading: "A Legacy of Root-Cause Healing",
    bio: [
      "Rooted in classical training from the prestigious University of Patanjali, Yogacharya Manish brings over 20 years of clinical mastery to therapeutic Pranayama and nervous system restoration.",
      "Having transformed over 10,000+ lives globally, his work specializes in root-cause healing—helping individuals recover from severe anxiety, panic attacks, depression, and insomnia rather than merely managing symptoms.",
      "Through breath-led diagnostics, he empowers each practitioner with tailored ancient techniques designed to deliver immediate physiological calm and sustainable peace.",
    ],
    story: [
      "Yogacharya Manish began his journey into Yoga, Meditation, and Pranayama at the age of 13. Inspired by watching Swami Ramdev Ji on television, he started practicing intensively and began teaching yoga by age 16, helping others with their health concerns. His dedication led to profound personal transformation, enhancing his physical energy and mental clarity.",
      "To deepen his knowledge, Yogacharya Manish pursued education at the University of Patanjali in Haridwar, studying under Swami Ramdev Ji and Balkrishna Ji. He completed his Graduation and Master's in Yogic Science and spent five years at Patanjali Yogpeeth, working in the Patanjali Yog Literary Research Department under Acharya Maheshanand Vidyalankar Ji.",
      "Swami Ramdev Ji taught Manish that yoga is the key to health, happiness, and spiritual enlightenment. Embracing this wisdom, Manish began hosting global yoga events, helping people improve their breathing, overcome diseases, and find spiritual fulfillment. Today, his teachings continue to inspire and heal, spreading the transformative power of yoga worldwide.",
    ],
  },
  {
    slug: "yogini-pooja",
    name: "Yogini Pooja",
    role: "Therapeutic Precision Meets Women’s Holistic Vitality",
    image: "/images/team/yogini-pooja.jpg",
    imageAlt: "Yogini Pooja holding a seated yoga posture",
    intro:
      "Combining rigorous anatomical alignment with traditional therapeutic yoga, Yogini Pooja guides women through every stage of life—restoring physical strength, emotional balance, and hormonal health.",
    bioHeading: "Anatomical Mastery & Specialized Women's Care.",
    bio: [
      "Trained in classical precision at the prestigious B.K.S. Iyengar and Bikram Yoga Schools, alongside an advanced exercise science diploma from K11 Academy, Pooja seamlessly integrates anatomical alignment with therapeutic wisdom.",
      "She specializes in maternal wellness, prenatal, and postnatal yoga, creating safe, structured environments for women navigating hormonal transitions, physical rehabilitation, and mental fatigue.",
    ],
    story: [],
  },
];

export function getTeamMember(slug) {
  return team.find((member) => member.slug === slug);
}
