import style from "./styles/ChoiceTicket.less";
import { useState } from "react";
import { Input } from "antd";
const { TextArea } = Input;

function FillInTheBlanks(props) {
  const { changeCheck, options } = props;
  const { option } = options;
  const [TextAreaValue, setValue] = useState("");

  return (
    <div className={style.option}>
      {option.map((p) => {
        return (
          <TextArea
            value={TextAreaValue}
            onChange={(e) => {
              setValue(e.target.value);
              changeCheck(e.target.value);
            }}
          />
        );
      })}
    </div>
  );
}

export default FillInTheBlanks;
