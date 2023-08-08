export interface ProductImage {
  Link: {
    Href: string
    Method: string
    Rel: string
    Title: number
  }
  MimeType: string
}

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
  ProductImage: ProductImage
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

interface AvailableSize {
  AvailableSubstrates: null
  Category: [any]
  Currency: string
  Description: string
  DisplayOrder: number
  Id: number
  Kind: [any]
  MinimumBundle: number
  Name: string
  PostageSize: [any]
  Price: number
  Weights: [any]
  DisplayName: string
  DefaultNoOfPages: number
  CanPrepay: boolean
}

export interface CardDetails {
  Name: string
  SizeName: string
  AvailableSizes: [AvailableSize]
  Description: string
  DesignFeatureTags: [string]
  ImageUrls: [
    {
      ImageNo: number
      ImageUrl: string
    },
  ]
  IsCustomisable: true
  Metadata: {}
  MoonpigProductNo: string
  Pages: [{ PageNo: number; Template: [Object] }]
  ProductCategoryGroup: {
    Name: string
    PageUrl: string
    SeoPath: string
  }
  ProductId: string
  ProductUrl: string
  RangeId: number
  Rank: number
  SeoPath: string
  Size: {
    AvailableSubstrates: []
    Category: {
      Id: number
      Name: string
    }
    Currency: string
    Description: string
    DisplayOrder: number
    Id: number
    Kind: {
      Category: [any]
      Id: number
      Name: string
    }
    MinimumBundle: number
    Name: string
    PostageSize: {
      Id: number
      Name: string
    }
    Price: number
    Weights: {
      EnvelopeWeight: number
      ItemWeight: number
    }
    DisplayName: string
    DefaultNoOfPages: number
    CanPrepay: boolean
  }
  SoldOut: boolean
  SupplierNo: string
  ThumbnailUrl: string
  Title: string
  AdditionalInfo: string
  IsMultipack: boolean
  UndeliverableDates: []
  InStock: boolean
  OccasionId: number
  PageCountOverride: null
  ProductCategoryId: number
  PublishedOnSite: boolean
  StyleId: number
  SupplierId: number
}
