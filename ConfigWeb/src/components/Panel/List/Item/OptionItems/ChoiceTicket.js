import style from "./style/choiceQuestion.less";
import InputItem from "../../../../InputItem";

const Icon = () => <input type="radio" value="" disabled></input>;

function ChoiceQuestion(props) {
  const { change, del, option } = props;
  return (
    <div className={style.option}>
      {option.length &&
        option.map((option, optionIndex) => {
          return (
            <InputItem
              key={optionIndex + "option"}
              value={option.value}
              Icon={<Icon />}
              change={(value) => change({ optionIndex, value, type: "value" })}
              onDelete={() => del(optionIndex)}
            />
          );
        })}
    </div>
  );
}

export default ChoiceQuestion;
