import style from "./styles/choiceQuestion.less";
import { useState } from "react";
import { Radio } from "antd";
function ChoiceQuestion(props) {
  const { changeCheck, options } = props;
  const checked = props.checked || {};
  const { option } = options;
  return (
    <div className={style.option}>
      {option.map((row, i) => {
        return (
          <div key={i + "ChoiceQuestion"}>
            <Radio
              checked={row.value === checked.value}
              onChange={() => changeCheck({ ...row, value: row.value })}
            >
              {row.value}
            </Radio>
          </div>
        );
      })}
    </div>
  );
}

export default ChoiceQuestion;
