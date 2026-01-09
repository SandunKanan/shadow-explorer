// src/data/graph.js
// A small but expandable graph extracted from "The Shadow Keys Book_Test_Type 8.pdf"

export const nodes = [
  {
    id: "type8",
    label: "Ennea-Type 8 (formerly Enneagram 1)",
    kind: "type",
    summary:
      "The Idealist / The Judge / The Role Model (Line 6). Hyper-focused on improving & perfecting; shadow: perfectionism + judgement; gift: integrity + discernment.",
    sections: [
      {
        title: "Core description",
        body:
          "Associated with Human Design Line 6 (Role Model). Sees a better way; in shadow becomes perfectionistic and judgemental with black-and-white thinking; at best stands on integrity, discernment, credibility.",
        cites: ["turn1file1:L33-L44", "turn1file1:L40-L44"]
      },
      {
        title: "Shadow drivers",
        body:
          "Need to improve/perfect is described as instinctual pressure; anger/frustration/resentment when integrity is violated; linked to harsh judgement/shame and fear of mistakes; superego moral pressure.",
        cites: ["turn1file3:L4-L13"]
      }
    ]
  },

  // Labels / archetypes
  { id: "judge", label: "The Judge (Superego)", kind: "archetype", summary: "Superego pattern: moral judgement and right/wrong framing.", sections: [{ title: "In the psyche", body: "Type 8 is described as symbolised by the superego / “The Judge”.", cites: ["turn1file4:L10-L13"] }] },
  { id: "idealist", label: "The Idealist", kind: "archetype", summary: "Sees what could be; oriented to improvement and reform.", sections: [{ title: "Idealism", body: "Perspective: Idealist—sees what things could be and how they can be improved/reformed.", cites: ["turn1file0:L18-L20"] }] },
  { id: "roleModel", label: "The Role Model (Line 6)", kind: "archetype", summary: "Observation & learning transmuted into embodied wisdom; leads into the future.", sections: [{ title: "Line 6", body: "Line 6: a life of observation and learning transmuted into embodied wisdom to lead into the future.", cites: ["turn1file2:L62-L66"] }] },

  // Behaviours
  {
    id: "shadowBehaviors",
    label: "Dysfunctional behaviors (Shadow)",
    kind: "list",
    summary: "Self-judgement, resentment, hypocrisy, perfectionism, rigidity, seriousness, etc.",
    sections: [
      {
        title: "List",
        body:
          "Self-judgement/judgement of others; resentment; hypocrisy; perfectionism; rigidity; seriousness (over-focus on obligations and rules).",
        cites: ["turn1file3:L30-L39"]
      }
    ]
  },
  {
    id: "giftBehaviors",
    label: "Functional behaviors (Gift)",
    kind: "list",
    summary: "Integrity, discernment, responsibility, organization, values-based leadership.",
    sections: [
      {
        title: "List",
        body:
          "Integrity + discernment; responsibility; idealism as reform; organisation; strong values enacted as role model.",
        cites: ["turn1file3:L40-L49"]
      }
    ]
  },

  // Macro correspondences
  { id: "saturn", label: "Planet: Saturn", kind: "correspondence", summary: "Discipline archetype; mastery and right action.", sections: [{ title: "Macrocosm", body: "Type 8 is symbolised in the solar system by Saturn (the disciplinarian).", cites: ["turn1file4:L12-L14"] }] },
  { id: "numerology4", label: "Numerology: 4 (The Builder)", kind: "correspondence", summary: "Work, organisation, structure, foundations.", sections: [{ title: "Numerology", body: "Number 4 “The Builder” creates foundations of order/structure.", cites: ["turn1file2:L5-L7"] }] },
  { id: "ray7", label: "Rayology: Ray 7 Souls", kind: "correspondence", summary: "Order, ritual, tradition; structuring physical plane to reflect higher order.", sections: [{ title: "Rayology", body: "Ray 7 souls organise/structure physical plane to reflect higher order/spiritual truth.", cites: ["turn1file2:L8-L10"] }] },
  { id: "mountain", label: "I-Ching Trigram: Mountain", kind: "correspondence", summary: "Grounded, reliable, integral, steadfast, just.", sections: [{ title: "Trigram", body: "Trigram Mountain: grounded, reliable, integral, steadfast, just.", cites: ["turn1file2:L11-L12"] }] },
  { id: "diamond", label: "Nature symbol: Diamond", kind: "correspondence", summary: "Perfected form; brilliance; integrity; “diamond personality”.", sections: [{ title: "Nature", body: "Diamond represents flawless brilliance and perfected form; integrity and self-mastery.", cites: ["turn1file2:L12-L15", "turn1file4:L21-L25"] }] },

  // Human Design centers (Type 8)
  {
    id: "hd-centers",
    label: "Human Design Centers (Type 8 mapping)",
    kind: "group",
    summary: "Defined: Root/Impulse, Throat/Expression, Ajna/Awareness. Undefined: Sacral/Power, G/Identity, Spleen/Instinct.",
    sections: [
      {
        title: "Centers mapping",
        body:
          "Undefined: Sacral/Power (Obligation→Commitment), G/Identity (Disgrace→Honour), Spleen/Instinct (Perfectionism→Idealism). Defined: Root/Impulse (Rigidity→Discipline), Throat/Expression (Superiority→Integrity), Ajna/Awareness (Judgement→Discernment).",
        cites: ["turn1file2:L23-L43"]
      }
    ]
  },

  // HD in-depth attributes
  {
    id: "hd-indepth",
    label: "HD In-Depth Attributes",
    kind: "group",
    summary: "Line 6 Role Model + Root/Spleen themes + judgement vision + guilt/responsibility motivation + idealist perspective + communities environment + conditioner trajectory.",
    sections: [
      {
        title: "Highlights",
        body:
          "Root: routine/rigidity/habit to stay sane and on track; Spleen: fear of mistakes/judgement/recrimination; Vision: judgement (discern correct/incorrect); Motivation: guilt/responsibility; Perspective: idealist; Environment: communities; Trajectory: conditioned→conditioner.",
        cites: ["turn1file0:L1-L31", "turn1file2:L68-L97"]
      }
    ]
  },

  // Corresponding gates / shadow keys list
  {
    id: "shadow-keys",
    label: "Corresponding HD Gates / 'Shadow Keys' (Type 8)",
    kind: "group",
    summary: "9 foundational gates: 60, 29, 18, 4, 17, 65, 5, 12, 50.",
    sections: [
      {
        title: "Why these matter",
        body:
          "The text says the Shadow Keys correlate Enneagram Types to 9 Human Design Gates/Gene Keys to understand fractal patterns; these 9 are foundational to Type 8.",
        cites: ["turn1file0:L74-L78"]
      },
      {
        title: "Gate list",
        body: "60, 29, 18, 4, 17, 65, 5, 12, 50 (with thematic pairs like Hypocrisy/Integrity at 50).",
        cites: ["turn1file0:L54-L73"]
      }
    ]
  },

  // Shadow Key 50
  {
    id: "sk50",
    label: "Shadow Key 50 — Values & Law",
    kind: "shadowKey",
    summary: "Personal law/rule/order founded on values; shadow: corrupt values; gift: integrity + responsibility; governance of community through values.",
    sections: [
      {
        title: "Core meaning",
        body:
          "Key of personal law/rule/order founded on values; values give meaning, identity, purpose; responsibility is central (embody values internally + establish externally).",
        cites: ["turn2file0:L21-L34"]
      },
      {
        title: "Shadow risk",
        body:
          "In shadow, law may be founded on corrupted values from conditioning/trauma; without universal laws (love, unity, free-will), rule deviates from integrity.",
        cites: ["turn2file0:L35-L46"]
      }
    ]
  },

  // Shadow Key 50: line polarities (subset shown; you can add the rest the same way)
  {
    id: "sk50-lines",
    label: "SK50 Line Polarities (selected)",
    kind: "group",
    summary: "Examples: Injustice↔Justness (Line 5); Degradation↔Preservation (Line 6); Resentment↔Responsibility (Line 9).",
    sections: [
      {
        title: "Examples",
        body:
          "Line 5 (Enneagram 1): Injustice vs Justness. Line 6 (Enneagram 8): Degradation vs Preservation. Line 9 (Enneagram 6): Resentment vs Responsibility.",
        cites: ["turn2file3:L10-L31"]
      }
    ]
  },

  // Essays
  {
    id: "hypocrisy",
    label: "Essay: The Shadow of Hypocrisy",
    kind: "essay",
    summary: "Hypocrisy = saying one thing, doing another; values/aspirations violated; mismatch between proclaimed identity and real actions.",
    sections: [
      { title: "Definition", body: "Hypocrisy is saying one thing, but doing another; violating values/aspirations with actions.", cites: ["turn2file3:L52-L56"] },
      { title: "Consequence", body: "Creates inner incongruence; without continuity from essence to expression there is no integrity and one becomes unreliable/hypocritical.", cites: ["turn2file4:L1-L6"] }
    ]
  },
  {
    id: "responsibility",
    label: "Essay: Responsibility vs Neglectfulness",
    kind: "essay",
    summary: "Responsibility as duty of care; neglectfulness as avoidance or overload leading to damage/resentment.",
    sections: [
      { title: "Responsibility", body: "Responsibility is ownership of duty of care for a domain; accountable for safety and sustainment; capacity grows with mastery.", cites: ["turn2file4:L26-L38"] },
      { title: "Neglectfulness", body: "Avoidance or taking too much on; leads to damage/disrepair/resentment, often felt in relationships.", cites: ["turn2file4:L39-L46"] }
    ]
  },
  {
    id: "integrity",
    label: "Essay: The Light of Integrity",
    kind: "essay",
    summary: "Integrity links essence → words/actions; honesty + consistency; anti-conformist truth; attracts trust and followers.",
    sections: [
      { title: "Definition", body: "Integrity is the backbone connecting essence to what we say/do; dependable, coherent, trustworthy.", cites: ["turn2file1:L7-L10"] },
      { title: "Honesty + consistency", body: "Integrity consists of honesty and consistency—speaking truth and doing what you say; continuity of essence/values/actions.", cites: ["turn2file1:L14-L17"] }
    ]
  }
];

// Connections: tree-like + cross-links.
// You’ll use these in React Flow as edges, and also to show “related nodes” in the detail panel.
export const edges = [
  // Type → archetypes
  { id: "e-type8-judge", source: "type8", target: "judge", label: "archetype" },
  { id: "e-type8-idealist", source: "type8", target: "idealist", label: "archetype" },
  { id: "e-type8-roleModel", source: "type8", target: "roleModel", label: "HD line" },

  // Type → behaviors
  { id: "e-type8-shadowBeh", source: "type8", target: "shadowBehaviors", label: "shadow" },
  { id: "e-type8-giftBeh", source: "type8", target: "giftBehaviors", label: "gift" },

  // Type → correspondences
  { id: "e-type8-saturn", source: "type8", target: "saturn", label: "macrocosm" },
  { id: "e-type8-numerology4", source: "type8", target: "numerology4", label: "numerology" },
  { id: "e-type8-ray7", source: "type8", target: "ray7", label: "rayology" },
  { id: "e-type8-mountain", source: "type8", target: "mountain", label: "I-Ching" },
  { id: "e-type8-diamond", source: "type8", target: "diamond", label: "nature" },

  // HD
  { id: "e-type8-hd-centers", source: "type8", target: "hd-centers", label: "human design" },
  { id: "e-type8-hd-indepth", source: "type8", target: "hd-indepth", label: "HD in-depth" },

  // Shadow Keys / Gates
  { id: "e-type8-shadowkeys", source: "type8", target: "shadow-keys", label: "shadow keys" },
  { id: "e-shadowkeys-sk50", source: "shadow-keys", target: "sk50", label: "includes" },
  { id: "e-sk50-lines", source: "sk50", target: "sk50-lines", label: "line polarities" },

  // Essays connected to SK50
  { id: "e-sk50-hypocrisy", source: "sk50", target: "hypocrisy", label: "shadow essay" },
  { id: "e-sk50-responsibility", source: "sk50", target: "responsibility", label: "practice" },
  { id: "e-sk50-integrity", source: "sk50", target: "integrity", label: "gift essay" }
];
