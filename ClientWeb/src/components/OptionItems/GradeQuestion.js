import style from "./styles/GaugeQuestion.less";
import { useEffect } from "react";
import { Rate } from "antd";
function GaugeQuestion(props) {
  const { changeCheck } = props;
  const checked = props.checked || {};
  const setValue = (value) => {
    changeCheck({ value });
  };
  useEffect(() => {
    changeCheck({ value: 5 });
  }, []);
  return (
    <div className={style.option}>
      <Rate value={checked.value || 5} onChange={setValue} />
    </div>
  );
}

export default GaugeQuestion;
