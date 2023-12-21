import styled from "styled-components";
import AddFillo from "@/assets/icons/add-fillo.svg";
import { DeviceSize } from "@/styles/DeviceSize";

function AddColumn() {
  return (
    <Container>
      <StyledAddFillo alt="add" width={16} height={16} />
    </Container>
  );
}

const Container = styled.div`
  width: 2.2rem;
  height: 2.2rem;

  padding: 0.3rem;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background: var(--MainLight);

  @media screen and (max-width: ${DeviceSize.mobile}) {
    width: 2rem;
    height: 2rem;

    padding: 0.27rem;
  }
`;

const StyledAddFillo = styled(AddFillo)`
  path {
    fill: var(--Main);
  }
`;

export default AddColumn;
