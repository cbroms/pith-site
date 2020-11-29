import Head from "next/head";

import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: [intro] 2fr [intro-end links] 1fr [links-end free] 2.75fr [free-end];
  grid-template-rows: [content] 1.5fr [content-end pith] 2fr [pith-end];

  max-height: 100vh;
  height: 100vh;
  color: #e2e2e2;

  background-color: #0f0f0f;

  @media (max-width: 768px) {
    grid-template-columns: [intro] 2fr [intro-end links] 1fr [links-end free] 0fr [free-end];
    grid-template-rows: [content] 1fr [content-end links] 1fr [links-end pith] 3fr [pith-end];
  }

  overflow-y: hidden;
`;

const StyledIntro = styled.div`
  box-sizing: border-box;
  grid-column-start: intro;
  grid-column-end: intro-end;
  grid-row-start: content;
  grid-row-end: content-end;

  padding: 60px 40px;

  height: 100%;

  @media (max-width: 768px) {
    grid-column-start: intro;
    grid-column-end: free-end;

    padding 20px 40px;
    padding-top: 40px;
  }

  h1 {
    margin: 0;
    max-width: 350px;
  }

  display: flex;
  flex-flow: wrap;
  align-content: flex-end;
`;

const StyledLinks = styled.div`
  box-sizing: border-box;
  grid-column-start: links;
  grid-column-end: links-end;
  grid-row-start: content;
  grid-row-end: content-end;

  padding: 60px 40px;
  height: 100%;

  @media (max-width: 768px) {
    grid-column-start: intro;
    grid-column-end: free-end;
    grid-row-start: links;
    grid-row-end: links-end;

    padding 20px 40px;
  }

  a {
    width: 100%;
    display: inline-block;
    margin-top: 25px;
    color: #e2e2e2;
  }

  a:visited {
    color: #7c7c7c;
  }

  display: flex;
  flex-flow: wrap;
  align-content: flex-end;
`;

const StyledPith = styled.div`
  box-sizing: border-box;

  grid-column-start: intro;
  grid-column-end: free-end;
  grid-row-start: pith;
  grid-row-end: pith-end;

  padding: 0 40px;
  max-width: 100%;
`;

const StyledPithContent = styled.div`
  border-top: 1px solid #7c7c7c;

  height: 100%;

  display: flex;
  flex-flow: wrap;
  align-content: flex-end;
`;

const StyledPithText = styled.div`
  font-size: 51vw;
  font-weight: bold;
  color: #171717;

  @media (max-width: 768px) {
    font-size: 45vw;
    margin-bottom: -20vw;
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/global.css" />
        <meta
          name="description"
          content="Pith is an experimental space for productive online discussions. Try it out, read more about it. It's open source, free to use, and lightweight."
        />
        <title>Pith</title>
        <link rel="icon" href="/pith-icon.ico" />
      </Head>

      <main>
        <StyledContainer>
          <StyledIntro>
            <h1>
              Pith is an experimental space for productive online discussions.
            </h1>
          </StyledIntro>
          <StyledLinks>
            {/*<a href="https://alpha.pith.is">Try it out.</a>*/}
            <a href="https://why.pith.is">Read about it.</a>
            <a href="https://github.com/rainflame/pith">Get the code.</a>
          </StyledLinks>
          <StyledPith>
            <StyledPithContent>
              {/*
                          <StyledPithText>Pith</StyledPithText>*/}
            </StyledPithContent>
          </StyledPith>
        </StyledContainer>
      </main>
    </div>
  );
}
