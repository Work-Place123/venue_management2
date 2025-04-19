import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json()

    const updatedPackage = await prisma.packages.update({
      where: { id: Number(params.id) },
      data: {
        event_category: body.event_category,
        venue_type: body.venue_type,
        package_type: body.package_type,
        name: body.name,
        price: body.price,
        package_features: body.package_features,
        description: body.description,
        image_url: body.image_url,
      },
    })

    return NextResponse.json({
      message: 'Package updated successfully',
      data: updatedPackage,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update package' }, { status: 500 })
  }
}
