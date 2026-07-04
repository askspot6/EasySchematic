import { port } from "./_helpers";
import type { DeviceTemplate } from "../types";

/**
 * EAW (Eastern Acoustic Works) — Install-Focused Product Library
 * RADIUS, MK, MKC, CIS, SB, and ADAPTive series for installed sound.
 * Source: eaw.com datasheets and spec sheets, verified July 2026.
 * UXA amplifier series excluded per Tri-State preference.
 * ⚠ Addendum: RSX12/RSX18F exact power draw not published. MK series exact dims vary by coverage model.
 */
export const templates: DeviceTemplate[] = [

  // ─── RADIUS — LINE ARRAYS ─────────────────────────────────────────────────────

  {
    id: "eaw-rsx212l",
    deviceType: "speaker",
    label: "RSX212L",
    shortName: "RSX212L",
    manufacturer: "EAW",
    modelNumber: "RSX212L",
    searchTerms: ["eaw", "rsx212l", "radius", "line array", "dante", "powered", "12 inch", "12\""],
    powerDrawW: 1500,   // LF 1000W + HF 500W class D
    voltage: "100-240V",
    heightMm: 356,
    widthMm: 813,
    depthMm: 518,
    weightKg: 37,
    referenceUrl: "https://eaw.com/products/rsx212l/",
    ports: [
      port("XLR In", "analog-audio", "input", "xlr-3"),
      port("XLR Thru", "analog-audio", "output", "xlr-3"),
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("PowerCon In", "power", "input", "powercon"),
      port("PowerCon Loop", "power", "output", "powercon"),
    ],
  },

  {
    id: "eaw-rsx208l",
    deviceType: "speaker",
    label: "RSX208L",
    shortName: "RSX208L",
    manufacturer: "EAW",
    modelNumber: "RSX208L",
    searchTerms: ["eaw", "rsx208l", "radius", "line array", "dante", "powered", "8 inch", "8\""],
    powerDrawW: 1500,   // 3-way tri-amp class D
    voltage: "100-240V",
    heightMm: 330,
    widthMm: 686,
    depthMm: 249,
    weightKg: 18.4,
    referenceUrl: "https://eaw.com/products/rsx208l/",
    ports: [
      port("XLR In", "analog-audio", "input", "xlr-3"),
      port("XLR Thru", "analog-audio", "output", "xlr-3"),
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("PowerCon In", "power", "input", "powercon"),
      port("PowerCon Loop", "power", "output", "powercon"),
    ],
  },

  // ─── RADIUS — SUBWOOFERS ──────────────────────────────────────────────────────

  {
    id: "eaw-rsx12",
    deviceType: "speaker",
    label: "RSX12",
    shortName: "RSX12",
    manufacturer: "EAW",
    modelNumber: "RSX12",
    searchTerms: ["eaw", "rsx12", "radius", "subwoofer", "dante", "powered", "12 inch", "sub"],
    powerDrawW: 1000,   // ⚠ estimated — 1000W/ch per EAW, exact draw not published
    voltage: "100-240V",
    referenceUrl: "https://eaw.com/products/rsx12/",
    ports: [
      port("XLR In", "analog-audio", "input", "xlr-3"),
      port("XLR Thru", "analog-audio", "output", "xlr-3"),
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("PowerCon In", "power", "input", "powercon"),
      port("PowerCon Loop", "power", "output", "powercon"),
    ],
  },

  {
    id: "eaw-rsx18f",
    deviceType: "speaker",
    label: "RSX18F",
    shortName: "RSX18F",
    manufacturer: "EAW",
    modelNumber: "RSX18F",
    searchTerms: ["eaw", "rsx18f", "radius", "subwoofer", "dante", "powered", "18 inch", "flyable", "sub"],
    powerDrawW: 2000,   // ⚠ estimated — not published
    voltage: "100-240V",
    referenceUrl: "https://eaw.com/products/rsx18f/",
    ports: [
      port("XLR In", "analog-audio", "input", "xlr-3"),
      port("XLR Thru", "analog-audio", "output", "xlr-3"),
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("PowerCon In", "power", "input", "powercon"),
      port("PowerCon Loop", "power", "output", "powercon"),
    ],
  },

  // ─── MK SERIES — POINT SOURCE (PASSIVE) ──────────────────────────────────────
  // Note: MK series has many coverage variants (26°, 64°, 66°, 94°, 96°, 99°).
  // Templates represent the most common installed variants. All share same enclosure per sub-series.

  {
    id: "eaw-mk2326i",
    deviceType: "speaker",
    label: "MK2326i",
    shortName: "MK2326i",
    manufacturer: "EAW",
    modelNumber: "MK2326i",
    searchTerms: ["eaw", "mk2326i", "mk2300", "mk series", "passive", "12 inch", "install", "120x60"],
    heightMm: 762,
    widthMm: 395,
    depthMm: 375,
    weightKg: 27.2,
    referenceUrl: "https://eaw.com/products/mk2326i/",
    ports: [
      port("LF/HF In", "speaker-level", "input"),
      port("LF In (Bi-amp)", "speaker-level", "input"),
      port("HF In (Bi-amp)", "speaker-level", "input"),
    ],
  },

  {
    id: "eaw-mk2394i",
    deviceType: "speaker",
    label: "MK2394i",
    shortName: "MK2394i",
    manufacturer: "EAW",
    modelNumber: "MK2394i",
    searchTerms: ["eaw", "mk2394i", "mk2300", "mk series", "passive", "12 inch", "install", "90x45"],
    heightMm: 762,
    widthMm: 395,
    depthMm: 375,
    weightKg: 27.2,
    referenceUrl: "https://eaw.com/products/mk2394i/",
    ports: [
      port("LF/HF In", "speaker-level", "input"),
      port("LF In (Bi-amp)", "speaker-level", "input"),
      port("HF In (Bi-amp)", "speaker-level", "input"),
    ],
  },

  {
    id: "eaw-mk2396i",
    deviceType: "speaker",
    label: "MK2396i",
    shortName: "MK2396i",
    manufacturer: "EAW",
    modelNumber: "MK2396i",
    searchTerms: ["eaw", "mk2396i", "mk2300", "mk series", "passive", "12 inch", "install", "90x60"],
    heightMm: 762,
    widthMm: 395,
    depthMm: 375,
    weightKg: 27.2,
    referenceUrl: "https://eaw.com/products/mk2396i/",
    ports: [
      port("LF/HF In", "speaker-level", "input"),
      port("LF In (Bi-amp)", "speaker-level", "input"),
      port("HF In (Bi-amp)", "speaker-level", "input"),
    ],
  },

  {
    id: "eaw-mk5326i",
    deviceType: "speaker",
    label: "MK5326i",
    shortName: "MK5326i",
    manufacturer: "EAW",
    modelNumber: "MK5326i",
    searchTerms: ["eaw", "mk5326i", "mk5300", "mk series", "passive", "15 inch", "install", "120x60"],
    heightMm: 762,
    widthMm: 508,
    depthMm: 483,
    weightKg: 36.3,
    referenceUrl: "https://eaw.com/products/mk5326i/",
    ports: [
      port("LF/HF In", "speaker-level", "input"),
      port("LF In (Bi-amp)", "speaker-level", "input"),
      port("HF In (Bi-amp)", "speaker-level", "input"),
    ],
  },

  {
    id: "eaw-mk5394i",
    deviceType: "speaker",
    label: "MK5394i",
    shortName: "MK5394i",
    manufacturer: "EAW",
    modelNumber: "MK5394i",
    searchTerms: ["eaw", "mk5394i", "mk5300", "mk series", "passive", "15 inch", "install", "90x45"],
    heightMm: 762,
    widthMm: 508,
    depthMm: 483,
    weightKg: 36.3,
    referenceUrl: "https://eaw.com/products/mk5394i/",
    ports: [
      port("LF/HF In", "speaker-level", "input"),
      port("LF In (Bi-amp)", "speaker-level", "input"),
      port("HF In (Bi-amp)", "speaker-level", "input"),
    ],
  },

  {
    id: "eaw-mk5396i",
    deviceType: "speaker",
    label: "MK5396i",
    shortName: "MK5396i",
    manufacturer: "EAW",
    modelNumber: "MK5396i",
    searchTerms: ["eaw", "mk5396i", "mk5300", "mk series", "passive", "15 inch", "install", "90x60"],
    heightMm: 762,
    widthMm: 508,
    depthMm: 483,
    weightKg: 36.3,
    referenceUrl: "https://eaw.com/products/mk5396i/",
    ports: [
      port("LF/HF In", "speaker-level", "input"),
      port("LF In (Bi-amp)", "speaker-level", "input"),
      port("HF In (Bi-amp)", "speaker-level", "input"),
    ],
  },

  {
    id: "eaw-mk5399i",
    deviceType: "speaker",
    label: "MK5399i",
    shortName: "MK5399i",
    manufacturer: "EAW",
    modelNumber: "MK5399i",
    searchTerms: ["eaw", "mk5399i", "mk5300", "mk series", "passive", "15 inch", "install", "90x90"],
    heightMm: 762,
    widthMm: 508,
    depthMm: 483,
    weightKg: 36.3,
    referenceUrl: "https://eaw.com/products/mk5399i/",
    ports: [
      port("LF/HF In", "speaker-level", "input"),
      port("LF In (Bi-amp)", "speaker-level", "input"),
      port("HF In (Bi-amp)", "speaker-level", "input"),
    ],
  },

  {
    id: "eaw-mk8126i",
    deviceType: "speaker",
    label: "MK8126i",
    shortName: "MK8126i",
    manufacturer: "EAW",
    modelNumber: "MK8126i",
    searchTerms: ["eaw", "mk8126i", "mk8100", "mk series", "passive", "8 inch", "compact", "install", "120x60"],
    heightMm: 394,
    widthMm: 254,
    depthMm: 292,
    weightKg: 11.3,
    referenceUrl: "https://eaw.com/products/mk8126i/",
    ports: [
      port("LF/HF In", "speaker-level", "input"),
      port("LF In (Bi-amp)", "speaker-level", "input"),
      port("HF In (Bi-amp)", "speaker-level", "input"),
    ],
  },

  // ─── MKC SERIES — COAXIAL ────────────────────────────────────────────────────

  {
    id: "eaw-mkc50",
    deviceType: "speaker",
    label: "MKC50",
    shortName: "MKC50",
    manufacturer: "EAW",
    modelNumber: "MKC50",
    searchTerms: ["eaw", "mkc50", "mkc", "coaxial", "compact", "install", "5 inch", "110 degree"],
    heightMm: 236,
    widthMm: 165,
    depthMm: 142,
    weightKg: 3.3,
    referenceUrl: "https://eaw.com/products/mkc50/",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "eaw-mkc60",
    deviceType: "speaker",
    label: "MKC60",
    shortName: "MKC60",
    manufacturer: "EAW",
    modelNumber: "MKC60",
    searchTerms: ["eaw", "mkc60", "mkc", "coaxial", "compact", "install", "6 inch", "110 degree"],
    heightMm: 325,
    widthMm: 208,
    depthMm: 206,
    weightKg: 4.9,
    referenceUrl: "https://eaw.com/products/mkc60/",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "eaw-mkc80",
    deviceType: "speaker",
    label: "MKC80",
    shortName: "MKC80",
    manufacturer: "EAW",
    modelNumber: "MKC80",
    searchTerms: ["eaw", "mkc80", "mkc", "coaxial", "compact", "install", "8 inch"],
    weightKg: 10.0,
    referenceUrl: "https://eaw.com/mkc5060-subseries/",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  // ─── CIS SERIES — CEILING ────────────────────────────────────────────────────

  {
    id: "eaw-cis300",
    deviceType: "speaker",
    label: "CIS300",
    shortName: "CIS300",
    manufacturer: "EAW",
    modelNumber: "CIS300",
    searchTerms: ["eaw", "cis300", "cis", "ceiling", "install", "4 inch", "flush mount"],
    heightMm: 57,
    widthMm: 144,
    depthMm: 221,
    weightKg: 2.8,
    referenceUrl: "https://eaw.com/products/cis300/",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "eaw-cis400",
    deviceType: "speaker",
    label: "CIS400",
    shortName: "CIS400",
    manufacturer: "EAW",
    modelNumber: "CIS400",
    searchTerms: ["eaw", "cis400", "cis", "ceiling", "install", "6 inch", "flush mount"],
    heightMm: 168,
    widthMm: 300,
    depthMm: 300,
    weightKg: 3.6,
    referenceUrl: "https://eaw.com/products/cis400/",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  // ─── SB SERIES — SUBWOOFERS (PASSIVE) ────────────────────────────────────────

  {
    id: "eaw-sb180z",
    deviceType: "speaker",
    label: "SB180z",
    shortName: "SB180z",
    manufacturer: "EAW",
    modelNumber: "SB180z",
    searchTerms: ["eaw", "sb180", "sb series", "subwoofer", "passive", "18 inch", "sub"],
    referenceUrl: "https://eaw.com/products-series/sb-series/",
    ports: [
      port("LF In", "speaker-level", "input"),
    ],
  },

  {
    id: "eaw-sb210",
    deviceType: "speaker",
    label: "SB210",
    shortName: "SB210",
    manufacturer: "EAW",
    modelNumber: "SB210",
    searchTerms: ["eaw", "sb210", "sb series", "subwoofer", "passive", "10 inch", "compact", "sub"],
    referenceUrl: "https://eaw.com/products-series/sb-series/",
    ports: [
      port("LF In", "speaker-level", "input"),
    ],
  },

  // ─── ADAPTive — AC6 COLUMN ───────────────────────────────────────────────────

  {
    id: "eaw-ac6",
    deviceType: "speaker",
    label: "AC6",
    shortName: "AC6",
    manufacturer: "EAW",
    modelNumber: "AC6",
    searchTerms: ["eaw", "ac6", "adaptive", "column", "dante", "powered", "worship", "install", "ip54"],
    powerDrawW: 600,    // 6 woofer + 30 tweeter, individually amplified
    voltage: "100-240V",
    heightMm: 983,
    widthMm: 239,
    depthMm: 264,
    weightKg: 32,
    referenceUrl: "https://eaw.com/products/ac6/",
    ports: [
      port("XLR In 1", "analog-audio", "input", "xlr-3"),
      port("XLR Thru 1", "analog-audio", "output", "xlr-3"),
      port("XLR In 2", "analog-audio", "input", "xlr-3"),
      port("XLR Thru 2", "analog-audio", "output", "xlr-3"),
      port("AES In", "aes", "input", "xlr-3"),
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("PowerCon True1 In", "power", "input", "powercon"),
      port("PowerCon True1 Loop", "power", "output", "powercon"),
    ],
  },

];
