// src/components/ServiceCard.tsx
export default function ServiceCard({ service }) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex items-center gap-3">
        <img src={service.seller.avatar} className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="font-medium">{service.title}</h3>
          <p className="text-sm text-gray-500">{service.seller.name}</p>
        </div>
      </div>
      <p className="my-2">{service.description}</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded-full">
        Hire (${service.price}/hr)
      </button>
    </div>
  )
}