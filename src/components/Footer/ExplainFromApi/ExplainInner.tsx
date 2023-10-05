import styled from "styled-components";
import ContentTitle from "./ContentTitle";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";
import ExplainImage from "./ExplainImage";
import ExplainContent from "./ExplainContent";

interface ChangeWidth {
  isChanged: boolean;
}

const ExplainSection = styled.main<ChangeWidth>`
  visibility: ${({ isChanged }) => (isChanged ? 'visible' : 'hidden')};
  opacity: ${({ isChanged }) => (isChanged ? 1 : 0)};
  width: 100%;
  height: 100%;
  /* border: 2px solid yellow; */
  transition: visibility 1s ease-in-out, opacity 1s ease-in-out;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

const ExplainInner = () => {
  const speed = useAppSelector((state: RootState) => state.timeCounter.speed);
  const isPaused = useAppSelector((state: RootState) => state.timeCounter.isPaused);
  const radianCount = useAppSelector((state: RootState) => state.timeCounter.changeCallCount);
  const isChanged = useAppSelector((state: RootState) => state.changeWidth.isChanged)

  return (
    <ExplainSection
      isChanged={isChanged}
    >
      <ExplainImage speed={speed} isPaused={isPaused} radianCount={radianCount} />
      <ContentTitle />
      <ExplainContent />
    </ExplainSection>
  )
}

export default ExplainInner;