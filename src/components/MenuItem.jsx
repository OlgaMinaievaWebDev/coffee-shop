function MenuItem({ item }) {
  return (
    <div className="bg-red p-4 border-b">
      <h2>{item.name}</h2>
    </div>
  );
}

export default MenuItem;
