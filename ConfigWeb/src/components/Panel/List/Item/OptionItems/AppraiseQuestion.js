import style from "./style/AppraiseQuestion.less";
import { Rate, Tag } from "antd";
import React, { useState } from "react";
function ChoiceQuestion(props) {
  const [value, setValue] = useState(5);
  const { option } = props;
  const desc = option.map((o) => o.desc);

  const tags = option[(value || 1) - 1].tags;
  return (
    <div className={style.option}>
      <Rate tooltips={desc} value={value} onChange={setValue} />
      <p>{desc[(value || 1) - 1]}</p>
      <div>
        {tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}

export default ChoiceQuestion;
