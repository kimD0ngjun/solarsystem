import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setSpeed,
  togglePause,
  incrementCallCount,
} from "../../redux/TimeCounterSlice";
import { RootState, AppDispatch } from "../../redux/store";

interface ActiveButtonProps {
  isactive: boolean;
}

interface PauseButtonProps {
  ispaused: boolean;
}

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 11;
`;

const YearText = styled.div`
  /* border: 2px solid yellow; */
  width: 55rem;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;

  @media (max-width: 1200px) {
    width: 50rem;
  }
`;

const MonthDayText = styled.div`
  /* border: 2px solid yellow; */
  margin-left: 3rem;
  width: 35rem;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;

  @media (max-width: 1200px) {
    width: 20rem;
  }
`;

const UnitText = styled.div`
  /* border: 2px solid yellow; */
  width: 20rem;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;
`;

const PauseButton = styled.button<PauseButtonProps>`
  font-size: 15rem;
  border: 1.5px solid ${(props) => (props.ispaused ? "white" : "#490801")};
  width: 40rem;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3rem;
  margin-right: 3rem;
  z-index: 11;

  ${(props) =>
    !props.ispaused &&
    css`
      background-color: #490801;
    `}

  @media (max-width: 1200px) {
    font-size: 12rem;
    width: 32rem;
    height: 32rem;
  }
`;

const AccelButton = styled.button<ActiveButtonProps>`
  font-size: 15rem;
  border: 1.5px solid ${(props) => (props.isactive ? "#c401c4" : "white")};
  width: 40rem;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3px;
  margin-right: 3px;
  z-index: 11;

  ${(props) =>
    props.isactive &&
    css`
      box-shadow: 0 0 2px 0 pink, inset 0 0 2px 0 pink;
    `}

  @media (max-width: 1200px) {
    font-size: 12rem;
    width: 32rem;
    height: 32rem;
  }
`;

const TimeCounterText = styled.p`
  font-size: 19rem;

  @media (max-width: 1200px) {
    font-size: 13rem;
  }
`;

const TimeCounterUnit = styled.p`
  font-size: 13rem;

  @media (max-width: 1200px) {
    font-size: 10rem;
  }
`;

const TimeCounter = () => {
  //TODO 배속, 일시정지 및 재개 기능

  const speed = useAppSelector((state: RootState) => state.timeCounter.speed);
  const isPaused = useAppSelector(
    (state: RootState) => state.timeCounter.isPaused
  );
  const dispatch: AppDispatch = useAppDispatch();

  //TODO 날짜 카운터 부분

  const [startDate] = useState(new Date(2022, 5, 15));
  // JS에서 월(month)은 0부터 시작하므로, new Date(2022, 5, 15)는 실제로 2022년 5월 15일이 아니라 2022년 6월 15일을 나타냄.
  // 이것은 JavaScript의 날짜 객체가 월을 0에서 시작해서 1을 빼야 올바른 월을 나타내는 특성 때문.
  const [currentDate, setCurrentDate] = useState(startDate);

  useEffect(() => {
    const interval = 100 / speed; // 0.1초 = 하루

    const timer = setInterval(() => {
      setCurrentDate((prevDate) => {
        if (!isPaused) {
          const newDate = new Date(prevDate);
          newDate.setDate(newDate.getDate() + 1);
          dispatch(incrementCallCount());
          return newDate;
        }
        return prevDate;
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [startDate, speed, isPaused, dispatch]);

  return (
    <div style={{ zIndex: 11 }}>
      <DateContainer>
        <YearText>
          <TimeCounterText>{currentDate.getFullYear()}</TimeCounterText>
        </YearText>
        <UnitText>
          <TimeCounterUnit>Y</TimeCounterUnit>
        </UnitText>
        <MonthDayText>
          <TimeCounterText>{currentDate.getMonth() + 1}</TimeCounterText>
        </MonthDayText>
        <UnitText>
          <TimeCounterUnit>M</TimeCounterUnit>
        </UnitText>
        <MonthDayText>
          <TimeCounterText>{currentDate.getDate()}</TimeCounterText>
        </MonthDayText>
        <UnitText>
          <TimeCounterUnit>D</TimeCounterUnit>
        </UnitText>
      </DateContainer>
      <ButtonContainer>
        {isPaused ? (
          <PauseButton
            onClick={() => dispatch(togglePause())}
            ispaused={isPaused}
          >
            ▶
          </PauseButton>
        ) : (
          <PauseButton
            onClick={() => dispatch(togglePause())}
            ispaused={isPaused}
          >
            ❚❚
          </PauseButton>
        )}
        <AccelButton
          onClick={() => dispatch(setSpeed(1))}
          isactive={speed === 1}
        >
          ×1
        </AccelButton>
        <AccelButton
          onClick={() => dispatch(setSpeed(5))}
          isactive={speed === 5}
        >
          ×5
        </AccelButton>
        <AccelButton
          onClick={() => dispatch(setSpeed(10))}
          isactive={speed === 10}
        >
          ×10
        </AccelButton>
        <AccelButton
          onClick={() => dispatch(setSpeed(25))}
          isactive={speed === 25}
        >
          ×25
        </AccelButton>
      </ButtonContainer>
    </div>
  );
};

export default TimeCounter;
