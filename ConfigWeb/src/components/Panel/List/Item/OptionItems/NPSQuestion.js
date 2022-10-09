import style from "./style/NPSQuestion.less";
function NPSQuestion(props) {
  const { option } = props;

  return (
    <div className={style.option}>
      <div className={style.nps}>
        <div>
          {option.map((t) => (
            <div>{t.value}</div>
          ))}
          <p className={style.min}>不可能</p>
          <p className={style.max}>极有可能</p>
        </div>
      </div>
    </div>
  );
}

export default NPSQuestion;
