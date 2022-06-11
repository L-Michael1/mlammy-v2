import React from "react";
import { Navbar } from "../../components/Navbar";
import { PageProps } from "../../types/common.types";
import {
    ArchivePageContainer,
    Memories,
    ImageContainer,
    MemoryContainer,
    DetailsContainer,
} from "./ArchivePage.styled";
import { memories } from "./ArchiveConstants";

const ArchivePage: React.FC<PageProps> = ({ themeType, toggleTheme }) => {
    return (
        <ArchivePageContainer>
            <Navbar themeType={themeType} toggleTheme={toggleTheme} />
            <Memories>
                {memories.map((memory) => {
                    return (
                        <MemoryContainer>
                            <ImageContainer>
                                <img src={memory.source} width={200} />
                            </ImageContainer>
                            <DetailsContainer>
                                <span>{memory.caption}</span>
                                <span>{memory.date}</span>
                                <span>{memory.location}</span>
                            </DetailsContainer>
                        </MemoryContainer>
                    );
                })}
            </Memories>
        </ArchivePageContainer>
    );
};

export default ArchivePage;
