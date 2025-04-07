import React, { useState } from 'react'
import supabase from '../data/supa'

//? this is a component that is used to add a new dish to the database

function Add() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      let imageUrl = ''
      
      // Upload image if selected
      if (image) {
        try {
          // Create a unique file name
          const fileExt = image.name.split('.').pop()
          const fileName = `${Date.now()}-${Math.random()}.${fileExt}`
          
          // Upload the file directly without checking bucket existence
          const { error: uploadError } = await supabase.storage
            .from('Dishes')
            .upload(fileName, image)

          if (uploadError) {
            console.error('Upload error:', uploadError)
            throw uploadError
          }

          // Get public URL
          const { data: { publicUrl } } = supabase.storage
            .from('Dishes')
            .getPublicUrl(fileName)
          
          imageUrl = publicUrl
          console.log('Image uploaded successfully:', publicUrl)
        } catch (uploadError: unknown) {
          if (uploadError instanceof Error) {
            setMessage(`Image upload failed: ${uploadError.message}`)
            console.error('Upload error details:', uploadError)
          } else {
            setMessage('Image upload failed')
          }
          setLoading(false)
          return
        }
      }

      // Insert dish data
      const { error } = await supabase
        .from('Dishes')
        .insert([
          {
            name,
            category,
            price: parseFloat(price),
            pic: imageUrl
          }
        ])

      if (error) throw error

      setMessage('Dish added successfully!')
      setName('')
      setCategory('')
      setPrice('')
      setImage(null)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message)
      } else {
        setMessage('An unexpected error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Dish</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange focus:ring-orange"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange focus:ring-orange"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0"
            step="0.01"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange focus:ring-orange"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            accept="image/*"
            className="mt-1 block w-full"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange text-white py-2 px-4 rounded-md hover:bg-orange/90 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? 'Adding...' : 'Add Dish'}
        </button>

        {message && (
          <p className={`mt-2 text-sm ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  )
}

export default Add