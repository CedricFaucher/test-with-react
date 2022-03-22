export default function Mocks({ array }) {
  const sumOfArray = array => {
    return array.reduce((a, b) => a + b);
  };
  
  return sumOfArray(array);
}