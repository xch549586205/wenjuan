import { useEffect } from "react";
import classNames from "classnames";
import style from "./styles/NPSQuestion.less";
function NPSQuestion(props) {
  const { options, changeCheck } = props;
  const { option } = options;
  const checked = props.checked || {};
  useEffect(() => {
    changeCheck({ value: 10 });
  }, []);
  return (
    <div className={style.option}>
      <div className={style.nps}>
        <div>
          {option.map((t) => (
            <div
              onClick={() => {
                changeCheck({ value: t.value });
              }}
              className={classNames({
                [style.row]: true,
                [style.active]: checked.value * 1 + 1 > t.value * 1,
              })}
            >
              {t.value}
            </div>
          ))}
          <p className={style.min}>不可能</p>
          <p className={style.max}>极有可能</p>
        </div>
      </div>
    </div>
  );
}

export default NPSQuestion;
