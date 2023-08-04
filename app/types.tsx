export interface Product {
  Price: {
    Value: number
    Currency: string
  }
  SoldOut: number
  Title: string
  ProductCategory: {
    ProductCategoryId: number
    Name: string
  }
  PhotoUploadCount: number
  CardShopId: number
  DirectSmile: boolean
  DefaultSizeId: number
  ProductId: number
  MoonpigProductNo: string
  TradingFaces: number
  IsLandscape: number
  ShortDescription: string
  Description: string
  IsCustomisable: string
  IsMultipack: string
  SeoPath: string
  ProductCategoryGroupSeoPath: string
  ProductLink: {
    Href: string
    Method: string
    Rel: string
    Title: number
  }
  ProductImage: {
    Link: {
      Href: string
      Method: string
      Rel: string
      Title: number
    }
    MimeType: string
  }
  Reviews: {
    MinReviewData: number
    MaxReviewData: number
    AverageStarReviewRating: number
    ReviewCount: number
  }
  AdditionalProductImages: []
}

interface Children {
  Name: string
  DisplayName: string
  SearchKey: string
  Count: number
  Children: Array<Children> | null
}

interface Facet {
  Name: string
  DisplayName: string
  SearchKey: string
  Count: number
  Children: Array<Children>
}

export interface AllCardsData {
  SearchId: string
  NumberOfProducts: number
  Start: number
  Products: Array<Product>
  Facets: Array<Facet>
}
