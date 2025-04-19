import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const singlePackage = await prisma.packages.findUnique({
      where: { id: Number(params.id) },
    })

    if (!singlePackage) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 })
    }

    return NextResponse.json(singlePackage)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch package' }, { status: 500 })
  }
}
