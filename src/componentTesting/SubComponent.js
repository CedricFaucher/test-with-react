export default function SubComponent({ input, setInput }) {
  return (
    <>
      <label htmlFor="inputField">
        Input here
      </label>
      <input 
        type="text" 
        name="inputField" 
        id="inputField" 
        value={input} 
        onChange={e => setInput(e.target.value)} 
        placeholder="I am placeholder, nice to meet you!"
      />
    </>
  );
}