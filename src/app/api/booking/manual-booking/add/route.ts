import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      name,
      email,
      phone,
      eventDate,
      venueType,
      numberOfGuests,
      useCustomPlanner,
      packageId,
      customServices,
      customPrice,
      paymentStatus,
      paymentMethod,
      specialRequests
    } = body

    const booking = await prisma.manualBooking.create({
      data: {
        name,
        email,
        phone,
        eventDate: new Date(eventDate),
        venueType,
        numberOfGuests: parseInt(numberOfGuests),
        useCustomPlanner,
        packageId: packageId ? parseInt(packageId) : null,
        customServices,
        customPrice: customPrice ? parseFloat(customPrice) : null,
        paymentStatus,
        paymentMethod,
        specialRequests
      }
    })

    return NextResponse.json({ success: true, booking })
  } catch (error) {
    console.error('Error saving manual booking:', error)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
