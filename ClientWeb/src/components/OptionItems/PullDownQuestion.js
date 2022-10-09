import style from "./styles/choiceQuestion.less";
import { useState } from "react";
import { Select } from "antd";
const { Option } = Select;
function PullDownQuestion(props) {
  const { changeCheck, options } = props;
  const checked = props.checked || {};
  const { option } = options;
  return (
    <div className={style.option}>
      <Select
        value={checked.value}
        onSelect={(value) => changeCheck({ value })}
        placeholder="请选择一个选项"
        style={{ width: 200 }}
      >
        {option.map((row) => {
          return <Option value={row.value} />;
        })}
      </Select>
    </div>
  );
}

export default PullDownQuestion;
