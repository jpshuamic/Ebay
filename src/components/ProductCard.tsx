// src/components/ProductCard.tsx
export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={product.image} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-medium">{product.title}</h3>
        <p className="text-gray-600">${product.price}</p>
        <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  )
}