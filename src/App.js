import burro from "./images/burro.png";
import puerta from "./images/puerta.png";
import carro from "./images/carro.png";
import { useState } from "react";
import BayesTheorem from "./components/BayesTheorem";
import ProbabilityFrac from "./components/ProbabilityFrac";
import Probability from "./components/Probability";

function App() {
  const [prize, setPrize] = useState(
    Math.floor(Math.random() * (3 - 1 + 1) + 1)
  );
  const [imgArray, setImgArray] = useState(["puerta", "puerta", "puerta"]);
  const doors = [1, 2, 3];
  const doorsp = [0, 0, 0];
  doorsp[prize - 1] = 1;
  const donkeyDoors = [...doors];
  donkeyDoors.splice(prize - 1, 1);

  const [clicked, setClicked] = useState(0);
  console.log("prize");
  console.log(prize);

  function restart() {
    setClicked(0);
    setPrize(Math.floor(Math.random() * (3 - 1 + 1) + 1));
    console.log("new prize");
    console.log(prize);
    setImgArray(["puerta", "puerta", "puerta"]);
  }

  function manageClick({ n }) {
    if (clicked < 1) {
      if (n === prize) {
        const x = [...imgArray];
        x[donkeyDoors[Math.floor(Math.random() + 0.5)] - 1] = "burro";
        setImgArray(x);
      }
      if (n !== prize) {
        const y = [...donkeyDoors].filter((i) => i !== n);
        const x = [...imgArray];
        x[y[0] - 1] = "burro";
        setImgArray(x);
      }
    }
    if (clicked === 1) {
      const x = [...imgArray];
      if (n === prize) {
        x[n - 1] = "carro";
      } else {
        x[n - 1] = "burro";
      }
      setImgArray(x);
    }
    if (clicked < 2) {
      setClicked(() => clicked + 1);
    } else {
      setClicked(0);
      setPrize(Math.floor(Math.random() * (3 - 1 + 1) + 1));
      console.log("new prize");
      console.log(prize);
      setImgArray(["puerta", "puerta", "puerta"]);
    }
  }

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      ></link>
      <header className="App-header">
        <h1>The Monty Hall Paradox</h1>
      </header>
      <body>
        <div class="clear"></div>
        <h2>Bayes Theorem</h2>
        <p>
          Bayes’ theorem is a fundamental concept in probability theory. It
          allows us to update our beliefs or probabilities about an event based
          on new evidence.
        </p>
        <p>The formula for Bayes’ theorem is as follows: </p>
        <BayesTheorem />
        <ul>
          <li>
            <p>
              (P(y | x)): The probability of event y given that event x has
              occurred.
            </p>
          </li>
          <li>
            <p>
              (P(x | y)): The probability of event x given that event y has
              occurred.
            </p>
          </li>
          <li>
            <p>
              P(x) and P(y): The marginal probabilities of events x and y,
              respectively.
            </p>
          </li>
        </ul>
        <h2>Bayes’ Theorem in Monty Hall Paradox</h2>
        <div class="box">
          <p>
            <strong>Staging </strong>
            Imagine you’re a contestant on a game show. You face three doors:
            behind one is a car (the prize you want), and behind the other two
            are goats (not so exciting). You choose a door (let’s say Door A)
            but don’t open it yet.
          </p>
          <p>
            <strong>Monty's move </strong>
            The host, who knows what’s behind each door, opens another door
            (let’s say Door B) to reveal a goat. Now you have a choice: stick
            with your original choice (Door A) or switch to the remaining
            unopened door (Door C).
          </p>
          <p>
            <strong>The Paradox </strong>
            Intuitively, it might seem that switching or staying doesn’t matter.
            After all, there are two unopened doors left, so the odds should be
            50-50, right? But here’s where it gets interesting: switching doors
            gives you a higher chance of winning the car!
          </p>
        </div>
        <div className="row">
          <div className="col">
            <p>
              <strong>Initial Conditions:</strong>
            </p>
            <p>By the beginning the probabilities will look like this:</p>
            <ul>
              <li>
                <ProbabilityFrac x="Car behind A" num="1" den="3" />
              </li>
              <li>
                <ProbabilityFrac x="Car behind B" num="1" den="3" />
              </li>
              <li>
                <ProbabilityFrac x="Car behind C" num="1" den="3" />
              </li>
            </ul>
          </div>
          <div className="col">
            <p>
              <strong>Monty’s Move:</strong>
            </p>
            <p>
              When the host opens Door B (revealing a goat), the probabilities
              change:
            </p>
            <ul>
              <li>
                <ProbabilityFrac x="Car behind A" num="1" den="3" />
              </li>
              <li>
                <Probability x="Car behind B" n="0" />
              </li>
              <li>
                <ProbabilityFrac x="Car behind C" num="2" den="3" />
              </li>
            </ul>
          </div>
        </div>
        <p>
          <strong>Switching Doors </strong>
        </p>
        <p>
          If you switch to Door C, your chance of winning becomes 2/3! Why?
          Because the host’s move essentially transferred the probability from
          Door B to Door C.
        </p>
        <p>
          <strong>Conclusion </strong>
        </p>
        <p>
          Switching is the best strategy. Even though it feels counterintuitive,
          the math supports it. Bayes’ theorem helps us understand how new
          information (the host’s move) affects our probabilities.
        </p>
        <div class="box">
          <h4>Play the Game</h4>
          <p>
            Now its your turn to find the car! This is your opportunity to test
            the Bayes Theorem, play the game and find your conclusions... I
            suggest that you play the game a couple dozens of times to reduce
            the noise effects.
          </p>
        </div>
        <DoorRow
          doors={doors}
          manageClick={manageClick}
          clicked={clicked}
          imgArray={imgArray}
        />
        <button type="button" class="btn btn-primary btn-lg" onClick={restart}>
          Restart
        </button>
        <div class="clear"></div>
      </body>
      <footer>
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/garzafatima/">Fatima Garza</a>
      </footer>
    </div>
  );
}

function DoorRow({ doors, manageClick, clicked, imgArray }) {
  return (
    <div class="row">
      <DoorCol
        n={doors[0]}
        imag={imgArray[0]}
        manageClick={manageClick}
        clicked={clicked}
      />
      <div class="col" align="center"></div>
      <DoorCol
        n={doors[1]}
        imag={imgArray[1]}
        manageClick={manageClick}
        clicked={clicked}
      />
      <div class="col" align="center"></div>
      <DoorCol
        n={doors[2]}
        imag={imgArray[2]}
        manageClick={manageClick}
        clicked={clicked}
      />
    </div>
  );
}

function DoorCol({ n, imag, manageClick, clicked }) {
  if (imag === "puerta") {
    imag = puerta;
  } else {
    if (imag === "carro") {
      imag = carro;
    } else {
      if (imag === "burro") {
        imag = burro;
      }
    }
  }
  return (
    <div class="col col-fill col-sm-3" align="center">
      <img
        class="puerta"
        src={imag}
        alt={"puerta" + n}
        onClick={() => manageClick({ n })}
      />
    </div>
  );
}

export default App;
