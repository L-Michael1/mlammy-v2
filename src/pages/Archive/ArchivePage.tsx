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
import { Container } from "../../global.styled";
import { Footer } from "../../components/Footer";

const ArchivePage: React.FC<PageProps> = ({ themeType, toggleTheme }) => {
    return (
        <Container>
            <ArchivePageContainer>
                <Navbar themeType={themeType} toggleTheme={toggleTheme} />
                <Memories>
                    {memories.map((memory) => {
                        return (
                            <MemoryContainer>
                                <ImageContainer>
                                    <img src={memory.source} width={250} />
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
            <Footer themeType={themeType} />
        </Container>
    );
};

export default ArchivePage;
