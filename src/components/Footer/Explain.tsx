import styled from "styled-components";
import TabSun from "./TabItem/TabSun";
import TabMercury from "./TabItem/TabMercury";
import TabVenus from "./TabItem/TabVenus";
import TabEarth from "./TabItem/TabEarth";
import TabMars from "./TabItem/TabMars";
import TabJupiter from "./TabItem/TabJupiter";
import TabSaturn from "./TabItem/TabSaturn";
import TabUranus from "./TabItem/TabUranus";
import TabNeptune from "./TabItem/TabNeptune";
import Satellite from "./Satellite";
import ExplainInner from "./ExplainFromApi/ExplainInner";

const ExplainContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 85%;
  /* border: 2px solid pink; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 13;
`

const TabSection = styled.div`
  width: 95%;
  height: 10%;
  margin-right: 5%;
  /* border: 2px solid pink; */
  display: flex;
  flex-direction: column;
  z-index: 13;
`

const TabContainer = styled.ul`
  /* border: 2px solid yellow; */
  width: 100%;
  height: 50%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 13;
`

const ExplainSection = styled.div`
  width: 100%;
  height: 90%;
  /* border: 2px solid yellow; */
`

const Explain = () => {
  return (
    <ExplainContainer>
      <TabSection>
        <TabContainer>
          <TabSun />
          <TabMercury />
          <TabVenus />
          <TabEarth />
          <TabMars />
          <TabJupiter />
          <TabSaturn />
          <TabUranus />
          <TabNeptune />
        </TabContainer>
        <Satellite />
      </TabSection>
      <ExplainSection>
        <ExplainInner />
      </ExplainSection>
    </ExplainContainer>
  )
}

export default Explain