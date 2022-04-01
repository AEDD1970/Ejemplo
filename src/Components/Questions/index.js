import React, { Fragment, useState } from "react";
import "../styles.css";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import data from "./questions.json";
import ContentQuestionSelection from "./ContentQuestionSelection";
import { Button } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [finish, setFinish] = useState(false)
  const [alert, setAlert] = useState({
    title: "",
    severity: "",
    show: false,
  });
  const selectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };
  const contentQuestion = {
    selection: (
      <ContentQuestionSelection
        question={data[currentQuestion]}
        selectAnswer={selectAnswer}
        selectedAnswer={selectedAnswer}
      />
    ),
  };
  const nextQuestion = () => {
    setAlert({
      show: false,
    });
    if (currentQuestion + 1 < data.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setFinish(true)
    }
    setSelectedAnswer("");
  };
  const handleCheck = () => {
    const correctAnswer = data[currentQuestion].correct_answer;
    if (correctAnswer === selectedAnswer) {
      setAlert({
        show: true,
        severity: "success",
        title: "Buen trabajo",
      });
    } else {
      setAlert({
        show: true,
        severity: "error",
        title: "La respuesta correcta es:",
        description: correctAnswer,
      });
    }
  };

  return (
    <div className={"containerRoot"}>
      <LinearProgressWithLabel value={(currentQuestion * 100) / data.length} />
      {!finish ? (
        <React.Fragment>
        {contentQuestion[data[currentQuestion].type]}
        <Button
          disabled={!selectedAnswer}
          color="primary"
          variant="contained"
          fullWidth
          onClick={handleCheck}
        >
          Comprobar
        </Button>
        {alert.show && (
          <div className="contentAlert">
            <Alert icon={false} severity={alert.severity}>
              <AlertTitle>
                <h2>
                  <b>{alert.title}</b>
                </h2>
              </AlertTitle>
              <b>{alert.description}</b>
              <div>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  onClick={() => nextQuestion()}
                >
                  Continuar
                </Button>
              </div>
            </Alert>
          </div>
        )}
      </React.Fragment>
      ) : (
        <React.Fragment>
          Finalizo
        </React.Fragment>
      )}
    </div>
  );
}

export default Questions;
