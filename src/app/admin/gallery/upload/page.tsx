'use client'

import { useState } from 'react'

export default function UploadPhotosPage() {
  const [form, setForm] = useState({
    title: '',
    caption: '',
    altText: '',
    description: '',
    file: null as File | null,
    related: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, file: e.target.files?.[0] || null })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Image saved (frontend only)')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-6">Upload New Image</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <div>
          <label className="block text-sm mb-1">Related</label>
          <select name="related" value={form.related} onChange={handleChange} className="w-full border px-3 py-2 rounded text-sm">
            <option value="">-- Select --</option>
            <option value="Liam Moore + Steven Grant">Liam Moore + Steven Grant</option>
            <option value="Ayesha Khan">Ayesha Khan</option>
          </select>
        </div> */}

        <div>
          <label className="block text-sm mb-1">Title</label>
          <input name="title" value={form.title} onChange={handleChange} className="w-full border px-3 py-2 rounded text-sm" />
        </div>

        <div>
          <label className="block text-sm mb-1">Caption</label>
          <input name="caption" value={form.caption} onChange={handleChange} className="w-full border px-3 py-2 rounded text-sm" />
        </div>

        <div>
          <label className="block text-sm mb-1">Alternate Text</label>
          <input name="altText" value={form.altText} onChange={handleChange} className="w-full border px-3 py-2 rounded text-sm" />
        </div>

        <div>
          <label className="block text-sm mb-1">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} className="w-full border px-3 py-2 rounded text-sm" rows={3} />
        </div>

        <div>
          <label className="block text-sm mb-1">Choose File</label>
          <input type="file" onChange={handleFileChange} />
        </div>

        <div className="flex gap-2 mt-4">
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-500">Save Image</button>
          <button type="button" className="bg-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-400">Go Back</button>
        </div>
      </form>

      <div className="border-dashed border-2 border-cyan-600 mt-8 p-10 text-center text-cyan-600 rounded">
        Drag files here to upload
      </div>
    </div>
  )
}
