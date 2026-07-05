import { port, ports } from "./_helpers";
import type { DeviceTemplate } from "../types";

/**
 * Atlona (Hall Research) — Install-Focused Product Library
 * OmniStream AV over IP, Velocity control system, Omega conferencing, HDBaseT extenders.
 * Source: hallresearch.com and atlona.com product pages, verified July 2026.
 * Note: Atlona is now part of Hall Research (acquired). Products still sold under Atlona brand.
 * Note: New multi-brand structure announced April 2026 — Atlona brand continues for traditional AV.
 * ⚠ Several OmniStream models (OMNI-111/112/121) are discontinued with 2026 replacements pending.
 *   Included here since they are still widely deployed in the field.
 * ⚠ UHD-EX series HDBaseT extenders discontinued — replaced by HDR-EX/AVA-EX series.
 * ⚠ AT-VGW-HW-3/10/20 physical dimensions not published on product page.
 */
export const templates: DeviceTemplate[] = [

  // ─── OMNISTREAM AV OVER IP ───────────────────────────────────────────────────
  // ⚠ AT-OMNI-111/112/121 discontinued July 2026. Direct replacements coming late 2026.
  // Included since widely deployed. Note: all are half-rack width, PoE powered.

  {
    id: "atlona-omni-111",
    deviceType: "av-over-ip",
    label: "OmniStream OMNI-111",
    shortName: "OMNI-111",
    manufacturer: "Atlona",
    modelNumber: "AT-OMNI-111",
    searchTerms: ["atlona", "omnistream", "omni-111", "encoder", "av over ip", "hdmi", "4k", "dante", "aes67", "velocity"],
    poeDrawW: 25,
    referenceUrl: "https://atlona.com/product/at-omni-111/",
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("Analog Audio In", "analog-audio", "input", "phoenix"),
      port("Analog Audio Out", "analog-audio", "output", "phoenix"),
      port("Network (PoE)", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("IR", "ir", "bidirectional"),
    ],
  },

  {
    id: "atlona-omni-112",
    deviceType: "av-over-ip",
    label: "OmniStream OMNI-112",
    shortName: "OMNI-112",
    manufacturer: "Atlona",
    modelNumber: "AT-OMNI-112",
    searchTerms: ["atlona", "omnistream", "omni-112", "dual encoder", "av over ip", "hdmi", "4k", "redundant", "velocity"],
    poeDrawW: 30,
    referenceUrl: "https://atlona.com/product/at-omni-112/",
    ports: [
      port("HDMI In 1", "hdmi", "input"),
      port("HDMI In 2", "hdmi", "input"),
      port("Analog Audio In", "analog-audio", "input", "phoenix"),
      port("Network Primary (PoE)", "ethernet", "bidirectional"),
      port("Network Secondary", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("IR", "ir", "bidirectional"),
    ],
  },

  {
    id: "atlona-omni-121",
    deviceType: "av-over-ip",
    label: "OmniStream OMNI-121",
    shortName: "OMNI-121",
    manufacturer: "Atlona",
    modelNumber: "AT-OMNI-121",
    searchTerms: ["atlona", "omnistream", "omni-121", "decoder", "av over ip", "hdmi", "4k", "multiview", "velocity"],
    poeDrawW: 25,
    referenceUrl: "https://atlona.com/product/at-omni-121/",
    ports: [
      port("HDMI Out", "hdmi", "output"),
      port("Analog Audio Out", "analog-audio", "output", "phoenix"),
      port("Network (PoE)", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("IR", "ir", "bidirectional"),
    ],
  },

  {
    id: "atlona-omni-111-wp",
    deviceType: "av-over-ip",
    label: "OmniStream OMNI-111-WP",
    shortName: "OMNI-111-WP",
    manufacturer: "Atlona",
    modelNumber: "AT-OMNI-111-WP",
    searchTerms: ["atlona", "omnistream", "omni-111-wp", "encoder", "wall plate", "av over ip", "hdmi", "4k", "velocity"],
    poeDrawW: 20,
    referenceUrl: "https://atlona.com/product/at-omni-111-wp/",
    ports: [
      port("HDMI In", "hdmi", "input"),
      port("Network (PoE)", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
    ],
  },

  // ─── VELOCITY CONTROL SYSTEM ─────────────────────────────────────────────────

  {
    id: "atlona-vgw-hw-3",
    deviceType: "controller",
    label: "Velocity Gateway VGW-HW-3",
    shortName: "VGW-HW-3",
    manufacturer: "Atlona",
    modelNumber: "AT-VGW-HW-3",
    searchTerms: ["atlona", "velocity", "vgw", "hw-3", "gateway", "control", "ams", "room scheduling", "3 rooms"],
    powerDrawW: 25,
    voltage: "100-240V",
    referenceUrl: "https://atlona.com/product/vgw-hw/",
    ports: [
      port("Ethernet 1", "ethernet", "bidirectional"),
      port("Ethernet 2", "ethernet", "bidirectional"),
      port("USB", "usb", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "atlona-vgw-hw-10",
    deviceType: "controller",
    label: "Velocity Gateway VGW-HW-10",
    shortName: "VGW-HW-10",
    manufacturer: "Atlona",
    modelNumber: "AT-VGW-HW-10",
    searchTerms: ["atlona", "velocity", "vgw", "hw-10", "gateway", "control", "ams", "room scheduling", "10 rooms"],
    powerDrawW: 25,
    voltage: "100-240V",
    referenceUrl: "https://atlona.com/product/vgw-hw/",
    ports: [
      port("Ethernet 1", "ethernet", "bidirectional"),
      port("Ethernet 2", "ethernet", "bidirectional"),
      port("USB", "usb", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "atlona-vgw-hw-20",
    deviceType: "controller",
    label: "Velocity Gateway VGW-HW-20",
    shortName: "VGW-HW-20",
    manufacturer: "Atlona",
    modelNumber: "AT-VGW-HW-20",
    searchTerms: ["atlona", "velocity", "vgw", "hw-20", "gateway", "control", "ams", "room scheduling", "20 rooms"],
    powerDrawW: 25,
    voltage: "100-240V",
    referenceUrl: "https://atlona.com/product/vgw-hw/",
    ports: [
      port("Ethernet 1", "ethernet", "bidirectional"),
      port("Ethernet 2", "ethernet", "bidirectional"),
      port("USB", "usb", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "atlona-vtp-700vl",
    deviceType: "controller",
    label: "Velocity 7\" Touch Panel",
    shortName: "VTP-700VL",
    manufacturer: "Atlona",
    modelNumber: "AT-VTP-700VL",
    searchTerms: ["atlona", "velocity", "vtp-700vl", "touch panel", "7 inch", "room scheduling", "control", "poe", "wall plate"],
    poeDrawW: 20,
    referenceUrl: "https://atlona.com/product/at-vtp-700vl-bl/",
    ports: [
      port("Ethernet (PoE+)", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "atlona-vtp-1000vl",
    deviceType: "controller",
    label: "Velocity 10\" Touch Panel",
    shortName: "VTP-1000VL",
    manufacturer: "Atlona",
    modelNumber: "AT-VTP-1000VL",
    searchTerms: ["atlona", "velocity", "vtp-1000vl", "touch panel", "10 inch", "room scheduling", "control", "poe", "wall plate", "led"],
    poeDrawW: 25,
    heightMm: 255,
    widthMm: 181,
    depthMm: 25,
    weightKg: 0.65,
    referenceUrl: "https://atlona.com/product/vtp-1000vl/",
    ports: [
      port("Ethernet (PoE)", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "atlona-vtpg-1000vl",
    deviceType: "controller",
    label: "Velocity 10\" All-In-One Panel",
    shortName: "VTPG-1000VL",
    manufacturer: "Atlona",
    modelNumber: "AT-VTPG-1000VL",
    searchTerms: ["atlona", "velocity", "vtpg-1000vl", "touch panel", "gateway", "10 inch", "all in one", "room scheduling", "control", "single room"],
    poeDrawW: 30,
    heightMm: 255,
    widthMm: 181,
    depthMm: 25,
    weightKg: 0.7,
    referenceUrl: "https://atlona.com/product/vtpg-1000vl/",
    ports: [
      port("Ethernet (PoE)", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "atlona-vkp-8e",
    deviceType: "controller",
    label: "Velocity 8-Button Keypad",
    shortName: "VKP-8E",
    manufacturer: "Atlona",
    modelNumber: "AT-VKP-8E",
    searchTerms: ["atlona", "velocity", "vkp-8e", "keypad", "8 button", "control", "epaper", "wall plate", "poe"],
    poeDrawW: 5,
    referenceUrl: "https://atlona.com/product/at-vkp-8e/",
    ports: [
      port("Ethernet (PoE)", "ethernet", "bidirectional"),
    ],
  },

  // ─── OMEGA SERIES — CONFERENCING / PRESENTATION ───────────────────────────────

  {
    id: "atlona-ome-ex-wp-kit-lt",
    deviceType: "av-over-ip",
    label: "Omega WP HDBaseT Extender Kit",
    shortName: "OME-EX-WP-KIT-LT",
    manufacturer: "Atlona",
    modelNumber: "AT-OME-EX-WP-KIT-LT",
    searchTerms: ["atlona", "omega", "ome", "hdbaset", "extender", "wallplate", "4k", "usb", "hdmi", "rs232", "classroom", "conferencing"],
    referenceUrl: "https://www.hallresearch.com/product/at-ome-ex-wp-kit-lt/",
    ports: [
      port("HDMI In (TX)", "hdmi", "input"),
      port("USB Host (TX)", "usb", "input"),
      port("USB Device (TX)", "usb", "output"),
      port("HDBaseT (TX→RX)", "ethernet", "output"),
      port("HDMI Out (RX)", "hdmi", "output"),
      port("RS-232", "serial", "bidirectional"),
      port("Ethernet Pass-Through", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "atlona-ome-ms42",
    deviceType: "switcher",
    label: "Omega 4x2 Switcher",
    shortName: "OME-MS42",
    manufacturer: "Atlona",
    modelNumber: "AT-OME-MS42",
    searchTerms: ["atlona", "omega", "ome-ms42", "switcher", "4x2", "matrix", "hdmi", "hdbaset", "conferencing", "4k"],
    referenceUrl: "https://atlona.com/product/at-ome-ms42/",
    ports: [
      ...ports("HDMI In", "hdmi", "input", 3),
      port("HDBaseT In", "ethernet", "input"),
      port("HDMI Out 1", "hdmi", "output"),
      port("HDMI Out 2", "hdmi", "output"),
      port("HDBaseT Out", "ethernet", "output"),
      port("Control Ethernet", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("IR", "ir", "bidirectional"),
      port("USB", "usb", "bidirectional"),
    ],
  },

  // ─── HDVS / AVANCE — HDBASET EXTENDERS ───────────────────────────────────────
  // Note: UHD-EX-70C and UHD-EX-100CE are discontinued. Replaced by HDR-EX series.
  // Included since still widely deployed in the field.

  {
    id: "atlona-uhd-ex-70c-kit",
    deviceType: "av-over-ip",
    label: "HDBaseT 4K Extender Kit 70m",
    shortName: "UHD-EX-70C-KIT",
    manufacturer: "Atlona",
    modelNumber: "AT-UHD-EX-70C-KIT",
    searchTerms: ["atlona", "hdbaset", "extender", "4k", "70m", "230ft", "uhd-ex", "hdmi", "poe", "rs232", "ir"],
    heightMm: 28,
    widthMm: 119,
    depthMm: 89,
    weightKg: 0.27,
    referenceUrl: "https://atlona.com/product/at-uhd-ex-70c-kit/",
    ports: [
      port("HDMI In (TX)", "hdmi", "input"),
      port("HDBaseT Out (TX)", "ethernet", "output"),
      port("HDBaseT In (RX)", "ethernet", "input"),
      port("HDMI Out (RX)", "hdmi", "output"),
      port("RS-232", "serial", "bidirectional"),
      port("IR", "ir", "bidirectional"),
    ],
  },

  {
    id: "atlona-uhd-ex-100ce-kit",
    deviceType: "av-over-ip",
    label: "HDBaseT 4K Extender Kit 100m",
    shortName: "UHD-EX-100CE-KIT",
    manufacturer: "Atlona",
    modelNumber: "AT-UHD-EX-100CE-KIT",
    searchTerms: ["atlona", "hdbaset", "extender", "4k", "100m", "330ft", "uhd-ex", "hdmi", "poe", "rs232", "ir", "ethernet"],
    referenceUrl: "https://atlona.com/product/at-uhd-ex-100ce-kit/",
    ports: [
      port("HDMI In (TX)", "hdmi", "input"),
      port("HDBaseT Out (TX)", "ethernet", "output"),
      port("HDBaseT In (RX)", "ethernet", "input"),
      port("HDMI Out (RX)", "hdmi", "output"),
      port("Ethernet Pass-Through", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("IR", "ir", "bidirectional"),
    ],
  },

  {
    id: "atlona-hdr-ex-70c-kit",
    deviceType: "av-over-ip",
    label: "HDR HDBaseT 4K Extender Kit 70m",
    shortName: "HDR-EX-70C-KIT",
    manufacturer: "Atlona",
    modelNumber: "AT-HDR-EX-70C-KIT",
    searchTerms: ["atlona", "hdbaset", "extender", "4k", "hdr", "70m", "230ft", "hdmi", "poe", "rs232", "hdr10"],
    referenceUrl: "https://atlona.com/product/at-hdr-ex-70c-kit/",
    ports: [
      port("HDMI In (TX)", "hdmi", "input"),
      port("HDBaseT Out (TX)", "ethernet", "output"),
      port("HDBaseT In (RX)", "ethernet", "input"),
      port("HDMI Out (RX)", "hdmi", "output"),
      port("RS-232", "serial", "bidirectional"),
      port("IR", "ir", "bidirectional"),
    ],
  },

  // ─── VELOCITY CONTROL ACCESSORIES ────────────────────────────────────────────

  {
    id: "atlona-vcc-rs232-kit",
    deviceType: "controller",
    label: "Velocity RS-232 Converter",
    shortName: "VCC-RS232-KIT",
    manufacturer: "Atlona",
    modelNumber: "AT-VCC-RS232-KIT",
    searchTerms: ["atlona", "velocity", "vcc", "rs232", "converter", "control", "poe", "ip to serial"],
    poeDrawW: 5,
    referenceUrl: "https://www.hallresearch.com/product/at-vcc-rs232-kit/",
    ports: [
      port("Ethernet (PoE)", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
    ],
  },

  {
    id: "atlona-vcc-ir3-kit",
    deviceType: "controller",
    label: "Velocity IR Converter",
    shortName: "VCC-IR3-KIT",
    manufacturer: "Atlona",
    modelNumber: "AT-VCC-IR3-KIT",
    searchTerms: ["atlona", "velocity", "vcc", "ir", "infrared", "converter", "control", "poe"],
    poeDrawW: 5,
    referenceUrl: "https://atlona.com/product/at-vcc-ir3-kit/",
    ports: [
      port("Ethernet (PoE)", "ethernet", "bidirectional"),
      port("IR Out 1", "ir", "output"),
      port("IR Out 2", "ir", "output"),
      port("IR Out 3", "ir", "output"),
    ],
  },

  {
    id: "atlona-vcc-relay-kit",
    deviceType: "controller",
    label: "Velocity Relay Converter",
    shortName: "VCC-RELAY-KIT",
    manufacturer: "Atlona",
    modelNumber: "AT-VCC-RELAY-KIT",
    searchTerms: ["atlona", "velocity", "vcc", "relay", "contact closure", "converter", "control", "poe", "gpio"],
    poeDrawW: 5,
    referenceUrl: "https://atlona.com/product/at-vcc-relay-kit/",
    ports: [
      port("Ethernet (PoE)", "ethernet", "bidirectional"),
      port("Relay / Sensor", "gpio", "bidirectional"),
    ],
  },

];
