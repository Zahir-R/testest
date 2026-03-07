import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { u as useAuth } from "./useAuth-I7DAHAZ7.js";
import { useRouter } from "vue-router";
import "/home/angelxyz/Desktop/goocli-test/frontend/node_modules/hookable/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/angelxyz/Desktop/goocli-test/frontend/node_modules/unctx/dist/index.mjs";
import "/home/angelxyz/Desktop/goocli-test/frontend/node_modules/h3/dist/index.mjs";
import "/home/angelxyz/Desktop/goocli-test/frontend/node_modules/radix3/dist/index.mjs";
import "/home/angelxyz/Desktop/goocli-test/frontend/node_modules/defu/dist/defu.mjs";
import "/home/angelxyz/Desktop/goocli-test/frontend/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useAuth();
    useRouter();
    const isLogin = ref(true);
    const loading = ref(false);
    const errorMsg = ref("");
    const form = ref({
      email: "",
      password: "",
      name: "",
      age: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-md mx-auto mt-16 bg-white p-10 rounded-2xl shadow-md border border-stone-200" }, _attrs))}><h1 class="text-3xl font-bold text-center text-stone-900 mb-8">${ssrInterpolate(isLogin.value ? "Sign In" : "Create Account")}</h1><form class="space-y-6">`);
      if (!isLogin.value) {
        _push(`<div><label class="block text-lg font-medium text-stone-700 mb-2">Name</label><input${ssrRenderAttr("value", form.value.name)} type="text" class="w-full px-4 py-3 text-lg border border-stone-300 rounded-lg bg-stone-50" placeholder="Jane Doe"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!isLogin.value) {
        _push(`<div><label class="block text-lg font-medium text-stone-700 mb-2">Age</label><input${ssrRenderAttr("value", form.value.age)} type="number" class="w-full px-4 py-3 text-lg border border-stone-300 rounded-lg bg-stone-50" placeholder="50"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><label class="block text-lg font-medium text-stone-700 mb-2">Email Address</label><input${ssrRenderAttr("value", form.value.email)} type="email" required class="w-full px-4 py-3 text-lg border border-stone-300 rounded-lg bg-stone-50" placeholder="your@email.com"></div><div><label class="block text-lg font-medium text-stone-700 mb-2">Password</label><input${ssrRenderAttr("value", form.value.password)} type="password" required class="w-full px-4 py-3 text-lg border border-stone-300 rounded-lg bg-stone-50" placeholder="••••••••"></div>`);
      if (errorMsg.value) {
        _push(`<div class="text-red-600 text-center font-medium">${ssrInterpolate(errorMsg.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 rounded-xl text-xl shadow-md transition-colors"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""}>${ssrInterpolate(loading.value ? "Please wait..." : isLogin.value ? "Sign In" : "Register")}</button></form><div class="mt-8 text-center text-lg"><button class="text-rose-600 hover:text-rose-800 font-medium">${ssrInterpolate(isLogin.value ? "Need an account? Register here" : "Already have an account? Sign In")}</button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-DolkUnq7.js.map
