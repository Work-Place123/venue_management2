import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma' // Make sure this path is correct for your setup

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'PUT') {
    try {
      const updatedPackage = await prisma.packages.update({
        where: { id: Number(id) },
        data: {
          event_category: req.body.event_category,
          venue_type: req.body.venue_type,
          package_type: req.body.package_type,
          name: req.body.name,
          price: req.body.price,
          package_features: req.body.package_features,
          description: req.body.description,
          image_url: req.body.image_url,
        },
      })

      return res.status(200).json({
        message: 'Package updated successfully',
        data: updatedPackage,
      })
    } catch (error: any) {
      console.error('Update error:', error)
      return res.status(500).json({ error: 'Failed to update package' })
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
}
