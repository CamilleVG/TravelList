export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked / numItems) * 100);
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to you packing list.</em>
      </p>
    );
  return (
    <footer className="stats">
      You have {numItems} items on your list, and you have already packed{" "}
      {numPacked} ({percentagePacked}%)
    </footer>
  );
}
