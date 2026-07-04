import { port, ports } from "./_helpers";
import type { DeviceTemplate } from "../types";

/**
 * BSS Audio — Complete Product Library
 * Soundweb London (BLU series) and Soundweb OMNI platforms.
 * Source: bssaudio.com datasheets and install guides, verified July 2026.
 * ⚠ Addendum items (specs not published): OMNI 256p/512p/32e/16e physical dims, weight, power draw.
 * Note: BLU link = proprietary BSS digital audio bus over Cat5e (not Dante).
 */
export const templates: DeviceTemplate[] = [

  // ─── SOUNDWEB LONDON — FIXED I/O ─────────────────────────────────────────────

  {
    id: "bss-blu-50",
    deviceType: "audio-dsp",
    label: "BLU-50",
    shortName: "BLU-50",
    manufacturer: "BSS",
    modelNumber: "BLU-50",
    searchTerms: ["bss", "blu-50", "soundweb", "london", "dsp", "hiqnet", "4x4", "half rack"],
    poeDrawW: 15,         // PoE+ powered (12-48VDC or PoE+)
    voltage: "PoE+ / 12-48VDC",
    heightMm: 44,
    widthMm: 210,         // half rack
    depthMm: 165,
    weightKg: 1.0,
    referenceUrl: "https://bssaudio.com/en-US/products/blu-50",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 4, "phoenix"),
      ...ports("Analog Out", "analog-audio", "output", 4, "phoenix"),
      port("BLU link 1", "ethernet", "bidirectional"),
      port("BLU link 2", "ethernet", "bidirectional"),
      port("Control Ethernet", "ethernet", "bidirectional"),
      port("GPIO", "gpio", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
    ],
  },

  {
    id: "bss-blu-100",
    deviceType: "audio-dsp",
    label: "BLU-100",
    shortName: "BLU-100",
    manufacturer: "BSS",
    modelNumber: "BLU-100",
    searchTerms: ["bss", "blu-100", "soundweb", "london", "dsp", "hiqnet", "12x8"],
    powerDrawW: 55,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 229,
    weightKg: 2.9,
    referenceUrl: "https://bssaudio.com/en-US/products/blu-100",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 12, "phoenix"),
      ...ports("Analog Out", "analog-audio", "output", 8, "phoenix"),
      port("BLU link 1", "ethernet", "bidirectional"),
      port("BLU link 2", "ethernet", "bidirectional"),
      port("Control Ethernet", "ethernet", "bidirectional"),
      port("GPIO", "gpio", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "bss-blu-101",
    deviceType: "audio-dsp",
    label: "BLU-101",
    shortName: "BLU-101",
    manufacturer: "BSS",
    modelNumber: "BLU-101",
    searchTerms: ["bss", "blu-101", "soundweb", "london", "dsp", "aec", "conferencing", "12x8"],
    powerDrawW: 55,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 229,
    weightKg: 2.9,
    referenceUrl: "https://bssaudio.com/en-US/products/blu-101",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 12, "phoenix"),
      ...ports("Analog Out", "analog-audio", "output", 8, "phoenix"),
      port("BLU link 1", "ethernet", "bidirectional"),
      port("BLU link 2", "ethernet", "bidirectional"),
      port("Control Ethernet", "ethernet", "bidirectional"),
      port("GPIO", "gpio", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "bss-blu-102",
    deviceType: "audio-dsp",
    label: "BLU-102",
    shortName: "BLU-102",
    manufacturer: "BSS",
    modelNumber: "BLU-102",
    searchTerms: ["bss", "blu-102", "soundweb", "london", "dsp", "aec", "telephone", "conferencing"],
    powerDrawW: 55,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 229,
    weightKg: 2.9,
    referenceUrl: "https://bssaudio.com/en-US/products/blu-102",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 10, "phoenix"),
      ...ports("Analog Out", "analog-audio", "output", 8, "phoenix"),
      port("Telephone In/Out", "analog-audio", "bidirectional", "phoenix"),
      port("BLU link 1", "ethernet", "bidirectional"),
      port("BLU link 2", "ethernet", "bidirectional"),
      port("Control Ethernet", "ethernet", "bidirectional"),
      port("GPIO", "gpio", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── SOUNDWEB LONDON — CHASSIS (CARD-BASED) ──────────────────────────────────

  {
    id: "bss-blu-160",
    deviceType: "audio-dsp",
    label: "BLU-160",
    shortName: "BLU-160",
    manufacturer: "BSS",
    modelNumber: "BLU-160",
    searchTerms: ["bss", "blu-160", "soundweb", "london", "dsp", "chassis", "card based", "en54"],
    powerDrawW: 55,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 318,
    weightKg: 4.1,
    referenceUrl: "https://bssaudio.com/en-US/products/blu-160",
    ports: [
      port("BLU link 1", "ethernet", "bidirectional"),
      port("BLU link 2", "ethernet", "bidirectional"),
      port("Control Ethernet", "ethernet", "bidirectional"),
      port("GPIO", "gpio", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "bss-blu-806da",
    deviceType: "audio-dsp",
    label: "BLU-806DA",
    shortName: "BLU-806DA",
    manufacturer: "BSS",
    modelNumber: "BLU-806DA",
    searchTerms: ["bss", "blu-806", "blu-806da", "soundweb", "london", "dsp", "dante", "aes67", "chassis", "en54"],
    powerDrawW: 55,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 318,
    weightKg: 4.1,
    referenceUrl: "https://bssaudio.com/en-US/products/blu-806da-blu-806",
    ports: [
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("BLU link 1", "ethernet", "bidirectional"),
      port("BLU link 2", "ethernet", "bidirectional"),
      port("Control Ethernet", "ethernet", "bidirectional"),
      port("GPIO", "gpio", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── SOUNDWEB LONDON — I/O EXPANDERS ─────────────────────────────────────────

  {
    id: "bss-blu-bib",
    deviceType: "audio-interface",
    label: "BLU-BIB",
    shortName: "BLU-BIB",
    manufacturer: "BSS",
    modelNumber: "BLU-BIB",
    searchTerms: ["bss", "blu-bib", "break in box", "soundweb", "london", "expander", "input"],
    powerDrawW: 35,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 210,   // half rack
    depthMm: 165,
    weightKg: 1.5,
    referenceUrl: "https://bssaudio.com/en-US/products/blu-bib",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 8, "phoenix"),
      port("BLU link 1", "ethernet", "bidirectional"),
      port("BLU link 2", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "bss-blu-bob1",
    deviceType: "audio-interface",
    label: "BLU-BOB1",
    shortName: "BLU-BOB1",
    manufacturer: "BSS",
    modelNumber: "BLU-BOB1",
    searchTerms: ["bss", "blu-bob", "break out box", "soundweb", "london", "expander", "output"],
    powerDrawW: 35,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 210,   // half rack
    depthMm: 165,
    weightKg: 1.5,
    referenceUrl: "https://bssaudio.com/en-US/products/blu-bob1",
    ports: [
      ...ports("Analog Out", "analog-audio", "output", 8, "phoenix"),
      port("BLU link 1", "ethernet", "bidirectional"),
      port("BLU link 2", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "bss-blu-gpx",
    deviceType: "audio-interface",
    label: "BLU-GPX",
    shortName: "BLU-GPX",
    manufacturer: "BSS",
    modelNumber: "BLU-GPX",
    searchTerms: ["bss", "blu-gpx", "gpio", "soundweb", "london", "expander", "control"],
    poeDrawW: 5,
    heightMm: 44,
    widthMm: 210,
    depthMm: 120,
    weightKg: 0.5,
    referenceUrl: "https://bssaudio.com/en-US/products/blu-gpx",
    ports: [
      port("Control Ethernet", "ethernet", "bidirectional"),
      port("GPIO", "gpio", "bidirectional"),
    ],
  },

  // ─── SOUNDWEB LONDON — WALL CONTROLLERS ──────────────────────────────────────

  {
    id: "bss-blu-8v2",
    deviceType: "controller",
    label: "BLU-8 v2",
    shortName: "BLU-8 v2",
    manufacturer: "BSS",
    modelNumber: "BLU-8v2",
    searchTerms: ["bss", "blu-8", "soundweb", "london", "wall plate", "controller", "remote"],
    referenceUrl: "https://bssaudio.com/en-US/products/blu-8v2blk",
    ports: [
      port("Control Ethernet", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "bss-blu-3",
    deviceType: "controller",
    label: "BLU-3",
    shortName: "BLU-3",
    manufacturer: "BSS",
    modelNumber: "BLU-3",
    searchTerms: ["bss", "blu-3", "soundweb", "wall plate", "controller", "volume"],
    referenceUrl: "https://bssaudio.com/en-US/products/blu-3",
    ports: [
      port("Control Ethernet", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "bss-blu-6",
    deviceType: "controller",
    label: "BLU-6",
    shortName: "BLU-6",
    manufacturer: "BSS",
    modelNumber: "BLU-6",
    searchTerms: ["bss", "blu-6", "soundweb", "wall plate", "controller", "volume"],
    referenceUrl: "https://bssaudio.com/en-US/products/blu-6",
    ports: [
      port("Control Ethernet", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "bss-blu-10",
    deviceType: "controller",
    label: "BLU-10",
    shortName: "BLU-10",
    manufacturer: "BSS",
    modelNumber: "BLU-10",
    searchTerms: ["bss", "blu-10", "soundweb", "touchscreen", "controller", "wall plate"],
    poeDrawW: 15,
    referenceUrl: "https://bssaudio.com/en-US/products/blu-10blk",
    ports: [
      port("Control Ethernet (PoE)", "ethernet", "bidirectional"),
    ],
  },

  // ─── SOUNDWEB LONDON — CONTRIO EC WALL CONTROLLERS ───────────────────────────

  {
    id: "bss-ec-8bv",
    deviceType: "controller",
    label: "Contrio EC-8BV",
    shortName: "EC-8BV",
    manufacturer: "BSS",
    modelNumber: "EC-8BV",
    searchTerms: ["bss", "ec-8bv", "contrio", "soundweb", "wall plate", "controller", "ethernet"],
    poeDrawW: 8,
    referenceUrl: "https://bssaudio.com/en-US/products/ec-8bv",
    ports: [
      port("Control Ethernet (PoE)", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "bss-ec-v",
    deviceType: "controller",
    label: "Contrio EC-V",
    shortName: "EC-V",
    manufacturer: "BSS",
    modelNumber: "EC-V",
    searchTerms: ["bss", "ec-v", "contrio", "soundweb", "wall plate", "controller", "volume"],
    referenceUrl: "https://bssaudio.com/en-US/products/ec-v",
    ports: [
      port("Control Ethernet", "ethernet", "bidirectional"),
    ],
  },

  // ─── SOUNDWEB OMNI ───────────────────────────────────────────────────────────
  // ⚠ ADDENDUM: Physical dimensions, weight, and power draw not yet published for OMNI line.
  // BSS has not released official datasheets with physical specs as of July 2026.
  // Estimated 2U rack mount based on product photos and industry comparables.

  {
    id: "bss-omni-256p",
    deviceType: "audio-dsp",
    label: "Soundweb OMNI 256p",
    shortName: "OMNI 256p",
    manufacturer: "BSS",
    modelNumber: "OMNI 256p",
    searchTerms: ["bss", "omni", "256p", "soundweb", "dsp", "dante", "aes67", "avx", "muse", "96khz"],
    powerDrawW: 300,    // ⚠ estimated — dual redundant PSU, not published
    voltage: "100-240V",
    heightMm: 88,       // ⚠ estimated 2U — not published
    widthMm: 483,
    depthMm: 500,       // ⚠ estimated
    weightKg: 12.0,     // ⚠ estimated
    referenceUrl: "https://bssaudio.com/en-US/products/256p",
    ports: [
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("HControl Ethernet", "ethernet", "bidirectional"),
      port("Word Clock In", "wordclock", "input"),
      port("Word Clock Out", "wordclock", "output"),
      port("GPIO", "gpio", "bidirectional"),
      port("AC Power 1 (Redundant)", "power", "input"),
      port("AC Power 2 (Redundant)", "power", "input"),
    ],
  },

  {
    id: "bss-omni-512p",
    deviceType: "audio-dsp",
    label: "Soundweb OMNI 512p",
    shortName: "OMNI 512p",
    manufacturer: "BSS",
    modelNumber: "OMNI 512p",
    searchTerms: ["bss", "omni", "512p", "soundweb", "dsp", "dante", "aes67", "avx", "muse", "96khz"],
    powerDrawW: 500,    // ⚠ estimated — dual redundant PSU, not published
    voltage: "100-240V",
    heightMm: 88,       // ⚠ estimated 2U — not published
    widthMm: 483,
    depthMm: 500,       // ⚠ estimated
    weightKg: 15.0,     // ⚠ estimated
    referenceUrl: "https://bssaudio.com/en-US/products/512p",
    ports: [
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("HControl Ethernet", "ethernet", "bidirectional"),
      port("Word Clock In", "wordclock", "input"),
      port("Word Clock Out", "wordclock", "output"),
      port("GPIO", "gpio", "bidirectional"),
      port("AC Power 1 (Redundant)", "power", "input"),
      port("AC Power 2 (Redundant)", "power", "input"),
    ],
  },

  {
    id: "bss-omni-32e",
    deviceType: "audio-interface",
    label: "Soundweb OMNI 32e",
    shortName: "OMNI 32e",
    manufacturer: "BSS",
    modelNumber: "OMNI 32e",
    searchTerms: ["bss", "omni", "32e", "soundweb", "expander", "io", "dante", "aes3"],
    powerDrawW: 100,    // ⚠ estimated — not published
    voltage: "100-240V",
    heightMm: 44,       // ⚠ estimated 1U
    widthMm: 483,
    depthMm: 300,       // ⚠ estimated
    weightKg: 4.0,      // ⚠ estimated
    referenceUrl: "https://bssaudio.com/en-US/products/omni-32e",
    ports: [
      ...ports("Audio I/O", "analog-audio", "bidirectional", 32, "phoenix"),
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "bss-omni-16e",
    deviceType: "audio-interface",
    label: "Soundweb OMNI 16e",
    shortName: "OMNI 16e",
    manufacturer: "BSS",
    modelNumber: "OMNI 16e",
    searchTerms: ["bss", "omni", "16e", "soundweb", "expander", "io", "dante", "aes3"],
    powerDrawW: 60,     // ⚠ estimated — not published
    voltage: "100-240V",
    heightMm: 44,       // ⚠ estimated 1U
    widthMm: 483,
    depthMm: 250,       // ⚠ estimated
    weightKg: 2.5,      // ⚠ estimated
    referenceUrl: "https://bssaudio.com/en-US/products/omni-16e",
    ports: [
      ...ports("Audio I/O", "analog-audio", "bidirectional", 16, "phoenix"),
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

];
