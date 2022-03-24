import Thumbnail from "../components/Thumbnail";

export default function Results({ results }) {
  return (
    <div>
      {results.map(result => {
        return <Thumbnail key={result.id} result={result} />;
      })}
    </div>
  );
}
