import { port, ports } from "./_helpers";
import type { DeviceTemplate } from "../types";

/**
 * Shure — Professional Product Library
 * Wired mics, wireless systems (ULX-D, QLX-D, SLX-D, Axient Digital, ANX4),
 * IntelliMix DSP/processors, Microflex Advance arrays, ANI interfaces, SCM automixers.
 * Source: shure.com product pages, user guides, and spec sheets, verified July 2026.
 * Excluded: headphones, earphones, consumer products, SM7dB broadcast mic.
 * Note: Band suffix (e.g. J50A, G50, H50) is omitted from labels — band is a purchasing decision.
 * ⚠ Addendum: ULXS4 exact dims not pulled. MXA910/920 physical dims not published (ceiling mount).
 *   AD4D/AD4Q exact dims and weight not confirmed from spec sheet.
 */
export const templates: DeviceTemplate[] = [

  // ─── WIRED MICROPHONES ────────────────────────────────────────────────────────

  {
    id: "shure-sm58",
    deviceType: "microphone",
    label: "SM58",
    shortName: "SM58",
    manufacturer: "Shure",
    modelNumber: "SM58",
    searchTerms: ["shure", "sm58", "dynamic", "vocal", "handheld", "wired", "cardioid"],
    weightKg: 0.298,
    referenceUrl: "https://www.shure.com/en-US/products/microphones/sm/sm58",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
    ],
  },

  {
    id: "shure-sm57",
    deviceType: "microphone",
    label: "SM57",
    shortName: "SM57",
    manufacturer: "Shure",
    modelNumber: "SM57",
    searchTerms: ["shure", "sm57", "dynamic", "instrument", "wired", "cardioid", "snare", "amp"],
    weightKg: 0.284,
    referenceUrl: "https://www.shure.com/en-US/products/microphones/sm/sm57",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
    ],
  },

  {
    id: "shure-beta-58a",
    deviceType: "microphone",
    label: "BETA 58A",
    shortName: "BETA 58A",
    manufacturer: "Shure",
    modelNumber: "BETA 58A",
    searchTerms: ["shure", "beta 58a", "dynamic", "vocal", "handheld", "wired", "supercardioid"],
    weightKg: 0.318,
    referenceUrl: "https://www.shure.com/en-US/products/microphones/beta/beta58a",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
    ],
  },

  {
    id: "shure-beta-87a",
    deviceType: "microphone",
    label: "BETA 87A",
    shortName: "BETA 87A",
    manufacturer: "Shure",
    modelNumber: "BETA 87A",
    searchTerms: ["shure", "beta 87a", "condenser", "vocal", "handheld", "wired", "supercardioid"],
    weightKg: 0.284,
    referenceUrl: "https://www.shure.com/en-US/products/microphones/beta/beta87a",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
    ],
  },

  {
    id: "shure-beta-91a",
    deviceType: "microphone",
    label: "BETA 91A",
    shortName: "BETA 91A",
    manufacturer: "Shure",
    modelNumber: "BETA 91A",
    searchTerms: ["shure", "beta 91a", "condenser", "kick drum", "boundary", "wired", "cardioid"],
    weightKg: 0.204,
    referenceUrl: "https://www.shure.com/en-US/products/microphones/beta/beta91a",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
    ],
  },

  {
    id: "shure-mx412",
    deviceType: "microphone",
    label: "MX412",
    shortName: "MX412",
    manufacturer: "Shure",
    modelNumber: "MX412",
    searchTerms: ["shure", "mx412", "microflex", "gooseneck", "12 inch", "wired", "condenser", "podium", "lectern"],
    weightKg: 0.181,
    referenceUrl: "https://www.shure.com/en-US/products/microphones/mx/mx412",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
    ],
  },

  {
    id: "shure-mx418",
    deviceType: "microphone",
    label: "MX418",
    shortName: "MX418",
    manufacturer: "Shure",
    modelNumber: "MX418",
    searchTerms: ["shure", "mx418", "microflex", "gooseneck", "18 inch", "wired", "condenser", "podium", "lectern"],
    weightKg: 0.227,
    referenceUrl: "https://www.shure.com/en-US/products/microphones/mx/mx418",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
    ],
  },

  // ─── ULX-D DIGITAL WIRELESS — RECEIVERS ──────────────────────────────────────

  {
    id: "shure-ulxd4",
    deviceType: "audio-interface",
    label: "ULXD4",
    shortName: "ULXD4",
    manufacturer: "Shure",
    modelNumber: "ULXD4",
    searchTerms: ["shure", "ulxd4", "ulx-d", "wireless", "receiver", "digital", "single channel", "half rack", "dante", "aes256"],
    powerDrawW: 14,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 210,   // half rack
    depthMm: 165,
    weightKg: 1.0,
    referenceUrl: "https://www.shure.com/en-US/products/wireless-systems/ulx-d_digital_wireless/ulxd4",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
      port("Ethernet (Control/Dante)", "ethernet", "bidirectional"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("RF Cascade Out", "rf", "output", "bnc"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "shure-ulxd4d",
    deviceType: "audio-interface",
    label: "ULXD4D",
    shortName: "ULXD4D",
    manufacturer: "Shure",
    modelNumber: "ULXD4D",
    searchTerms: ["shure", "ulxd4d", "ulx-d", "wireless", "receiver", "digital", "dual channel", "1ru", "dante", "aes256"],
    powerDrawW: 26,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 165,
    weightKg: 3.36,
    referenceUrl: "https://www.shure.com/en-US/products/wireless-systems/ulx-d_digital_wireless/ulxd4d",
    ports: [
      ...ports("XLR Out", "analog-audio", "output", 2, "xlr-3"),
      port("Ethernet 1 (Control/Dante)", "ethernet", "bidirectional"),
      port("Ethernet 2 (Redundant)", "ethernet", "bidirectional"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("RF Cascade Out", "rf", "output", "bnc"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "shure-ulxd4q",
    deviceType: "audio-interface",
    label: "ULXD4Q",
    shortName: "ULXD4Q",
    manufacturer: "Shure",
    modelNumber: "ULXD4Q",
    searchTerms: ["shure", "ulxd4q", "ulx-d", "wireless", "receiver", "digital", "quad channel", "1ru", "dante", "aes256"],
    powerDrawW: 32,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 165,
    weightKg: 3.45,
    referenceUrl: "https://www.shure.com/en-US/products/wireless-systems/ulx-d_digital_wireless/ulxd4q",
    ports: [
      ...ports("XLR Out", "analog-audio", "output", 4, "xlr-3"),
      port("Ethernet 1 (Control/Dante)", "ethernet", "bidirectional"),
      port("Ethernet 2 (Redundant)", "ethernet", "bidirectional"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("RF Cascade Out", "rf", "output", "bnc"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── QLX-D DIGITAL WIRELESS — RECEIVERS ──────────────────────────────────────

  {
    id: "shure-qlxd4",
    deviceType: "audio-interface",
    label: "QLXD4",
    shortName: "QLXD4",
    manufacturer: "Shure",
    modelNumber: "QLXD4",
    searchTerms: ["shure", "qlxd4", "qlx-d", "wireless", "receiver", "digital", "single channel", "half rack", "presentation", "worship", "k-12"],
    powerDrawW: 12,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 210,
    depthMm: 165,
    weightKg: 1.0,
    referenceUrl: "https://www.shure.com/en-US/products/wireless-systems/qlx-d_digital_wireless/qlxd4",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
      port("Ethernet (Control)", "ethernet", "bidirectional"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("RF Cascade Out", "rf", "output", "bnc"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── SLX-D DIGITAL WIRELESS — RECEIVERS ──────────────────────────────────────

  {
    id: "shure-slxd4",
    deviceType: "audio-interface",
    label: "SLXD4",
    shortName: "SLXD4",
    manufacturer: "Shure",
    modelNumber: "SLXD4",
    searchTerms: ["shure", "slxd4", "slx-d", "wireless", "receiver", "digital", "single channel", "half rack", "presentation", "worship", "education"],
    powerDrawW: 12,
    voltage: "15VDC (PSU included)",
    heightMm: 44,
    widthMm: 210,
    depthMm: 165,
    weightKg: 0.9,
    referenceUrl: "https://www.shure.com/en-US/products/wireless-systems/slx-d/slxd4",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("DC Power", "power", "input"),
    ],
  },

  {
    id: "shure-slxd4d",
    deviceType: "audio-interface",
    label: "SLXD4D",
    shortName: "SLXD4D",
    manufacturer: "Shure",
    modelNumber: "SLXD4D",
    searchTerms: ["shure", "slxd4d", "slx-d", "wireless", "receiver", "digital", "dual channel", "1ru", "worship", "education"],
    powerDrawW: 18,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 165,
    weightKg: 2.0,
    referenceUrl: "https://www.shure.com/en-US/products/wireless-systems/slx-d/slxd4d",
    ports: [
      ...ports("XLR Out", "analog-audio", "output", 2, "xlr-3"),
      port("Ethernet (Control)", "ethernet", "bidirectional"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("RF Cascade Out", "rf", "output", "bnc"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── ULX-S ANALOG WIRELESS — RECEIVERS ───────────────────────────────────────

  {
    id: "shure-ulxs4",
    deviceType: "audio-interface",
    label: "ULXS4",
    shortName: "ULXS4",
    manufacturer: "Shure",
    modelNumber: "ULXS4",
    searchTerms: ["shure", "ulxs4", "ulx", "analog", "wireless", "receiver", "single channel", "half rack", "k-12", "education"],
    powerDrawW: 10,
    voltage: "15VDC (PSU included)",
    heightMm: 44,
    widthMm: 210,
    referenceUrl: "https://www.shure.com/en-US/products/wireless-systems/ulx/ulxs4",
    ports: [
      port("XLR Out", "analog-audio", "output", "xlr-3"),
      port("1/4\" Out", "analog-audio", "output", "trs-quarter"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("DC Power", "power", "input"),
    ],
  },

  // ─── AXIENT DIGITAL — RECEIVERS ──────────────────────────────────────────────

  {
    id: "shure-ad4d",
    deviceType: "audio-interface",
    label: "AD4D",
    shortName: "AD4D",
    manufacturer: "Shure",
    modelNumber: "AD4D",
    searchTerms: ["shure", "ad4d", "axient", "axient digital", "wireless", "receiver", "dual channel", "1ru", "dante", "aes256", "high density"],
    powerDrawW: 30,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 185,
    weightKg: 3.5,   // ⚠ estimated — not confirmed from spec sheet
    referenceUrl: "https://www.shure.com/en-US/products/wireless-systems/axient_digital/ad4d",
    ports: [
      ...ports("XLR Out", "analog-audio", "output", 2, "xlr-3"),
      port("Ethernet 1 (Control/Dante)", "ethernet", "bidirectional"),
      port("Ethernet 2 (Redundant)", "ethernet", "bidirectional"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("RF Cascade Out", "rf", "output", "bnc"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "shure-ad4q",
    deviceType: "audio-interface",
    label: "AD4Q",
    shortName: "AD4Q",
    manufacturer: "Shure",
    modelNumber: "AD4Q",
    searchTerms: ["shure", "ad4q", "axient", "axient digital", "wireless", "receiver", "quad channel", "1ru", "dante", "aes256", "high density"],
    powerDrawW: 40,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 185,
    weightKg: 4.0,   // ⚠ estimated — not confirmed from spec sheet
    referenceUrl: "https://www.shure.com/en-US/products/wireless-systems/axient_digital/ad4q",
    ports: [
      ...ports("XLR Out", "analog-audio", "output", 4, "xlr-3"),
      port("Ethernet 1 (Control/Dante)", "ethernet", "bidirectional"),
      port("Ethernet 2 (Redundant)", "ethernet", "bidirectional"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("RF Cascade Out", "rf", "output", "bnc"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── ANX4 SCALABLE WIRELESS RECEIVER ─────────────────────────────────────────

  {
    id: "shure-anx4",
    deviceType: "audio-interface",
    label: "ANX4",
    shortName: "ANX4",
    manufacturer: "Shure",
    modelNumber: "ANX4",
    searchTerms: ["shure", "anx4", "axient", "ulx-d", "wireless", "receiver", "scalable", "license", "dante", "1ru", "high density", "16 channel", "24 channel"],
    powerDrawW: 40,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 330,
    weightKg: 5.0,
    referenceUrl: "https://www.shure.com/en-US/products/wireless-systems/axient_digital/anx4",
    ports: [
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("Control Ethernet", "ethernet", "bidirectional"),
      port("RF Antenna A", "rf", "input", "bnc"),
      port("RF Antenna B", "rf", "input", "bnc"),
      port("RF Antenna C", "rf", "input", "bnc"),
      port("RF Antenna D", "rf", "input", "bnc"),
      port("RF Cascade Out", "rf", "output", "bnc"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── INTELLIMIX DSP & PROCESSORS ─────────────────────────────────────────────

  {
    id: "shure-p300",
    deviceType: "audio-dsp",
    label: "IntelliMix P300",
    shortName: "P300",
    manufacturer: "Shure",
    modelNumber: "P300-IMX",
    searchTerms: ["shure", "p300", "intellimix", "dsp", "conferencing", "aec", "echo cancellation", "dante", "poe", "conferencing processor", "uc"],
    poeDrawW: 17.5,
    heightMm: 40,
    widthMm: 210,
    depthMm: 226,
    weightKg: 1.71,
    referenceUrl: "https://www.shure.com/en-US/products/mixers/p300",
    ports: [
      port("Dante (PoE+)", "dante", "bidirectional"),
      ...ports("Analog In", "analog-audio", "input", 2, "phoenix"),
      ...ports("Analog Out", "analog-audio", "output", 2, "phoenix"),
      port("USB-B (Soft Codec)", "usb", "bidirectional"),
      port("3.5mm Mobile In/Out", "analog-audio", "bidirectional"),
    ],
  },

  // ─── ANI AUDIO NETWORK INTERFACES ────────────────────────────────────────────

  {
    id: "shure-ani4in",
    deviceType: "audio-interface",
    label: "ANI4IN",
    shortName: "ANI4IN",
    manufacturer: "Shure",
    modelNumber: "ANI4IN",
    searchTerms: ["shure", "ani4in", "audio network interface", "dante", "analog input", "poe", "4 channel", "mxa", "conferencing"],
    poeDrawW: 10,
    heightMm: 40,
    widthMm: 210,
    depthMm: 226,
    weightKg: 1.6,
    referenceUrl: "https://www.shure.com/en-US/products/mixers/ani4in",
    ports: [
      ...ports("Mic/Line In", "analog-audio", "input", 4, "xlr-3"),
      port("Dante (PoE)", "dante", "bidirectional"),
    ],
  },

  {
    id: "shure-ani4out",
    deviceType: "audio-interface",
    label: "ANI4OUT",
    shortName: "ANI4OUT",
    manufacturer: "Shure",
    modelNumber: "ANI4OUT",
    searchTerms: ["shure", "ani4out", "audio network interface", "dante", "analog output", "poe", "4 channel", "mxa", "conferencing"],
    poeDrawW: 10,
    heightMm: 40,
    widthMm: 210,
    depthMm: 226,
    weightKg: 1.6,
    referenceUrl: "https://www.shure.com/en-US/products/mixers/ani4out",
    ports: [
      ...ports("Line Out", "analog-audio", "output", 4, "xlr-3"),
      port("Dante (PoE)", "dante", "bidirectional"),
    ],
  },

  {
    id: "shure-ani22",
    deviceType: "audio-interface",
    label: "ANI22",
    shortName: "ANI22",
    manufacturer: "Shure",
    modelNumber: "ANI22",
    searchTerms: ["shure", "ani22", "audio network interface", "dante", "2 in 2 out", "poe", "conferencing"],
    poeDrawW: 11,
    heightMm: 40,
    widthMm: 210,
    depthMm: 226,
    weightKg: 1.6,
    referenceUrl: "https://www.shure.com/en-US/products/mixers/ani22",
    ports: [
      ...ports("Mic/Line In", "analog-audio", "input", 2, "xlr-3"),
      ...ports("Line Out", "analog-audio", "output", 2, "xlr-3"),
      port("Dante (PoE)", "dante", "bidirectional"),
    ],
  },

  {
    id: "shure-aniusb-matrix",
    deviceType: "audio-interface",
    label: "ANIUSB-MATRIX",
    shortName: "ANIUSB-MATRIX",
    manufacturer: "Shure",
    modelNumber: "ANIUSB-MATRIX",
    searchTerms: ["shure", "aniusb", "aniusb-matrix", "audio network interface", "dante", "usb", "poe", "conferencing", "matrix", "soft codec"],
    poeDrawW: 6.5,
    heightMm: 40,
    widthMm: 210,
    depthMm: 226,
    weightKg: 1.5,
    referenceUrl: "https://www.shure.com/en-US/products/mixers/aniusb-matrix",
    ports: [
      port("Dante (PoE)", "dante", "bidirectional"),
      port("USB-B (Soft Codec)", "usb", "bidirectional"),
      ...ports("Analog Out", "analog-audio", "output", 2, "phoenix"),
      port("3.5mm In/Out", "analog-audio", "bidirectional"),
    ],
  },

  // ─── SCM AUTOMIXERS ───────────────────────────────────────────────────────────

  {
    id: "shure-scm820",
    deviceType: "audio-dsp",
    label: "SCM820",
    shortName: "SCM820",
    manufacturer: "Shure",
    modelNumber: "SCM820",
    searchTerms: ["shure", "scm820", "intellimix", "automixer", "automatic mixer", "8 channel", "dante", "gating", "conferencing", "broadcast", "installed"],
    powerDrawW: 25,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 229,
    weightKg: 3.2,
    referenceUrl: "https://www.shure.com/en-US/products/mixers/scm820",
    ports: [
      ...ports("Mic/Line In", "analog-audio", "input", 8, "xlr-3"),
      ...ports("Mix Out", "analog-audio", "output", 4, "xlr-3"),
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("Ethernet (Control)", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "shure-scm810",
    deviceType: "audio-dsp",
    label: "SCM810",
    shortName: "SCM810",
    manufacturer: "Shure",
    modelNumber: "SCM810",
    searchTerms: ["shure", "scm810", "intellimix", "automixer", "automatic mixer", "8 channel", "analog", "gating", "installed"],
    powerDrawW: 20,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 200,
    weightKg: 2.5,
    referenceUrl: "https://www.shure.com/en-US/products/mixers/scm810",
    ports: [
      ...ports("Mic/Line In", "analog-audio", "input", 8, "xlr-3"),
      port("Mix Out L", "analog-audio", "output", "xlr-3"),
      port("Mix Out R", "analog-audio", "output", "xlr-3"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── MICROFLEX ADVANCE — ARRAY MICROPHONES ────────────────────────────────────

  {
    id: "shure-mxa310",
    deviceType: "microphone",
    label: "MXA310",
    shortName: "MXA310",
    manufacturer: "Shure",
    modelNumber: "MXA310",
    searchTerms: ["shure", "mxa310", "microflex advance", "table array", "ceiling", "dante", "poe", "aec", "conferencing", "beamforming"],
    poeDrawW: 4,
    heightMm: 37,
    widthMm: 195,
    depthMm: 195,
    weightKg: 0.52,
    referenceUrl: "https://www.shure.com/en-US/products/microphones/mxa/mxa310",
    ports: [
      port("Dante / AES67 (PoE)", "dante", "bidirectional"),
    ],
  },

  {
    id: "shure-mxa710-2ft",
    deviceType: "microphone",
    label: "MXA710 2FT",
    shortName: "MXA710-2FT",
    manufacturer: "Shure",
    modelNumber: "MXA710-2FT",
    searchTerms: ["shure", "mxa710", "microflex advance", "linear array", "dante", "poe", "aec", "conferencing", "beamforming", "2 foot", "wall mount", "ceiling", "table"],
    poeDrawW: 10,
    heightMm: 610,
    widthMm: 44,
    depthMm: 44,
    weightKg: 0.91,
    referenceUrl: "https://www.shure.com/en-US/products/microphones/mxa/mxa710",
    ports: [
      port("Dante / AES67 (PoE)", "dante", "bidirectional"),
    ],
  },

  {
    id: "shure-mxa710-4ft",
    deviceType: "microphone",
    label: "MXA710 4FT",
    shortName: "MXA710-4FT",
    manufacturer: "Shure",
    modelNumber: "MXA710-4FT",
    searchTerms: ["shure", "mxa710", "microflex advance", "linear array", "dante", "poe", "aec", "conferencing", "beamforming", "4 foot", "wall mount", "ceiling", "table"],
    poeDrawW: 10,
    heightMm: 1219,
    widthMm: 44,
    depthMm: 44,
    weightKg: 1.67,
    referenceUrl: "https://www.shure.com/en-US/products/microphones/mxa/mxa710",
    ports: [
      port("Dante / AES67 (PoE)", "dante", "bidirectional"),
    ],
  },

  {
    id: "shure-mxa910",
    deviceType: "microphone",
    label: "MXA910",
    shortName: "MXA910",
    manufacturer: "Shure",
    modelNumber: "MXA910",
    searchTerms: ["shure", "mxa910", "microflex advance", "ceiling array", "dante", "poe", "aec", "conferencing", "beamforming", "flush mount", "intellimix"],
    poeDrawW: 9,
    heightMm: 57,   // ⚠ flush ceiling mount — depth only, footprint depends on tile
    widthMm: 594,   // square: 594×594mm
    depthMm: 594,
    referenceUrl: "https://www.shure.com/en-US/products/microphones/mxa/mxa910",
    ports: [
      port("Dante / AES67 (PoE)", "dante", "bidirectional"),
    ],
  },

  {
    id: "shure-mxa920",
    deviceType: "microphone",
    label: "MXA920",
    shortName: "MXA920",
    manufacturer: "Shure",
    modelNumber: "MXA920",
    searchTerms: ["shure", "mxa920", "microflex advance", "ceiling array", "dante", "poe", "aec", "conferencing", "beamforming", "flush mount", "intellimix", "next gen"],
    poeDrawW: 10.1,
    heightMm: 89,
    widthMm: 594,
    depthMm: 594,
    referenceUrl: "https://www.shure.com/en-US/products/microphones/mxa/mxa920",
    ports: [
      port("Dante / AES67 (PoE)", "dante", "bidirectional"),
    ],
  },

  // ─── MICROFLEX LOUDSPEAKERS ───────────────────────────────────────────────────

  {
    id: "shure-mxn5-c",
    deviceType: "speaker",
    label: "MXN5-C",
    shortName: "MXN5-C",
    manufacturer: "Shure",
    modelNumber: "MXN5-C",
    searchTerms: ["shure", "mxn5", "mxn5-c", "microflex", "networked", "loudspeaker", "dante", "poe", "ceiling", "conferencing", "coaxial"],
    poeDrawW: 24,
    referenceUrl: "https://www.shure.com/en-US/products/loudspeakers/mxn5",
    ports: [
      port("Dante / AES67 (PoE+)", "dante", "bidirectional"),
    ],
  },

  {
    id: "shure-mxn6",
    deviceType: "speaker",
    label: "MXN6",
    shortName: "MXN6",
    manufacturer: "Shure",
    modelNumber: "MXN6",
    searchTerms: ["shure", "mxn6", "microflex", "networked", "loudspeaker", "dante", "poe", "pendant", "conferencing", "2026"],
    poeDrawW: 15,
    referenceUrl: "https://www.shure.com/en-US/products/loudspeakers/mxn6",
    ports: [
      port("Dante / AES67 (PoE)", "dante", "bidirectional"),
    ],
  },

  // ─── RF DISTRIBUTION / ANTENNA ───────────────────────────────────────────────

  {
    id: "shure-ua844",
    deviceType: "audio-interface",
    label: "UA844+SWB",
    shortName: "UA844+SWB",
    manufacturer: "Shure",
    modelNumber: "UA844+SWB",
    searchTerms: ["shure", "ua844", "antenna", "distribution", "splitter", "combiner", "rf", "4 way", "active", "wideband"],
    powerDrawW: 12,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 210,
    referenceUrl: "https://www.shure.com/en-US/products/wireless-accessories/ua844swb",
    ports: [
      port("Antenna A In", "rf", "input", "bnc"),
      port("Antenna B In", "rf", "input", "bnc"),
      ...ports("Receiver Out A", "rf", "output", 4, "bnc"),
      ...ports("Receiver Out B", "rf", "output", 4, "bnc"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "shure-ua221",
    deviceType: "audio-interface",
    label: "UA221",
    shortName: "UA221",
    manufacturer: "Shure",
    modelNumber: "UA221",
    searchTerms: ["shure", "ua221", "antenna", "splitter", "passive", "rf", "2 way", "wideband"],
    referenceUrl: "https://www.shure.com/en-US/products/wireless-accessories/ua221",
    ports: [
      port("Antenna In", "rf", "input", "bnc"),
      port("Receiver Out 1", "rf", "output", "bnc"),
      port("Receiver Out 2", "rf", "output", "bnc"),
    ],
  },

];
