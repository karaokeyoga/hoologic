import type { Metadata } from 'next/types'
import { FC } from 'react'
import type { _Post } from '../../util/types'
import { Post } from '../../comp/post'
import { POSTS_QUERY } from '../../util/general'
import { SANITY_CLIENT } from '../../util/sanity'

// types

type _generateMetadataParams = { params: Promise<{ slug: string }> }
type _PostPageProps = { params: Promise<{ slug: string }> }

// metadata

export const generateMetadata = async (props: _generateMetadataParams): Promise<Metadata> => {
  const { slug } = await props.params

  const posts = await SANITY_CLIENT.fetch<_Post[]>(POSTS_QUERY)

  const post = posts.find(post => post.slug.current === decodeURIComponent(slug))

  if (!post) {
    process.exit(1)
  }

  return {
    alternates: {
      canonical: `/${slug}`
    },
    description: `${post.title} : Hoo Logic`,
    title: `${post.title} : Hoo Logic`
  }
}

// functions

export const generateStaticParams = async () => {
  const posts = await SANITY_CLIENT.fetch<_Post[]>(POSTS_QUERY)

  return posts.map(post => ({ slug: post.slug.current }))
}

// components

const PostPage: FC<_PostPageProps> = async props => {
  const { slug } = await props.params

  const posts = await SANITY_CLIENT.fetch<_Post[]>(POSTS_QUERY)

  const post = posts.find(post => post.slug.current === decodeURIComponent(slug))

  if (!post) {
    process.exit(1)
  }

  return <Post post={post} />
}

export default PostPage
