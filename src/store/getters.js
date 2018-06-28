export const getTask = state => state.task;

export const getHomepageContentFromStore = state => state.homepageContent;
export const getLandingPageContentFromStore = state => state.landingPageContent;

export const getMessage = state => state.message;

export const getSample = state => state.sampleMessage;

export const getPatternsFromStore = state => state.patterns;

export const getFavoritesFromStore = state => state.favorites;

export const getCartFromStore = state => state.cart;

export const getProductAddedFromStore = state => state.productAdded;

export const getFavoritesCount = state => state.favorites.length;

export const getCartCount = state => state.cart.length;
//TODO : THIS IS GARBAGE - has to loop and count (action?)
export const getCartTotalFromStore = state => state.cartTotal;

export const getSalesTaxPercentFromStore = state => state.salesTaxPercent;

export const getShippingCostFromStore = state => state.shippingCost;

export const getPatternInfoFromStore = state => state.patternInfo;

export const getPdpMaterialsFromStore = state => state.pdpMaterials;

export const getPdpSizesFromStore = state => state.pdpSizes;

export const getRoomShotDataFromStore = state => state.roomShotData;

export const getRoomShotsFromStore = state => state.roomShots;

export const getMaterialSelectedFromStore = state => state.materialSelected;

export const getSizeSelectedFromStore = state => state.sizeSelected;

export const getColorSelectedFromStore = state => state.colorSelected;

export const getSelectedProductFromStore = state => state.selectedProduct;

export const getSelectedPdpImageFromStore = state => state.selectedPdpImage;

export const getPdpColorsFromStore = state => state.pdpColors;

export const getColorsAvailableFromStore = state => state.colorsAvailable;

export const getAlgoliaResultsFromStore = state => state.algoliaResults;

export const getAlgoliaColorsFromStore = state => state.algoliaColors;

export const getAlgoliaPatternsFromStore = state => state.algoliaPatterns;

export const getMarketingPanelFromStore = state => state.marketingPanel;

export const getColorFiltersFromStore = state => state.colorFilters;

export const getPatternTypesFromStore = state => state.patternTypes;

export const getMaterialsFromStore = state => state.materials;

export const getShowMobileFilters = state => state.showMobileFilters;

export const getArtistsFromStore = state => state.artists;

export const getAboutUsFromStore = state => state.aboutUs;

export const getHowToFromStore = state => state.howTo;

export const getFaqFromStore = state => state.faq;

export const getLandingContentFromStore = state => state.landingContent;

export const getSelectedArtistFromStore = state => state.selectedArtist;

export const getQuantitySelectedFromStore = state => state.quantitySelected;

export const getPageArtistFromStore = state => state.pageArtist;

export const getPdpRoomFromStore = state => state.pdpRoom;

export const getBlogsFromStore = state => state.blogs;

export const getBlogPostFromStore = state => state.blogPost;

export const getEducationFromStore = state => state.education;

export const getAppliedPatternFiltersFromStore = state =>
  state.appliedPatternFilters;

export const getShowMenu = state => state.showMenu;

export const getTasks = state => {
  return state.tasks.sort((a, b) => {
    return b["id"] - a["id"];
  });
};
