import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useAuth } from './useAuth-I7DAHAZ7.mjs';
import { useRouter } from 'vue-router';
import './server.mjs';
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

const _sfc_main = {
  __name: "chat",
  __ssrInlineRender: true,
  setup(__props) {
    useAuth();
    useRouter();
    const messages = ref([]);
    const newMessage = ref("");
    const loading = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto mt-8 bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col h-[75vh]" }, _attrs))}><div class="bg-rose-50 p-6 border-b border-rose-100 flex justify-between items-center"><div><h2 class="text-2xl font-bold text-stone-900">MenoSupport Chat</h2><p class="text-stone-600">Ask any questions or share how you are feeling.</p></div><button class="text-rose-600 hover:text-rose-800 font-semibold underline"> Sign Out </button></div><div class="flex-1 overflow-y-auto p-6 space-y-6 bg-stone-50">`);
      if (messages.value.length === 0) {
        _push(`<div class="text-center text-stone-500 mt-10 text-lg"> Start the conversation by sending a message below. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(messages.value, (msg, index) => {
        _push(`<div class="space-y-4"><div class="flex justify-end"><div class="bg-rose-600 text-white p-4 rounded-2xl rounded-tr-sm max-w-[80%] text-lg shadow-sm">${ssrInterpolate(msg.message)}</div></div><div class="flex justify-start"><div class="bg-white border border-stone-200 text-stone-800 p-4 rounded-2xl rounded-tl-sm max-w-[80%] text-lg shadow-sm">${ssrInterpolate(msg.response)}</div></div></div>`);
      });
      _push(`<!--]--></div><div class="p-4 bg-white border-t border-stone-200"><form class="flex gap-4"><input${ssrRenderAttr("value", newMessage.value)} type="text" placeholder="Type your message here..." class="flex-1 px-6 py-4 text-lg border border-stone-300 rounded-full bg-stone-50 focus:bg-white"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""}><button type="submit" class="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-md transition-colors"${ssrIncludeBooleanAttr(loading.value || !newMessage.value.trim()) ? " disabled" : ""}> Send </button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=chat-NkKvCHWZ.mjs.map
