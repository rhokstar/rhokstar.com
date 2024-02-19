import NextImage, { ImageProps } from 'next/image'

// const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} />

const Image = ({ src, ...rest }: ImageProps) => <NextImage src={`/rhokstar.com${src}`} {...rest} />

export default Image
