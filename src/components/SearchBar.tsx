// src/components/SearchBar.tsx
export default function SearchBar() {
  const [query, setQuery] = useState('')

  return (
    <div className="relative max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search products or services..."
        className="w-full pl-4 pr-10 py-2 border rounded-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <MagnifyingGlassIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  )
}