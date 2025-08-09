import { TypeAnimation } from "react-native-type-animation";

const AiAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        { text: "" },
        { text: "Got questions?" },
        { text: "" },
        { text: "What is CoverMe?" },
        { text: "" },
        { text: "How does it work?" },
        { text: "" },
        { text: "Why is this better?" },
      ]}
      loop
      style={{
        color: "white",
        fontSize: 30,
      }}
      delayBetweenSequence={4000}
    />
  );
};

export default AiAnimation;