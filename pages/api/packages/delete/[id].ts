import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === 'DELETE') {
    try {
      await prisma.packages.delete({
        where: { id: Number(id) },
      })

      res.status(204).end() // No content response for successful delete
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete package' })
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' })
  }
}
