import { port, ports } from "./_helpers";
import type { DeviceTemplate } from "../types";

/**
 * Tri-State Sound & Light — Standard Equipment Library
 * Devices commonly specified across K-12, municipal, worship, and commercial verticals.
 * Maintained by Tri-State Sound & Light LLC, Onalaska WI.
 */
export const templates: DeviceTemplate[] = [

  // ─── DSP / CONTROL ───────────────────────────────────────────────────────────

  {
    id: "tristate-cognio-c20",
    deviceType: "audio-dsp",
    label: "Cognio C20",
    shortName: "Cognio C20",
    manufacturer: "Symetrix",
    modelNumber: "C20",
    searchTerms: ["cognio", "symetrix", "c20", "dsp", "dante", "avip"],
    powerDrawW: 65,
    voltage: "100-240V",
    heightMm: 44,   // 1U
    widthMm: 483,
    depthMm: 305,
    weightKg: 3.2,
    referenceUrl: "https://www.symetrix.co/cognio/c20-smart-processor",
    ports: [
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("Control Ethernet", "ethernet", "bidirectional"),
      port("USB", "usb", "bidirectional"),
      port("GPIO", "gpio", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── NETWORKING ──────────────────────────────────────────────────────────────

  {
    id: "tristate-m4350-24x8f8v",
    deviceType: "network-switch",
    label: "M4350-24X8F8V",
    shortName: "M4350-24X8F8V",
    manufacturer: "Netgear",
    modelNumber: "XSM4340V",
    searchTerms: ["netgear", "avline", "m4350", "dante", "poe", "av over ip", "managed switch"],
    powerDrawW: 750,
    poeBudgetW: 290,
    voltage: "100-240V",
    heightMm: 43,   // 1U
    widthMm: 440,
    depthMm: 400,
    weightKg: 7.9,
    referenceUrl: "https://www.netgear.com/business/wired/switches/fully-managed/m4350/",
    ports: [
      ...ports("RJ45", "ethernet", "bidirectional", 24, "rj45"),
      ...ports("SFP+", "fiber", "bidirectional", 8, "sfp"),
      ...ports("SFP28 25G", "fiber", "bidirectional", 8, "sfp"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "tristate-m4250-26g4f-poe",
    deviceType: "network-switch",
    label: "M4250-26G4F-PoE+",
    shortName: "M4250-26G4F",
    manufacturer: "Netgear",
    modelNumber: "GSM4230P",
    searchTerms: ["netgear", "avline", "m4250", "dante", "poe", "av over ip", "managed switch"],
    powerDrawW: 390,
    poeBudgetW: 195,
    voltage: "100-240V",
    heightMm: 43,   // 1U
    widthMm: 440,
    depthMm: 300,
    weightKg: 4.5,
    referenceUrl: "https://www.netgear.com/business/wired/switches/fully-managed/m4250/",
    ports: [
      ...ports("RJ45 PoE+", "ethernet", "bidirectional", 24, "rj45"),
      ...ports("SFP", "fiber", "bidirectional", 2, "sfp"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── AV OVER IP ──────────────────────────────────────────────────────────────

  {
    id: "tristate-e5200",
    deviceType: "av-over-ip",
    label: "E5200 Encoder",
    shortName: "E5200",
    manufacturer: "Visionary Solutions",
    modelNumber: "E5200",
    searchTerms: ["visionary", "e5200", "encoder", "4k", "av over ip", "packetav", "dante", "aes67"],
    poeDrawW: 15,
    heightMm: 28,
    widthMm: 165,
    depthMm: 108,
    weightKg: 0.5,
    referenceUrl: "https://visionary-av.com/project/e5200-encoder-decoder/",
    ports: [
      port("HDMI In", "hdmi", "input", "hdmi"),
      port("USB-C In", "hdmi", "input", "usb-c"),
      port("HDMI Loop Out", "hdmi", "output", "hdmi"),
      port("LAN (PoE)", "ethernet", "bidirectional", "rj45"),
      port("LAN Passthrough", "ethernet", "bidirectional", "rj45"),
      port("IR", "ir", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
    ],
  },

  {
    id: "tristate-d5200",
    deviceType: "av-over-ip",
    label: "D5200 Decoder",
    shortName: "D5200",
    manufacturer: "Visionary Solutions",
    modelNumber: "D5200",
    searchTerms: ["visionary", "d5200", "decoder", "4k", "av over ip", "packetav", "dante", "aes67"],
    poeDrawW: 15,
    heightMm: 28,
    widthMm: 165,
    depthMm: 108,
    weightKg: 0.5,
    referenceUrl: "https://visionary-av.com/project/e5200-encoder-decoder/",
    ports: [
      port("HDMI Out", "hdmi", "output", "hdmi"),
      port("USB-C Out", "hdmi", "output", "usb-c"),
      port("LAN (PoE)", "ethernet", "bidirectional", "rj45"),
      port("LAN Passthrough", "ethernet", "bidirectional", "rj45"),
      port("IR", "ir", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("Analog Audio Out", "analog-audio", "output"),
    ],
  },

  // ─── DSP (BIAMP) ─────────────────────────────────────────────────────────────

  {
    id: "tristate-tesira-server-io",
    deviceType: "audio-dsp",
    label: "Tesira SERVER-IO",
    shortName: "Tesira SERVER-IO",
    manufacturer: "Biamp",
    modelNumber: "Tesira SERVER-IO",
    searchTerms: ["biamp", "tesira", "server-io", "dsp", "dante", "avb", "conference"],
    powerDrawW: 250,
    voltage: "100-240V",
    heightMm: 133,  // 3U
    widthMm: 483,
    depthMm: 432,
    weightKg: 9.5,
    referenceUrl: "https://www.biamp.com/products/tesira-configurable-audio-dsp",
    ports: [
      port("Control Eth Primary", "ethernet", "bidirectional", "rj45"),
      port("Control Eth Secondary", "ethernet", "bidirectional", "rj45"),
      port("Dante Primary", "dante", "bidirectional"),
      port("Dante Secondary", "dante", "bidirectional"),
      port("AVB", "avb", "bidirectional"),
      port("GPIO", "gpio", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── SPEAKERS ────────────────────────────────────────────────────────────────

  {
    id: "tristate-jbl-control-424lp",
    deviceType: "speaker",
    label: "Control 424LP",
    shortName: "Control 424LP",
    manufacturer: "JBL",
    modelNumber: "Control 424LP",
    searchTerms: ["jbl", "control", "424lp", "ceiling", "speaker", "crbi", "70v", "100v"],
    heightMm: 107,
    widthMm: 253,
    depthMm: 98,
    weightKg: 3.0,
    referenceUrl: "https://jblpro.com/en-US/products/control-424lp",
    ports: [
      port("Audio In", "speaker-level", "input"),
    ],
  },

  {
    id: "tristate-eaw-rsx212l",
    deviceType: "speaker",
    label: "RSX212L",
    shortName: "RSX212L",
    manufacturer: "EAW",
    modelNumber: "RSX212L",
    searchTerms: ["eaw", "rsx212l", "line array", "radius", "dante", "powered", "12 inch"],
    powerDrawW: 1500,  // LF 1000W + HF 500W
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

];
