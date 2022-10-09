import { Switch } from "antd";
function ItemSetting(props) {
  const { currentId, list, updateList, editItem } = props;
  const currentItem = currentId
    ? list.filter((item) => item.id === currentId)[0]
    : {};

  const changeItemRequired = (require) => {
    editItem({
      id: currentId,
      require: require ? "true" : "false",
    });
  };
  return (
    <div>
      {currentItem.name}
      此题必答
      <Switch
        checked={currentItem.require === "true"}
        onChange={changeItemRequired}
      />
    </div>
  );
}

export default ItemSetting;
