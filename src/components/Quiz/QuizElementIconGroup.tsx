import { BsClock } from "react-icons/bs";
import { GiTakeMyMoney, GiThink } from "react-icons/gi";
import { useData } from "../../hooks/useData";
import { QuizElementIcon } from "./QuizElementIcon";

export function QuizElementIconGroup() {
  const dataContext = useData();
  return (
    <>
      <QuizElementIcon
        name={BsClock}
        text="Tempo"
        onClick={() => dataContext.setValues({ saveOption: "Tempo" })}
      />
      <QuizElementIcon
        name={GiTakeMyMoney}
        text="Dinheiro"
        onClick={() => dataContext.setValues({ saveOption: "Dinheiro" })}
      />
      <QuizElementIcon
        name={GiThink}
        text="Ideias"
        onClick={() => dataContext.setValues({ saveOption: "Ideias" })}
      />
    </>
  );
}
