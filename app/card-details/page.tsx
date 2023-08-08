import Image from 'next/image'
import styles from '../page.module.css'
import { Button } from '@mui/material'

interface CardDetailsProps {
  searchParams: {
    productNumber: string
  }
}

const viewCard = async (productNumber: string) => {
  const res = await fetch(
    `https://moonpig.github.io/tech-test-frontend/product/${productNumber}.json`,
  )
  return res.json()
}

export default async function CardDetails({ searchParams }: CardDetailsProps) {
  const { productNumber } = searchParams
  const data = await viewCard(productNumber)
  const { Title, Description, ImageUrls } = data

  return (
    <main className={styles.main}>
      <h1>{Title}</h1>
      <Image
        src={ImageUrls[0].ImageUrl}
        width={500}
        height={500}
        alt="Picture of the author"
        objectFit="contain"
        objectPosition="relative"
      />
      <p>{Description}</p>
      <Button variant="contained">Buy Me</Button>
    </main>
  )
}
