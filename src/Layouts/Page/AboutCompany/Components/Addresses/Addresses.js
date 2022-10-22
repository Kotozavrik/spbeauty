import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
  return (
    <div className="d-inline-flex flex-column col gap-4 p-4 h-100 border border-1 rounded">
      <div className="title ">Адреса заведений</div>
      <div className="d-inline-flex flex-column gap-4">
        <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
        <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
      </div>
      <div className="d-inline-flex mt-auto">
        <SecondaryButton>Добавить филиал</SecondaryButton>
      </div>
    </div>
  );
}

export default Addresses;
