import styled from "styled-components";

const ContentFrame = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid blue;
  grid-column-start: 1;
	grid-column-end: 3;
  grid-row-start: 2;
	grid-row-end: 3;
`

const ExplainContent = () => {
  return (
    <ContentFrame>

    </ContentFrame>
  )
}

export default ExplainContent