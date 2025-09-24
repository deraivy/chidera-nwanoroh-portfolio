import { _ as __nuxt_component_0 } from './nuxt-link-C8JAMf6t.mjs';
import __nuxt_component_1 from './index-DcIxWtpx.mjs';
import { ref, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@iconify/utils';
import 'consola';
import 'node:url';
import 'ipx';
import './server.mjs';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './composables-Cwqfd6ke.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const drawer = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div><div class="bg-striped dark:bg-[#0a0a0a;] text-white"><div class="w-full md:container mx-auto"><div class="flex justify-between items-center p-8 lg:px-12 relative z-20"><h2 class="text-3xl font-bold">N/C</h2><ul class="hidden md:flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ""
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
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects`);
          } else {
            return [
              createTextVNode("Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><a href="/docs/cv.pdf" download="resume" class="hidden md:flex border px-5 py-2 border-[#ff6b37] rounded-xl"> Resume </a><div class="md:hidden">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:bars",
        class: "w-6 h-6 hover:text-[#ff6b37]"
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(drawer)) {
        _push(`<div class="md:hidden bg-white/80 backdrop-blur-md mt-4 rounded-3xl px-6 py-8 overflow-y-scroll"><div class="flex flex-col items-center"><ul><li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: ""
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
        _push(`</li><li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/about",
          class: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`About`);
            } else {
              return [
                createTextVNode("About")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projects",
          class: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Projects`);
            } else {
              return [
                createTextVNode("Projects")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contact`);
            } else {
              return [
                createTextVNode("Contact")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<footer class="text-white"><div class="border-t border-white/20"><div class="flex justify-between items-center w-full md:container mx-auto"><p class="p-8 text-center">© 2025 Nwanoroh Chidera</p><div class="flex space-x-2"><a href="https://www.instagram.com/?hl=en">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:github",
        class: "w-6 h-6 hover:text-[#ff6b37]"
      }, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:linkedin",
        class: "w-6 h-6 hover:text-[#ff6b37]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:twitter",
        class: "w-6 h-6 hover:text-[#ff6b37]"
      }, null, _parent));
      _push(`<a href="https://www.instagram.com/?hl=en">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "uil:instagram",
        class: "w-6 h-6 hover:text-[#ff6b37]"
      }, null, _parent));
      _push(`</a></div></div></div></footer></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-obYcY0-9.mjs.map
