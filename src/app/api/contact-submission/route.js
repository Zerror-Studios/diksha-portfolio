import { NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'

const writeClient = client.withConfig({
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
})

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const normalizeField = (value) => {
  if (typeof value !== 'string') return ''

  return value.trim()
}

export async function POST(request) {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    return NextResponse.json(
      { message: 'Sanity write token is not configured.' },
      { status: 500 }
    )
  }

  let body

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 })
  }

  const fullName = normalizeField(body.fullName)
  const phone = normalizeField(body.phone)
  const email = normalizeField(body.email).toLowerCase()
  const message = normalizeField(body.message)

  if (!fullName || !email || !message) {
    return NextResponse.json(
      { message: 'Please fill in your name, email, and message.' },
      { status: 400 }
    )
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { message: 'Please enter a valid email address.' },
      { status: 400 }
    )
  }

  try {
    await writeClient.create({
      _type: 'contactSubmission',
      fullName,
      phone,
      email,
      message,
      submittedAt: new Date().toISOString(),
      status: 'new',
    })

    return NextResponse.json({ message: 'Submission saved.' })
  } catch (error) {
    console.error('Contact submission failed:', error)

    return NextResponse.json(
      { message: 'Could not save your submission right now.' },
      { status: 500 }
    )
  }
}
