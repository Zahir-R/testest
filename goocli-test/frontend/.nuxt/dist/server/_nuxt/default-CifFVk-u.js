import { _ as __nuxt_component_0 } from "./nuxt-link-tosYT-D0.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "/home/angelxyz/Desktop/goocli-test/frontend/node_modules/ufo/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/angelxyz/Desktop/goocli-test/frontend/node_modules/hookable/dist/index.mjs";
import "/home/angelxyz/Desktop/goocli-test/frontend/node_modules/unctx/dist/index.mjs";
import "/home/angelxyz/Desktop/goocli-test/frontend/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/home/angelxyz/Desktop/goocli-test/frontend/node_modules/radix3/dist/index.mjs";
import "/home/angelxyz/Desktop/goocli-test/frontend/node_modules/defu/dist/defu.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-stone-50 text-stone-900 font-sans" }, _attrs))}><header class="bg-rose-600 text-white shadow-md"><nav class="container mx-auto px-6 py-4 flex justify-between items-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-2xl font-semibold tracking-wide"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` MenoSupport `);
      } else {
        return [
          createTextVNode(" MenoSupport ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="space-x-6 text-lg">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "hover:text-rose-200 transition"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/chat",
    class: "hover:text-rose-200 transition"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Chatbot`);
      } else {
        return [
          createTextVNode("Chatbot")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/login",
    class: "hover:text-rose-200 transition"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Login`);
      } else {
        return [
          createTextVNode("Login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></nav></header><main class="container mx-auto px-6 py-8">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer class="bg-stone-200 text-stone-600 text-center py-6 mt-12 text-sm"><p>© 2026 Menopause Support Application. All rights reserved.</p></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-CifFVk-u.js.map
