// Teacher biographies, migrated verbatim from https://yogiccompany.com/aboutus
// and https://yogiccompany.com/cure
export const team = [
  {
    slug: "yogacharya-manish",
    name: "Yogacharya Manish",
    role: "Guiding Body, Mind, and Soul to Harmony",
    image: "/images/team/yogacharya-manish.jpg",
    imageAlt: "Yogacharya Manish seated in meditation outdoors",
    intro:
      "Yogacharya Manish's journey blends yoga's ancient wisdom with modern needs, guiding individuals toward physical vitality, mental clarity, and spiritual growth through dedicated practice.",
    bioHeading: "A Vision for Holistic Wellness",
    bio: [
      "Yogacharya Manish's mission is to empower people globally by integrating Pranayama, Yogasana, and Meditation. With 20 years of experience, he has transformed lives across cultures, helping corporate leaders, homemakers, and retirees alike. His tailored sessions enhance oxygen flow, reduce stress, and boost emotional balance, addressing urban life's challenges. Rooted in his rigorous training at the University of Patanjali, Yogacharya Manish's philosophy views yoga as a bridge to self-discovery, harmonizing body, mind, and soul. His teachings unlock latent energy, fostering inner peace and self-realization. By aligning breath with purpose, he guides individuals to reconnect with their essence, delivering lasting impact. Yogacharya Manish's work stands as a beacon of hope, proving yoga's power to heal and inspire across borders.",
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
    role: "Blending Fitness and Yoga for Holistic Wellness",
    image: "/images/team/yogini-pooja.jpg",
    imageAlt: "Yogini Pooja holding a seated yoga posture",
    intro:
      "Yogini Pooja masterfully integrates fitness and yoga, guiding individuals toward vibrant health, mental serenity, and spiritual balance with passionate expertise.",
    bioHeading: "Empowering Women's Wellness Journey",
    bio: [
      "Trained at the prestigious B.K.S. Iyengar and Bikram Yoga Schools, Yogini Pooja has mastered the art of holistic healing. Her fitness diploma from K11 Pune enhances her ability to address women's unique health needs through specialized yoga. Renowned for her prenatal and postnatal classes, she creates safe spaces for women to nurture strength and resilience. With a gentle, approachable style, Pooja encourages open dialogue, helping women navigate physical and emotional challenges. Her meditation and yoga expertise fosters vitality, mental focus, and inner peace. Committed to empowering women, Pooja guides them through transformative journeys, celebrating their strength and fostering lifelong wellness with compassion and care.",
    ],
    story: [],
  },
];

export function getTeamMember(slug) {
  return team.find((member) => member.slug === slug);
}
