import axios from "axios";
import React, { useEffect, useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import Questions3 from "./Questions3";
import Questions from "./Questions";

const Question1 = () => {
  const [res, setRes1] = useState([]);
  const [showStatements, setShowStatements] = useState(false);
  const [showStatement, setShowStatement] = useState(false);
  const handleClick = () => setShowStatements(true);
  const handleClick1 = () => {
    setShowStatement(true);
  };
  const getQuestion2 = async () => {
    await axios(
      `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=BinomialTheorem_901 `,
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
    getQuestion2();
  }, []);
  return (
    <>
    
      {showStatements ? (
        <Questions3 />
      ) : showStatement ? (
        <Questions />
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
          <MathJax></MathJax>
          <MathJax>
            <button className="btn" onClick={handleClick} type="button">
              {" "}
              Next{" "}
            </button>
          </MathJax>
          <MathJax>
            <MathJax>
              <button onClick={handleClick1} type="button">
                {" "}
                Prev{" "}
              </button>
            </MathJax>
          </MathJax>
        </MathJaxContext>
      )}
      <></>
    </>
  );
};

export default Question1;
