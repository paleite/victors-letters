// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from "react";

function App() {
  const [letter, setLetter] = React.useState("");
  // const [voices, setVoices] = React.useState(null);

  // React.useEffect(() => {
  //   var speech = new SpeechSynthesisUtterance(letter);
  //   const synth = window.speechSynthesis;
  //   let voices = synth.getVoices();
  //   let voice = voices.find(item => item.lang === "de-DE");

  //   console.log(voices, voice);
  //   speech.voice = voice;
  //   // console.dir(utterThis);
  //   // console.log(utterThis, utterThis.voice);
  //   synth.cancel();
  //   synth.speak(speech);
  // }, [letter, setLetter]);

  const handleChange = (e: $TSFixMe) => {
    console.log("triggererd");
    const nextLetter = e.target.value.substr(-1).toUpperCase();
    setLetter(nextLetter);

    ((spokenLetter) => {
      const speech = new SpeechSynthesisUtterance(spokenLetter);
      const synth = window.speechSynthesis;
      const voices = synth.getVoices();
      const voice = voices.filter((item) => item.lang === "de-DE").pop();

      console.log(voices, voice);
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'SpeechSynthesisVoice | undefined' is not ass... Remove this comment to see the full error message
      speech.voice = voice;
      // console.dir(utterThis);
      // console.log(utterThis, utterThis.voice);
      synth.cancel();
      synth.speak(speech);
    })(nextLetter);
  };

  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div className="App">
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <input
        type="text"
        name="letter"
        value={letter}
        onChange={handleChange}
        style={{
          width: "100vw",
          height: "100vh",
          fontSize: "100vh",
          textAlign: "center",
        }}
      />
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>
  );
}

export default App;
