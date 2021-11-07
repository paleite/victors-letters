import * as React from "react";

const getVoice = (voicesList: SpeechSynthesisVoice[]): SpeechSynthesisVoice => {
  return voicesList
    .sort((a, b) =>
      a.localService !== b.localService ? (a.localService !== true ? 1 : -1) : 0
    )
    .sort((a, b) => (a.lang !== b.lang ? (a.lang !== "de-DE" ? 1 : -1) : 0))
    .reduce<SpeechSynthesisVoice>(
      (acc, cur) => (cur.lang === "de-DE" ? cur : acc),
      voicesList[0]
    );
};

const App: React.FunctionComponent = () => {
  const [letter, setLetter] = React.useState("");
  const [voicesList, setVoicesList] = React.useState<SpeechSynthesisVoice[]>(
    window.speechSynthesis.getVoices()
  );
  const voice = React.useMemo(() => getVoice(voicesList), [voicesList]);

  window.speechSynthesis.onvoiceschanged = () =>
    setVoicesList(() => window.speechSynthesis.getVoices());

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    // const nextLetter = event.target.value.slice(-1).toUpperCase();
    const nextLetter = event.target.value.split(" ").slice(-1).join("");
    setLetter(nextLetter);

    ((spokenLetter) => {
      const speech = new SpeechSynthesisUtterance(spokenLetter);
      speech.voice = voice;

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(speech);
    })(nextLetter);
  };

  return (
    <div className="App">
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
    </div>
  );
};

export default App;
