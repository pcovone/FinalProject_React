import { DotWave } from "@uiball/loaders";

const LoaderComponent = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DotWave size={47} speed={1} color="#0b5210" />
    </div>
  );
};

export default LoaderComponent;
