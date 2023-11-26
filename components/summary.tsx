import { SERIALIZERS } from '@/components/serializers'
import { useAppContext } from '@/hooks/useAppContext'
import { sanityImageUrl } from '@/utilities/sanity'
import { BLACK, WHITE } from '@/utilities/styles'
import type { _Post } from '@/utilities/types'
import { Box, Link, Typography } from '@mui/material'
import { PortableText } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import Image from 'next/image'
import RouterLink from 'next/link'
import React, { Dispatch, FC, MouseEvent, ReactNode, SetStateAction, useState } from 'react'

// types

type _ConditionalLinkProps = { children: ReactNode; currentLink: string; isLink: boolean; post: any; setCurrentLink: Dispatch<SetStateAction<string>> }
type _DescriptionProps = { description: any }
type _SummaryProps = { classes: string; isLink?: boolean; post: _Post; styles?: any }
type _TitleProps = { isTitleInBody: boolean; title: string }

// components

const ConditionalLink: FC<_ConditionalLinkProps> = ({ children, currentLink, isLink, post, setCurrentLink }) => {
  const { setPostPosition } = useAppContext()

  const handleClick = ({ currentTarget }: MouseEvent<HTMLAnchorElement>) => {
    const position = currentTarget.getBoundingClientRect()

    setPostPosition({ left: position.left - 3, top: position.top })
  }

  const handleMouseOver = ({ currentTarget }: MouseEvent<HTMLAnchorElement>) =>
    setCurrentLink((currentTarget.href.match(/^https?:\/\/[^/]+(.*)/) as RegExpMatchArray)[1])

  return isLink ? (
    <Link
      component={RouterLink}
      href={`/${post.slug.current}`}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      sx={{
        '> div': { transition: 'transform 0.1s', ...(post.slug.current === currentLink.slice(1) && { transform: 'scale(0.99)' }) },
        color: BLACK,
        display: 'block'
      }}
    >
      {children}
    </Link>
  ) : (
    <>{children}</>
  )
}

const Description: FC<_DescriptionProps> = ({ description }) =>
  description && (
    <Box sx={{ a: { color: BLACK } }}>
      <PortableText components={SERIALIZERS} value={description} />
    </Box>
  )

export const Summary: FC<_SummaryProps> = ({ classes, isLink = false, post, styles }) => {
  const [currentLink, setCurrentLink] = useState('')

  const { height, width } = getImageDimensions(post.thumbnailImage)

  const handleMouseOut = () => setCurrentLink('')

  return (
    <Box className={classes} onMouseOut={handleMouseOut} style={styles} sx={{ mb: 0.75, mx: 0.375, width: 314 }}>
      <ConditionalLink currentLink={currentLink} isLink={isLink} post={post} setCurrentLink={setCurrentLink}>
        <Box sx={{ bgcolor: WHITE, border: '0.5px solid', borderRadius: 0.5, img: { height: 'auto', width: '100%' }, p: 1.5 }}>
          <Image alt={post.title} height={height} src={sanityImageUrl(post.thumbnailImage)} width={width} />

          <Title isTitleInBody={post.titleInBody} title={post.title} />

          <Description description={post.description} />
        </Box>
      </ConditionalLink>
    </Box>
  )
}

const Title: FC<_TitleProps> = ({ isTitleInBody, title }) =>
  isTitleInBody ? null : (
    <Typography sx={{ fontSize: 19, fontWeight: 700, mb: 1.5, mt: 2.25, textTransform: 'uppercase' }} variant="h1">
      {title}
    </Typography>
  )
