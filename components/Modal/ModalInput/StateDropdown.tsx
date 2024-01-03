import { getColumns } from "@/api/columns";
import DropdownButton from "@/assets/icons/arrow-drop-down.svg";
import DropdownList from "@/components/Modal/ModalInput/DropdownList";
import ColumnName from "@/components/common/Chip/ColumnName";
import { columnsAtom, isOpenAtom, selectedIdAtom, statusAtom } from "@/states/atoms";
import { useAtom } from "jotai";
import { useEffect } from "react";
import styled from "styled-components";

interface StateDropdownProps {
  dashboardId: number;
  defaultColumnId: number;
  onColumnSelect?: (columnId: number) => void;
}

const StateDropdown = ({ dashboardId, defaultColumnId, onColumnSelect }: StateDropdownProps) => {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const [status, setStatus] = useAtom(statusAtom);
  const [columns, setColumns] = useAtom(columnsAtom);
  const [selectedId, setSelectedId] = useAtom(selectedIdAtom);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    //처음엔 드롭다운 무조건 닫혀있는 상태
    setIsOpen(false);
    const fetchData = async () => {
      const data = await getColumns({ dashboardId, token });
      if (data && data.result === "SUCCESS") {
        setColumns(data.data);
        const defaultColumn = data.data.find((column) => column.id === defaultColumnId);
        if (defaultColumn) {
          setStatus(defaultColumn.title);
          setSelectedId(defaultColumnId);
        }
      }
    };

    fetchData();
  }, [dashboardId, token]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleColumnSelect = (columnId: number) => {
    setSelectedId(columnId);
    if (onColumnSelect) {
      onColumnSelect(columnId);
      setIsOpen(false); //선택하면 드롭다운 닫아줌
    }
  };

  return (
    <Wrapper>
      <Title>상태</Title>
      <DropdownBox $isOpen={isOpen}>
        <ColumnName status={status} />
        <StyledDropdownButton alt="드롭다운 버튼" onClick={toggleDropdown} />
      </DropdownBox>
      <DropdownList $isOpen={isOpen} setStatus={setStatus} columnData={columns} selectedId={selectedId} onColumnSelect={handleColumnSelect} />
    </Wrapper>
  );
};

export default StateDropdown;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  color: var(--Black33);
  font-size: 1.8rem;
  font-weight: 500;

  margin-bottom: 1rem;
`;

const DropdownBox = styled.div<{ $isOpen: boolean }>`
  width: 21.7rem;
  height: 4.8rem;

  padding: 1.3rem 1.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 0.6rem;
  border: 1px solid ${(props) => (props.$isOpen ? "var(--Main)" : "var(--Grayd9)")};
  background: var(--White);
`;

const StyledDropdownButton = styled(DropdownButton)`
  width: 2.6rem;
  height: 2.6rem;

  cursor: pointer;
`;
