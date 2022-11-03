import React, { useState } from "react";

// Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./components/Theme/Themes";
import GlobalStyle from "./components/Theme/globalStyles";

// Pages
import { AboutPage } from "./pages/About";
import { ArchivePage } from "./pages/Archive";
import { SkillsPage } from "./pages/Skills";
import { ExperiencePage } from "./pages/Experience";
import { ProjectsPage } from "./pages/Projects";
import { ContactPage } from "./pages/Contact";

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
            {/* TODO: useContext for theme and toggleTheme instead of drilling props to each page */}
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
                    <Route
                        path="archive"
                        element={
                            <ArchivePage
                                themeType={theme}
                                toggleTheme={toggleTheme}
                            />
                        }
                    />
                    <Route
                        path="skills"
                        element={
                            <SkillsPage
                                themeType={theme}
                                toggleTheme={toggleTheme}
                            />
                        }
                    />
                    <Route
                        path="experience"
                        element={
                            <ExperiencePage
                                themeType={theme}
                                toggleTheme={toggleTheme}
                            />
                        }
                    />
                    <Route
                        path="projects"
                        element={
                            <ProjectsPage
                                themeType={theme}
                                toggleTheme={toggleTheme}
                            />
                        }
                    />
                    <Route
                        path="contact"
                        element={
                            <ContactPage
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
