// src/data/simplified.js
// Simplified core datasets: Enneagram Types, Gene Keys Lines, Seven Divine Rays

export const simplified = {
  meta: {
    version: "0.1.0",
    sources: {
      enneagramTypes: "Enneagram Institute – Type Descriptions",
      geneKeysLines: "Gene Keys – How to read your profile / What is a Sphere, Gene Key or Line?",
      sevenRays: "Meader (Seven Rays list) + SevenRay.org (expanded descriptions)"
    }
  },

  enneagramTypes: [
    {
      id: "ennea-1",
      label: "Type 1 — The Reformer",
      tagline: "Rational, idealistic; principled and purposeful; can be perfectionistic.",
      source: "Enneagram Institute"
    },
    {
      id: "ennea-2",
      label: "Type 2 — The Helper",
      tagline: "Caring, interpersonal; generous and people-focused; can be possessive.",
      source: "Enneagram Institute"
    },
    {
      id: "ennea-3",
      label: "Type 3 — The Achiever",
      tagline: "Success-oriented; adaptive and driven; can be image-conscious.",
      source: "Enneagram Institute"
    },
    {
      id: "ennea-4",
      label: "Type 4 — The Individualist",
      tagline: "Sensitive, expressive; seeks identity and meaning; can be temperamental.",
      source: "Enneagram Institute"
    },
    {
      id: "ennea-5",
      label: "Type 5 — The Investigator",
      tagline: "Perceptive, analytical; private and knowledge-seeking; can detach.",
      source: "Enneagram Institute"
    },
    {
      id: "ennea-6",
      label: "Type 6 — The Loyalist",
      tagline: "Committed, security-oriented; responsible and anxious; can be suspicious.",
      source: "Enneagram Institute"
    },
    {
      id: "ennea-7",
      label: "Type 7 — The Enthusiast",
      tagline: "Spontaneous, versatile; seeks freedom and options; can be scattered.",
      source: "Enneagram Institute"
    },
    {
      id: "ennea-8",
      label: "Type 8 — The Challenger",
      tagline: "Powerful, decisive; protective and direct; can be confrontational.",
      source: "Enneagram Institute"
    },
    {
      id: "ennea-9",
      label: "Type 9 — The Peacemaker",
      tagline: "Easygoing, receptive; seeks harmony and stability; can be complacent.",
      source: "Enneagram Institute"
    }
  ],
  // Source: https://www.enneagraminstitute.com/type-descriptions/ :contentReference[oaicite:3]{index=3}

  geneKeysLines: [
    {
      id: "gk-line-1",
      label: "Line 1",
      keynotes: ["Inner Essence", "Introspection", "Investigation", "Self-Empowerment"],
      frequencyShift: "Afraid of Own Potential → Solid Inner Certainty",
      respondsBestTo: "Full information and heartfelt directness",
      coreWound: "Repression",
      guidance: "Fears must be explored and accepted; go within"
    },
    {
      id: "gk-line-2",
      label: "Line 2",
      keynotes: ["Expression", "Projection", "Ease of Being", "Passion & Relationships"],
      frequencyShift: "Unconsciously Provocative → Expression of Pure Light",
      respondsBestTo: "High frequency with no agenda",
      coreWound: "Denial",
      guidance: "Look into the mirror of relationships; turn anger into passion"
    },
    {
      id: "gk-line-3",
      label: "Line 3",
      keynotes: ["Adaptation", "Discovery", "Trial & Error", "Energy & Experience"],
      frequencyShift: "Unreliable/Pessimistic/Evasive → Joyous/Humble/Wise",
      respondsBestTo: "Absolutely no pressure",
      coreWound: "Shame",
      guidance: "Confront commitment issues; learn to laugh at yourself"
    },
    {
      id: "gk-line-4",
      label: "Line 4",
      keynotes: ["Friendship", "Connection", "Magnetic Influence", "Love & Community"],
      frequencyShift: "Hiding behind fixed view → Honest/Open/Heartfelt",
      respondsBestTo: "Integrity, honesty, softness and romance",
      coreWound: "Rejection",
      guidance: "Only you can heal your heart; be gentle with yourself"
    },
    {
      id: "gk-line-5",
      label: "Line 5",
      keynotes: ["Practicality", "Leadership", "Organisation", "Power & Projection"],
      frequencyShift: "Self-deluded tyranny → Leadership through listening",
      respondsBestTo: "Simple and practical solutions",
      coreWound: "Guilt",
      guidance: "Notice manipulation of power; forgive everyone (including yourself)"
    },
    {
      id: "gk-line-6",
      label: "Line 6",
      keynotes: ["Visionary", "Overseeing", "Role Model", "Education & Surrender"],
      frequencyShift: "Aloof/Arrogant/Inaccessible → Wise & Embodied Futurist",
      respondsBestTo: "Patience",
      coreWound: "Isolation",
      guidance: "Watch disengagement; manifest your highest vision in the physical body"
    }
  ],
  // Sources: Gene Keys lines overview (both pages show the same core list)
  // :contentReference[oaicite:4]{index=4}

  divineRays: [
    {
      id: "ray-1",
      label: "Ray 1 — Will & Power",
      keywords: ["Will", "Purpose", "Power", "Leadership"],
      short: "The impulse of directing force and purpose."
    },
    {
      id: "ray-2",
      label: "Ray 2 — Love & Wisdom",
      keywords: ["Love", "Wisdom", "Teaching", "Compassion"],
      short: "The magnetic force of cohesion, understanding, and wise care."
    },
    {
      id: "ray-3",
      label: "Ray 3 — Active Intelligence",
      keywords: ["Intelligence", "Adaptability", "Creativity", "Strategy"],
      short: "The organizing mind—resourceful, adaptive, and mentally agile."
    },
    {
      id: "ray-4",
      label: "Ray 4 — Harmony through Conflict",
      keywords: ["Harmony", "Conflict", "Art", "Beauty", "Sensitivity"],
      short: "The reconciler—bridges opposites through tension into creativity."
    },
    {
      id: "ray-5",
      label: "Ray 5 — Concrete Knowledge & Science",
      keywords: ["Science", "Knowledge", "Precision", "Research"],
      short: "The analytical ray—truth through investigation and clarity."
    },
    {
      id: "ray-6",
      label: "Ray 6 — Devotion & Idealism",
      keywords: ["Devotion", "Idealism", "Faith", "Focus"],
      short: "The devotional ray—single-pointedness toward an ideal."
    },
    {
      id: "ray-7",
      label: "Ray 7 — Ceremonial Order & Magic",
      keywords: ["Order", "Ritual", "Form", "Manifestation"],
      short: "The ritual-form ray—bringing spirit into matter through structure."
    }
  ]
  // Sources for 7 Rays names:
  // :contentReference[oaicite:5]{index=5}
};
