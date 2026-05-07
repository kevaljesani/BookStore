export default function SearchBar({ search, setSearch }: any) {
  return (
    <input
      className="border p-2"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}