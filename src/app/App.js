import Toggle from "components/Toggle";
import useDarkMode from "common/hooks/useCustomDarkMode";

function App() {
  const [value, theme, setTheme] = useDarkMode();
  const handleThemeChange = () => {
    setTheme(theme);
  };
  return (
    <div className="dark:bg-gray-800 bg-white min-h-screen transition duration-100 flex items-center justify-center">
      <button type="button" className="text-black dark:text-gray-50 pr-4">
        Light
      </button>
      <Toggle checked={value} onChange={handleThemeChange} />
      <button type="button" className="text-black dark:text-gray-50 pl-4">
        Dark
      </button>
    </div>
  );
}

export default App;
