import { _ as __nuxt_component_0 } from './nuxt-link-tosYT-D0.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center text-center mt-12 space-y-8" }, _attrs))}><h1 class="text-4xl md:text-5xl font-bold text-stone-900"> You are not alone in this journey. </h1><p class="text-xl md:text-2xl text-stone-700 max-w-3xl leading-relaxed"> Welcome to MenoSupport. An intelligent, compassionate chatbot designed to help you navigate menopause. Get personalized advice, track your symptoms, and find peace of mind. </p><div class="space-x-4 pt-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/chat",
    class: "bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 px-8 rounded-full text-xl shadow-lg transition-colors inline-block"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Start Chatting `);
      } else {
        return [
          createTextVNode(" Start Chatting ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/login",
    class: "bg-white hover:bg-stone-100 text-rose-600 border-2 border-rose-600 font-semibold py-4 px-8 rounded-full text-xl shadow-sm transition-colors inline-block"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Sign In `);
      } else {
        return [
          createTextVNode(" Sign In ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl text-left"><div class="bg-white p-8 rounded-2xl shadow-sm border border-stone-200"><h3 class="text-2xl font-semibold mb-4 text-rose-700">Clear Answers</h3><p class="text-lg text-stone-600">Get immediate, accurate information about your symptoms without confusing medical jargon.</p></div><div class="bg-white p-8 rounded-2xl shadow-sm border border-stone-200"><h3 class="text-2xl font-semibold mb-4 text-rose-700">Private &amp; Secure</h3><p class="text-lg text-stone-600">Your conversations and profile are completely confidential and safely stored.</p></div><div class="bg-white p-8 rounded-2xl shadow-sm border border-stone-200"><h3 class="text-2xl font-semibold mb-4 text-rose-700">Always Here</h3><p class="text-lg text-stone-600">Available 24/7. Whenever you need support or have a sudden question, we are here.</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-shty6ADC.mjs.map
