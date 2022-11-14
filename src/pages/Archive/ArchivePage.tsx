import React from "react";
import { Navbar } from "../../components/Navbar";
import { PageProps } from "../../types/common.types";
import {
  ArchivePageContainer,
  Memories,
  ImageContainer,
  MemoryContainer,
  DetailsContainer,
  Detail,
} from "./ArchivePage.styled";
import { memories } from "./ArchiveConstants";
import { Container } from "../../global.styled";
import { Footer } from "../../components/Footer";

const ArchivePage: React.FC<PageProps> = ({ themeType, toggleTheme }) => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ArchivePageContainer>
        <Navbar themeType={themeType} toggleTheme={toggleTheme} />
        <Memories>
          {memories.map((memory) => {
            return (
              <MemoryContainer>
                <ImageContainer>
                  <img alt={memory.alt} src={memory.source} width={250} />
                </ImageContainer>
                <DetailsContainer>
                  <Detail>{memory.caption}</Detail>
                  <Detail>{memory.date}</Detail>
                  <Detail>{memory.location}</Detail>
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
