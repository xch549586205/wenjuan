//给题型分组
export const grouping = (questionTypes) => {
  const tags = [];
  questionTypes.map(({ name, groupid, icon, id }) => {
    if (
      groupid === 0 &&
      !tags.filter((tag) => tag.groupid === groupid).length
    ) {
      tags.push({ groupName: name, groupid: id, groupTags: [] });
    }
    const key = tags.findIndex((value) => groupid === value.groupid);
    if (key !== -1) {
      tags[key].groupTags.push({ name, icon, id, groupid: tags[key].groupid });
    }
  });
  return tags;
};

export const defaultData_questionType = (type) => {
  return {
    单选题: {
      title: "请选择一个选项",
      options: {
        option: [{ value: "选项1" }, { value: "选项2" }, { value: "选项3" }],
      },
    },
    多选题: {
      title: "请选择以下选项 (多选)",
      options: {
        option: [{ value: "选项1" }, { value: "选项2" }, { value: "选项3" }],
      },
    },
    文字投票: {
      title: "请给以下选项投票",
      options: {
        option: [{ value: "选项1" }, { value: "选项2" }],
        ticketId: new Date().getTime(),
      },
    },
    下拉题: {
      title: "请选择一个选项",
      options: {
        option: [{ value: "选项1" }, { value: "选项2" }, { value: "选项3" }],
      },
    },
    量表题: {
      title: "请您对此项目进行评价",
      options: {
        option: [
          { value: "1" },
          { value: "2" },
          { value: "3" },
          { value: "4" },
          { value: "5" },
        ],
      },
    },
    填空题: {
      title: "请填写本项内容",
      options: { option: [{ value: "" }] },
    },
    多项填空: {
      title: "请填写以下内容",
      options: {
        option: [
          { title: "填空1", value: "" },
          { title: "填空2", value: "" },
        ],
      },
    },
    横向填空: {
      title: "请填写以下信息",
      options: {
        option: [{ value: "姓名________年龄____岁联系方式___________" }],
      },
    },
    评价题: {
      title: "请您对我们的服务进行评价",
      options: {
        option: [
          {
            value: "1",
            desc: "非常不满意",
            tags: ["态度冷淡", "推销多", "技术差"],
          },
          {
            value: "2",
            desc: "比较不满意",
            tags: ["速度慢", "仪表乱", "不专业"],
          },
          {
            value: "3",
            desc: "一般",
            tags: ["无互动", "不积极", "业务不精"],
          },
          {
            value: "4",
            desc: "比较满意",
            tags: ["文明礼貌", "速度快", "较专业"],
          },
          {
            value: "5",
            desc: "非常满意",
            tags: ["热情好客", "敬业精神", "技能专业"],
          },
        ],
      },
    },
    打分题: {
      title: "请给本项打分",
      options: {
        option: [
          {
            value: "1",
          },
          {
            value: "2",
          },
          {
            value: "3",
          },
          {
            value: "4",
          },
          {
            value: "5",
          },
        ],
      },
    },
    NPS题: {
      title: "您向朋友或同事推荐我们的可能性有多大？",
      options: {
        option: [
          {
            value: "1",
          },
          {
            value: "2",
          },
          {
            value: "3",
          },
          {
            value: "4",
          },
          {
            value: "5",
          },
          {
            value: "6",
          },
          {
            value: "7",
          },
          {
            value: "8",
          },
          {
            value: "9",
          },
          {
            value: "10",
          },
        ],
      },
    },
  }[type];
};
