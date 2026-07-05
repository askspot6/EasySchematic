import { port, ports } from "./_helpers";
import type { DeviceTemplate } from "../types";

/**
 * Q-SYS (QSC) — Complete Product Library
 * Cores, network amplifiers, I/O peripherals, touch screen controllers, microphones.
 * Source: qsys.com product pages and spec sheets, verified July 2026.
 * Note: CXD-Q Series is discontinued — replaced by CX-Q Series. Included since widely deployed.
 * ⚠ Addendum: Core Nano/8 Flex exact power draw not published on product pages.
 *   Server Core X10/X20r/X50r physical dimensions not pulled from spec sheets.
 *   NM-T1 exact dimensions not published on product page.
 */
export const templates: DeviceTemplate[] = [

  // ─── CORE PROCESSORS — CURRENT ────────────────────────────────────────────────

  {
    id: "qsys-core-nano",
    deviceType: "audio-dsp",
    label: "Core Nano",
    shortName: "Core Nano",
    manufacturer: "Q-SYS",
    modelNumber: "Core Nano",
    searchTerms: ["qsys", "qsc", "core nano", "dsp", "q-lan", "aes67", "network", "small", "half rack"],
    powerDrawW: 35,     // ⚠ estimated — not published on product page
    voltage: "100-240V",
    heightMm: 44,       // 1RU half rack
    widthMm: 210,       // half rack
    depthMm: 280,
    weightKg: 1.6,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/processing/core-nano/",
    ports: [
      port("LAN A (Q-LAN)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("USB-B (AV Bridge)", "usb", "bidirectional"),
      port("USB-A (Host)", "usb", "bidirectional"),
      port("RS-232 1", "serial", "bidirectional"),
      port("RS-232 2", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "qsys-core-8-flex",
    deviceType: "audio-dsp",
    label: "Core 8 Flex",
    shortName: "Core 8 Flex",
    manufacturer: "Q-SYS",
    modelNumber: "Core 8 Flex",
    searchTerms: ["qsys", "qsc", "core 8 flex", "dsp", "q-lan", "aes67", "flex", "analog", "gpio", "small", "half rack"],
    powerDrawW: 45,     // ⚠ estimated — not published on product page
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 210,
    depthMm: 280,
    weightKg: 1.8,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/processing/core-8-flex/",
    ports: [
      ...ports("Flex Channel", "analog-audio", "bidirectional", 8, "phoenix"),
      port("GPIO In/Out", "gpio", "bidirectional"),
      port("LAN A (Q-LAN)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("USB-C (AV Bridge)", "usb", "bidirectional"),
      port("USB-A (Host)", "usb", "bidirectional"),
      port("RS-232 1", "serial", "bidirectional"),
      port("RS-232 2", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "qsys-core-110f",
    deviceType: "audio-dsp",
    label: "Core 110f",
    shortName: "Core 110f",
    manufacturer: "Q-SYS",
    modelNumber: "Core 110f",
    searchTerms: ["qsys", "qsc", "core 110f", "dsp", "q-lan", "aes67", "dante", "flex", "analog", "voip", "pots", "1ru"],
    powerDrawW: 150,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 356,
    weightKg: 4.5,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/processing/core-110f/",
    ports: [
      ...ports("Mic/Line In", "analog-audio", "input", 8, "phoenix"),
      ...ports("Line Out", "analog-audio", "output", 8, "phoenix"),
      ...ports("Flex Channel", "analog-audio", "bidirectional", 8, "phoenix"),
      port("LAN A (Q-LAN)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("USB-B (AV Bridge)", "usb", "bidirectional"),
      port("USB-A (Host)", "usb", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("POTS (RJ-11)", "analog-audio", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "qsys-core-24f",
    deviceType: "audio-dsp",
    label: "Core 24f",
    shortName: "Core 24f",
    manufacturer: "Q-SYS",
    modelNumber: "Core 24f",
    searchTerms: ["qsys", "qsc", "core 24f", "dsp", "q-lan", "aes67", "dante", "flex", "analog", "voip", "1ru", "next gen"],
    powerDrawW: 150,    // ⚠ estimated — not published, similar chassis to 110f
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    depthMm: 356,
    weightKg: 4.5,     // ⚠ estimated
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/processing/core-24f/",
    ports: [
      ...ports("Mic/Line In", "analog-audio", "input", 8, "phoenix"),
      ...ports("Line Out", "analog-audio", "output", 8, "phoenix"),
      ...ports("Flex Channel", "analog-audio", "bidirectional", 8, "phoenix"),
      port("GPIO In/Out", "gpio", "bidirectional"),
      port("LAN A (Q-LAN 2.5G)", "ethernet", "bidirectional"),
      port("LAN B (Q-LAN 2.5G)", "ethernet", "bidirectional"),
      port("AUX LAN 1 (2.5G)", "ethernet", "bidirectional"),
      port("AUX LAN 2 (2.5G)", "ethernet", "bidirectional"),
      port("USB-C (AV Bridge)", "usb", "bidirectional"),
      port("USB-A (Host)", "usb", "bidirectional"),
      port("RS-232 1", "serial", "bidirectional"),
      port("RS-232 2", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "qsys-nv-32-h",
    deviceType: "audio-dsp",
    label: "NV-32-H (Core Capable)",
    shortName: "NV-32-H",
    manufacturer: "Q-SYS",
    modelNumber: "NV-32-H",
    searchTerms: ["qsys", "qsc", "nv-32-h", "video", "hdmi", "core capable", "peripheral", "av bridge", "usb", "half rack"],
    powerDrawW: 60,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 210,
    depthMm: 280,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/processing/nv-32-h-core-capable/",
    ports: [
      ...ports("HDMI In", "hdmi", "input", 2),
      ...ports("HDMI Out", "hdmi", "output", 2),
      port("Stereo Line In", "analog-audio", "input", "phoenix"),
      port("Stereo Line Out", "analog-audio", "output", "phoenix"),
      port("LAN A (Q-LAN)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("USB-B (AV Bridge)", "usb", "bidirectional"),
      port("GPIO In/Out", "gpio", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── SERVER CORES ─────────────────────────────────────────────────────────────
  // ⚠ ADDENDUM: Server Core X10/X20r/X50r exact dimensions and weight not pulled from spec sheets.
  // All are rack-mounted enterprise servers. X10/X20r are 1RU; X50r is 2RU.

  {
    id: "qsys-server-core-x10",
    deviceType: "audio-dsp",
    label: "Server Core X10",
    shortName: "Server Core X10",
    manufacturer: "Q-SYS",
    modelNumber: "Server Core X10",
    searchTerms: ["qsys", "qsc", "server core x10", "dsp", "q-lan", "aes67", "dante", "server", "large", "enterprise", "x class"],
    powerDrawW: 400,    // ⚠ estimated — enterprise server platform
    voltage: "100-240V",
    heightMm: 44,       // 1RU
    widthMm: 483,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/processing/server-core-x10/",
    ports: [
      port("LAN A (Q-LAN)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("Management Ethernet", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("USB-A (Host)", "usb", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "qsys-server-core-x20r",
    deviceType: "audio-dsp",
    label: "Server Core X20r",
    shortName: "Server Core X20r",
    manufacturer: "Q-SYS",
    modelNumber: "Server Core X20r",
    searchTerms: ["qsys", "qsc", "server core x20r", "dsp", "q-lan", "aes67", "dante", "server", "redundant", "psu", "x class"],
    powerDrawW: 600,    // ⚠ estimated — dual redundant PSU
    voltage: "100-240V",
    heightMm: 44,       // 1RU
    widthMm: 483,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/processing/server-core-x20r/",
    ports: [
      port("LAN A (Q-LAN)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("Management Ethernet", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("USB-A (Host)", "usb", "bidirectional"),
      port("AC Power 1 (Redundant)", "power", "input"),
      port("AC Power 2 (Redundant)", "power", "input"),
    ],
  },

  {
    id: "qsys-server-core-x50r",
    deviceType: "audio-dsp",
    label: "Server Core X50r",
    shortName: "Server Core X50r",
    manufacturer: "Q-SYS",
    modelNumber: "Server Core X50r",
    searchTerms: ["qsys", "qsc", "server core x50r", "dsp", "q-lan", "aes67", "dante", "server", "large", "enterprise", "2ru", "x class"],
    powerDrawW: 1000,   // ⚠ estimated — 2RU enterprise server with redundant PSU
    voltage: "100-240V",
    heightMm: 88,       // 2RU
    widthMm: 483,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/processing/server-core-x50r/",
    ports: [
      port("LAN A (Q-LAN)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("Management Ethernet", "ethernet", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("USB-A (Host)", "usb", "bidirectional"),
      port("AC Power 1 (Redundant)", "power", "input"),
      port("AC Power 2 (Redundant)", "power", "input"),
    ],
  },

  // ─── DISCONTINUED CORES (still widely deployed) ───────────────────────────────

  {
    id: "qsys-core-510i",
    deviceType: "audio-dsp",
    label: "Core 510i",
    shortName: "Core 510i",
    manufacturer: "Q-SYS",
    modelNumber: "Core 510i",
    searchTerms: ["qsys", "qsc", "core 510i", "dsp", "q-lan", "aes67", "card based", "2ru", "large", "discontinued"],
    powerDrawW: 400,
    voltage: "100-240V",
    heightMm: 88,       // 2RU
    widthMm: 483,
    depthMm: 457,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/processing/core-510i/",
    ports: [
      port("LAN A (Q-LAN)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("GPIO In/Out", "gpio", "bidirectional"),
      port("RS-232", "serial", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── NETWORK AMPLIFIERS — CX-Q SERIES (Current) ───────────────────────────────

  {
    id: "qsys-cx-q-4k4",
    deviceType: "amplifier",
    label: "CX-Q 4K4",
    shortName: "CX-Q 4K4",
    manufacturer: "Q-SYS",
    modelNumber: "CX-Q 4K4",
    searchTerms: ["qsys", "qsc", "cx-q", "4k4", "amplifier", "network", "4 channel", "70v", "100v", "q-lan"],
    powerDrawW: 4000,
    voltage: "100-240V",
    heightMm: 44,       // 1RU
    widthMm: 483,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/audio-network-amplifiers/cx-q-series/",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 4, "phoenix"),
      ...ports("Speaker Out", "speaker-level", "output", 4, "phoenix"),
      port("LAN A (Q-LAN)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("GPIO In/Out", "gpio", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "qsys-cx-q-4k8",
    deviceType: "amplifier",
    label: "CX-Q 4K8",
    shortName: "CX-Q 4K8",
    manufacturer: "Q-SYS",
    modelNumber: "CX-Q 4K8",
    searchTerms: ["qsys", "qsc", "cx-q", "4k8", "amplifier", "network", "4 channel", "70v", "100v", "q-lan"],
    powerDrawW: 4000,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/audio-network-amplifiers/cx-q-series/",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 4, "phoenix"),
      ...ports("Speaker Out", "speaker-level", "output", 4, "phoenix"),
      port("LAN A (Q-LAN)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("GPIO In/Out", "gpio", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "qsys-cx-q-8k4",
    deviceType: "amplifier",
    label: "CX-Q 8K4",
    shortName: "CX-Q 8K4",
    manufacturer: "Q-SYS",
    modelNumber: "CX-Q 8K4",
    searchTerms: ["qsys", "qsc", "cx-q", "8k4", "amplifier", "network", "8 channel", "70v", "100v", "q-lan"],
    powerDrawW: 8000,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/audio-network-amplifiers/cx-q-series/",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 8, "phoenix"),
      ...ports("Speaker Out", "speaker-level", "output", 8, "phoenix"),
      port("LAN A (Q-LAN)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("GPIO In/Out", "gpio", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "qsys-cx-q-8k8",
    deviceType: "amplifier",
    label: "CX-Q 8K8",
    shortName: "CX-Q 8K8",
    manufacturer: "Q-SYS",
    modelNumber: "CX-Q 8K8",
    searchTerms: ["qsys", "qsc", "cx-q", "8k8", "amplifier", "network", "8 channel", "70v", "100v", "q-lan"],
    powerDrawW: 8000,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/audio-network-amplifiers/cx-q-series/",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 8, "phoenix"),
      ...ports("Speaker Out", "speaker-level", "output", 8, "phoenix"),
      port("LAN A (Q-LAN)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("GPIO In/Out", "gpio", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── NETWORK AMPLIFIERS — MPA-Q SERIES (Current) ──────────────────────────────

  {
    id: "qsys-mpa-q-4x250",
    deviceType: "amplifier",
    label: "MPA-Q 4x250",
    shortName: "MPA-Q 4x250",
    manufacturer: "Q-SYS",
    modelNumber: "MPA-Q 4x250",
    searchTerms: ["qsys", "qsc", "mpa-q", "amplifier", "network", "4 channel", "250w", "70v", "100v", "q-lan", "poe"],
    powerDrawW: 1200,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    referenceUrl: "https://www.qsys.com/products/power-amplifiers/installed/network/mpa-q-series/",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 4, "phoenix"),
      ...ports("Speaker Out", "speaker-level", "output", 4, "phoenix"),
      port("LAN A (Q-LAN / PoE)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "qsys-mpa-q-4x500",
    deviceType: "amplifier",
    label: "MPA-Q 4x500",
    shortName: "MPA-Q 4x500",
    manufacturer: "Q-SYS",
    modelNumber: "MPA-Q 4x500",
    searchTerms: ["qsys", "qsc", "mpa-q", "amplifier", "network", "4 channel", "500w", "70v", "100v", "q-lan", "poe"],
    powerDrawW: 2400,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    referenceUrl: "https://www.qsys.com/products/power-amplifiers/installed/network/mpa-q-series/",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 4, "phoenix"),
      ...ports("Speaker Out", "speaker-level", "output", 4, "phoenix"),
      port("LAN A (Q-LAN / PoE)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "qsys-mpa-q-8x125",
    deviceType: "amplifier",
    label: "MPA-Q 8x125",
    shortName: "MPA-Q 8x125",
    manufacturer: "Q-SYS",
    modelNumber: "MPA-Q 8x125",
    searchTerms: ["qsys", "qsc", "mpa-q", "amplifier", "network", "8 channel", "125w", "70v", "100v", "q-lan"],
    powerDrawW: 1500,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    referenceUrl: "https://www.qsys.com/products/power-amplifiers/installed/network/mpa-q-series/",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 8, "phoenix"),
      ...ports("Speaker Out", "speaker-level", "output", 8, "phoenix"),
      port("LAN A (Q-LAN / PoE)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "qsys-mpa-q-8x250",
    deviceType: "amplifier",
    label: "MPA-Q 8x250",
    shortName: "MPA-Q 8x250",
    manufacturer: "Q-SYS",
    modelNumber: "MPA-Q 8x250",
    searchTerms: ["qsys", "qsc", "mpa-q", "amplifier", "network", "8 channel", "250w", "70v", "100v", "q-lan"],
    powerDrawW: 2800,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    referenceUrl: "https://www.qsys.com/products/power-amplifiers/installed/network/mpa-q-series/",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 8, "phoenix"),
      ...ports("Speaker Out", "speaker-level", "output", 8, "phoenix"),
      port("LAN A (Q-LAN / PoE)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  // ─── QIO SERIES — I/O EXPANDERS ───────────────────────────────────────────────

  {
    id: "qsys-qio-aio8x8",
    deviceType: "audio-interface",
    label: "QIO-AIO8x8",
    shortName: "QIO-AIO8x8",
    manufacturer: "Q-SYS",
    modelNumber: "QIO-AIO8x8",
    searchTerms: ["qsys", "qsc", "qio", "aio8x8", "io expander", "analog", "8x8", "q-lan", "network io", "poe"],
    poeDrawW: 25,
    heightMm: 44,
    widthMm: 210,   // half rack
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/control-io-controllers/qio-series/",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 8, "phoenix"),
      ...ports("Analog Out", "analog-audio", "output", 8, "phoenix"),
      port("LAN A (Q-LAN / PoE)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "qsys-qio-aio24x24",
    deviceType: "audio-interface",
    label: "QIO-AIO24x24",
    shortName: "QIO-AIO24x24",
    manufacturer: "Q-SYS",
    modelNumber: "QIO-AIO24x24",
    searchTerms: ["qsys", "qsc", "qio", "aio24x24", "io expander", "analog", "24x24", "q-lan", "network io", "1ru", "high density"],
    powerDrawW: 45,
    voltage: "100-240V",
    heightMm: 44,
    widthMm: 483,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/control-io-controllers/qio-series/",
    ports: [
      ...ports("Analog In", "analog-audio", "input", 24, "phoenix"),
      ...ports("Analog Out", "analog-audio", "output", 24, "phoenix"),
      port("LAN A (Q-LAN)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
      port("GPIO In/Out", "gpio", "bidirectional"),
      port("AC Power", "power", "input"),
    ],
  },

  {
    id: "qsys-qio-gp8x8",
    deviceType: "audio-interface",
    label: "QIO-GP8x8",
    shortName: "QIO-GP8x8",
    manufacturer: "Q-SYS",
    modelNumber: "QIO-GP8x8",
    searchTerms: ["qsys", "qsc", "qio", "gp8x8", "gpio", "control", "q-lan", "network io", "poe"],
    poeDrawW: 10,
    heightMm: 44,
    widthMm: 210,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/control-io-controllers/qio-series/qio-gp8x8/",
    ports: [
      port("GPIO In/Out", "gpio", "bidirectional"),
      port("LAN A (Q-LAN / PoE)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
    ],
  },

  // ─── TOUCH SCREEN CONTROLLERS ────────────────────────────────────────────────

  {
    id: "qsys-tsc-50-g3",
    deviceType: "controller",
    label: "TSC-50-G3",
    shortName: "TSC-50-G3",
    manufacturer: "Q-SYS",
    modelNumber: "TSC-50-G3",
    searchTerms: ["qsys", "qsc", "tsc-50", "tsc", "g3", "touchscreen", "5 inch", "wall plate", "poe", "uci", "single gang"],
    poeDrawW: 15,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/control-io-controllers/q-sys-touch-screen-controllers/tsc-50-g3/",
    ports: [
      port("Ethernet (PoE)", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "qsys-tsc-70-g3",
    deviceType: "controller",
    label: "TSC-70-G3",
    shortName: "TSC-70-G3",
    manufacturer: "Q-SYS",
    modelNumber: "TSC-70-G3",
    searchTerms: ["qsys", "qsc", "tsc-70", "tsc", "g3", "touchscreen", "7 inch", "wall plate", "poe", "uci", "dual gang", "scheduling"],
    poeDrawW: 25,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/control-io-controllers/q-sys-touch-screen-controllers/tsc-70-g3/",
    ports: [
      port("Ethernet (PoE+)", "ethernet", "bidirectional"),
      port("USB-C (AV Bridge)", "usb", "bidirectional"),
    ],
  },

  {
    id: "qsys-tsc-101-g3",
    deviceType: "controller",
    label: "TSC-101-G3",
    shortName: "TSC-101-G3",
    manufacturer: "Q-SYS",
    modelNumber: "TSC-101-G3",
    searchTerms: ["qsys", "qsc", "tsc-101", "tsc", "g3", "touchscreen", "10 inch", "wall plate", "poe", "uci", "dual gang", "scheduling"],
    poeDrawW: 25,
    heightMm: 39,
    widthMm: 255,
    depthMm: 255,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/control-io-controllers/q-sys-touch-screen-controllers/tsc-101-g3/",
    ports: [
      port("Ethernet (PoE+)", "ethernet", "bidirectional"),
      port("USB-C (AV Bridge)", "usb", "bidirectional"),
    ],
  },

  // ─── NETWORK MICROPHONES ─────────────────────────────────────────────────────

  {
    id: "qsys-nm-t1",
    deviceType: "audio-interface",
    label: "NM-T1",
    shortName: "NM-T1",
    manufacturer: "Q-SYS",
    modelNumber: "NM-T1",
    searchTerms: ["qsys", "qsc", "nm-t1", "nm series", "microphone", "beamforming", "tabletop", "aec", "poe", "conference"],
    poeDrawW: 15,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/audio-io-peripherals/nm-t1/",
    ports: [
      port("Ethernet (PoE)", "ethernet", "bidirectional"),
    ],
  },

  // ─── NETWORK LOUDSPEAKERS ────────────────────────────────────────────────────

  {
    id: "qsys-nl-p1",
    deviceType: "speaker",
    label: "NL-P1",
    shortName: "NL-P1",
    manufacturer: "Q-SYS",
    modelNumber: "NL-P1",
    searchTerms: ["qsys", "qsc", "nl-p1", "nl series", "network loudspeaker", "poe", "ceiling", "pendant"],
    poeDrawW: 15,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/network-loudspeakers/",
    ports: [
      port("Ethernet (PoE)", "ethernet", "bidirectional"),
    ],
  },

  {
    id: "qsys-nl-sb42",
    deviceType: "speaker",
    label: "NL-SB42",
    shortName: "NL-SB42",
    manufacturer: "Q-SYS",
    modelNumber: "NL-SB42",
    searchTerms: ["qsys", "qsc", "nl-sb42", "nl series", "network loudspeaker", "soundbar", "poe", "collaboration"],
    poeDrawW: 25,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/network-loudspeakers/",
    ports: [
      port("Ethernet (PoE+)", "ethernet", "bidirectional"),
    ],
  },

  // ─── PAGING STATIONS ─────────────────────────────────────────────────────────

  {
    id: "qsys-ps-1",
    deviceType: "controller",
    label: "PS-1 Page Station",
    shortName: "PS-1",
    manufacturer: "Q-SYS",
    modelNumber: "PS-1",
    searchTerms: ["qsys", "qsc", "ps-1", "page station", "paging", "microphone", "gooseneck", "q-lan", "network"],
    poeDrawW: 10,
    referenceUrl: "https://www.qsys.com/products-solutions/q-sys/audio-io-peripherals/page-stations/",
    ports: [
      port("LAN A (Q-LAN / PoE)", "ethernet", "bidirectional"),
      port("LAN B (Redundant)", "ethernet", "bidirectional"),
    ],
  },

];
