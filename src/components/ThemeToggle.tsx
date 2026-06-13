import { useEffect, useState } from "react";

const STORAGE_KEY = "gitbag-island-theme";

function resolveInitialTheme() {
  if (typeof window === "undefined") {
    return false;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "dark") {
    return true;
  }
  if (stored === "light") {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(resolveInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    window.localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
  }, [dark]);

  return (
    <label className="theme-toggle" aria-label="切换夜间模式">
      <span>{dark ? "夜岛" : "晨岛"}</span>
      <button
        type="button"
        className="animal-switch"
        data-checked={dark ? "true" : "false"}
        aria-pressed={dark}
        onClick={() => setDark((value) => !value)}
      >
        <span className="animal-switch-text">{dark ? "ON" : "OFF"}</span>
        <span className="animal-switch-handle" />
      </button>
    </label>
  );
}
