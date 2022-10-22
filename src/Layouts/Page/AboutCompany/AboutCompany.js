import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
  return (
    <div className="ms-72px me-72px mt-64px">
      <Heading /> {/* Заголовок и кнопка справа */}
      <div className="d-flex pt-5">
        <div className="flex-grow-1">
          {" "}
          <General />{" "}
        </div>{" "}
        {/* Основная информация вроде названия, типа и телефона */}
        <div>
          {" "}
          <Addresses />{" "}
        </div>{" "}
        {/* Список доступных адресов заведений */}
      </div>
    </div>
  );
}

export default AboutCompany;
