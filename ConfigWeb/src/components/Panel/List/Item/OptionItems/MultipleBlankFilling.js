import { Input } from "antd";
import InputItem from "../../../../InputItem";

function FillInTheBlanks(props) {
  const { change, del, option } = props;

  console.log(option);
  return (
    <div>
      {option.map((row, optionIndex) => (
        <div key={"MultipleBlankFilling" + optionIndex}>
          <InputItem
            value={row.title}
            onDelete={() => del(optionIndex)}
            change={(value) => change({ optionIndex, value, type: "title" })}
          />
          <Input disabled />
        </div>
      ))}
    </div>
  );
}

export default FillInTheBlanks;
