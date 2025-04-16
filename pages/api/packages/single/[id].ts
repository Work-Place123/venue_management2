import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'GET') {
    try {
      const singlePackage = await prisma.packages.findUnique({
        where: { id: Number(id) },
      })

      if (!singlePackage) {
        return res.status(404).json({ error: 'Package not found' })
      }

      res.status(200).json(singlePackage)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch package' })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
