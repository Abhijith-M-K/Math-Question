import React, { useEffect, useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import axios from "axios";
import Question1 from "./Question1";
const Questions3 = () => {
  const [res, setRes1] = useState([]);
  const [showStatement, setShowStatement] = useState(false);
  const handleClick1 = () => setShowStatement(true);
  const getQuestion3 = async () => {
    await axios(
      `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=DifferentialCalculus2_901 `,
      {
        method: "GET",
      }
    )
      .then((res) => {
        console.log(res.data);
        setRes1(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(api.data)
  };
  useEffect(() => {
    getQuestion3();
  }, []);
  return (
    <>
      {showStatement ? (
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
            <button onClick={handleClick1} type="button">
              {" "}
              Prev{" "}
            </button>
          </MathJax>
        </MathJaxContext>
      )}
    </>
  );
};
export default Questions3;
