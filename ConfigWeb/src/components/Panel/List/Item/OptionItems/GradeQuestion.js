import style from "./style/AppraiseQuestion.less";
import { Rate } from "antd";
function GradeQuestion(props) {
  return (
    <div className={style.option}>
      <Rate />
    </div>
  );
}

export default GradeQuestion;
