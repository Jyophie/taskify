import styled from "styled-components";
import React, { useState } from "react";
import DashBoardColor from "@/components/common/Chip/DashBoardColor";
import { DeviceSize } from "@/styles/DeviceSize";
import ToastModal from "@/components/Modal/ToastModal";
import { toast } from "react-toastify";

const EditDashboard = () => {
  const [toastVisible, setToastVisible] = useState(false);

  const handleClick = () => {
    toast("변경이 완료되었습니다.");
    setToastVisible((prev) => !prev);
  };

  return (
    <Wrapper>
      <Header>
        <Title>비브리지</Title>
        <DashBoardColor />
      </Header>
      <Form>
        <Label>대시보드 이름</Label>
        <Input placeholder="변경할 이름을 입력해 주세요." />
      </Form>
      <ButtonWrapper>
        <Button onClick={handleClick}> 변경</Button>
        {toastVisible && <ToastModal />}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default EditDashboard;

const Wrapper = styled.div`
  width: 62rem;
  height: 25.6rem;

  padding: 2.9rem 2.8rem;

  border-radius: 0.8rem;

  background: var(--White);

  @media (max-width: ${DeviceSize.tablet}) {
    width: 54.4rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    width: 28.4rem;
    height: 21.1rem;

    padding: 2rem 2.1rem;
  }
`;

const Header = styled.div`
  margin-bottom: 3.4rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: ${DeviceSize.mobile}) {
    margin-bottom: 2.4rem;
  }
`;

const Title = styled.h1`
  color: var(--Black33);
  font-size: 2rem;
  font-weight: 700;
`;

const Form = styled.form`
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  color: var(--Black33);
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 1.6rem;
  }
`;

const Input = styled.input`
  height: 4.8rem;

  padding: 1.5rem 1.6rem;

  border-radius: 0.6rem;
  border: 1px solid var(--Grayd9);

  background: var(--White);

  color: var(--Black33);
  font-size: 1.6rem;

  @media (max-width: ${DeviceSize.mobile}) {
    height: 4.2rem;

    padding: 1.3rem 1.6rem;

    font-size: 1.4rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 8.4rem;
  height: 3.2rem;

  padding: 0.7rem 2.9rem;

  border-radius: 0.4rem;

  background: var(--Main);

  color: var(--White);
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;

  @media (max-width: ${DeviceSize.mobile}) {
    height: 2.8rem;

    font-size: 1.2rem;
  }
`;
