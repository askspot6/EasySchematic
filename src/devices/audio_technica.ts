import { port, ports } from "./_helpers";
import type { DeviceTemplate } from "../types";

/**
 * Audio-Technica — Complete Professional Product Library
 * Wireless systems (D50, 3000 Series, 5000 Series, Engineered Sound, System 20/10 PRO),
 * wired installed microphones (UniPoint, AT series).
 * Source: audio-technica.com product pages and datasheets, verified July 2026.
 * Excluded per Tri-State preference: headphones, turntables, consumer products, cartridges.
 * Note: Band suffix (e.g. DE2, EE1, DF2) omitted from labels — purchasing decision only.
 * ⚠ Addendum: ESW-R4180 exact dimensions not published. D50 receiver exact dims not confirmed.
 *   5000 Series receiver physical dims not pulled.
 */
export const templates: DeviceTemplate[] = [

  // ─── WIRED MICROPHONES — INSTALLED/PROFESSIONAL ───────────────────────────────

  {
    id: "at-atm510",
    deviceType: "microphone",
    label: "ATM510",
    shortName: "ATM510",
    manufacturer: "Audio-Technica",
    modelNumber: "ATM510",
    searchTerms: ["audio-technica", "atm510", "dynamic", "vocal", "handheld", "wired", "cardioid", "live"],
    weightKg: 0.32,
    referenceUrl: "https://www.audio-technica.com/en-us/atm510",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
    ],
  },

  {
    id: "at-atm710",
    deviceType: "microphone",
    label: "ATM710",
    shortName: "ATM710",
    manufacturer: "Audio-Technica",
    modelNumber: "ATM710",
    searchTerms: ["audio-technica", "atm710", "condenser", "vocal", "handheld", "wired", "cardioid", "live"],
    weightKg: 0.27,
    referenceUrl: "https://www.audio-technica.com/en-us/atm710",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
    ],
  },

  {
    id: "at-ae4100",
    deviceType: "microphone",
    label: "AE4100",
    shortName: "AE4100",
    manufacturer: "Audio-Technica",
    modelNumber: "AE4100",
    searchTerms: ["audio-technica", "ae4100", "artist elite", "dynamic", "vocal", "handheld", "wired", "cardioid", "live"],
    weightKg: 0.28,
    referenceUrl: "https://www.audio-technica.com/en-us/ae4100",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
    ],
  },

  {
    id: "at-ae6100",
    deviceType: "microphone",
    label: "AE6100",
    shortName: "AE6100",
    manufacturer: "Audio-Technica",
    modelNumber: "AE6100",
    searchTerms: ["audio-technica", "ae6100", "artist elite", "dynamic", "vocal", "handheld", "wired", "hypercardioid", "live"],
    weightKg: 0.28,
    referenceUrl: "https://www.audio-technica.com/en-us/ae6100",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
    ],
  },

  // ─── UNIPOINT SERIES — INSTALLED ─────────────────────────────────────────────

  {
    id: "at-u841a",
    deviceType: "microphone",
    label: "U841A",
    shortName: "U841A",
    manufacturer: "Audio-Technica",
    modelNumber: "U841A",
    searchTerms: ["audio-technica", "u841a", "unipoint", "boundary", "surface mount", "cardioid", "conferencing", "installed"],
    weightKg: 0.09,
    referenceUrl: "https://www.audio-technica.com/en-us/u841a",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
    ],
  },

  {
    id: "at-u851rb",
    deviceType: "microphone",
    label: "U851Rb",
    shortName: "U851Rb",
    manufacturer: "Audio-Technica",
    modelNumber: "U851Rb",
    searchTerms: ["audio-technica", "u851rb", "unipoint", "boundary", "surface mount", "cardioid", "conferencing", "installed", "dante"],
    weightKg: 0.11,
    referenceUrl: "https://www.audio-technica.com/en-us/u851rb",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
    ],
  },

  {
    id: "at-propoint-atnd971",
    deviceType: "microphone",
    label: "ATND971",
    shortName: "ATND971",
    manufacturer: "Audio-Technica",
    modelNumber: "ATND971",
    searchTerms: ["audio-technica", "atnd971", "propoint", "dante", "boundary", "cardioid", "network", "conferencing", "installed", "poe"],
    poeDrawW: 5,
    referenceUrl: "https://www.audio-technica.com/en-us/atnd971",
    ports: [
      port("Dante (PoE)", "dante", "bidirectional"),
    ],
  },

  {
    id: "at-propoint-atnd8677",
    deviceType: "microphone",
    label: "ATND8677",
    shortName: "ATND8677",
    manufacturer: "Audio-Technica",
    modelNumber: "ATND8677",
    searchTerms: ["audio-technica", "atnd8677", "propoint", "dante", "gooseneck", "cardioid", "network", "conferencing", "installed", "poe", "mute"],
    poeDrawW: 6,
    referenceUrl: "https://www.audio-technica.com/en-us/atnd8677",
    ports: [
      port("Dante (PoE)", "dante", "bidirectional"),
    ],
  },

  {
    id: "at-propoint-atnd8734",
    deviceType: "microphone",
    label: "ATND8734",
    shortName: "ATND8734",
    manufacturer: "Audio-Technica",
    modelNumber: "ATND8734",
    searchTerms: ["audio-technica", "atnd8734", "propoint", "dante", "array", "beamforming", "network", "conferencing", "ceiling", "installed", "poe"],
    poeDrawW: 13,
    referenceUrl: "https://www.audio-technica.com/en-us/atnd8734",
    ports: [
      port("Dante (PoE)", "dante", "bidirectional"),
    ],
  },

  // ─── 3000 SERIES (4TH GEN) — RECEIVERS ───────────────────────────────────────

  {
    id: "at-atw-r3210",
    deviceType: "audio-interface",
    label: "ATW-R3210",
    shortName: "ATW-R3210",
    manufacturer: "Audio-Technica",
    modelNumber: "ATW-R3210",
    searchTerms: ["audio-technica", "atw-r3210", "3000 series", "wireless", "receiver", "uhf", "analog", "half rack", "diversity", "k-12", "worship", "education"],
    powerDrawW: 10,
    voltage: "AC Adapter (100-240V)",
    heightMm: 43.4,
    widthMm: 210,
    depthMm: 191,
    weightKg: 1.1,
    referenceUrl: "https://www.audio-technica.com/en-us/atw-r3210",
    ports: [
      port("XLR/TRS Out", "analog-audio", "output", "xlr-3"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("DC Power", "power", "input"),
    ],
  },

  {
    id: "at-atw-r3210n",
    deviceType: "audio-interface",
    label: "ATW-R3210N",
    shortName: "ATW-R3210N",
    manufacturer: "Audio-Technica",
    modelNumber: "ATW-R3210N",
    searchTerms: ["audio-technica", "atw-r3210n", "3000 series", "wireless", "receiver", "uhf", "network", "wireless manager", "half rack", "diversity"],
    powerDrawW: 10,
    voltage: "AC Adapter (100-240V)",
    heightMm: 43.4,
    widthMm: 210,
    depthMm: 191,
    weightKg: 1.1,
    referenceUrl: "https://www.audio-technica.com/en-us/atw-r3210n",
    ports: [
      port("XLR/TRS Out", "analog-audio", "output", "xlr-3"),
      port("Ethernet (Control)", "ethernet", "bidirectional"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("DC Power", "power", "input"),
    ],
  },

  // ─── 5000 SERIES — RECEIVERS ─────────────────────────────────────────────────

  {
    id: "at-atw-r5220",
    deviceType: "audio-interface",
    label: "ATW-R5220",
    shortName: "ATW-R5220",
    manufacturer: "Audio-Technica",
    modelNumber: "ATW-R5220",
    searchTerms: ["audio-technica", "atw-r5220", "5000 series", "wireless", "receiver", "uhf", "analog", "dual channel", "1ru", "professional", "tour"],
    powerDrawW: 20,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    referenceUrl: "https://www.audio-technica.com/en-us/atw-r5220",
    ports: [
      ...ports("XLR Out", "analog-audio", "output", 2, "xlr-3"),
      port("Ethernet (Control)", "ethernet", "bidirectional"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("RF Cascade Out", "rf", "output", "bnc"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "at-atw-r5220dan",
    deviceType: "audio-interface",
    label: "ATW-R5220DAN",
    shortName: "ATW-R5220DAN",
    manufacturer: "Audio-Technica",
    modelNumber: "ATW-R5220DAN",
    searchTerms: ["audio-technica", "atw-r5220dan", "5000 series", "wireless", "receiver", "uhf", "dante", "dual channel", "1ru", "professional", "tour"],
    powerDrawW: 20,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    referenceUrl: "https://www.audio-technica.com/en-us/atw-r5220dan",
    ports: [
      ...ports("XLR Out", "analog-audio", "output", 2, "xlr-3"),
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("Ethernet (Control)", "ethernet", "bidirectional"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("RF Cascade Out", "rf", "output", "bnc"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── D50 DIGITAL UHF WIRELESS — RECEIVERS ────────────────────────────────────
  // ⚠ ADDENDUM: Exact dimensions and weight not published on D50 product pages.
  // Both receivers are half-rack. ATW-DR3220LK = 2ch AT LINK; ATW-DR3240DAN = 4ch Dante.
  // Both powered by PoE+ or included AC adapter.

  {
    id: "at-atw-dr3220lk",
    deviceType: "audio-interface",
    label: "ATW-DR3220LK",
    shortName: "ATW-DR3220LK",
    manufacturer: "Audio-Technica",
    modelNumber: "ATW-DR3220LK",
    searchTerms: ["audio-technica", "atw-dr3220lk", "d50", "wireless", "receiver", "digital", "uhf", "2 channel", "at link", "half rack", "dante", "poe", "mission critical"],
    poeDrawW: 25,   // PoE+ or AC
    voltage: "PoE+ / AC Adapter",
    heightMm: 44,
    widthMm: 210,
    referenceUrl: "https://www.audio-technica.com/en-us/atw-dr3220lk",
    ports: [
      ...ports("XLR Out", "analog-audio", "output", 2, "xlr-3"),
      port("AT LINK / Ethernet", "ethernet", "bidirectional"),
      port("Ethernet 2 (Control)", "ethernet", "bidirectional"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("RF Cascade Out", "rf", "output", "bnc"),
      port("DC / PoE+ Power", "power", "input"),
    ],
  },

  {
    id: "at-atw-dr3240dan",
    deviceType: "audio-interface",
    label: "ATW-DR3240DAN",
    shortName: "ATW-DR3240DAN",
    manufacturer: "Audio-Technica",
    modelNumber: "ATW-DR3240DAN",
    searchTerms: ["audio-technica", "atw-dr3240dan", "d50", "wireless", "receiver", "digital", "uhf", "4 channel", "dante", "half rack", "poe", "mission critical", "aes67"],
    poeDrawW: 25,
    voltage: "PoE+ / AC Adapter",
    heightMm: 44,
    widthMm: 210,
    referenceUrl: "https://www.audio-technica.com/en-us/atw-dr3240dan",
    ports: [
      ...ports("XLR Out", "analog-audio", "output", 4, "xlr-3"),
      port("Dante Primary (PoE+)", "dante", "bidirectional"),
      port("Dante Secondary / Control", "ethernet", "bidirectional"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("RF Cascade Out", "rf", "output", "bnc"),
      port("DC / PoE+ Power", "power", "input"),
    ],
  },

  // ─── ENGINEERED SOUND WIRELESS — RECEIVERS ───────────────────────────────────
  // ⚠ ADDENDUM: ESW-R4180 exact dimensions not published. Low-profile desktop/ceiling unit.

  {
    id: "at-esw-r4180dan",
    deviceType: "audio-interface",
    label: "ESW-R4180DAN",
    shortName: "ESW-R4180DAN",
    manufacturer: "Audio-Technica",
    modelNumber: "ESW-R4180DAN",
    searchTerms: ["audio-technica", "esw-r4180dan", "engineered sound", "esw", "dect", "wireless", "receiver", "dante", "8 channel", "poe", "conferencing", "corporate", "education"],
    poeDrawW: 15,
    referenceUrl: "https://www.audio-technica.com/en-us/esw-r4180",
    ports: [
      port("Dante Primary (PoE)", "dante", "bidirectional"),
      port("Dante Secondary / Control", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "at-esw-r4180lk",
    deviceType: "audio-interface",
    label: "ESW-R4180LK",
    shortName: "ESW-R4180LK",
    manufacturer: "Audio-Technica",
    modelNumber: "ESW-R4180LK",
    searchTerms: ["audio-technica", "esw-r4180lk", "engineered sound", "esw", "dect", "wireless", "receiver", "at link", "8 channel", "poe", "conferencing", "corporate"],
    poeDrawW: 15,
    referenceUrl: "https://www.audio-technica.com/en-us/esw-r4180",
    ports: [
      port("AT LINK / Ethernet (PoE)", "ethernet", "bidirectional"),
      port("Ethernet 2 (Control)", "ethernet", "bidirectional"),
    ],
  },

  // ─── SYSTEM 20 PRO — 2.4 GHz ─────────────────────────────────────────────────

  {
    id: "at-atw-rc1440",
    deviceType: "audio-interface",
    label: "ATW-RC1440",
    shortName: "ATW-RC1440",
    manufacturer: "Audio-Technica",
    modelNumber: "ATW-RC1440",
    searchTerms: ["audio-technica", "atw-rc1440", "system 20 pro", "2.4ghz", "wireless", "receiver chassis", "4 channel", "half rack", "plug and play", "k-12", "education", "worship"],
    powerDrawW: 12,
    voltage: "AC Adapter",
    heightMm: 44,
    widthMm: 210,
    referenceUrl: "https://www.audio-technica.com/en-us/system-20-pro",
    ports: [
      ...ports("XLR Out", "analog-audio", "output", 4, "xlr-3"),
      port("RJ12 Link", "ethernet", "bidirectional"),
      port("DC Power", "power", "input"),
    ],
  },

  // ─── SYSTEM 10 PRO — 2.4 GHz ─────────────────────────────────────────────────

  {
    id: "at-atw-rc13",
    deviceType: "audio-interface",
    label: "ATW-RC13",
    shortName: "ATW-RC13",
    manufacturer: "Audio-Technica",
    modelNumber: "ATW-RC13",
    searchTerms: ["audio-technica", "atw-rc13", "system 10 pro", "2.4ghz", "wireless", "receiver chassis", "2 channel", "half rack", "plug and play", "k-12", "education", "worship"],
    powerDrawW: 10,
    voltage: "AC Adapter",
    heightMm: 44,
    widthMm: 210,
    referenceUrl: "https://www.audio-technica.com/en-us/microphones/wireless-systems/line-series/system-10-pro",
    ports: [
      ...ports("XLR Out", "analog-audio", "output", 2, "xlr-3"),
      port("RJ12 Link", "ethernet", "bidirectional"),
      port("DC Power", "power", "input"),
    ],
  },

  // ─── ANTENNA DISTRIBUTION ─────────────────────────────────────────────────────

  {
    id: "at-atw-da49",
    deviceType: "audio-interface",
    label: "ATW-DA49",
    shortName: "ATW-DA49",
    manufacturer: "Audio-Technica",
    modelNumber: "ATW-DA49",
    searchTerms: ["audio-technica", "atw-da49", "antenna", "distribution", "active", "4 way", "uhf", "wideband"],
    powerDrawW: 10,
    voltage: "AC Adapter",
    heightMm: 44,
    widthMm: 210,
    referenceUrl: "https://www.audio-technica.com/en-us/atw-da49",
    ports: [
      port("Antenna A In", "rf", "input", "bnc"),
      port("Antenna B In", "rf", "input", "bnc"),
      ...ports("Receiver Out A", "rf", "output", 4, "bnc"),
      ...ports("Receiver Out B", "rf", "output", 4, "bnc"),
      port("DC Power", "power", "input"),
    ],
  },

];
