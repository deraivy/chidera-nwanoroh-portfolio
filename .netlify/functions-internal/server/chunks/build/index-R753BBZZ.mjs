import { _ as __nuxt_component_0$2 } from './NuxtImg-C5C5jMAK.mjs';
import { ref, withCtx, createTextVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-C8JAMf6t.mjs';
import __nuxt_component_1 from './index-DcIxWtpx.mjs';
import { _ as _sfc_main$2 } from './contact-BZrrEXj_.mjs';
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
import './composables-Cwqfd6ke.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';

const _sfc_main$1 = {
  __name: "Splash",
  __ssrInlineRender: true,
  setup(__props) {
    const showSplash = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$2;
      if (showSplash.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 flex items-center justify-center bg-[#0a0a0a] dark:bg-[#0a0a0a] z-50" }, _attrs))} data-v-bb0e5f4c><div class="h-[90vh] flex items-center justify-center" data-v-bb0e5f4c>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/images/image.png",
          alt: "Chidera, Frontend Developer",
          class: "w-full"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/splash.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bb0e5f4c"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    const projects = [
      {
        id: 1,
        title: "Speed Academy",
        category: "E-learning",
        description: "E-learning platform for students built with Vue.js and Tailwind CSS.",
        image: "/images/work.png",
        stack: ["Vue.js", "Nuxt.js", "TailwindCSS"],
        link: "https://speedacademyy.netlify.app"
      },
      {
        id: 2,
        title: "Portfolio Project",
        category: "Portfolio",
        description: "A modern personal portfolio website using Vue.js and Tailwind CSS.",
        image: "/images/work3.png",
        stack: ["Bootstrap", "JavaScript"],
        link: "https://silver-nasturtium-5faa8e.netlify.app"
      },
      {
        id: 3,
        title: "Lungu Farm",
        description: "A startup project developed with Vue.js and Nuxt.",
        image: "/images/lungu.png",
        stack: ["Nuxt js", "Tailwind CSS"],
        link: "https://lungufarm.netlify.app/"
      }
      // {
      //   id: 4,
      //   title: "NextDream",
      //   category: "Startup",
      //   description: "A startup project developed with Vue.js and Nuxt.",
      //   image: "/images/work2.png",
      //   stack: ["Html", "Css", "Javascript"],
      //   link: "https://nextdream.onrender.com",
      // },
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_splash = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      const _component_contact = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full">`);
      _push(ssrRenderComponent(_component_splash, null, null, _parent));
      if (!_ctx.showSplash) {
        _push(`<div class="bg-striped"><div class="w-full md:container mx-auto px-5"><div class="h-[80vh] md:h-[90vh] flex flex-col items-center justify-center text-center text-white"><p class="text-base md:text-lg mb-4" data-aos="fade-up" data-aos-duration="800"> Hi, my name is Nwanoroh Chidera </p><h1 class="text-3xl md:text-5xl lg:text-6xl font-bold lg:leading-[1.2] lg:max-w-6xl" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"> I create <span class="text-[#ff6b37]">high-quality</span> web applications with modern frontend <span class="text-[#ff6b37]">expertise.</span></h1><p class="text-sm md:text-base text-gray-300 max-w-2xl my-8 leading-relaxed" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"> I design modern, conversion-focused websites that help brands grow, connect, and stand out online. </p><div class="mt-2" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="800">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "px-5 py-4 rounded-xl bg-[#ff6b37]/70 border border-[#ff6b37] hover:bg-[#ff6b37] text-white font-semibold transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` See My Works `);
            } else {
              return [
                createTextVNode(" See My Works ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><section class="py-20 text-white"><div><div class="text-center mb-16"><h2 class="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#b1b2b3] to-[#b4b5b6]" data-aos="fade-up" data-aos-duration="800"> How I Can Help You </h2><p class="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"> I provide services designed to boost your online presence, engage your audience, and help your business grow with lasting impact. </p></div><div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3"><div class="group flex space-x-2" data-aos="fade-right" data-aos-duration="800"><p class="text-5xl font-light text-gray-500 block mb-4">01</p><div><h4 class="text-xl font-semibold mb-3 mt-2"> Website Design </h4><p class="text-gray-400 mb-6"> I create modern, user-friendly websites tailored to your brand, designed to capture attention, keep visitors engaged, and provide a seamless browsing experience. </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projects",
          class: "font-semibold text-[#ff6b37] hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` See My Projects → `);
            } else {
              return [
                createTextVNode(" See My Projects → ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="group flex space-x-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"><p class="text-5xl font-light text-gray-500 block mb-4">02</p><div><h4 class="text-xl font-semibold mb-3 mt-2">SEO</h4><p class="text-gray-400 mb-6"> A great site deserves visibility. I optimize websites for search engines so your business ranks higher, reaches the right audience, and grows organically. </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/book",
          class: "font-semibold text-[#ff6b37] hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Book a Call → `);
            } else {
              return [
                createTextVNode(" Book a Call → ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="group flex space-x-4" data-aos="fade-left" data-aos-delay="400" data-aos-duration="800"><p class="text-5xl font-light text-gray-500 block mb-4">03</p><div><h4 class="text-xl font-semibold mb-3 mt-2"> Responsive Design </h4><p class="text-gray-400 mb-6"> Your visitors use phones, tablets, and desktops — I make sure your website looks and works beautifully on every device. </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/projects",
          class: "font-semibold text-[#ff6b37] hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` See it in Action → `);
            } else {
              return [
                createTextVNode(" See it in Action → ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div></section><section><div class="text-center text-white mb-16"><h2 class="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#b1b2b3] to-[#b4b5b6]" data-aos="fade-up" data-aos-duration="800"> Projects </h2><p class="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"> I provide services designed to boost your online presence, engage your audience, and help your business grow with lasting impact. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
        ssrRenderList(projects, (project, index) => {
          _push(`<div class="bg-[#14151a] overflow-hidden shadow-lg group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-up"${ssrRenderAttr("data-aos-delay", index * 150)} data-aos-duration="600" data-aos-once="true"><div class="relative h-64 w-full overflow-hidden"><img class="h-full w-full object-fit transform transition-transform duration-500"${ssrRenderAttr("src", project.image)}${ssrRenderAttr("alt", project.title)}><div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></div><div class="px-6 py-6 bg-[#14151a]"><p class="text-gray-400 text-sm">${ssrInterpolate(project.category)}</p><h4 class="mt-1 font-bold text-lg text-white">${ssrInterpolate(project.title)}</h4><p class="text-gray-300 mt-2 text-sm leading-relaxed">${ssrInterpolate(project.description || "Lorem Ipsum is simply dummy text of the printing and typesetting industry.")}</p><ul class="flex flex-wrap gap-2 mt-4"><!--[-->`);
          ssrRenderList(project.stack, (skill, i) => {
            _push(`<li class="px-3 py-1 border text-xs border-[#ff6b37] text-[#ff6b37] rounded-full font-medium hover:bg-[#ff6b37] hover:text-black transition-colors duration-200">${ssrInterpolate(skill)}</li>`);
          });
          _push(`<!--]--></ul><a${ssrRenderAttr("href", project.link)} class="flex items-center gap-2 mt-6 text-[#ff6b37] text-sm font-semibold transition-all duration-200 group/link"${ssrRenderAttr("aria-label", `View details for ${project.title} project`)} target="_blank" rel="noopener noreferrer">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:open-in-new",
            class: "w-4 h-4 transition-transform duration-200 group-hover/link:-translate-y-1"
          }, null, _parent));
          _push(`<span class="text-base font-semibold">View Project</span></a></div></div>`);
        });
        _push(`<!--]--></div></section></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section>`);
      _push(ssrRenderComponent(_component_contact, null, null, _parent));
      _push(`</section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-R753BBZZ.mjs.map
