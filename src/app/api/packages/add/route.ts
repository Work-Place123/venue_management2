import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const {
    name,
    price,
    eventCategory,
    venueType,
    packageType,
    packageFeatures,
    description,
    imageUrl,
  } = body

  if (
    !name ||
    !price ||
    !eventCategory ||
    !venueType ||
    !packageType ||
    !packageFeatures ||
    !description
  ) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
  }

  try {
    const newPackage = await prisma.packages.create({
      data: {
        name,
        price,
        event_category: eventCategory,
        venue_type: venueType,
        package_type: packageType,
        package_features: packageFeatures,
        description,
        image_url: imageUrl || null,
      },
    })

    return NextResponse.json({
      message: 'Package added successfully!',
      id: newPackage.id,
    })
  } catch (error: any) {
    console.error('DB Error:', error.message)
    return NextResponse.json({ message: 'Database error', error: error.message }, { status: 500 })
  }
}
