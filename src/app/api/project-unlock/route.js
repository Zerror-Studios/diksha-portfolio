import { NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'
import { PROJECT_BY_SLUG_QUERY } from '@/sanity/lib/queries'

const serverClient = client.withConfig({ useCdn: false })

export async function POST(request) {
  const { slug, password } = await request.json()

  if (!slug || !password) {
    return NextResponse.json({ message: 'Missing password' }, { status: 400 })
  }

  const project = await serverClient.fetch(PROJECT_BY_SLUG_QUERY, { slug })

  if (!project || project.lockProject !== true || !project.projectPassword) {
    return NextResponse.json({ message: 'Project is not locked' }, { status: 404 })
  }

  if (password !== project.projectPassword) {
    return NextResponse.json({ message: 'Wrong password' }, { status: 401 })
  }

  const slides = project.slides || []
  const unlockedSlidesCount = Math.max(0, project.unlockedSlidesCount || 0)

  return NextResponse.json({
    slides: slides.slice(unlockedSlidesCount),
  })
}
