interface DenProps {
  datum: number;
}

function Den({ datum }: DenProps) {
  return (
    <div className="den">
      <div className="datum">{datum}</div>
      <div className="info">{}</div>
    </div>
  );
}

export default Den;
