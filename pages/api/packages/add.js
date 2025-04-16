import db from '@/lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    name,
    price,
    eventCategory,
    venueType,
    packageType,
    packageFeatures,
    description,
    imageUrl,
  } = req.body;

  // Validate required fields
  if (
    !name ||
    !price ||
    !eventCategory ||
    !venueType ||
    !packageType ||
    !packageFeatures ||
    !description
  ) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const [result] = await db.execute(
      `INSERT INTO packages 
        (name, price, event_category, venue_type, package_type, package_features, description, image_url)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        price,
        eventCategory,
        venueType,
        packageType,
        packageFeatures,
        description,
        imageUrl || null, // Allow imageUrl to be optional
      ]
    );

    res
      .status(200)
      .json({ message: 'Package added successfully!', id: result.insertId });
  } catch (error) {
    console.error('DB Error:', error.message); // Show error message only
    res.status(500).json({ message: 'Database error', error: error.message });
  }
}
