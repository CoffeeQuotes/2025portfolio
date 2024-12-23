// fetch blog post from medium https://medium.com/feed/@sky8052785942ocean

import { NextResponse } from 'next/server'
import Parser from 'rss-parser'

// Create a type for our Medium post
type CustomFeed = {
  items: Array<{
    title: string
    link: string
    pubDate: string
    content: string
    'content:encoded'?: string // Medium stores the full content here
  }>
}

type CustomParser = Parser<CustomFeed>

export async function GET() {
  try {
    const parser: CustomParser = new Parser({
      customFields: {
        item: [
          ['content:encoded', 'content'], // Map content:encoded to content
        ],
      },
    })
    
    const feed = await parser.parseURL('https://medium.com/feed/@sky8052785942ocean')
    
    // Transform the feed items to match our BlogPost type
    const posts = feed.items.map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      // Use content:encoded if available, fallback to regular content
      content: item['content:encoded'] || item.content || ''
    }))

    return NextResponse.json({
      status: 'success',
      posts
    })
  } catch (error) {
    console.error('Error fetching Medium feed:', error)
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Failed to fetch blog posts',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
