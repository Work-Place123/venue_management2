'use client'

import { useState, useEffect } from 'react'

export default function UploadPhotosPage() {
  const [form, setForm] = useState({
    title: '',
    caption: '',
    altText: '',
    description: '',
    file: null as File | null,
    related: '',
  })

  const [backendStatus, setBackendStatus] = useState('Checking connection...')

  useEffect(() => {
    fetch('http://localhost:8000/api/test-connection')
      .then((res) => res.json())
      .then((data) => setBackendStatus(`✅ Connected: ${data.message}`))
      .catch((err) => {
        console.error('Connection error:', err)
        setBackendStatus('❌ Failed to connect to Laravel backend')
      })
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 5 * 1024 * 1024) {
      alert('File is too large. Please select a file smaller than 5MB.');
      return;
    }
    setForm({ ...form, file });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Check for required fields
    if (!form.title || !form.caption || !form.file) {
      alert('Please fill out all fields and select a file.');
      return;
    }
  
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('caption', form.caption);
    formData.append('altText', form.altText);
    formData.append('description', form.description);
    formData.append('image', form.file);
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/upload-image', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Uploaded photo:', data);
        alert('Image uploaded successfully!');
      } else {
        const errorData = await response.json();
        console.error('Upload failed:', errorData);
        alert(`Image upload failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('An error occurred during upload.');
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0] || null;
    if (file) {
      setForm({ ...form, file });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-6">Upload New Image</h2>

      <div className="mb-4 p-3 border rounded bg-gray-100 text-sm text-gray-800">
        Laravel Status: {backendStatus}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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

      <div
        className="border-dashed border-2 border-cyan-600 mt-8 p-10 text-center text-cyan-600 rounded"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        Drag files here to upload
      </div>
    </div>
  );
}
