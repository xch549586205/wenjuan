import style from "./styles/AppraiseQuestion.less";
import { Rate, Tag, Input } from "antd";
import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

function AppraiseQuestion(props) {
  const { changeCheck, options } = props;
  useEffect(() => {
    changeCheck({ value: 5 });
  }, []);

  const checked = props.checked || {};
  const value = checked.value || 5;
  const { option } = options;

  const desc = option.map((o) => o.desc);

  const tags = option[value - 1].tags;

  const setValue = (value) => {
    changeCheck({ value, tags: [] });
  };

  const checkTags = checked.tags || [];

  const clickTag = (tag) => {
    let newCheckTags = [...checkTags];
    if (checkTags.indexOf(tag) !== -1) {
      newCheckTags = checkTags.filter((_tag) => _tag !== tag);
    } else {
      newCheckTags.push(tag);
    }
    const newChecked = {
      tags: newCheckTags,
      value: checked.value,
    };
    if (
      tag !== "custom" &&
      checkTags.indexOf(tag) !== -1 &&
      checked.hasOwnProperty("customText")
    ) {
      newChecked.customText = checked.customText;
    }
    changeCheck(newChecked);
  };
  return (
    <div className={style.option}>
      <Rate tooltips={desc} value={value} onChange={setValue} />
      <p>{desc[value - 1]}</p>
      <div>
        {tags.map((tag, i) => (
          <Tag
            onClick={() => clickTag(tag)}
            key={"tag" + i}
            className={
              checkTags.indexOf(tag) !== -1 ? style.activeTag : style.tag
            }
          >
            {tag}
          </Tag>
        ))}
        <Tag
          className={
            checkTags.indexOf("custom") !== -1 ? style.activeTag : style.tag
          }
          onClick={() => clickTag("custom")}
        >
          写评价
          <PlusOutlined />
        </Tag>
      </div>
      {checkTags.indexOf("custom") !== -1 && (
        <TextArea
          value={checked.customText || ""}
          onChange={(e) => {
            changeCheck({ ...checked, customText: e.target.value });
          }}
        />
      )}
    </div>
  );
}

export default AppraiseQuestion;
