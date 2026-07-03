import { useCallback, useEffect, useRef, useState } from "react";
import { useSchematicStore } from "../store";

interface ContextMenuState {
  pageId: string;
  x: number;
  y: number;
}

export default function PageTabs() {
  const pages = useSchematicStore((s) => s.pages);
  const activePage = useSchematicStore((s) => s.activePage);
  const setActivePage = useSchematicStore((s) => s.setActivePage);
  const addRackPage = useSchematicStore((s) => s.addRackPage);
  const removeRackPage = useSchematicStore((s) => s.removeRackPage);
  const renameRackPage = useSchematicStore((s) => s.renameRackPage);
  const addPrintSheetPage = useSchematicStore((s) => s.addPrintSheetPage);
  const removePrintSheetPage = useSchematicStore((s) => s.removePrintSheetPage);
  const renamePrintSheetPage = useSchematicStore((s) => s.renamePrintSheetPage);
  const duplicateRackPage = useSchematicStore((s) => s.duplicateRackPage);
  const duplicatePrintSheetPage = useSchematicStore((s) => s.duplicatePrintSheetPage);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close context menu on outside click or Escape
  useEffect(() => {
    if (!contextMenu) return;
    const close = () => setContextMenu(null);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", close);
      document.addEventListener("keydown", onKey);
    }, 0);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", onKey);
    };
  }, [contextMenu]);

  const startRename = useCallback((pageId: string, currentLabel: string) => {
    setContextMenu(null);
    setEditingId(pageId);
    setEditValue(currentLabel);
    setTimeout(() => inputRef.current?.select(), 0);
  }, []);

  const commitRename = useCallback(() => {
    if (!editingId || !editValue.trim()) { setEditingId(null); return; }
    const page = pages.find((p) => p.id === editingId);
    if (!page) { setEditingId(null); return; }
    if (page.type === "print-sheet") renamePrintSheetPage(editingId, editValue.trim());
    else renameRackPage(editingId, editValue.trim());
    setEditingId(null);
  }, [editingId, editValue, pages, renameRackPage, renamePrintSheetPage]);

  const handleContextMenu = useCallback((e: React.MouseEvent, pageId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenu({ pageId, x: e.clientX, y: e.clientY });
  }, []);

  const menuPage = contextMenu ? pages.find((p) => p.id === contextMenu.pageId) : null;
  const isPrintSheet = menuPage?.type === "print-sheet";

  const handleRename = () => {
    if (!menuPage) return;
    startRename(menuPage.id, menuPage.label);
  };

  const handleDuplicate = () => {
    if (!menuPage) return;
    setContextMenu(null);
    if (menuPage.type === "print-sheet") duplicatePrintSheetPage(menuPage.id);
    else duplicateRackPage(menuPage.id);
  };

  const handleDelete = () => {
    if (!menuPage) return;
    setContextMenu(null);
    if (menuPage.type === "print-sheet") {
      if (confirm(`Delete print sheet "${menuPage.label}"?`)) removePrintSheetPage(menuPage.id);
    } else {
      if (confirm(`Delete rack page "${menuPage.label}"? This will remove all racks and placements on this page.`)) {
        removeRackPage(menuPage.id);
      }
    }
  };

  const tabClass = (isActive: boolean, isPrint = false) =>
    `px-3 py-1 rounded-t border border-b-0 whitespace-nowrap transition-colors ${
      isActive
        ? isPrint
          ? "bg-white dark:bg-slate-700 border-violet-400 font-semibold text-violet-900 dark:text-violet-300"
          : "bg-white dark:bg-slate-700 border-neutral-300 dark:border-slate-500 font-semibold text-neutral-900 dark:text-slate-100"
        : isPrint
          ? "bg-violet-50 dark:bg-slate-800 border-transparent text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-slate-700"
          : "bg-neutral-200 dark:bg-slate-800 border-transparent text-neutral-600 dark:text-slate-400 hover:bg-neutral-50 dark:hover:bg-slate-700"
    }`;

  return (
    <>
      <div
        data-print-hide
        className="flex items-center gap-0.5 bg-neutral-100 dark:bg-slate-900 border-b border-neutral-300 dark:border-slate-600 px-2 py-0 text-xs select-none overflow-x-auto"
        style={{ minHeight: 28 }}
      >
        {/* Schematic tab */}
        <button className={tabClass(activePage === "schematic")} onClick={() => setActivePage("schematic")}>
          Schematic
        </button>

        {/* Page tabs */}
        {pages.map((page) => {
          const isPrint = page.type === "print-sheet";
          return (
            <button
              key={page.id}
              className={tabClass(activePage === page.id, isPrint)}
              onClick={() => setActivePage(page.id)}
              onDoubleClick={() => startRename(page.id, page.label)}
              onContextMenu={(e) => handleContextMenu(e, page.id)}
              title="Double-click to rename, right-click for options"
            >
              {editingId === page.id ? (
                <input
                  ref={inputRef}
                  className="bg-white border border-blue-400 rounded px-1 py-0 text-xs w-24 outline-none"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={commitRename}
                  onKeyDown={(e) => {
                    e.stopPropagation();
                    if (e.key === "Enter") commitRename();
                    if (e.key === "Escape") setEditingId(null);
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <>{isPrint ? "📄 " : ""}{page.label}</>
              )}
            </button>
          );
        })}

        {/* Add rack page */}
        <button
          className="px-2 py-1 text-neutral-400 dark:text-slate-500 hover:text-neutral-700 dark:hover:text-slate-200 hover:bg-neutral-200 dark:hover:bg-slate-700 rounded"
          onClick={() => addRackPage(`Rack Page ${pages.filter((p) => p.type === "rack-elevation").length + 1}`)}
          title="Add rack elevation page"
        >
          +
        </button>

        {/* Add print sheet */}
        <button
          className="px-2 py-1 text-violet-400 hover:text-violet-700 hover:bg-violet-100 rounded"
          onClick={() => addPrintSheetPage()}
          title="Add print sheet"
        >
          📄+
        </button>
      </div>

      {/* Context menu */}
      {contextMenu && menuPage && (
        <div
          ref={menuRef}
          className="fixed z-50 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded shadow-lg py-1 min-w-[140px] text-xs"
          style={{ left: contextMenu.x, top: contextMenu.y }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-neutral-400 dark:text-slate-400 border-b border-neutral-100 dark:border-slate-600 mb-1 truncate">
            {isPrintSheet ? "📄 " : ""}{menuPage.label}
          </div>
          <button
            className="w-full text-left px-3 py-1.5 text-gray-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer"
            onClick={handleRename}
          >
            Rename
          </button>
          <button
            className="w-full text-left px-3 py-1.5 text-gray-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer"
            onClick={handleDuplicate}
          >
            Duplicate
          </button>
          <div className="border-t border-gray-100 dark:border-slate-600 my-1" />
          <button
            className="w-full text-left px-3 py-1.5 text-red-600 hover:bg-red-50 hover:text-red-700 cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}
