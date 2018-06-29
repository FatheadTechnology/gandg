import * as api from "@/api";

import Prismic from "prismic-javascript";
const apiEndpoint = "http://evolution.cdn.prismic.io/api/v2";

export const removeFromTasks = (state, taskId) => {
  state.tasks = state.tasks.filter(task => {
    return task.id !== taskId;
  });
};

export const setTaskBody = (state, body) => {
  state.task.body = body;
};

export const setTasks = (state, tasks) => {
  state.tasks = tasks;
};

export const setMaterials = (state, materials) => {
  state.materials = materials;
};

export const setArtists = (state, artists) => {
  state.artists = artists;
};

export const setAboutUs = (state, aboutUs) => {
  state.aboutUs = aboutUs;
};

export const setHowTo = (state, howTo) => {
  state.howTo = howTo.data;
};

export const setFaq = (state, faq) => {
  state.faq = faq.data;
};

export const setTermsAndConditions = (state, terms) => {
  state.termsAndConditions = terms.data;
};

export const setPrivacyPolicy = (state, policy) => {
  state.privacyPolicy = policy.data;
};

export const setCareers = (state, careers) => {
  state.careers = careers.data;
};

export const setCrossSells = (state, crossSells) => {
  state.crossSells = crossSells;
};

export const setHomepageContent = (state, homepageJson) => {
  state.homepageContent = homepageJson;
  console.log("homepageJson", homepageJson);
};

export const setLandingPageContent = (state, landingPageContent) => {
  state.landingPageContent = landingPageContent;
};

export const setLandingContent = (state, landingContent) => {
  state.landingContent = landingContent;
};

export const setSelectedArtist = (state, artist) => {
  state.selectedArtist = artist;
};

export const setPageArtist = (state, artist) => {
  state.pageArtist = artist;
  console.log("pageArtist", state.pageArtist);
};

export const setCart = (state, cart) => {
  console.log("set cart =", cart);
  state.cart = cart;
};
export const setCartTotal = (state, cartTotal) => {
  state.cartTotal = cartTotal;
};

export const setBlogs = (state, blogs) => {
  state.blogs = blogs;
};

export const setBlogPost = (state, blog) => {
  state.blogPost = blog;
};

export const setEducation = (state, education) => {
  state.education = education;
};

export const setPatternInfo = (state, patternInfo) => {
  state.patternInfo = patternInfo[0];
  console.log("state.patternInfo", state.patternInfo);
};

export const setRoomShots = (state, images) => {
  state.roomShots = images;
};

export const setRoomShotData = (state, images) => {
  state.roomShotData = images;
};

export const setPatternTypes = (state, patternTypes) => {
  state.patternTypes = patternTypes;
  console.log("patternTypes", state.patternTypes);
};

export const applyPatternFilter = (state, patternType) => {
  function addOrRemove(array, value) {
    var index = array.indexOf(value);
    console.log("array before", array);

    if (index === -1) {
      array.push(value);
    } else {
      array.splice(index, 1);
    }
    console.log("array after", array);
  }
  addOrRemove(state.appliedPatternFilters, patternType);
};

export const applyColorFilter2 = (state, color) => {};

export const applyColorFilter = (state, color) => {
  state.appliedColorFilters = [];
  color.active = !color.active;

  /*    console.log('color', color)
    console.log('state', state)*/
  for (let i = 0; i < state.colorFilters.length; i++) {
    if (state.colorFilters[i].active) {
      state.appliedColorFilters.push(color);
      state.searchColorParams += "?primaryColor=" + color.colorName;
    }
  }
  /*console.log('state.searchParams = ', state.searchParams)
    */
  console.log("state.fitleredPatterns before", state.fitleredPatterns);

  api
    .getFilteredPatterns(state.searchColorParams, state.searchColorParams)
    .then(response => {
      state.fitleredPatterns = response.data;
    });
  console.log("state.fitleredPatterns after", state.fitleredPatterns);

  /*
    console.log('applied filters after for : ', state.appliedColorFilters);
*/
  //TODO : check to see what other filters are applied
  // TODO : make sure pattern filters and color filters play nice
  // TODO : appliedFilters : [ colors: [red,white,blue],

  // TODO : posts?title=json-server&author=typicode
  // TODO : make call with multiple params
  /*  console.log('color in mutation ', color)
   console.log('colors', state.colorFilters)
   console.log('applied filters = ', state.appliedColorFilters)
   /!*
   var a = ['red', 'blue', 'green', 'yellow'],
   b = 'red',
   c = 'yellow';
   console.log('red');*!/

   function addOrRemove(array, value) {
   var index = array.indexOf(value);
   console.log('array before', array)

   if (index === -1) {
   array.push(value);
   } else {
   array.splice(index, 1);
   }
   console.log('array after', array)
   }


   addOrRemove(state.appliedColorFilters, color){
   /!*  console.log('a',a);

   addOrRemove(a, b);
   console.log(a);

   addOrRemove(a, c);
   console.log(a);*!/
   }
   */
};
export const applyWallpaperFilter = (state, pattern) => {
  console.log("pattern in applyWallpaperFilter", pattern);

  function isValueFiltered(array, value) {
    var index = array.indexOf(value);
    console.log("array before", array);

    if (index === -1) {
      console.log("false");
      return false;
      //array.push(value);
    } else {
      console.log("true");
      return true;
      //array.splice(index, 1);
    }
    console.log("array after", array);
  }
  isValueFiltered(state.appliedPatternFilters, pattern.patternType);
};

export const prependToTasks = (state, task) => {
  state.tasks.unshift(task);
};

export const setMessage = (state, message) => {
  state.message = message;
};

export const setMarketingPanel = (state, panel) => {
  state.marketingPanel = panel;
};

export const setAlgoliaResults = (state, results) => {
  state.algoliaResults = results;
};

export const setAlgoliaColors = (state, colors) => {
  let keys = Object.keys(colors);
  let colorObject = {};
  for (var i in keys) {
    colorObject[i] = { name: keys[i], active: false };
  }

  state.algoliaColors = colorObject;
};

export const setAlgoliaPatterns = (state, patterns) => {
  let keys = Object.keys(patterns);
  let patternObject = {};
  for (var i in keys) {
    patternObject[i] = { name: keys[i], active: false };
  }

  state.algoliaPatterns = patternObject;
};

export const setSelectedProduct = (state, product) => {
  state.selectedProduct = product;
};

export const setSelectedPdpImage = (state, image) => {
  console.log("image being set as selected pdp image", image);
  state.selectedPdpImage = image;
};

export const setPdpRoom = (state, room) => {
  state.pdpRoom = room[0];
};

export const setQuantitySelected = (state, amount) => {
  if (state.quantitySelected + amount > 0) {
    state.quantitySelected += amount;
  }
};
