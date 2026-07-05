import { port } from "./_helpers";
import type { DeviceTemplate } from "../types";

/**
 * Electro-Voice — Install-Focused Product Library
 * EV-Innovation (EVC, EVF, EVH), EVID surface-mount and ceiling series.
 * Source: electrovoice.com datasheets and product pages, verified July 2026.
 * Connector note: EVF/EVH/EVC all ship with Phoenix-type connectors standard.
 *   Optional NL4 cover plate available field-installed — not modeled separately.
 * Excluded: ZX/ZXA portable, ETX, ELX, EVOLVE, touring-focused products.
 * ⚠ Addendum: EVC exact enclosure dimensions not published on EV product pages.
 *   Weights confirmed from rigging manuals (WLL values).
 */
export const templates: DeviceTemplate[] = [

  // ─── EVC SERIES — COMPACT INSTALL ────────────────────────────────────────────

  {
    id: "ev-evc-1082",
    deviceType: "speaker",
    label: "EVC-1082",
    shortName: "EVC-1082",
    manufacturer: "Electro-Voice",
    modelNumber: "EVC-1082",
    searchTerms: ["electro-voice", "ev", "evc", "1082", "8 inch", "install", "two-way", "trapezoidal", "ev innovation"],
    weightKg: 13.6,
    referenceUrl: "https://products.electrovoice.com/na/en/evc-1082-96",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evc-1122",
    deviceType: "speaker",
    label: "EVC-1122",
    shortName: "EVC-1122",
    manufacturer: "Electro-Voice",
    modelNumber: "EVC-1122",
    searchTerms: ["electro-voice", "ev", "evc", "1122", "12 inch", "install", "two-way", "trapezoidal", "ev innovation"],
    weightKg: 25.0,
    referenceUrl: "https://products.electrovoice.com/na/en/evc-1122-95",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evc-1122-vi",
    deviceType: "speaker",
    label: "EVC-1122/VI",
    shortName: "EVC-1122/VI",
    manufacturer: "Electro-Voice",
    modelNumber: "EVC-1122/VI",
    searchTerms: ["electro-voice", "ev", "evc", "1122", "vi", "variable intensity", "12 inch", "install", "ev innovation"],
    weightKg: 25.0,
    referenceUrl: "https://products.electrovoice.com/na/en/evc-1122-vi",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evc-1152",
    deviceType: "speaker",
    label: "EVC-1152",
    shortName: "EVC-1152",
    manufacturer: "Electro-Voice",
    modelNumber: "EVC-1152",
    searchTerms: ["electro-voice", "ev", "evc", "1152", "15 inch", "install", "two-way", "trapezoidal", "ev innovation"],
    weightKg: 29.5,
    referenceUrl: "https://products.electrovoice.com/na/en/evc-1152-95",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evc-1181s",
    deviceType: "speaker",
    label: "EVC-1181S",
    shortName: "EVC-1181S",
    manufacturer: "Electro-Voice",
    modelNumber: "EVC-1181S",
    searchTerms: ["electro-voice", "ev", "evc", "1181s", "18 inch", "subwoofer", "install", "ev innovation"],
    weightKg: 38.6,
    referenceUrl: "https://products.electrovoice.com/na/en/evc-1181s",
    ports: [
      port("LF In", "speaker-level", "input", "phoenix"),
      port("LF Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  // ─── EVF SERIES — FRONT-LOADED INSTALL ───────────────────────────────────────
  // Coverage pattern suffix (e.g. /64, /94, /126) is a field selection — one template per driver type.

  {
    id: "ev-evf-1122s",
    deviceType: "speaker",
    label: "EVF-1122S",
    shortName: "EVF-1122S",
    manufacturer: "Electro-Voice",
    modelNumber: "EVF-1122S",
    searchTerms: ["electro-voice", "ev", "evf", "1122s", "12 inch", "install", "front loaded", "ev innovation", "passive"],
    weightKg: 28.6,
    referenceUrl: "https://products.electrovoice.com/na/en/evf",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evf-1122d",
    deviceType: "speaker",
    label: "EVF-1122D",
    shortName: "EVF-1122D",
    manufacturer: "Electro-Voice",
    modelNumber: "EVF-1122D",
    searchTerms: ["electro-voice", "ev", "evf", "1122d", "12 inch", "install", "front loaded", "ev innovation", "passive", "high definition"],
    weightKg: 28.6,
    referenceUrl: "https://products.electrovoice.com/na/en/evf",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evf-1152s",
    deviceType: "speaker",
    label: "EVF-1152S",
    shortName: "EVF-1152S",
    manufacturer: "Electro-Voice",
    modelNumber: "EVF-1152S",
    searchTerms: ["electro-voice", "ev", "evf", "1152s", "15 inch", "install", "front loaded", "ev innovation", "passive"],
    weightKg: 32.1,
    referenceUrl: "https://products.electrovoice.com/na/en/evf",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evf-1152d",
    deviceType: "speaker",
    label: "EVF-1152D",
    shortName: "EVF-1152D",
    manufacturer: "Electro-Voice",
    modelNumber: "EVF-1152D",
    searchTerms: ["electro-voice", "ev", "evf", "1152d", "15 inch", "install", "front loaded", "ev innovation", "passive", "high definition"],
    weightKg: 32.1,
    referenceUrl: "https://products.electrovoice.com/na/en/evf",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evf-1121s",
    deviceType: "speaker",
    label: "EVF-1121S",
    shortName: "EVF-1121S",
    manufacturer: "Electro-Voice",
    modelNumber: "EVF-1121S",
    searchTerms: ["electro-voice", "ev", "evf", "1121s", "12 inch", "subwoofer", "low frequency", "install", "ev innovation"],
    weightKg: 30.0,
    referenceUrl: "https://products.electrovoice.com/na/en/evf",
    ports: [
      port("LF In", "speaker-level", "input", "phoenix"),
      port("LF Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evf-1151s",
    deviceType: "speaker",
    label: "EVF-1151S",
    shortName: "EVF-1151S",
    manufacturer: "Electro-Voice",
    modelNumber: "EVF-1151S",
    searchTerms: ["electro-voice", "ev", "evf", "1151s", "15 inch", "subwoofer", "low frequency", "install", "ev innovation"],
    weightKg: 36.0,
    referenceUrl: "https://products.electrovoice.com/na/en/evf",
    ports: [
      port("LF In", "speaker-level", "input", "phoenix"),
      port("LF Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evf-1181s",
    deviceType: "speaker",
    label: "EVF-1181S",
    shortName: "EVF-1181S",
    manufacturer: "Electro-Voice",
    modelNumber: "EVF-1181S",
    searchTerms: ["electro-voice", "ev", "evf", "1181s", "18 inch", "subwoofer", "install", "ev innovation"],
    weightKg: 44.0,
    referenceUrl: "https://products.electrovoice.com/na/en/evf",
    ports: [
      port("LF In", "speaker-level", "input", "phoenix"),
      port("LF Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evf-2151d",
    deviceType: "speaker",
    label: "EVF-2151D",
    shortName: "EVF-2151D",
    manufacturer: "Electro-Voice",
    modelNumber: "EVF-2151D",
    searchTerms: ["electro-voice", "ev", "evf", "2151d", "dual 15 inch", "subwoofer", "install", "ev innovation"],
    weightKg: 72.0,   // ⚠ estimated
    referenceUrl: "https://products.electrovoice.com/na/en/evf",
    ports: [
      port("LF In", "speaker-level", "input", "phoenix"),
      port("LF Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  // ─── EVH SERIES — HORN-LOADED INSTALL ────────────────────────────────────────

  {
    id: "ev-evh-1152s",
    deviceType: "speaker",
    label: "EVH-1152S",
    shortName: "EVH-1152S",
    manufacturer: "Electro-Voice",
    modelNumber: "EVH-1152S",
    searchTerms: ["electro-voice", "ev", "evh", "1152s", "15 inch", "horn loaded", "install", "ev innovation", "passive", "coaxial"],
    weightKg: 64.9,
    referenceUrl: "https://products.electrovoice.com/na/en/evh",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evh-1152d",
    deviceType: "speaker",
    label: "EVH-1152D",
    shortName: "EVH-1152D",
    manufacturer: "Electro-Voice",
    modelNumber: "EVH-1152D",
    searchTerms: ["electro-voice", "ev", "evh", "1152d", "15 inch", "horn loaded", "install", "ev innovation", "passive", "high definition"],
    weightKg: 64.9,
    referenceUrl: "https://products.electrovoice.com/na/en/evh",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  // ─── EVU SERIES — ULTRACOMPACT INSTALL ───────────────────────────────────────

  {
    id: "ev-evu-1082",
    deviceType: "speaker",
    label: "EVU-1082",
    shortName: "EVU-1082",
    manufacturer: "Electro-Voice",
    modelNumber: "EVU-1082",
    searchTerms: ["electro-voice", "ev", "evu", "1082", "8 inch", "ultracompact", "fill", "install", "delay", "under balcony", "ev innovation"],
    referenceUrl: "https://products.electrovoice.com/na/en/evu",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evu-1062",
    deviceType: "speaker",
    label: "EVU-1062",
    shortName: "EVU-1062",
    manufacturer: "Electro-Voice",
    modelNumber: "EVU-1062",
    searchTerms: ["electro-voice", "ev", "evu", "1062", "6 inch", "ultracompact", "fill", "install", "front fill", "ev innovation"],
    referenceUrl: "https://products.electrovoice.com/na/en/evu",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  // ─── EVID CEILING SERIES ──────────────────────────────────────────────────────
  // EVID ceiling speakers use a 4-pin Phoenix terminal block with loop-through.

  {
    id: "ev-evid-c42",
    deviceType: "speaker",
    label: "EVID-C4.2",
    shortName: "EVID-C4.2",
    manufacturer: "Electro-Voice",
    modelNumber: "EVID-C4.2",
    searchTerms: ["electro-voice", "ev", "evid", "c4.2", "4 inch", "ceiling", "install", "70v", "commercial"],
    heightMm: 164,
    widthMm: 212,   // diameter
    weightKg: 1.5,
    referenceUrl: "https://products.electrovoice.com/na/en/evid-c42/",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evid-c42lp",
    deviceType: "speaker",
    label: "EVID-C4.2LP",
    shortName: "EVID-C4.2LP",
    manufacturer: "Electro-Voice",
    modelNumber: "EVID-C4.2LP",
    searchTerms: ["electro-voice", "ev", "evid", "c4.2lp", "4 inch", "low profile", "ceiling", "install", "70v", "shallow"],
    referenceUrl: "https://products.electrovoice.com/na/en/evid-c42lp",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evid-c62",
    deviceType: "speaker",
    label: "EVID-C6.2",
    shortName: "EVID-C6.2",
    manufacturer: "Electro-Voice",
    modelNumber: "EVID-C6.2",
    searchTerms: ["electro-voice", "ev", "evid", "c6.2", "6.5 inch", "ceiling", "install", "70v", "commercial"],
    weightKg: 3.32,
    referenceUrl: "https://products.electrovoice.com/na/en/evid-c62/",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evid-c82",
    deviceType: "speaker",
    label: "EVID-C8.2",
    shortName: "EVID-C8.2",
    manufacturer: "Electro-Voice",
    modelNumber: "EVID-C8.2",
    searchTerms: ["electro-voice", "ev", "evid", "c8.2", "8 inch", "ceiling", "install", "70v", "commercial", "plenum"],
    heightMm: 255,
    widthMm: 270,   // diameter
    weightKg: 5.0,
    referenceUrl: "https://products.electrovoice.com/na/en/evid-c82",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evid-c122",
    deviceType: "speaker",
    label: "EVID-C12.2",
    shortName: "EVID-C12.2",
    manufacturer: "Electro-Voice",
    modelNumber: "EVID-C12.2",
    searchTerms: ["electro-voice", "ev", "evid", "c12.2", "12 inch", "ceiling", "install", "70v", "high power"],
    referenceUrl: "https://products.electrovoice.com/na/en/evid-c122/",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  // ─── EVID SURFACE-MOUNT SERIES ────────────────────────────────────────────────

  {
    id: "ev-evid-3-2",
    deviceType: "speaker",
    label: "EVID 3.2",
    shortName: "EVID 3.2",
    manufacturer: "Electro-Voice",
    modelNumber: "EVID 3.2",
    searchTerms: ["electro-voice", "ev", "evid", "3.2", "3 inch", "surface mount", "install", "70v", "commercial", "compact"],
    referenceUrl: "https://products.electrovoice.com/na/en/evid/",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evid-4-2",
    deviceType: "speaker",
    label: "EVID 4.2",
    shortName: "EVID 4.2",
    manufacturer: "Electro-Voice",
    modelNumber: "EVID 4.2",
    searchTerms: ["electro-voice", "ev", "evid", "4.2", "4 inch", "surface mount", "install", "70v", "commercial"],
    referenceUrl: "https://products.electrovoice.com/na/en/evid/",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evid-6-2",
    deviceType: "speaker",
    label: "EVID 6.2",
    shortName: "EVID 6.2",
    manufacturer: "Electro-Voice",
    modelNumber: "EVID 6.2",
    searchTerms: ["electro-voice", "ev", "evid", "6.2", "6 inch", "surface mount", "install", "70v", "commercial"],
    referenceUrl: "https://products.electrovoice.com/na/en/evid/",
    ports: [
      port("Audio In", "speaker-level", "input", "phoenix"),
      port("Audio Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

  {
    id: "ev-evid-12-1",
    deviceType: "speaker",
    label: "EVID 12.1",
    shortName: "EVID 12.1",
    manufacturer: "Electro-Voice",
    modelNumber: "EVID 12.1",
    searchTerms: ["electro-voice", "ev", "evid", "12.1", "12 inch", "subwoofer", "install", "commercial"],
    heightMm: 584,
    widthMm: 412,
    depthMm: 305,
    weightKg: 18.1,
    referenceUrl: "https://products.electrovoice.com/na/en/evid/",
    ports: [
      port("LF In", "speaker-level", "input", "phoenix"),
      port("LF Loop Out", "speaker-level", "output", "phoenix"),
    ],
  },

];
