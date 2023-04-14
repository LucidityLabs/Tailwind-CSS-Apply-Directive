import { Switch } from "@headlessui/react";

export default function DarkModeExampleBox({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}) {
  return (
    <>
      <div className="h-auto w-1/2 flex-col rounded-xl bg-gray-100 p-4 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="font-bold">Dark Mode Example</h1>
          </div>
          <div>
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              className={`${
                darkMode ? "bg-slate-700" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  darkMode ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </div>
        </div>
        <div>
          This is a simple example demonstrating how elements react to the dark
          mode change using Next.js, React, and Tailwind CSS.
        </div>
      </div>
    </>
  );
}
