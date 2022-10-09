import style from "./styles/GaugeQuestion.less";
import { useState } from "react";
import { Radio } from "antd";
function GaugeQuestion(props) {
  const { changeCheck, options } = props;
  const checked = props.checked || {};
  const { option } = options;
  return (
    <div className={style.option}>
      {option.map((row, i) => {
        return (
          <div
            className={
              i === 0 ? style.min : i === option.length - 1 ? style.max : ""
            }
          >
            <Radio
              checked={row.value === checked.value}
              onChange={() => changeCheck({ value: row.value })}
            >
              {row.value}
            </Radio>
            {i === 0 && <span className={style.label}>非常不满意</span>}
            {i === option.length - 1 && (
              <span className={style.label}>非常满意</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default GaugeQuestion;
