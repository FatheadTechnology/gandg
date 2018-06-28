<template>

  <!--
  DO WE HAVE MORE THAN 1 SERIALIZER ON A SINGLE PAGE?

  -->
  <div class="serialized">
    <span v-html="serializedContent"></span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PrismicRichText from "prismic-richtext";

var PrismicDOM = require("prismic-dom");
var Elements = PrismicDOM.RichText.Elements;
var linkResolver = function(doc) {
  // Pretty URLs for known types
  if (doc.type === "blog") return "/blog/" + doc.uid;
  if (doc.type === "artist") return "/artists/" + doc.uid;
  if (doc.type === "education") return "/education";
  // Fallback for other types, in case new custom types get created
  return "/doc/" + doc.id;
};
var htmlSerializer = function(element, content, children) {
  switch (element.type) {
    case Elements.heading1:
      return `<h1>${children.join("")}</h1>`;
    case Elements.heading2:
      return `<h2>${children.join("")}</h2>`;
    case Elements.heading3:
      return `<h3>${children.join("")}</h3>`;
    case Elements.heading4:
      return `<h4>${children.join("")}</h4>`;
    case Elements.heading5:
      return `<h5>${children.join("")}</h5>`;
    case Elements.heading6:
      return `<h6>${children.join("")}</h6>`;
    case Elements.paragraph:
      console.log("paragraph element");
      return `<p>${children.join("")}</p>`;
    case Elements.preformatted:
      return `<pre>${children.join("")}</pre>`;
    case Elements.strong:
      return `<strong>${children.join("")}</strong>`;
    case Elements.em:
      return `<em>${children.join("")}</em>`;
    case Elements.listItem:
      return `<li>${children.join("")}</li>`;
    case Elements.oListItem:
      return `<li>${children.join("")}</li>`;
    case Elements.list:
      return `<ul>${children.join("")}</ul>`;
    case Elements.oList:
      return `<ol>${children.join("")}</ol>`;
    case Elements.image:
      var linkUrl = element.linkTo
        ? PrismicDOM.Link.url(element.linkTo, module.exports.linkResolver)
        : null;
      var linkTarget =
        element.linkTo && element.linkTo.target
          ? `target="${element.linkTo.target}" rel="noopener"`
          : "";
      var wrapperClassList = [element.label || "", "block-img"];
      var img = `<img src="${element.url}" alt="${element.alt ||
        ""}" copyright="${element.copyright || ""}">`;
      return `
        <p class="${wrapperClassList.join(" ")}">
          ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
        </p>
      `;
    case Elements.embed:
      return `
        <div data-oembed="${element.oembed.embed_url}"
          data-oembed-type="${element.oembed.type}"
          data-oembed-provider="${element.oembed.provider_name}"
        >
          ${element.oembed.html}
        </div>
      `;
    case Elements.hyperlink:
      var target = element.data.target
        ? `target="${element.data.target}" rel="noopener"`
        : "";
      var linkUrl = PrismicDOM.Link.url(
        element.data,
        module.exports.linkResolver
      );
      return `<a ${target} href="${linkUrl}">${children.join("")}</a>`;
    case Elements.label:
      var label = element.data.label ? ` class="${element.data.label}"` : "";
      return `<span ${label}>${children.join("")}</span>`;
    case Elements.span:
      return content ? content.replace(/\n/g, "<br />") : "";
    default:
      return null;
  }
};

export default {
  components: {
    PrismicRichText
  },
  props: ["content"],
  name: "Serializer",
  data() {
    return {
      serializedContent: null
    };
  },
  methods: {
    serialize() {
      this.serializedContent = PrismicDOM.RichText.asHtml(
        this.content,
        linkResolver,
        htmlSerializer
      );
    }
  },
  created() {
    this.serialize();
  },
  watch: {
    content: function() {
      this.serialize();
    }
  }
};
</script>

<style scoped>
</style>
