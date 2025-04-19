import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.packages.delete({
      where: { id: Number(params.id) },
    })

    return new NextResponse(null, { status: 204 }) // No content
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete package' }, { status: 500 })
  }
}
