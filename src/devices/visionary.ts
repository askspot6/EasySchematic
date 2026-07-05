import { port, ports } from "./_helpers";
import type { DeviceTemplate } from "../types";

/**
 * Visionary Solutions — Complete AV over IP Product Library
 * 4 Series, 5 Series encoders/decoders, wallplate encoders, IP multiviewers.
 * Source: visionary-av.com spec sheets, verified July 2026.
 * Note: E5200/D5200 are also in tristate.ts — omitted here to avoid duplication.
 * All endpoints are PoE powered, fanless, convection cooled.
 * ⚠ Addendum: Wallplate decoder (DuetD5-WP) specs not yet published.
 *   MV4/MV5 multiviewer dims not pulled from spec sheets.
 */
export const templates: DeviceTemplate[] = [

  // ─── 5 SERIES — SURFACE MOUNT ENCODERS ───────────────────────────────────────

  {
    id: "vsi-e5100",
    deviceType: "av-over-ip",
    label: "E5100 Encoder",
    shortName: "E5100",
    manufacturer: "Visionary Solutions",
    modelNumber: "E5100",
    searchTerms: ["visionary", "vsi", "e5100", "encoder", "av over ip", "4k60", "4:4:4", "aes67", "dante", "packetav", "5 series"],
    poeDrawW: 12,
    heightMm: 29.3,
    widthMm: 146,
    depthMm: 136.4,
    weightKg: 0.45,
    referenceUrl: "https://visionary-av.com/project/e5100-encoder/",
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("HDMI Loop Out", "hdmi", "output"),
      port("Analog Audio In", "analog-audio", "input", "phoenix"),
      port("Network (PoE)", "ethernet", "bidirectional"),
      port("USB Device", "usb", "output"),
      port("GPIO / RS-232 / IR", "gpio", "bidirectional"),
    ],
  },

  {
    id: "vsi-e5200",
    deviceType: "av-over-ip",
    label: "E5200 Encoder",
    shortName: "E5200",
    manufacturer: "Visionary Solutions",
    modelNumber: "E5200",
    searchTerms: ["visionary", "vsi", "e5200", "encoder", "av over ip", "4k60", "4:4:4", "aes67", "dante", "packetav", "5 series", "usb-c"],
    poeDrawW: 12,
    heightMm: 28,
    widthMm: 122,
    depthMm: 225,
    weightKg: 0.45,
    referenceUrl: "https://visionary-av.com/project/e5200-encoder/",
    ports: [
      port("HDMI In 1", "hdmi", "input"),
      port("HDMI In 2", "hdmi", "input"),
      port("USB-C In", "usb-c", "input"),
      port("HDMI Loop Out", "hdmi", "output"),
      port("Analog Audio In", "analog-audio", "input", "phoenix"),
      port("Network Primary (PoE)", "ethernet", "bidirectional"),
      port("Network Expansion (PoE Out)", "ethernet", "bidirectional"),
      port("USB Device", "usb", "output"),
      port("GPIO / RS-232 / IR", "gpio", "bidirectional"),
    ],
  },

  {
    id: "vsi-e5000",
    deviceType: "av-over-ip",
    label: "E5000 Encoder",
    shortName: "E5000",
    manufacturer: "Visionary Solutions",
    modelNumber: "E5000",
    searchTerms: ["visionary", "vsi", "e5000", "encoder", "av over ip", "4k60", "4:4:4", "packetav", "5 series", "cost effective"],
    poeDrawW: 12,
    referenceUrl: "https://visionary-av.com/project/e5000-encoder/",
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("Network (PoE)", "ethernet", "bidirectional"),
    ],
  },

  // ─── 5 SERIES — SURFACE MOUNT DECODERS ───────────────────────────────────────

  {
    id: "vsi-d5100",
    deviceType: "av-over-ip",
    label: "D5100 Decoder",
    shortName: "D5100",
    manufacturer: "Visionary Solutions",
    modelNumber: "D5100",
    searchTerms: ["visionary", "vsi", "d5100", "decoder", "av over ip", "4k60", "4:4:4", "aes67", "dante", "packetav", "5 series"],
    poeDrawW: 12,
    heightMm: 29.3,
    widthMm: 146,
    depthMm: 131.6,
    weightKg: 0.45,
    referenceUrl: "https://visionary-av.com/project/d5100-decoder/",
    ports: [
      port("HDMI Out", "hdmi", "output"),
      port("Analog Audio Out", "analog-audio", "output", "phoenix"),
      port("Network (PoE)", "ethernet", "bidirectional"),
      port("USB Host", "usb", "input"),
      port("GPIO / RS-232 / IR", "gpio", "bidirectional"),
    ],
  },

  {
    id: "vsi-d5200",
    deviceType: "av-over-ip",
    label: "D5200 Decoder",
    shortName: "D5200",
    manufacturer: "Visionary Solutions",
    modelNumber: "D5200",
    searchTerms: ["visionary", "vsi", "d5200", "decoder", "av over ip", "4k60", "4:4:4", "aes67", "dante", "packetav", "5 series", "usb-c"],
    poeDrawW: 12,
    heightMm: 28,
    widthMm: 122,
    depthMm: 230,
    weightKg: 0.45,
    referenceUrl: "https://visionary-av.com/project/d5200-decoder/",
    ports: [
      port("HDMI Out", "hdmi", "output"),
      port("USB-C Out", "usb-c", "output"),
      port("Analog Audio Out", "analog-audio", "output", "phoenix"),
      port("Network Primary (PoE)", "ethernet", "bidirectional"),
      port("Network Expansion (PoE Out)", "ethernet", "bidirectional"),
      port("USB Host", "usb", "input"),
      port("GPIO / RS-232 / IR", "gpio", "bidirectional"),
    ],
  },

  {
    id: "vsi-d5000",
    deviceType: "av-over-ip",
    label: "D5000 Decoder",
    shortName: "D5000",
    manufacturer: "Visionary Solutions",
    modelNumber: "D5000",
    searchTerms: ["visionary", "vsi", "d5000", "decoder", "av over ip", "4k60", "4:4:4", "packetav", "5 series", "cost effective"],
    poeDrawW: 12,
    referenceUrl: "https://visionary-av.com/project/d5000-decoder/",
    ports: [
      port("HDMI Out", "hdmi", "output"),
      port("Network (PoE)", "ethernet", "bidirectional"),
    ],
  },

  // ─── 4 SERIES — SURFACE MOUNT ENCODERS ───────────────────────────────────────

  {
    id: "vsi-e4200",
    deviceType: "av-over-ip",
    label: "E4200 Encoder",
    shortName: "E4200",
    manufacturer: "Visionary Solutions",
    modelNumber: "E4200",
    searchTerms: ["visionary", "vsi", "e4200", "encoder", "av over ip", "4k", "uhd", "aes67", "dante", "packetav", "4 series", "duet", "usb-c"],
    poeDrawW: 12,
    heightMm: 28,
    widthMm: 146,
    depthMm: 175,
    weightKg: 0.45,
    referenceUrl: "https://visionary-av.com/project/4200-encoder-decoder/",
    ports: [
      port("HDMI In 1", "hdmi", "input"),
      port("HDMI In 2", "hdmi", "input"),
      port("USB-C In", "usb-c", "input"),
      port("HDMI Loop Out", "hdmi", "output"),
      port("Analog Audio In", "analog-audio", "input", "phoenix"),
      port("Network Primary (PoE)", "ethernet", "bidirectional"),
      port("Network Expansion (PoE Out)", "ethernet", "bidirectional"),
      port("USB Device", "usb", "output"),
      port("GPIO / RS-232 / IR", "gpio", "bidirectional"),
    ],
  },

  {
    id: "vsi-e4100",
    deviceType: "av-over-ip",
    label: "E4100 Encoder",
    shortName: "E4100",
    manufacturer: "Visionary Solutions",
    modelNumber: "E4100",
    searchTerms: ["visionary", "vsi", "e4100", "encoder", "av over ip", "4k", "uhd", "packetav", "4 series"],
    poeDrawW: 12,
    referenceUrl: "https://visionary-av.com/project/4100-encoder/",
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("HDMI Loop Out", "hdmi", "output"),
      port("Analog Audio In", "analog-audio", "input", "phoenix"),
      port("Network (PoE)", "ethernet", "bidirectional"),
      port("GPIO / RS-232 / IR", "gpio", "bidirectional"),
    ],
  },

  // ─── 4 SERIES — SURFACE MOUNT DECODERS ───────────────────────────────────────

  {
    id: "vsi-d4200",
    deviceType: "av-over-ip",
    label: "D4200 Decoder",
    shortName: "D4200",
    manufacturer: "Visionary Solutions",
    modelNumber: "D4200",
    searchTerms: ["visionary", "vsi", "d4200", "decoder", "av over ip", "4k", "uhd", "aes67", "dante", "packetav", "4 series", "duet", "usb-c"],
    poeDrawW: 12,
    heightMm: 28,
    widthMm: 146,
    depthMm: 180,
    weightKg: 0.45,
    referenceUrl: "https://visionary-av.com/project/4200-encoder-decoder/",
    ports: [
      port("HDMI Out", "hdmi", "output"),
      port("USB-C Out", "usb-c", "output"),
      port("Analog Audio Out", "analog-audio", "output", "phoenix"),
      port("Network Primary (PoE)", "ethernet", "bidirectional"),
      port("Network Expansion (PoE Out)", "ethernet", "bidirectional"),
      port("USB Host", "usb", "input"),
      port("GPIO / RS-232 / IR", "gpio", "bidirectional"),
    ],
  },

  {
    id: "vsi-d4100",
    deviceType: "av-over-ip",
    label: "D4100 Decoder",
    shortName: "D4100",
    manufacturer: "Visionary Solutions",
    modelNumber: "D4100",
    searchTerms: ["visionary", "vsi", "d4100", "decoder", "av over ip", "4k", "uhd", "packetav", "4 series"],
    poeDrawW: 12,
    referenceUrl: "https://visionary-av.com/project/4100-decoder/",
    ports: [
      port("HDMI Out", "hdmi", "output"),
      port("Analog Audio Out", "analog-audio", "output", "phoenix"),
      port("Network (PoE)", "ethernet", "bidirectional"),
      port("GPIO / RS-232 / IR", "gpio", "bidirectional"),
    ],
  },

  // ─── 5 SERIES — WALLPLATE ENCODERS ───────────────────────────────────────────
  // All wallplates share 2-gang US form factor: 103.4×91.8×57mm (H×W×D)

  {
    id: "vsi-duete5-wp",
    deviceType: "av-over-ip",
    label: "DuetE5-WP Encoder",
    shortName: "DuetE5-WP",
    manufacturer: "Visionary Solutions",
    modelNumber: "DuetE5-WP",
    searchTerms: ["visionary", "vsi", "duete5", "duet", "wallplate", "encoder", "av over ip", "4k60", "4:4:4", "aes67", "dante", "usb", "rs232", "5 series"],
    poeDrawW: 15,
    heightMm: 103.4,
    widthMm: 91.8,
    depthMm: 57,
    referenceUrl: "https://visionary-av.com/project/duete5-wp-encoder/",
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("Analog Audio In", "analog-audio", "input", "phoenix"),
      port("Network (PoE)", "ethernet", "bidirectional"),
      port("USB", "usb", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("IR", "ir", "bidirectional"),
    ],
  },

  {
    id: "vsi-duete5-wp-h",
    deviceType: "av-over-ip",
    label: "DuetE5-WP-H Encoder",
    shortName: "DuetE5-WP-H",
    manufacturer: "Visionary Solutions",
    modelNumber: "DuetE5-WP-H",
    searchTerms: ["visionary", "vsi", "duete5-wp-h", "duet", "wallplate", "encoder", "av over ip", "4k60", "4:4:4", "hdmi only", "5 series"],
    poeDrawW: 12,
    heightMm: 103.4,
    widthMm: 91.8,
    depthMm: 57,
    referenceUrl: "https://visionary-av.com/project/duete5-wp-h-encoder/",
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("Network (PoE)", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "vsi-duete5-wp-bt",
    deviceType: "av-over-ip",
    label: "DuetE5-WP-BT Encoder",
    shortName: "DuetE5-WP-BT",
    manufacturer: "Visionary Solutions",
    modelNumber: "DuetE5-WP-BT",
    searchTerms: ["visionary", "vsi", "duete5-wp-bt", "duet", "wallplate", "encoder", "av over ip", "4k60", "4:4:4", "bluetooth", "byod", "5 series"],
    poeDrawW: 15,
    heightMm: 103.4,
    widthMm: 91.8,
    depthMm: 57,
    referenceUrl: "https://visionary-av.com/project/duete5-wp-bt-encoder/",
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("Bluetooth Audio", "bluetooth", "input"),
      port("Network (PoE)", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "vsi-duete5-wp-c",
    deviceType: "av-over-ip",
    label: "DuetE5-WP-C Encoder",
    shortName: "DuetE5-WP-C",
    manufacturer: "Visionary Solutions",
    modelNumber: "DuetE5-WP-C",
    searchTerms: ["visionary", "vsi", "duete5-wp-c", "duet", "wallplate", "encoder", "av over ip", "4k60", "4:4:4", "usb-c", "byod", "5 series"],
    poeDrawW: 15,
    heightMm: 103.4,
    widthMm: 91.8,
    depthMm: 57,
    referenceUrl: "https://visionary-av.com/project/duete5-wp-c/",
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("USB-C In", "usb-c", "input"),
      port("Network (PoE)", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "vsi-duete5-wp-c-bt",
    deviceType: "av-over-ip",
    label: "DuetE5-WP-C-BT Encoder",
    shortName: "DuetE5-WP-C-BT",
    manufacturer: "Visionary Solutions",
    modelNumber: "DuetE5-WP-C-BT",
    searchTerms: ["visionary", "vsi", "duete5-wp-c-bt", "duet", "wallplate", "encoder", "av over ip", "4k60", "4:4:4", "usb-c", "bluetooth", "byod", "5 series"],
    poeDrawW: 15,
    heightMm: 103.4,
    widthMm: 91.8,
    depthMm: 57,
    referenceUrl: "https://visionary-av.com/project/duete5-wp-c-bt/",
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("USB-C In", "usb-c", "input"),
      port("Bluetooth Audio", "bluetooth", "input"),
      port("Network (PoE)", "ethernet", "bidirectional"),
    ],
  },

  // ─── 4 SERIES — WALLPLATE ENCODERS ───────────────────────────────────────────

  {
    id: "vsi-duete-wp",
    deviceType: "av-over-ip",
    label: "DuetE-WP Encoder",
    shortName: "DuetE-WP",
    manufacturer: "Visionary Solutions",
    modelNumber: "DuetE-WP",
    searchTerms: ["visionary", "vsi", "duete-wp", "duet", "wallplate", "encoder", "av over ip", "4k", "aes67", "dante", "usb", "rs232", "4 series"],
    poeDrawW: 15,
    heightMm: 103.4,
    widthMm: 91.8,
    depthMm: 57,
    referenceUrl: "https://visionary-av.com/project/duete-wp-encoder/",
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("Analog Audio In", "analog-audio", "input", "phoenix"),
      port("Network (PoE)", "ethernet", "bidirectional"),
      port("USB", "usb", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("IR", "ir", "bidirectional"),
    ],
  },

  {
    id: "vsi-duete-wp-h",
    deviceType: "av-over-ip",
    label: "DuetE-WP-H Encoder",
    shortName: "DuetE-WP-H",
    manufacturer: "Visionary Solutions",
    modelNumber: "DuetE-WP-H",
    searchTerms: ["visionary", "vsi", "duete-wp-h", "duet", "wallplate", "encoder", "av over ip", "4k", "hdmi only", "4 series"],
    poeDrawW: 12,
    heightMm: 103.4,
    widthMm: 91.8,
    depthMm: 57,
    referenceUrl: "https://visionary-av.com/project/duete-wp-h-encoder/",
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("Network (PoE)", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "vsi-duete-wp-bt",
    deviceType: "av-over-ip",
    label: "DuetE-WP-BT Encoder",
    shortName: "DuetE-WP-BT",
    manufacturer: "Visionary Solutions",
    modelNumber: "DuetE-WP-BT",
    searchTerms: ["visionary", "vsi", "duete-wp-bt", "duet", "wallplate", "encoder", "av over ip", "4k", "bluetooth", "byod", "4 series"],
    poeDrawW: 15,
    heightMm: 103.4,
    widthMm: 91.8,
    depthMm: 57,
    referenceUrl: "https://visionary-av.com/project/duete-wp-bt-encoder/",
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("Bluetooth Audio", "bluetooth", "input"),
      port("Network (PoE)", "ethernet", "bidirectional"),
    ],
  },

  // ─── 5 SERIES — WALLPLATE DECODER ────────────────────────────────────────────
  // ⚠ ADDENDUM: DuetD5-WP physical dimensions and power draw not published.
  // Using same form factor as wallplate encoders.

  {
    id: "vsi-duetd5-wp",
    deviceType: "av-over-ip",
    label: "DuetD5-WP Decoder",
    shortName: "DuetD5-WP",
    manufacturer: "Visionary Solutions",
    modelNumber: "DuetD5-WP",
    searchTerms: ["visionary", "vsi", "duetd5-wp", "duet", "wallplate", "decoder", "av over ip", "4k60", "4:4:4", "5 series"],
    poeDrawW: 15,   // ⚠ estimated
    heightMm: 103.4,  // ⚠ estimated — same 2-gang form factor
    widthMm: 91.8,
    depthMm: 57,
    referenceUrl: "https://visionary-av.com/project/duetd5-wp/",
    ports: [
      port("HDMI Out", "hdmi", "output"),
      port("Network (PoE)", "ethernet", "bidirectional"),
    ],
  },

  // ─── IP MULTIVIEWERS ─────────────────────────────────────────────────────────
  // ⚠ ADDENDUM: MV4/MV5 physical dimensions and weight not pulled from spec sheets.

  {
    id: "vsi-mv5",
    deviceType: "av-over-ip",
    label: "MV5 IP Multiviewer",
    shortName: "MV5",
    manufacturer: "Visionary Solutions",
    modelNumber: "MV5",
    searchTerms: ["visionary", "vsi", "mv5", "multiviewer", "ip multiviewer", "quad", "pip", "video wall", "1ru", "5 series"],
    heightMm: 44,   // 1RU rackmount
    widthMm: 483,
    referenceUrl: "https://visionary-av.com/project/mv5-ip-multiviewer-2/",
    ports: [
      ...ports("Network In", "ethernet", "input", 4),
      port("HDMI Out", "hdmi", "output"),
      port("Network Out", "ethernet", "output"),
      port("Control Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "vsi-mv4",
    deviceType: "av-over-ip",
    label: "MV4 IP Multiviewer",
    shortName: "MV4",
    manufacturer: "Visionary Solutions",
    modelNumber: "MV4",
    searchTerms: ["visionary", "vsi", "mv4", "multiviewer", "ip multiviewer", "quad", "pip", "video wall", "1ru", "4 series"],
    heightMm: 44,   // 1RU rackmount
    widthMm: 483,
    referenceUrl: "https://visionary-av.com/project/mv4-ip-multiviewer/",
    ports: [
      ...ports("Network In", "ethernet", "input", 4),
      port("HDMI Out", "hdmi", "output"),
      port("Network Out", "ethernet", "output"),
      port("Control Ethernet", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

];
