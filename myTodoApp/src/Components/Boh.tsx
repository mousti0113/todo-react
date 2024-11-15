type BohProps = {
    text: string;
    vet: string[];
  };
  
  function Boh({ text, vet }: BohProps) {
    return (
      <div>
        <p>{text}</p>
        <ul>
          {vet.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Boh;
