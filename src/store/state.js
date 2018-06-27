export default {
  // start starter code
  message: null,
  messageTimeout: null,
  tasks: [],
  task: {
    body: null
  },
  sampleMessage : 'Sample Message',
  showMenu: false,
  // end starter code

  // start homepage code
  homepageContent : [],
  landingPageContent : [],
  //end homepage code
  // start patterns
  patterns: null,
  patternTypes : [],
  fitleredPatterns : [],
  // end patterns

  materials: [],

  // start filters
  appliedColorFilters: [],
  appliedPatternFilters: [],
  appliedSearchTerm: '',
  searchColorParams: '',
  searchPatternParams: '',
  showMobileFilters: false,
  colorParameters: '',
  patternParameters: '',
  completeAlgoliaParams: null,
  //end filters

  //start marketing
  landingContent: null,
  //end marketing

  // start artists
  artists: null,
  selectedArtist: null,
  pageArtist: null,
  //end artists

  // start favorites
  favorites : [],
  //end favorites

  // start cart
  cart : [],
  cartTotal: 0,
  productAdded: null,
  salesTaxPercent: 6,
  shippingCost: .08,
  //end cart

  //start blog
  blogs: [],
  blogPost: null,
  //end blog

  //start education
  education: null,
  //end education

  //start marketing
  marketingPanel: null,
  //end marketing

  //start search
  algoliaResults: null,
  algoliaColors: null,
  algoliaPatterns: null,
  //end search

  //start pdp
  patternInfo : {},
  pdpMaterials: ['vinyl','polywoven'],
  pdpSizes: [
    {
      "DisplayName": "16' x 3' Roll",
      "Value": "16x3"
    },
    {
      "DisplayName": "20' x 3' Roll",
      "Value": "20x3"
    },
    {
      "DisplayName": "1' x 1' Sample",
      "Value": "Sample"
    }
  ],
  pdpColors: [],
  materialSelected: {},
  sizeSelected: {},
  colorSelected: {},
  selectedProduct: {},
  colorsAvailable: [],
  quantitySelected: 1,
  //end pdp

  //start PDP room
  pdpRoom : 'livingRoom',
  // end PDP room
}
