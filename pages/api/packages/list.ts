// /pages/api/packages/list.ts

import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const packages = await prisma.packages.findMany() // Assuming 'packages' is the correct model name
    res.status(200).json(packages)
  } catch (error) {
    console.error('Error fetching packages:', error)
    res.status(500).json({ error: 'Failed to fetch packages' })
  }
}
