import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OptionItems from "@/components/OptionItems";
import { useParams } from "react-router-dom";
import { getQuestionTypes, getQuestionList } from "@@/src/reducer/panel/panel";
import style from "./index.less";
import { Row, Col, Button, Select } from "antd";

function Main(props) {
  const Params = useParams();
  const [checkedList, setCheckList] = useState([]);
  const dispatch = useDispatch();
  const questionList = useSelector((state) => state.question.questionList);
  const questionTypes = useSelector((state) => state.question.questionTypes);
  useEffect(() => {
    dispatch(getQuestionTypes());
    dispatch(getQuestionList(Params));
  }, []);
  const sortList = [...questionList]
    .sort((a, b) => {
      return a.itemno - b.itemno;
    })
    .map((question) => {
      return {
        ...question,
        componentname: questionTypes.filter(
          (type) => type.id === question.questiontypeid
        )[0].componentname,
      };
    });
  return (
    <Row align="middle" justify="center">
      <Col className={style.list} span={24} xl={12}>
        <Row align="middle" justify="center">
          <Col span={18} xl={14}>
            {sortList.map((question, i) => {
              const OptionItem = OptionItems[question.componentname];
              const checkedArr = checkedList.filter(
                (c) => c.id === question.id
              );
              const checked = checkedArr.length ? checkedArr[0].checked : null;

              const changeCheck = ({
                id,
                value,
                ticketId,
                questiontypename,
              }) => {
                const _checkedList = [...checkedList];
                _checkedList.map((_checked, i) => {
                  if (_checked.id === id) {
                    _checkedList[i] = {
                      id,
                      checked: value,
                      ticketId,
                      questiontypename,
                    };
                  }
                });
                if (!checkedArr.length) {
                  _checkedList.push({
                    id,
                    checked: value,
                    ticketId,
                    questiontypename,
                  });
                }
                setCheckList(_checkedList);
              };
              const options = JSON.parse(question.options);
              const Item = (
                <OptionItem
                  options={options}
                  checked={checked}
                  changeCheck={(value) => {
                    const p = {
                      id: question.id,
                      value,
                      ticketId: options.ticketId || null,
                      questiontypename: question.questiontypename,
                    };
                    changeCheck(p);
                  }}
                />
              );
              return (
                <div className={style.item} key={i + "list"}>
                  <div className={style.itemTitle}>
                    {i + 1}. {question.title}
                    <span>{question.require === "true" ? "*" : ""}</span>
                  </div>
                  {/*  非下拉题 */}
                  {question.questiontypeid !== 5 && Item}
                  {/* 下拉题 */}
                  {question.questiontypeid === 5 && Item}
                </div>
              );
            })}
            <Button
              type="primary"
              style={{ marginTop: "20px" }}
              onClick={() => alert(`success ${JSON.stringify(checkedList)}`)}
            >
              提交
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default Main;
