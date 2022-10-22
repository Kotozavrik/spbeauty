import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
  // Здесь устанавливается минимальная ширина для кнопки
  let minWidth = props.minWidth === undefined ? "144px" : props.minWidth;
  const Button = styled.div`
    background: #ffffff;
    border: 1px solid #64748b;
    border-radius: 24px;
    min-width: ${minWidth};
    padding: 8px 16px;
    gap: 16px;
    color: #64748b;
    &:hover {
      background: #ffffff;
      color: #64748b;
      opacity: 80%;
    }
    &:active {
      background: #dfdfdf;
    }
  `;
  return (
    <Clickable>
      <Button className="p-2 text-md">{props.children}</Button>
    </Clickable>
  );
}

export default SecondaryButton;
