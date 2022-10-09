import { Button } from "antd";
import InputItem from "../../../../InputItem";
import { Popover } from "antd";
import { useRef } from "react";
function FillInTheBlankHorizontally(props) {
  const { option, change } = props;
  const row = option[0];
  const inputRef = useRef(null);
  const insert = () => {
    let textToInsert = "________";
    let cursorPosition =
      inputRef.current.resizableTextArea.textArea.selectionStart;
    let textBeforeCursorPosition =
      inputRef.current.resizableTextArea.textArea.value.substring(
        0,
        cursorPosition
      );
    let textAfterCursorPosition =
      inputRef.current.resizableTextArea.textArea.value.substring(
        cursorPosition,
        inputRef.current.resizableTextArea.textArea.value.length
      );
    change({
      optionIndex: 0,
      value: textBeforeCursorPosition + textToInsert + textAfterCursorPosition,
      type: "value",
    });
  };
  return (
    <div key={row.value}>
      <Popover
        content={() => (
          <div>
            <Button type="primary" onClick={insert}>
              插入填空符
            </Button>
          </div>
        )}
        trigger="click"
        placement="topLeft"
      >
        <div>
          <InputItem
            ref={inputRef}
            value={row.value}
            change={(value) =>
              change({
                optionIndex: 0,
                value,
                type: "value",
              })
            }
          />
        </div>
      </Popover>
    </div>
  );
}

export default FillInTheBlankHorizontally;
