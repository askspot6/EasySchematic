import { port, ports } from "./_helpers";
import type { DeviceTemplate } from "../types";

/**
 * JBL Professional — Install-Focused Product Library
 * CBT columns, AWC all-weather, Control ceiling/surface, AM point source, CSS commercial ceiling.
 * Source: jblpro.com datasheets, verified July 2026.
 * Excluded per Tri-State preference: VTX, SRX, PRX, EON (touring/portable).
 * Control 424LP already in tristate.ts — not duplicated here.
 */
export const templates: DeviceTemplate[] = [

  // ─── CBT SERIES — COLUMN SPEAKERS ────────────────────────────────────────────

  {
    id: "jbl-cbt-50la-1",
    deviceType: "speaker",
    label: "CBT 50LA-1",
    shortName: "CBT 50LA-1",
    manufacturer: "JBL",
    modelNumber: "CBT 50LA-1",
    searchTerms: ["jbl", "cbt", "50la", "column", "install", "70v", "constant beamwidth", "cbt50"],
    heightMm: 528,
    widthMm: 99,
    depthMm: 153,
    weightKg: 4.1,
    referenceUrl: "https://jblpro.com/en-US/products/cbt-50la-1",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-cbt-70j-1",
    deviceType: "speaker",
    label: "CBT 70J-1",
    shortName: "CBT 70J-1",
    manufacturer: "JBL",
    modelNumber: "CBT 70J-1",
    searchTerms: ["jbl", "cbt", "70j", "column", "j-shape", "install", "70v", "constant beamwidth", "asymmetrical"],
    heightMm: 700,
    widthMm: 170,
    depthMm: 237,
    weightKg: 13.2,
    referenceUrl: "https://jblpro.com/en-US/products/cbt-70j-1",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-cbt-70je-1",
    deviceType: "speaker",
    label: "CBT 70JE-1",
    shortName: "CBT 70JE-1",
    manufacturer: "JBL",
    modelNumber: "CBT 70JE-1",
    searchTerms: ["jbl", "cbt", "70je", "column", "extension", "install", "asymmetrical"],
    heightMm: 694,
    widthMm: 170,
    depthMm: 237,
    weightKg: 12.0,
    referenceUrl: "https://jblpro.com/en-US/products/cbt-70je-1",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-cbt-100la-1",
    deviceType: "speaker",
    label: "CBT 100LA-1",
    shortName: "CBT 100LA-1",
    manufacturer: "JBL",
    modelNumber: "CBT 100LA-1",
    searchTerms: ["jbl", "cbt", "100la", "column", "install", "70v", "constant beamwidth", "cbt100"],
    heightMm: 1000,
    widthMm: 98.5,
    depthMm: 153,
    weightKg: 8.2,
    referenceUrl: "https://jblpro.com/en-US/products/cbt-100la-1",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-cbt-1000",
    deviceType: "speaker",
    label: "CBT 1000",
    shortName: "CBT 1000",
    manufacturer: "JBL",
    modelNumber: "CBT 1000",
    searchTerms: ["jbl", "cbt", "1000", "column", "install", "70v", "constant beamwidth", "adjustable", "high output", "worship"],
    heightMm: 1021,
    widthMm: 253,
    depthMm: 246,
    weightKg: 27.0,
    referenceUrl: "https://jblpro.com/en-US/products/cbt-1000",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-cbt-1000e",
    deviceType: "speaker",
    label: "CBT 1000E",
    shortName: "CBT 1000E",
    manufacturer: "JBL",
    modelNumber: "CBT 1000E",
    searchTerms: ["jbl", "cbt", "1000e", "column", "extension", "install", "low frequency", "worship"],
    heightMm: 693,
    widthMm: 253,
    depthMm: 246,
    weightKg: 18.0,
    referenceUrl: "https://jblpro.com/en-US/products/cbt-1000e",
    ports: [
      port("Audio In (from CBT 1000)", "speaker-level", "input"),
    ],
  },

  // ─── AWC ALL-WEATHER SERIES ───────────────────────────────────────────────────

  {
    id: "jbl-awc129",
    deviceType: "speaker",
    label: "AWC129",
    shortName: "AWC129",
    manufacturer: "JBL",
    modelNumber: "AWC129",
    searchTerms: ["jbl", "awc129", "all weather", "12 inch", "outdoor", "install", "ip56", "coaxial"],
    heightMm: 542,
    widthMm: 470,
    depthMm: 445,
    weightKg: 19.5,
    referenceUrl: "https://jblpro.com/en-US/products/awc129",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-awc159",
    deviceType: "speaker",
    label: "AWC159",
    shortName: "AWC159",
    manufacturer: "JBL",
    modelNumber: "AWC159",
    searchTerms: ["jbl", "awc159", "all weather", "15 inch", "outdoor", "install", "ip56", "coaxial"],
    heightMm: 625,
    widthMm: 417,
    depthMm: 464,
    weightKg: 24.5,
    referenceUrl: "https://jblpro.com/en-US/products/awc159",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-awc15lf",
    deviceType: "speaker",
    label: "AWC15LF",
    shortName: "AWC15LF",
    manufacturer: "JBL",
    modelNumber: "AWC15LF",
    searchTerms: ["jbl", "awc15lf", "all weather", "15 inch", "outdoor", "subwoofer", "low frequency", "ip56"],
    heightMm: 485,
    widthMm: 485,
    depthMm: 478,
    weightKg: 20.2,
    referenceUrl: "https://jblpro.com/en-US/products/awc15lf",
    ports: [
      port("LF In", "speaker-level", "input"),
    ],
  },

  // ─── CONTROL SERIES — SURFACE MOUNT ──────────────────────────────────────────

  {
    id: "jbl-control-29av-1",
    deviceType: "speaker",
    label: "Control 29AV-1",
    shortName: "Control 29AV-1",
    manufacturer: "JBL",
    modelNumber: "Control 29AV-1",
    searchTerms: ["jbl", "control", "29av", "8 inch", "install", "70v", "outdoor", "surface mount", "invisaball"],
    heightMm: 521,
    widthMm: 305,
    depthMm: 277,
    weightKg: 12.2,
    referenceUrl: "https://jblpro.com/en-US/products/control-29av-1",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-control-30",
    deviceType: "speaker",
    label: "Control 30",
    shortName: "Control 30",
    manufacturer: "JBL",
    modelNumber: "Control 30",
    searchTerms: ["jbl", "control", "30", "10 inch", "3-way", "install", "70v", "outdoor", "surface mount"],
    heightMm: 457,
    widthMm: 305,
    depthMm: 287,
    weightKg: 14.1,
    referenceUrl: "https://jblpro.com/en-US/products/control-30",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  // ─── CONTROL SERIES — CEILING (CONTRACTOR/INSTALL) ───────────────────────────

  {
    id: "jbl-control-24ct",
    deviceType: "speaker",
    label: "Control 24C/T",
    shortName: "Control 24C/T",
    manufacturer: "JBL",
    modelNumber: "Control 24C/T",
    searchTerms: ["jbl", "control", "24c", "24ct", "4 inch", "ceiling", "install", "70v", "100v"],
    referenceUrl: "https://jblpro.com/en-US/products/control-24ct",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-control-26ct",
    deviceType: "speaker",
    label: "Control 26C/T",
    shortName: "Control 26C/T",
    manufacturer: "JBL",
    modelNumber: "Control 26C/T",
    searchTerms: ["jbl", "control", "26c", "26ct", "6 inch", "ceiling", "install", "70v", "100v"],
    referenceUrl: "https://jblpro.com/en-US/products/control-26ct",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-control-47ct",
    deviceType: "speaker",
    label: "Control 47C/T",
    shortName: "Control 47C/T",
    manufacturer: "JBL",
    modelNumber: "Control 47C/T",
    searchTerms: ["jbl", "control", "47c", "47ct", "6.5 inch", "ceiling", "install", "70v", "rbi", "constant directivity"],
    referenceUrl: "https://jblpro.com/en-US/products/control-47ct",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-control-47hc",
    deviceType: "speaker",
    label: "Control 47HC",
    shortName: "Control 47HC",
    manufacturer: "JBL",
    modelNumber: "Control 47HC",
    searchTerms: ["jbl", "control", "47hc", "6.5 inch", "ceiling", "high ceiling", "narrow", "75 degree", "install", "rbi"],
    referenceUrl: "https://jblpro.com/en-US/products/control-47hc",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-control-40cst",
    deviceType: "speaker",
    label: "Control 40CS/T",
    shortName: "Control 40CS/T",
    manufacturer: "JBL",
    modelNumber: "Control 40CS/T",
    searchTerms: ["jbl", "control", "40cs", "40cst", "8 inch", "ceiling", "subwoofer", "install", "70v"],
    referenceUrl: "https://jblpro.com/en-US/products/control-40cs-t",
    ports: [
      port("Audio In", "speaker-level", "input"),
      ...ports("Satellite Out", "speaker-level", "output", 4),
    ],
  },

  {
    id: "jbl-control-42c",
    deviceType: "speaker",
    label: "Control 42C",
    shortName: "Control 42C",
    manufacturer: "JBL",
    modelNumber: "Control 42C",
    searchTerms: ["jbl", "control", "42c", "2.5 inch", "ceiling", "satellite", "install", "compact"],
    referenceUrl: "https://jblpro.com/en-US/products/control-42c",
    ports: [
      port("Audio In (from 40CS/T)", "speaker-level", "input"),
    ],
  },

  // ─── CONTROL 400 SERIES — ENHANCED COVERAGE ──────────────────────────────────

  {
    id: "jbl-control-424ct",
    deviceType: "speaker",
    label: "Control 424C/T",
    shortName: "Control 424C/T",
    manufacturer: "JBL",
    modelNumber: "Control 424C/T",
    searchTerms: ["jbl", "control", "424ct", "4 inch", "ceiling", "install", "70v", "crbi", "enhanced coverage"],
    heightMm: 107,
    widthMm: 253,
    depthMm: 145,
    weightKg: 1.5,
    referenceUrl: "https://jblpro.com/en-US/products/control-424ct",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-control-426ct",
    deviceType: "speaker",
    label: "Control 426C/T",
    shortName: "Control 426C/T",
    manufacturer: "JBL",
    modelNumber: "Control 426C/T",
    searchTerms: ["jbl", "control", "426ct", "6 inch", "ceiling", "install", "70v", "crbi", "enhanced coverage"],
    referenceUrl: "https://jblpro.com/en-US/products/control-426ct",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-control-226ct",
    deviceType: "speaker",
    label: "Control 226C/T",
    shortName: "Control 226C/T",
    manufacturer: "JBL",
    modelNumber: "Control 226C/T",
    searchTerms: ["jbl", "control", "226ct", "6.5 inch", "ceiling", "install", "70v"],
    referenceUrl: "https://jblpro.com/en-US/products/control-226ct",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-control-328ct",
    deviceType: "speaker",
    label: "Control 328C",
    shortName: "Control 328C",
    manufacturer: "JBL",
    modelNumber: "Control 328C",
    searchTerms: ["jbl", "control", "328c", "8 inch", "ceiling", "install", "70v", "high power"],
    referenceUrl: "https://jblpro.com/en-US/products/control-328c",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  // ─── CSS SERIES — COMMERCIAL CEILING ─────────────────────────────────────────

  {
    id: "jbl-css8004",
    deviceType: "speaker",
    label: "CSS8004",
    shortName: "CSS8004",
    manufacturer: "JBL",
    modelNumber: "CSS8004",
    searchTerms: ["jbl", "css8004", "4 inch", "ceiling", "commercial", "install", "70v", "100v", "25v"],
    referenceUrl: "https://jblpro.com/en-US/products/css8004",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-css8008",
    deviceType: "speaker",
    label: "CSS8008",
    shortName: "CSS8008",
    manufacturer: "JBL",
    modelNumber: "CSS8008",
    searchTerms: ["jbl", "css8008", "8 inch", "ceiling", "commercial", "install", "70v", "100v"],
    referenceUrl: "https://jblpro.com/en-US/products/css8008",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-css8018",
    deviceType: "speaker",
    label: "CSS8018",
    shortName: "CSS8018",
    manufacturer: "JBL",
    modelNumber: "CSS8018",
    searchTerms: ["jbl", "css8018", "8 inch", "ceiling", "commercial", "high power", "install", "70v", "100v"],
    referenceUrl: "https://jblpro.com/en-US/products/css8018",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  // ─── AM SERIES — POINT SOURCE INSTALL ────────────────────────────────────────

  {
    id: "jbl-am5212",
    deviceType: "speaker",
    label: "AM5212",
    shortName: "AM5212",
    manufacturer: "JBL",
    modelNumber: "AM5212",
    searchTerms: ["jbl", "am5212", "am series", "12 inch", "install", "passive", "medium power", "ae series", "worship", "auditorium"],
    heightMm: 711,
    widthMm: 369,
    depthMm: 458,
    weightKg: 20.2,
    referenceUrl: "https://jblpro.com/en-US/products/am5212-00",
    ports: [
      port("LF/HF In", "speaker-level", "input"),
      port("LF In (Bi-amp)", "speaker-level", "input"),
      port("HF In (Bi-amp)", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-am5215",
    deviceType: "speaker",
    label: "AM5215",
    shortName: "AM5215",
    manufacturer: "JBL",
    modelNumber: "AM5215",
    searchTerms: ["jbl", "am5215", "am series", "15 inch", "install", "passive", "medium power", "ae series", "worship", "auditorium"],
    heightMm: 782,
    widthMm: 419,
    depthMm: 503,
    weightKg: 25.0,
    referenceUrl: "https://jblpro.com/en-US/products/am5215-95",
    ports: [
      port("LF/HF In", "speaker-level", "input"),
      port("LF In (Bi-amp)", "speaker-level", "input"),
      port("HF In (Bi-amp)", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-am7212",
    deviceType: "speaker",
    label: "AM7212",
    shortName: "AM7212",
    manufacturer: "JBL",
    modelNumber: "AM7212",
    searchTerms: ["jbl", "am7212", "am series", "12 inch", "install", "passive", "high power", "ae series", "worship", "auditorium", "theatre"],
    heightMm: 711,
    widthMm: 369,
    depthMm: 458,
    weightKg: 23.1,
    referenceUrl: "https://jblpro.com/en-US/products/am7212-00",
    ports: [
      port("LF/HF In", "speaker-level", "input"),
      port("LF In (Bi-amp)", "speaker-level", "input"),
      port("HF In (Bi-amp)", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-am7215",
    deviceType: "speaker",
    label: "AM7215",
    shortName: "AM7215",
    manufacturer: "JBL",
    modelNumber: "AM7215",
    searchTerms: ["jbl", "am7215", "am series", "15 inch", "install", "passive", "high power", "ae series", "worship", "auditorium", "theatre"],
    heightMm: 782,
    widthMm: 419,
    depthMm: 503,
    weightKg: 27.7,
    referenceUrl: "https://jblpro.com/en-US/products/am7215-26",
    ports: [
      port("LF/HF In", "speaker-level", "input"),
      port("LF In (Bi-amp)", "speaker-level", "input"),
      port("HF In (Bi-amp)", "speaker-level", "input"),
    ],
  },

  // ─── ASB SERIES — INSTALL SUBWOOFERS ─────────────────────────────────────────

  {
    id: "jbl-asb6112",
    deviceType: "speaker",
    label: "ASB6112",
    shortName: "ASB6112",
    manufacturer: "JBL",
    modelNumber: "ASB6112",
    searchTerms: ["jbl", "asb6112", "12 inch", "subwoofer", "install", "passive", "ae series"],
    referenceUrl: "https://jblpro.com/en-US/products/asb6112",
    ports: [
      port("LF In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-asb6115",
    deviceType: "speaker",
    label: "ASB6115",
    shortName: "ASB6115",
    manufacturer: "JBL",
    modelNumber: "ASB6115",
    searchTerms: ["jbl", "asb6115", "15 inch", "subwoofer", "install", "passive", "ae series"],
    referenceUrl: "https://jblpro.com/en-US/products/asb6115",
    ports: [
      port("LF In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-asb6118",
    deviceType: "speaker",
    label: "ASB6118",
    shortName: "ASB6118",
    manufacturer: "JBL",
    modelNumber: "ASB6118",
    searchTerms: ["jbl", "asb6118", "18 inch", "subwoofer", "install", "passive", "ae series"],
    referenceUrl: "https://jblpro.com/en-US/products/asb6118",
    ports: [
      port("LF In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-asb6125",
    deviceType: "speaker",
    label: "ASB6125",
    shortName: "ASB6125",
    manufacturer: "JBL",
    modelNumber: "ASB6125",
    searchTerms: ["jbl", "asb6125", "dual 15 inch", "subwoofer", "install", "passive", "ae series"],
    referenceUrl: "https://jblpro.com/en-US/products/asb6125",
    ports: [
      port("LF In", "speaker-level", "input"),
    ],
  },

  {
    id: "jbl-asb6128",
    deviceType: "speaker",
    label: "ASB6128",
    shortName: "ASB6128",
    manufacturer: "JBL",
    modelNumber: "ASB6128",
    searchTerms: ["jbl", "asb6128", "dual 18 inch", "subwoofer", "install", "passive", "ae series"],
    referenceUrl: "https://jblpro.com/en-US/products/asb6128",
    ports: [
      port("LF In", "speaker-level", "input"),
    ],
  },

];
