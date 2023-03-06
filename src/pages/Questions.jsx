import React, { useEffect, useState } from "react";
import axios from "axios";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Question1 from "./Question1";
import Questions3 from "./Questions3";

const Questions = () => {
  const [res, setRes] = useState([]);
  const [showStatements, setShowStatements] = useState(false);
  const handleClick = () => setShowStatements(true);
  const getQuestion = async () => {
    await axios(
      `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_901 `,
      {
        method: "GET",
      }
    )
      .then((res) => {
        console.log(res.data);
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(api.data)
  };
  useEffect(() => {
    getQuestion();
  }, []);
  return (
    <>
      {showStatements ? (
        <Question1 />
      ) : (
        <MathJaxContext>
          {" "}
          <MathJax>
            {res.map((value) => {
              return (
                <div className="">
                  <h3>{value.Question}</h3>
                </div>
              );
            })}
          </MathJax>
          <MathJax>
            <button onClick={handleClick} type="button">
              {" "}
              Next{" "}
            </button>
          </MathJax>
        </MathJaxContext>
      )}
    </>
  );
};

export default Questions;
