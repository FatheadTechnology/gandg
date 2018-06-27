import * as api from "@/api";

import Prismic from "prismic-javascript";
import algoliasearch from "algoliasearch";
import router from "./../router";

const client = algoliasearch("S7MN0CIBBE", "ecf8c6a506e3515c1400eb7086879aa2", {
  protocol: "https:"
});
const index = client.initIndex("dev_EvolutionProducts");
const replicas = ["list-price_desc"];

// index.setSettings({
//   attributesForFaceting: ["design"],
//   replicas: replicas
// });

const replica_index = client.initIndex("list-price_desc");
// replica_index.setSettings({
//   ranking: ["desc(list-price)"]
// });

const prismicEndpoint = "https://guildandgrace.cdn.prismic.io/api/v2";

// START BOILER PLATE CODE

export const deleteTask = ({ commit, dispatch }, taskId) => {
  commit("removeFromTasks", taskId);

  api.deleteTask(taskId).then(() => {
    dispatch("setMessage", "Deleted!");
  });
};

export const getTasks = ({ commit }) => {
  api.getTasks().then(response => {
    commit("setTasks", response.data);
  });
};

export const setMessage = ({ commit }, message) => {
  commit("setMessage", message);

  setTimeout(() => {
    commit("setMessage", null);
  }, 3000);
};

export const saveTask = ({ commit, dispatch, state }) => {
  if (!state.task.body) {
    dispatch("setMessage", "Please enter a task");
    return;
  }

  api.storeTask({ body: state.task.body }).then(response => {
    commit("prependToTasks", response.data);
    dispatch("setMessage", "Task saved");
    commit("setTaskBody", null);
  });
};
// END BOILER PLATE CODE

// START MODALS
export const showModal = ({ state }, modalName) => {
  console.log("this", this);
  this.$modal.show(modalName);
};

export const hideModal = ({ state }, modalName) => {
  console.log("this", this);
  this.$modal.hide(modalName);
};
//END MODALS

//START PDP CODE

export const getPatternInfo = ({ commit, state }, patternParams) => {
  state.pdpColors = [];
  state.quantitySelected = 1;
  console.log("patternParams", patternParams);
  api.getPatternInfo(patternParams.pattern).then(response => {
    //get master product matching the product param in URL

    console.log("response from heroku = ", response);
    var products = response.data[0].Product.Children; //get list of child products under the master product
    console.log("products", products);

    // state.pdpMaterials.active = 'vinyl'
    var colorList = [];
    for (var i = 0; i < products.length; i++) {
      //loop through all the children products to find all unique colors available for the product
      if (!colorList.includes(products[i].ColorWay.ColorWayName)) {
        colorList.push(products[i].ColorWay.ColorWayName);
        console.log(
          "products[i].ColorWay being put into pdpColors:",
          products[i].ColorWay
        );
        state.pdpColors.push(products[i].ColorWay);
      }
    }

    state.colorSelected = products[0].ColorWay.ColorWayName; //default color to first product's material
    state.materialSelected = products[0].Material; //default material to first product's material
    state.sizeSelected = products[0].SizeDisplayName; //default material to first product's material

    if (
      patternParams.colorway &&
      patternParams.material &&
      patternParams.size
    ) {
      //if all three params are available, use them for pickers
      state.colorSelected = patternParams.colorway;
      state.materialSelected = patternParams.material;
      state.sizeSelected = patternParams.size;
    } else {
      //otherwise, direct to URL with the default selections
      router.replace({
        name: "PDP Full Params",
        params: {
          colorway: state.colorSelected,
          material: state.materialSelected,
          size: state.sizeSelected
        }
      });
    }

    commit("setPatternInfo", response.data);
  });
};

export const selectMaterial = ({ state }, material) => {
  state.materialSelected = material;
  router.replace({ params: { material: material } });
};

export const selectSize = ({ state }, size) => {
  state.sizeSelected = size;
  router.replace({ params: { size: size } });
};

export const selectColor = ({ state }, color) => {
  state.colorSelected = color;
  router.replace({ params: { colorway: color } });
};

export const findPdpProduct = ({ state, commit }) => {
  for (var i = 0; i < state.patternInfo.Children.length; i++) {
    if (
      state.patternInfo.Children[i].Material == state.materialSelected &&
      state.patternInfo.Children[i].ColorWay.ColorWayName ==
        state.colorSelected &&
      state.patternInfo.Children[i].SizeDisplayName == state.sizeSelected
    ) {
      console.log("Product match found:", state.patternInfo.Children[i]);
      commit("setSelectedProduct", state.patternInfo.Children[i]);
      return;
    }
  }
  console.log("Couldn't find matching product based on selected options!");
  // TODO: Show 404 page
};

//END PDP CODE

// START FILTERS CODE
// TODO: remove this
export const toggleColorFilter = ({ state, dispatch }, color) => {
  if (color.active) {
    color.active = false;
    state.appliedColorFilters.pop(color);
  } else {
    color.active = true;
    state.appliedColorFilters.push(color);
  }

  if (state.appliedColorFilters.length > 0) {
    var colorParams = "(design.color:";
    for (var filt in state.appliedColorFilters) {
      if (filt != 0) {
        colorParams += " OR design.color:";
      }
      colorParams += state.appliedColorFilters[filt].name;
    }
    colorParams += ")";
  } else {
    colorParams = "";
  }

  state.colorParameters = colorParams;

  dispatch("combinedSearch");
};
// TODO: remove this
export const togglePatternFilter = ({ state, dispatch }, patternType) => {
  if (patternType.active) {
    patternType.active = false;
    state.appliedPatternFilters.pop(patternType);
  } else {
    patternType.active = true;
    state.appliedPatternFilters.push(patternType);
  }

  if (state.appliedPatternFilters.length > 0) {
    var patternParams = "(design.type:";
    for (var filt in state.appliedPatternFilters) {
      if (filt != 0) {
        patternParams += " OR design.type:";
      }
      patternParams += state.appliedPatternFilters[filt].name;
    }
    patternParams += ")";
  } else {
    patternParams = "";
  }

  state.patternParameters = patternParams;
  dispatch("combinedSearch");
};
// TODO: remove this
export const combinedSearch = ({ state, dispatch }) => {
  var and = "";
  if (state.colorParameters && state.patternParameters) {
    and = " AND ";
  }

  var params = {
    searchTerm: state.appliedSearchTerm,
    filters: state.colorParameters + and + state.patternParameters
  };

  dispatch("searchAlgolia", { ...params });
};
// END FILTERS CODE


// START Homepage Content
export const getHomepageContent = ({ commit }) => {
  Prismic.getApi(prismicEndpoint)
    .then(function(api) {
      return api.query(Prismic.Predicates.at("document.type", "homepage"));
    })
    .then(
      function(response) {
        commit("setHomepageContent", response.results);
      },
      function(err) {
        console.log("Something went wrong: ", err);
      }
    );
};

// START Homepage Content
export const getLandingPageContent = ({ commit }, landingPageId) => {
  console.log('landing page entry', landingPageId)
  Prismic.getApi(prismicEndpoint)
    .then(function(api) {
      console.log('in then', api)
      return api.query(Prismic.Predicates.at('my.landing_page.uid', landingPageId));
    })
    .then(
      function(response) {
        console.log('response', response)
        commit("setLandingPageContent", response.results);
      },
      function(err) {
        console.log("Something went wrong: ", err);
      }
    );
};

// START ARTISTS
export const getArtists = ({ commit }) => {
  Prismic.getApi(prismicEndpoint)
    .then(function(api) {
      return api.query(Prismic.Predicates.at("document.type", "artist"));
    })
    .then(
      function(response) {
        commit("setArtists", response.results);
      },
      function(err) {
        console.log("Something went wrong: ", err);
      }
    );
};

export const getLandingContent = ({ commit }, uid) => {
  Prismic.getApi(prismicEndpoint)
    .then(function(api) {
      return api.query([
        Prismic.Predicates.at("document.type", "landing-page"),
        Prismic.Predicates.at("my.landing-page.uid", uid)
      ]);
    })
    .then(
      function(response) {
        commit("setLandingContent", response.results);
      },
      function(err) {
        console.log("Something went wrong: ", err);
      }
    );
};

export const getPageArtist = ({ commit }, uid) => {
  Prismic.getApi(prismicEndpoint)
    .then(function(api) {
      return api.query([
        Prismic.Predicates.at("document.type", "artist"),
        Prismic.Predicates.at("my.artist.uid", uid)
      ]);
    })
    .then(
      function(response) {
        console.log("Documents: ", response.results);
        commit("setPageArtist", response.results[0]);
      },
      function(err) {
        console.log("Something went wrong: ", err);
      }
    );
};

// END ARTISTS

// START BLOGS

export const getBlogs = ({ commit }) => {
  Prismic.getApi(prismicEndpoint)
    .then(function(api) {
      return api.query(Prismic.Predicates.at("document.type", "blog"));
    })
    .then(
      function(response) {
        console.log("Documents: ", response.results);
        commit("setBlogs", response.results);
      },
      function(err) {
        console.log("Something went wrong: ", err);
      }
    );
};

export const getBlogPost = ({ commit }, uid) => {
  Prismic.getApi(prismicEndpoint)
    .then(function(api) {
      return api.query([
        Prismic.Predicates.at("document.type", "blog"),
        Prismic.Predicates.at("my.blog.uid", uid)
      ]);
    })
    .then(
      function(response) {
        console.log("Documents: ", response.results);
        commit("setBlogPost", response.results[0]);
      },
      function(err) {
        console.log("Something went wrong: ", err);
      }
    );
};

// END BLOGS

// START EDUCATION
export const getEducation = ({ commit }) => {
  Prismic.getApi(prismicEndpoint)
    .then(function(api) {
      return api.query(Prismic.Predicates.at("document.type", "education"));
    })
    .then(
      function(response) {
        console.log("Education: ", response.results);
        commit("setEducation", response.results[0]);
      },
      function(err) {
        console.log("Something went wrong: ", err);
      }
    );
};
// END EDUCATION
/*

 TODO : getArtistInfo
 TODO : getArtistProducts
 TODO : add artist to product info
 TODO : blogPagination
 */

// START FAVORITES
export const addToFavorites = ({ state }, pattern) => {
  pattern.favorite = !pattern.favorite;
  api.postFavorite(pattern).then(response => {
    console.log(response);
  });
  api.getFavorites().then(response => {
    console.log("response", response.data);
    state.favorites = response.data;
  });
  console.log("pattern favorite?", pattern.favorite);
};

export const getFavorites = ({ state }) => {
  api.getFavorites().then(response => {
    console.log("response", response.data);
    state.favorites = response.data;
  });
};

export const setRoom = ({ commit }, room) => {
  api.getRoom(room).then(response => {
    commit("setPdpRoom", response.data);
  });
};

// END FAVORITES

export const wallpaperFilter = ({ state }, pattern) => {
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
  console.log("pattern in wallpaperFilter ===", pattern);
};

// START CART

export const changeQuantity = ({ commit }, quantity) => {
  commit("setQuantitySelected", quantity);
};

export const minusQuantity = ({ commit }, product) => {
  if (product.quantity - 1 > 0) {
    product.quantity -= 1;
    api.updateCart(product);
  } else {
    api.removeFromCart(product).then(function() {
      api.getCart().then(
        function(response) {
          commit("setCart", response.data);
        },
        function(err) {
          console.log("Something went wrong: ", err);
        }
      );
    });
  }
};
export const addQuantity = ({ state }, product) => {
  product.quantity += 1;
  api.updateCart(product);
};

export const addToCart = ({ state }, pattern) => {
  //TODO : add options to function, ie. count size etc
  var cartItem = pattern;
  cartItem.quantity = state.quantitySelected;
  for (var i = 0; i < state.cart.length; i++) {
    if (state.cart[i].SkuNumber == pattern.SkuNumber) {
      state.cart[i].quantity += state.quantitySelected;
      state.productAdded = state.cart[i]; //sets the product that was just added to cart - used in addToCartModal(quantity selector)
      api.updateCart(state.cart[i]).then(response => {
        api.getCart().then(response => {
          state.cart = response.data;
        });
      });
      return;
    }
  }
  api.postToCart(cartItem).then(response => {
    state.productAdded = response.data; //sets the product that was just added to cart - used in addToCartModal(quantity selector)
    console.log("state.productAdded", state.productAdded);
    api.getCart().then(response => {
      state.cart = response.data;
    });
  });
};

export const removeFromCart = ({ commit }, pattern) => {
  api.removeFromCart(pattern).then(function() {
    api.getCart().then(
      function(response) {
        commit("setCart", response.data);
      },
      function(err) {
        console.log("Something went wrong: ", err);
      }
    );
  });
};

export const getCart = ({ state }) => {
  api.getCart().then(response => {
    state.cart = response.data;
  });
};

export const getCartTotal = ({ commit, state }) => {
  var total = 0;
  for (var i in state.cart) {
    total += state.cart[i].ListPrice * state.cart[i].quantity;
  }
  commit("setCartTotal", Math.round(total * 100) / 100);
};

export const getSalesTax = ({ state }) => {
  state.salesTaxPercent = 6;
  //TODO get real sales tax
};

export const getShippingCost = ({ state }) => {
  state.shippingCost = 0.08;
  //TODO get real shipping cost
};

// END CART

// START HAMBURGER MENU CODE

export const toggleMenu = ({ state }) => {
  state.showMenu = !state.showMenu;
};

export const closeMenu = ({ state }) => {
  state.showMenu = false;
};
// END HAMBURGER MENU CODE

//START MOBILE FILTERS
export const showMobileFilters = ({ state }) => {
  state.showMobileFilters = true;
};
export const hideMobileFilters = ({ state }) => {
  state.showMobileFilters = false;
};
// END MOBILE FILTERS

// START MARKETING
export const getMarketingPanel = ({ commit }, page) => {
  Prismic.getApi(prismicEndpoint)
    .then(function(api) {
      return api.query([
        Prismic.Predicates.at("document.type", "panel"),
        Prismic.Predicates.at("my.panel.uid", page)
      ]);
    })
    .then(
      function(response) {
        console.log("Documents: ", response.results);
        commit("setMarketingPanel", response.results[0]);
      },
      function(err) {
        console.log("Something went wrong: ", err);
      }
    );
};
// END MARKETING

// START SEARCH
export const searchAlgolia = ({ state, commit }, query) => {
  index.search(
    {
      query: query.searchTerm,
      filters: query.filters,
      facets: ["*"]
    },
    function searchDone(err, content) {
      if (err) {
        console.error(err);
        return;
      } else {
        commit("setAlgoliaResults", content.hits);
        //Only want to pull the colors once, otherwise the active states get overwritten
        if (!state.algoliaColors) {
          commit("setAlgoliaColors", content.facets["design.color"]);
        }
        if (!state.algoliaPatterns) {
          commit("setAlgoliaPatterns", content.facets["design.type"]);
        }
      }
    }
  );
  var results = "";
  replica_index.search("", (err, content) => {
    results = content;
    console.log("replica index results", results);
  });
};
// END SEARCH
