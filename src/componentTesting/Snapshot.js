export default function Snapshot() {
  const returnString = () => {
    return "I will be snapshot!";
  };

  return (
    <div className="totiw">
      <p id="tutu">{returnString()}</p>
    </div>
  );
}