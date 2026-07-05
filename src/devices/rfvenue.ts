import { port, ports } from "./_helpers";
import type { DeviceTemplate } from "../types";

/**
 * RF Venue — Complete Antenna & Distribution Product Library
 * Antennas (LPDA, CP, omni, architectural) and antenna/IEM distribution systems.
 * Source: rfvenue.com product pages and spec sheets, verified July 2026.
 * Excluded per Tri-State preference: cables, repair parts, accessories.
 * Note: All antennas use BNC connectors. Distribution units are passive-input/active-output.
 * ⚠ Addendum: DISTRO9 HDR, 4 ZONE, COMBINE4/6/8 exact dimensions not confirmed from spec sheets.
 *   CP Beam, CP Stage, D-ARC, Diversity Omni, RF Spotlight physical dims not published.
 */
export const templates: DeviceTemplate[] = [

  // ─── ANTENNAS — LPDA (WIRELESS MIC) ──────────────────────────────────────────

  {
    id: "rfv-diversity-fin",
    deviceType: "audio-interface",
    label: "Diversity Fin",
    shortName: "Diversity Fin",
    manufacturer: "RF Venue",
    modelNumber: "DFIN",
    searchTerms: ["rf venue", "diversity fin", "lpda", "antenna", "uhf", "wireless mic", "directional", "120 degree", "470-700"],
    referenceUrl: "https://www.rfvenue.com/all-products/diversity-fin",
    ports: [
      port("BNC Antenna A Out", "rf", "output", "bnc"),
      port("BNC Antenna B Out", "rf", "output", "bnc"),
    ],
  },

  {
    id: "rfv-diversity-fin-ipx",
    deviceType: "audio-interface",
    label: "Diversity Fin IPX",
    shortName: "Diversity Fin IPX",
    manufacturer: "RF Venue",
    modelNumber: "DFIN-IPX",
    searchTerms: ["rf venue", "diversity fin ipx", "lpda", "antenna", "uhf", "wireless mic", "directional", "ip44", "outdoor", "weatherproof", "touring", "install"],
    referenceUrl: "https://www.rfvenue.com/all-products/diversity-fin-ipx",
    ports: [
      port("BNC Antenna A Out", "rf", "output", "bnc"),
      port("BNC Antenna B Out", "rf", "output", "bnc"),
    ],
  },

  {
    id: "rfv-diversity-architectural",
    deviceType: "audio-interface",
    label: "Diversity Architectural",
    shortName: "D-ARC",
    manufacturer: "RF Venue",
    modelNumber: "D-ARC",
    searchTerms: ["rf venue", "diversity architectural", "d-arc", "lpda", "antenna", "uhf", "wireless mic", "wall mount", "ceiling mount", "install", "low profile", "worship", "corporate", "education"],
    referenceUrl: "https://www.rfvenue.com/all-products/d-arc",
    ports: [
      port("BNC Antenna A Out", "rf", "output", "bnc"),
      port("BNC Antenna B Out", "rf", "output", "bnc"),
    ],
  },

  {
    id: "rfv-diversity-omni",
    deviceType: "audio-interface",
    label: "Diversity Omni",
    shortName: "Diversity Omni",
    manufacturer: "RF Venue",
    modelNumber: "DOMNI",
    searchTerms: ["rf venue", "diversity omni", "omni", "antenna", "uhf", "wireless mic", "omnidirectional", "360", "small room", "multi-zone"],
    referenceUrl: "https://www.rfvenue.com/all-products/diversity-omni",
    ports: [
      port("BNC Antenna A Out", "rf", "output", "bnc"),
      port("BNC Antenna B Out", "rf", "output", "bnc"),
    ],
  },

  {
    id: "rfv-rf-spotlight",
    deviceType: "audio-interface",
    label: "RF Spotlight",
    shortName: "RF Spotlight",
    manufacturer: "RF Venue",
    modelNumber: "RFSPOT",
    searchTerms: ["rf venue", "rf spotlight", "antenna", "uhf", "wireless mic", "floor pad", "low profile", "stage", "omni", "install"],
    referenceUrl: "https://www.rfvenue.com/all-products/rf-spotlight",
    ports: [
      port("BNC Antenna A Out", "rf", "output", "bnc"),
      port("BNC Antenna B Out", "rf", "output", "bnc"),
    ],
  },

  // ─── ANTENNAS — CIRCULARLY POLARIZED (IEM) ───────────────────────────────────

  {
    id: "rfv-cp-beam",
    deviceType: "audio-interface",
    label: "CP Beam",
    shortName: "CP Beam",
    manufacturer: "RF Venue",
    modelNumber: "CPBEAM",
    searchTerms: ["rf venue", "cp beam", "circularly polarized", "antenna", "uhf", "iem", "in-ear monitor", "directional", "high gain", "large venue"],
    referenceUrl: "https://www.rfvenue.com/all-products/cp-beam",
    ports: [
      port("BNC Out", "rf", "output", "bnc"),
    ],
  },

  {
    id: "rfv-cp-stage",
    deviceType: "audio-interface",
    label: "CP Stage",
    shortName: "CP Stage",
    manufacturer: "RF Venue",
    modelNumber: "CPSTAGE",
    searchTerms: ["rf venue", "cp stage", "circularly polarized", "antenna", "uhf", "iem", "in-ear monitor", "ip rated", "outdoor", "touring", "470-928", "infocomm 2025 best of show"],
    referenceUrl: "https://www.rfvenue.com/all-products/cp-stage",
    ports: [
      port("BNC Out", "rf", "output", "bnc"),
    ],
  },

  {
    id: "rfv-cp-architectural",
    deviceType: "audio-interface",
    label: "CP Architectural",
    shortName: "CP-ARC",
    manufacturer: "RF Venue",
    modelNumber: "CP-ARC",
    searchTerms: ["rf venue", "cp architectural", "cp-arc", "circularly polarized", "antenna", "uhf", "iem", "in-ear monitor", "wall mount", "ceiling mount", "install", "low profile", "worship", "corporate"],
    referenceUrl: "https://www.rfvenue.com/all-products/cp-arc",
    ports: [
      port("BNC Out", "rf", "output", "bnc"),
    ],
  },

  {
    id: "rfv-cp-beam-24ghz",
    deviceType: "audio-interface",
    label: "2.4 GHz CP Beam",
    shortName: "2.4GHz CP Beam",
    manufacturer: "RF Venue",
    modelNumber: "CPBEAM-24",
    searchTerms: ["rf venue", "2.4ghz", "cp beam", "circularly polarized", "antenna", "2.4", "digital wireless", "system 20 pro", "system 10 pro", "iem"],
    referenceUrl: "https://www.rfvenue.com/all-products/2-4ghz-cp-beam",
    ports: [
      port("BNC Out", "rf", "output", "bnc"),
    ],
  },

  // ─── ANTENNA DISTRIBUTION — WIRELESS MIC ─────────────────────────────────────

  {
    id: "rfv-distro4",
    deviceType: "audio-interface",
    label: "DISTRO4",
    shortName: "DISTRO4",
    manufacturer: "RF Venue",
    modelNumber: "DISTRO4",
    searchTerms: ["rf venue", "distro4", "antenna distribution", "splitter", "4 way", "uhf", "470-952", "1ru", "active", "wireless mic", "dc power"],
    powerDrawW: 15,
    voltage: "100-240V",
    heightMm: 45,
    widthMm: 480,
    depthMm: 250,
    weightKg: 2.2,
    referenceUrl: "https://www.rfvenue.com/all-products/distro4",
    ports: [
      port("Antenna A In", "rf", "input", "bnc"),
      port("Antenna B In", "rf", "input", "bnc"),
      ...ports("Receiver Out A", "rf", "output", 4, "bnc"),
      ...ports("Receiver Out B", "rf", "output", 4, "bnc"),
      port("Cascade Out A", "rf", "output", "bnc"),
      port("Cascade Out B", "rf", "output", "bnc"),
      port("DC Power Out (12V)", "power", "output"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "rfv-distro5-hdr",
    deviceType: "audio-interface",
    label: "DISTRO5 HDR",
    shortName: "DISTRO5 HDR",
    manufacturer: "RF Venue",
    modelNumber: "DISTRO5-HDR",
    searchTerms: ["rf venue", "distro5", "distro5 hdr", "antenna distribution", "splitter", "5 way", "uhf", "470-698", "half rack", "active", "hdr", "wireless mic", "dc power"],
    powerDrawW: 12,
    voltage: "100-240V",
    heightMm: 45,
    widthMm: 210,   // half rack
    depthMm: 224,
    weightKg: 1.7,
    referenceUrl: "https://www.rfvenue.com/all-products/distro5hdr",
    ports: [
      port("Antenna A In", "rf", "input", "bnc"),
      port("Antenna B In", "rf", "input", "bnc"),
      ...ports("Receiver Out A", "rf", "output", 5, "bnc"),
      ...ports("Receiver Out B", "rf", "output", 5, "bnc"),
      port("DC Power Out (12V)", "power", "output"),
      port("DC Power In (12V)", "power", "input"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "rfv-distro9-hdr",
    deviceType: "audio-interface",
    label: "DISTRO9 HDR",
    shortName: "DISTRO9 HDR",
    manufacturer: "RF Venue",
    modelNumber: "DISTRO9-HDR",
    searchTerms: ["rf venue", "distro9", "distro9 hdr", "antenna distribution", "splitter", "9 way", "50-1000mhz", "1ru", "active", "hdr", "dual zone", "wireless mic", "vhf", "uhf"],
    powerDrawW: 20,
    voltage: "100-240V",
    heightMm: 45,
    widthMm: 480,
    referenceUrl: "https://www.rfvenue.com/all-products/distro9hdr",
    ports: [
      port("Antenna A1 In", "rf", "input", "bnc"),
      port("Antenna A2 In (Zone 2)", "rf", "input", "bnc"),
      port("Antenna B1 In", "rf", "input", "bnc"),
      port("Antenna B2 In (Zone 2)", "rf", "input", "bnc"),
      ...ports("Receiver Out A", "rf", "output", 9, "bnc"),
      ...ports("Receiver Out B", "rf", "output", 9, "bnc"),
      port("DC Power Out (12V)", "power", "output"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── MULTI-ZONE COMBINERS ─────────────────────────────────────────────────────

  {
    id: "rfv-4zone",
    deviceType: "audio-interface",
    label: "4 ZONE",
    shortName: "4 ZONE",
    manufacturer: "RF Venue",
    modelNumber: "4ZONE",
    searchTerms: ["rf venue", "4 zone", "4zone", "antenna combiner", "multi-zone", "1ru", "uhf", "wireless mic", "multi-room", "campus", "install"],
    powerDrawW: 15,
    voltage: "100-240V",
    heightMm: 45,
    widthMm: 480,
    referenceUrl: "https://www.rfvenue.com/all-products/4-zone",
    ports: [
      port("Zone 1 Antenna A In", "rf", "input", "bnc"),
      port("Zone 1 Antenna B In", "rf", "input", "bnc"),
      port("Zone 2 Antenna A In", "rf", "input", "bnc"),
      port("Zone 2 Antenna B In", "rf", "input", "bnc"),
      port("Zone 3 Antenna A In", "rf", "input", "bnc"),
      port("Zone 3 Antenna B In", "rf", "input", "bnc"),
      port("Zone 4 Antenna A In", "rf", "input", "bnc"),
      port("Zone 4 Antenna B In", "rf", "input", "bnc"),
      port("Combined A Out (to DISTRO)", "rf", "output", "bnc"),
      port("Combined B Out (to DISTRO)", "rf", "output", "bnc"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "rfv-4zone-network",
    deviceType: "audio-interface",
    label: "4 ZONE-Network",
    shortName: "4 ZONE-N",
    manufacturer: "RF Venue",
    modelNumber: "4ZONE-NETWORK",
    searchTerms: ["rf venue", "4 zone network", "4zone-network", "antenna combiner", "multi-zone", "network control", "1ru", "uhf", "wireless mic", "multi-room", "campus", "install", "remote"],
    powerDrawW: 15,
    voltage: "100-240V",
    heightMm: 45,
    widthMm: 480,
    referenceUrl: "https://www.rfvenue.com/all-products/4-zone",
    ports: [
      port("Zone 1 Antenna A In", "rf", "input", "bnc"),
      port("Zone 1 Antenna B In", "rf", "input", "bnc"),
      port("Zone 2 Antenna A In", "rf", "input", "bnc"),
      port("Zone 2 Antenna B In", "rf", "input", "bnc"),
      port("Zone 3 Antenna A In", "rf", "input", "bnc"),
      port("Zone 3 Antenna B In", "rf", "input", "bnc"),
      port("Zone 4 Antenna A In", "rf", "input", "bnc"),
      port("Zone 4 Antenna B In", "rf", "input", "bnc"),
      port("Combined A Out (to DISTRO)", "rf", "output", "bnc"),
      port("Combined B Out (to DISTRO)", "rf", "output", "bnc"),
      port("Ethernet (Network Control)", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── IEM TRANSMITTER COMBINERS ────────────────────────────────────────────────

  {
    id: "rfv-combine4",
    deviceType: "audio-interface",
    label: "COMBINE4",
    shortName: "COMBINE4",
    manufacturer: "RF Venue",
    modelNumber: "COMBINE4",
    searchTerms: ["rf venue", "combine4", "iem combiner", "transmitter combiner", "4 channel", "uhf", "in-ear monitor", "half rack", "active"],
    powerDrawW: 15,
    voltage: "100-240V",
    heightMm: 45,
    widthMm: 210,   // half rack
    referenceUrl: "https://www.rfvenue.com/all-products/combine4",
    ports: [
      ...ports("IEM Transmitter In", "rf", "input", 4, "bnc"),
      port("Antenna Out", "rf", "output", "bnc"),
      port("DC Power Out (12V)", "power", "output"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "rfv-combine6-hdr",
    deviceType: "audio-interface",
    label: "COMBINE6 HDR",
    shortName: "COMBINE6 HDR",
    manufacturer: "RF Venue",
    modelNumber: "COMBINE6-HDR",
    searchTerms: ["rf venue", "combine6", "combine6 hdr", "iem combiner", "transmitter combiner", "6 channel", "uhf", "in-ear monitor", "half rack", "active", "hdr"],
    powerDrawW: 15,
    voltage: "100-240V",
    heightMm: 45,
    widthMm: 210,   // half rack
    referenceUrl: "https://www.rfvenue.com/all-products/combine6hdr",
    ports: [
      ...ports("IEM Transmitter In", "rf", "input", 6, "bnc"),
      port("Antenna Out", "rf", "output", "bnc"),
      port("DC Power Out (12V)", "power", "output"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "rfv-combine8",
    deviceType: "audio-interface",
    label: "COMBINE8",
    shortName: "COMBINE8",
    manufacturer: "RF Venue",
    modelNumber: "COMBINE8",
    searchTerms: ["rf venue", "combine8", "iem combiner", "transmitter combiner", "8 channel", "uhf", "in-ear monitor", "1ru", "active"],
    powerDrawW: 20,
    voltage: "100-240V",
    heightMm: 45,
    widthMm: 480,
    referenceUrl: "https://www.rfvenue.com/all-products/combine8",
    ports: [
      ...ports("IEM Transmitter In", "rf", "input", 8, "bnc"),
      port("Antenna Out", "rf", "output", "bnc"),
      port("DC Power Out (12V)", "power", "output"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── RF OVER FIBER ────────────────────────────────────────────────────────────

  {
    id: "rfv-optix2-s3",
    deviceType: "audio-interface",
    label: "OPTIX2-S3",
    shortName: "OPTIX2-S3",
    manufacturer: "RF Venue",
    modelNumber: "OPTIX2-S3",
    searchTerms: ["rf venue", "optix2", "rf over fiber", "fiber", "antenna", "uhf", "long run", "remote antenna", "multimode", "wireless mic", "install"],
    powerDrawW: 10,
    voltage: "100-240V",
    referenceUrl: "https://www.rfvenue.com/all-products/optix2-s3",
    ports: [
      port("BNC RF In/Out", "rf", "bidirectional", "bnc"),
      port("Fiber (Multimode LC)", "fiber", "bidirectional", "lc"),
      port("AC Power", "power", "input"),
    ],
  },

];
