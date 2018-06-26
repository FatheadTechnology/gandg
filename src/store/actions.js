import * as api from "@/api";

import Prismic from "prismic-javascript";
import algoliasearch from "algoliasearch";
import router from "./../router";

import cloudinary from "cloudinary";

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

const apiEndpoint = "https://evolution.cdn.prismic.io/api/v2";

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

export const getPatternInfo = ({ commit, state, dispatch }, patternParams) => {
  state.pdpColors = [];
  state.quantitySelected = 1;
  console.log("patternParams", patternParams);
  api.getPatternInfo(patternParams.pattern).then(response => {
    //Get master product matching the product param in URL

    console.log("response from product api = ", response);
    let products = response.data[0].Children; //get list of child products under the master product

    // state.pdpMaterials.active = 'vinyl'
    let colorList = [];
    let sizeList = [];
    let materialList = [];
    for (var i = 0; i < products.length; i++) {
      //Loop through all the children products to find all unique colors, sizes, and materials available for the product
      if (
        !colorList.find(
          o =>
            o.url == products[i].Images.CloudinaryPath &&
            o.name == products[i].ColorWay.ColorWayName
        )
      ) {
        colorList.push({
          url: products[i].Images.CloudinaryPath,
          name: products[i].ColorWay.ColorWayName
        });
        state.pdpColors.push({
          url: products[i].Images.CloudinaryPath,
          name: products[i].ColorWay.ColorWayName
        });
      }
      //TODO: Change this to use SizeValue?
      if (!sizeList.includes(products[i].SizeDisplayName)) {
        sizeList.push(products[i].SizeDisplayName);
        state.pdpSizes.push({
          Value: products[i].SizeDisplayName,
          DisplayName: products[i].SizeDisplayName
        });
      }
      if (!materialList.includes(products[i].Material)) {
        materialList.push(products[i].Material);
        state.pdpMaterials.push(products[i].Material);
      }
    }
    //TODO: Make this customizable. Do we want the defaults to be the best seller?

    state.colorSelected = products[0].ColorWay.ColorWayName; //default color to first product's color
    state.materialSelected = products[0].Material; //default material to first product's material
    state.sizeSelected = products[0].SizeDisplayName; //default size to first product's size

    // If color, material, or size is given in url, use it
    if (patternParams.colorway) {
      state.colorSelected = patternParams.colorway;
    }
    if (patternParams.material) {
      state.materialSelected = patternParams.material;
    }
    if (patternParams.size) {
      state.sizeSelected = patternParams.size;
    }
    router.replace({
      name: "PDP",
      params: {
        colorway: state.colorSelected,
        material: state.materialSelected,
        size: state.sizeSelected
      }
    });

    commit("setPatternInfo", response.data);
    setTimeout(() => {
      dispatch("createRoomShotData", state.patternInfo);
    }, 1);
  });
};

export const createRoomShotData = ({ commit, dispatch }, product) => {
  let rooms = product.RoomTypes;
  let colors = [];
  for (var i = 0; i < product.Children.length; i++) {
    let item = product.Children[i];
    if (colors.indexOf(item.Images.CloudinaryPath) == -1) {
      colors.push(item.Images.CloudinaryPath);
    }
  }
  let images = [];
  for (var z = 0; z < colors.length; z++) {
    let t = cloudinary.url(colors[z].replace(":", "/"));
    images.push({
      url: t,
      color: colors[z]
    });
    for (var i = 0; i < rooms.length; i++) {
      let temp = cloudinary.url(`test_rooms/wall_${rooms[i].name}_small`, {
        width: "auto",
        responsive: "true",
        crop: "scale",
        responsive_placeholder: "blank",
        client_hints: "true",
        sizes: "100vw",
        transformation: [
          {
            overlay: colors[z],
            flags: "tiled",
            opacity: 85,
            effect: "multiply",
            width: rooms[i].patternSize
          },
          {
            effect: "blur:10"
          },
          {
            overlay: `test_rooms:furniture_${rooms[i].name}_small`
          },
          {
            overlay: "test_rooms:noise_small",
            effect: "multiply"
          }
        ]
      });
      images.push({ url: temp, color: colors[z] });
    }
  }
  commit("setRoomShotData", images);
  commit("setSelectedPdpImage", images[0]);
};

export const selectPdpImage = ({ commit }, image) => {
  console.log("image being set as selected pdp image", image);
  commit("setSelectedPdpImage", image);
};

export const createRoomShots = ({ commit }, images) => {
  commit("setRoomShots", images);
};

export const selectMaterial = ({ state }, material) => {
  state.materialSelected = material;
  router.replace({ params: { material: material } });
};

export const selectSize = ({ state }, size) => {
  state.sizeSelected = size;
  router.replace({ params: { size: size } });
};

export const selectColor = ({ state, commit }, color) => {
  console.log("color", color);
  state.colorSelected = color.name;
  commit("setSelectedPdpImage", {
    color: color.url,
    url: cloudinary.url(color.url.replace(":", "/"))
  });
  router.replace({
    params: {
      colorway: color.name
    }
  });
};

export const findPdpProduct = ({ state, commit }) => {
  console.log("state.colorSelected", state.colorSelected);

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

// START ARTISTS
export const getArtists = ({ commit }) => {
  Prismic.getApi(apiEndpoint)
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
  Prismic.getApi(apiEndpoint)
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
  Prismic.getApi(apiEndpoint)
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
  Prismic.getApi(apiEndpoint)
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
  Prismic.getApi(apiEndpoint)
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
  Prismic.getApi(apiEndpoint)
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
  console.log("product", pattern);
  var cartItem = pattern;
  cartItem.quantity = state.quantitySelected;
  console.log("cartItem.quantity", cartItem.quantity);
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
  console.log("cart", state.cart);
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
  Prismic.getApi(apiEndpoint)
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
