import styles from '../page.module.css'
import Grid from '@mui/material/Grid'
import Card from './card'
import { Product } from '../types'

const getCards = async () => {
  const res = await fetch(
    'https://moonpig.github.io/tech-test-frontend/search.json',
  )
  return res.json()
}

export default async function Home() {
  const data = await getCards()

  const { Products } = data
  return (
    <main className={styles.main}>
      <Grid container spacing={2}>
        {Products.map((product: Product) => {
          const { ProductId, Title, MoonpigProductNo, ProductImage } = product
          return (
            <Grid key={`${ProductId}-grid`} item xs={12} sm={6} md={4} lg={3}>
              <Card
                content={Title}
                key={`${ProductId}-card`}
                productId={ProductId}
                productNumber={MoonpigProductNo}
                productImage={ProductImage}
              ></Card>
            </Grid>
          )
        })}
      </Grid>
    </main>
  )
}
