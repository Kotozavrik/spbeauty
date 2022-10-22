import styled from "styled-components";

const Input = styled.input`
  outline: none;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  color: #0f172a;
  &:hover {
    color: #94a3b8;
    opacity: 0.8;
  }
`;

function TitledTextInput({ title, def }) {
  const Title = title === undefined ? <div></div> : <div>{title}</div>;
  return (
    <div className="d-flex flex-column gap-2">
      {Title}
      <Input className="p-2" defaultValue={def}></Input>
    </div>
  );
}

export default TitledTextInput;
