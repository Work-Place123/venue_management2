'use client'

export default function GalleryPage() {
  const images = [
    { id: 1, url: 'https://via.placeholder.com/300x200', title: 'Wedding Shoot' },
    { id: 2, url: 'https://via.placeholder.com/300x200', title: 'Birthday Bash' },
    { id: 3, url: 'https://via.placeholder.com/300x200', title: 'Outdoor Session' },
  ]

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.id} className="bg-white rounded shadow p-2">
            <img src={img.url} alt={img.title} className="rounded w-full object-cover h-48" />
            <div className="mt-2 text-sm font-medium">{img.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
