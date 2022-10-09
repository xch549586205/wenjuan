import style from "./styles/FillInTheBlankHorizontally.less";
import { useEffect, useRef } from "react";
import { Input } from "antd";
const { TextArea } = Input;
function FillInTheBlankHorizontally(props) {
  const { changeCheck, options } = props;
  const checked = props.checked || {};
  const { option } = options;
  useEffect(() => {
    changeCheck({ value: option[0].value });
  }, []);
  const ref = useRef(null);
  return (
    <div className={style.option}>
      {option.map((row, i) => {
        const list = row.value.split("_");
        const arr = [];
        let _length = 0;
        list.map((str, i) => {
          if (str) {
            if (_length !== 0) {
              arr.push({ inputLength: _length });
            }
            arr.push(str);
            _length = 0;
          } else {
            _length += 1;
          }
          if (i === list.length - 1 && !str) {
            arr.push({ inputLength: _length });
          }
        });
        console.log(arr);
        return (
          <div key={i + "FillInTheBlankHorizontally"} ref={ref}>
            {arr.map((content) => {
              if (typeof content === "string") {
                return <span> {content}</span>;
              } else {
                return (
                  <Input
                    bordered={false}
                    style={{ width: content.inputLength * 12 }}
                    onChange={() => {
                      let str = "";
                      const { childNodes } = ref.current;
                      for (let i = 0; i < childNodes.length; i++) {
                        const node = childNodes[i];
                        if (node.nodeName === "INPUT") {
                          str += node.value;
                        } else {
                          str += node.innerText;
                        }
                      }
                      changeCheck({ value: str });
                    }}
                  />
                );
              }
            })}
            {/* <TextArea
              defaultValue={row.value}
              value={checked.value}
              onChange={(e) => {
                changeCheck({ value: e.target.value });
              }}
            /> */}
          </div>
        );
      })}
    </div>
  );
}

export default FillInTheBlankHorizontally;
