import styled from "styled-components";
import SearchIcon from "../../../../Icons/SearchIcon";
import IconOnlyButton from "../../../../Components/IconOnlyButton";

const WrapperInput = styled.div`
  position: relative;
  width: 217px;
  height: 34px;
`;

const Input = styled.input`
  outline: none;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  color: #152842;
  width: 100%;
  &:hover {
    background-color: #f8fafc;
    opacity: 0.8;
  }
  &:focus {
    background: white;
  }
`;

const SearchIconWrapper = styled.div`
  height: 34px;
  color: #152842;
  position: absolute;
  right: 8px; /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
  top: 50%;
  transform: translateY(-50%);
`;

function SearchField() {
  return (
    <WrapperInput className="d-inline-flex">
      {" "}
      {/* Устанавливает ширину поля и включает относительное положение */}
      <Input className="p-2" placeholder="Найти" />
      <SearchIconWrapper className="p-2">
        {" "}
        {/* Устанавливает абсолютное положение внутри поля ввода */}
        <IconOnlyButton icon={<SearchIcon />} />
      </SearchIconWrapper>
    </WrapperInput>
  );
}

export default SearchField;
