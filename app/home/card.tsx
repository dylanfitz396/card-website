import Image from 'next/image'
import Link from 'next/link'
import { ProductImage } from '../types'

const Card = ({
  content,
  productNumber,
  productImage,
}: {
  content: string
  productNumber: string
  productId: number
  productImage: ProductImage
}) => {
  return (
    <div style={{ position: 'relative' }}>
      <Link href={{ pathname: '/card-details', query: { productNumber } }}>
        <Image
          src={productImage.Link.Href}
          width={500}
          height={500}
          alt="Picture of the author"
          objectFit="contain"
          objectPosition="relative"
        />
        <p>{content}</p>
      </Link>
    </div>
  )
}

export default Card
