import React, { useState } from "react";

// Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./components/Theme/Themes";
import GlobalStyle from "./components/Theme/globalStyles";

// Pages
import { AboutPage } from "./pages/About";

const App: React.FC = () => {
    let localTheme = localStorage.getItem("theme") ?? "dark";

    const [theme, setTheme] = useState<string>(localTheme);

    const toggleTheme = (): void => {
        let toggledTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", toggledTheme);
        setTheme(toggledTheme);
    };

    return (
        <Router>
            <ThemeProvider theme={theme === "light" ? light : dark}>
                <GlobalStyle />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <AboutPage
                                themeType={theme}
                                toggleTheme={toggleTheme}
                            />
                        }
                    />
                </Routes>
            </ThemeProvider>
        </Router>
    );
};

export default App;
