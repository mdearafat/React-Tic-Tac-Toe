export default function Board() {
  return (
    <>
      <div>
        <Square value="O" />
        <Square value="X" />
        <Square value="X" />
      </div>
      <div>
        <Square value="X" />
        <Square value="X" />
        <Square value="X" />
      </div>
      <div>
        <Square value="X" />
        <Square value="X" />
        <Square value="X" />
      </div>
    </>
  );
}

function Square({ value }) {
  return (
    <button className="bg-white h-12 w-12 border border-gray-600 m-1 text-lg">
      {value}
    </button>
  );
}
