import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import * as styles from "./ThemeChanger.css";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      Theme:
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className={styles.select}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default ThemeChanger;
