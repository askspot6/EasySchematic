import type { DeviceTemplate } from "./types";
import fallbackData from "./deviceLibrary.fallback.json";

// ─── Tri-State build: remote community library fetch disabled. ────────────────
// We serve our own curated device library from deviceLibrary.fallback.json.
// The remote API at api.easyschematic.live is intentionally not contacted.

let degraded = false;
export function isLibraryDegraded(): boolean {
  return degraded;
}

export function getBundledTemplates(): DeviceTemplate[] {
  return fallbackData as DeviceTemplate[];
}

export function getTemplateById(id: string, extra: DeviceTemplate[] = []): DeviceTemplate | undefined {
  const bundled = fallbackData as DeviceTemplate[];
  return bundled.find((t) => t.id === id) ?? extra.find((t) => t.id === id);
}

export function getCardsByFamily(family: string, extra: DeviceTemplate[] = []): DeviceTemplate[] {
  const bundled = fallbackData as DeviceTemplate[];
  return [
    ...bundled.filter((t) => t.slotFamily === family),
    ...extra.filter((t) => t.slotFamily === family),
  ];
}

// Always returns bundled templates — no remote fetch.
export async function fetchTemplates(): Promise<DeviceTemplate[]> {
  return fallbackData as DeviceTemplate[];
}

// ==================== AUTH & DRAFTS ====================
// Stub implementations — community features not used in Tri-State build.


export async function checkSession(): Promise<{ id: string; email: string; name: string | null } | null> {
  return null;
}

export async function requestLogin(_email: string, _returnTo?: string): Promise<void> {}

export async function createDraft(_data: unknown): Promise<string> {
  throw new Error("Community features not enabled");
}

export async function createHandoff(): Promise<string> {
  throw new Error("Community features not enabled");
}

export async function logout(): Promise<void> {}

// ==================== CLOUD SCHEMATICS ====================

export interface CloudSchematic {
  id: string;
  name: string;
  size_bytes: number;
  shared: number;
  share_token: string | null;
  is_template: number;
  created_at: string;
  updated_at: string;
}

export async function saveSchematicToCloud(_data: unknown): Promise<CloudSchematic> {
  throw new Error("Cloud features not enabled");
}

export async function updateSchematicInCloud(_id: string, _data: unknown): Promise<CloudSchematic> {
  throw new Error("Cloud features not enabled");
}

export async function listCloudSchematics(): Promise<CloudSchematic[]> {
  return [];
}

export async function loadCloudSchematic(_id: string): Promise<unknown> {
  throw new Error("Cloud features not enabled");
}

export async function deleteCloudSchematic(_id: string): Promise<void> {}

export async function toggleSchematicSharing(_id: string, _shared: boolean): Promise<CloudSchematic> {
  throw new Error("Cloud features not enabled");
}

export async function loadSharedSchematic(_token: string): Promise<unknown> {
  throw new Error("Cloud features not enabled");
}

export async function renameCloudSchematic(_id: string, _name: string): Promise<CloudSchematic> {
  throw new Error("Cloud features not enabled");
}

export async function setSchematicAsTemplate(_id: string): Promise<void> {}

export async function clearSchematicTemplate(): Promise<void> {}

export async function loadSchematicTemplate(): Promise<unknown | null> {
  return null;
}

// ==================== TEMPLATES ====================

export async function createSubmission(
  _action: "create" | "update",
  _data: unknown,
  _templateId?: string,
  _submitterNote?: string,
  _source?: string,
): Promise<{ id: string }> {
  throw new Error("Community features not enabled");
}
