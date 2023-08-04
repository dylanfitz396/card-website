import styles from '../page.module.css'
import Grid from '@mui/material/Grid'
import Card from './card'
import { Product } from '../types'

const getData = async () => {
  const res = await fetch(
    'https://moonpig.github.io/tech-test-frontend/search.json',
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()
  console.log('data', data)

  const { SearchId, NumberOfProducts, Start, Products, Facets } = data
  return (
    <main className={styles.main}>
      <Grid container spacing={2}>
        {Products.map((product: Product) => {
          const { ProductId, Title } = product
          return (
            <Grid key={`${ProductId}-grid`} item xs={12} sm={6} md={4} lg={3}>
              <a key={`${ProductId}-anchor`} href='/card-details'>
                <Card content={Title} key={`${ProductId}-card`}></Card>
              </a>
            </Grid>
          )
        })}
      </Grid>
    </main>
  )
}
