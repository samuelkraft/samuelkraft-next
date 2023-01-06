import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
import cn from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

import { IconArc, IconCheck, IconMoon, IconSun } from "./Icons";

const themes = [
  { id: "system", label: "Automatic" },
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "arc", label: "Arc" },
];

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [isArcBrowser, setIsArcBrowser] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      const isArc =
        document.documentElement.style.getPropertyValue(
          "--arc-palette-foregroundPrimary"
        ) !== "";
      if (isArc) setIsArcBrowser(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Listbox value={theme} onChange={(value) => setTheme(value)}>
        {({ open }) => {
          const iconClassName = cn(
            "w-5 h-5 hover:text-primary transition-colors",
            open ? "text-primary" : "text-secondary"
          );
          return (
            <div className="relative mt-1">
              <Listbox.Button
                className={cn(
                  "relative w-8 h-8 cursor-default rounded-full flex items-center justify-center focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300",
                  open && "bg-secondaryA"
                )}
              >
                {resolvedTheme === "dark" ? (
                  <IconMoon className={iconClassName} />
                ) : resolvedTheme === "arc" ? (
                  <IconArc className={iconClassName} />
                ) : (
                  <IconSun className={iconClassName} />
                )}
              </Listbox.Button>
              <AnimatePresence>
                {open && (
                  <Listbox.Options
                    as={motion.ul}
                    static
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.3 }}
                    className="absolute right-0 p-2 mt-2 overflow-auto text-base origin-top-right shadow-lg max-h-60 w-42 rounded-xl bg-blur backdrop-blur-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    {themes
                      .filter((theme) =>
                        isArcBrowser ? true : theme.id !== "arc"
                      )
                      .map((theme) => (
                        <Listbox.Option
                          key={theme.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 rounded-md ${
                              active ? "bg-secondaryA" : "text-primary"
                            }`
                          }
                          value={theme.id}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {theme.label}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                  <IconCheck
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                  </Listbox.Options>
                )}
              </AnimatePresence>
            </div>
          );
        }}
      </Listbox>
    </>
  );
}
