// src/data/connectionsFromPdf.js
// Connections derived from your PDF extraction. :contentReference[oaicite:7]{index=7}
//
// This layer “decorates” your base Gene Keys dataset with the relationships you’ve been given so far.
// It also supports the fact that your PDF includes "65" (not part of the standard 1–64 Gene Keys list).

export const pdfNodes = [
  {
    id: "ennea-type-8",
    label: "Ennea-Type 8 (book)",
    kind: "enneaType",
    summary:
      "Book-specific Ennea-Type 8 mapping to 9 Shadow Keys / HD Gates, with deep emphasis on Shadow Key 50 (Values & Law).",
    source: "pdf"
  },

  // Book-specific concept nodes (so you can click them)
  {
    id: "sk50-values-law",
    label: "Shadow Key 50 — Values & Law (book)",
    kind: "shadowKeyBook",
    summary:
      "Book framing of SK50 as values, law, ethics, responsibility; explores hypocrisy and integrity as core dynamics.",
    source: "pdf",
    relatedGeneKey: "gk-50" // link it to standard GK50
  },
  { id: "sk50-hypocrisy", label: "Hypocrisy (essay)", kind: "essay", source: "pdf" },
  { id: "sk50-responsibility", label: "Responsibility vs Neglect", kind: "essay", source: "pdf" },
  { id: "sk50-integrity", label: "Integrity (essay)", kind: "essay", source: "pdf" },

  // Book-only “Gate 65 / Shadow Key 65” placeholder (since GK list is 1–64)
  {
    id: "sk-65",
    label: "Shadow Key 65 (book)",
    kind: "shadowKeyBook",
    summary:
      "Appears in your book’s Type 8 gate list; not part of standard 64 Gene Keys. Keep as a custom node for now.",
    source: "pdf"
  }
];

export const pdfEdges = [
  // Ennea-Type 8 → the 9 “Shadow Keys / Gates” given in the PDF
  { id: "e8-gk-60", source: "ennea-type-8", target: "gk-60", label: "mapped gate" },
  { id: "e8-gk-29", source: "ennea-type-8", target: "gk-29", label: "mapped gate" },
  { id: "e8-gk-18", source: "ennea-type-8", target: "gk-18", label: "mapped gate" },
  { id: "e8-gk-4", source: "ennea-type-8", target: "gk-4", label: "mapped gate" },
  { id: "e8-gk-17", source: "ennea-type-8", target: "gk-17", label: "mapped gate" },
  { id: "e8-sk-65", source: "ennea-type-8", target: "sk-65", label: "mapped key" }, // custom
  { id: "e8-gk-5", source: "ennea-type-8", target: "gk-5", label: "mapped gate" },
  { id: "e8-gk-12", source: "ennea-type-8", target: "gk-12", label: "mapped gate" },
  { id: "e8-gk-50", source: "ennea-type-8", target: "gk-50", label: "mapped gate" },

  // Ennea-Type 8 → the book’s Shadow Key 50 framing
  { id: "e8-sk50", source: "ennea-type-8", target: "sk50-values-law", label: "deep dive" },

  // Book SK50 → essays
  { id: "sk50-hyp", source: "sk50-values-law", target: "sk50-hypocrisy", label: "shadow theme" },
  { id: "sk50-resp", source: "sk50-values-law", target: "sk50-responsibility", label: "practice theme" },
  { id: "sk50-int", source: "sk50-values-law", target: "sk50-integrity", label: "gift theme" },

  // Bridge: book SK50 ↔ standard GK50 node
  { id: "sk50-to-gk50", source: "sk50-values-law", target: "gk-50", label: "corresponds to" }
];
