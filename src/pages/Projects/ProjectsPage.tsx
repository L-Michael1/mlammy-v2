import React from "react";
import { Navbar } from "../../components/Navbar";
import { PageProps } from "../../types/common.types";

const ProjectsPage: React.FC<PageProps> = ({ themeType, toggleTheme }) => {
    return (
        <div>
            <Navbar themeType={themeType} toggleTheme={toggleTheme} />
        </div>
    );
};

export default ProjectsPage;
