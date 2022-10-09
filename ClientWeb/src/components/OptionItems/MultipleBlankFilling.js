import style from "./styles/ChoiceTicket.less";
import {  useEffect } from "react";
import { Input } from "antd";
const { TextArea } = Input;
function MultipleBlankFilling(props) {
  const { changeCheck, options } = props;
  const checked = props.checked || [];
  const { option } = options;
  useEffect(() => {
    console.log("inir");
  }, []);
  return (
    <div className={style.option}>
      {option.map((row, i) => {
        const checkedValue = checked.filter((c) => c.title === row.title);
        const isChecked = checkedValue.length > 0;
        return (
          <div key={i + "MultipleBlankFilling"}>
            {row.title}
            <TextArea
              value={isChecked ? checkedValue[0].value : ""}
              onChange={(e) => {
                if (!isChecked) {
                  const newChecked = [...checked];
                  newChecked.push({ title: row.title, value: e.target.value });
                  changeCheck(newChecked);
                } else {
                  const newChecked = [...checked];
                  newChecked.map((c, i) => {
                    if (c.title === row.title) {
                      newChecked[i].value = e.target.value;
                    }
                  });
                  changeCheck(newChecked);
                }
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MultipleBlankFilling;
