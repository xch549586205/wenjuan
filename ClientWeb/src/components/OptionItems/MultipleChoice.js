import style from "./styles/MultipleChoice.less";
import { Checkbox } from "antd";
function MultipleChoice(props) {
  const { changeCheck, options } = props;
  const checked = props.checked ? props.checked : [];

  const change = (p, isChecked) => {
    const _checked = checked ? [...checked] : [];
    if (!isChecked) {
      _checked.push({ value: p });
    } else {
      const index = _checked.indexOf(p);
      _checked.splice(index, 1);
    }
    changeCheck(_checked);
  };
  return (
    <div className={style.option}>
      {options.option.map((row, i) => {
        const isChecked = checked.filter((c) => c.value === row.value).length;
        return (
          <div key={"MultipleChoice" + i}>
            <Checkbox
              onChange={() => change(row.value, isChecked)}
              checked={isChecked}
            >
              {row.value}
            </Checkbox>
          </div>
        );
      })}
    </div>
  );
}

export default MultipleChoice;
