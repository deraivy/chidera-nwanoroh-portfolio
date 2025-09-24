import { _ as __nuxt_component_0 } from './NuxtImg-C5C5jMAK.mjs';
import __nuxt_component_1 from './index-DcIxWtpx.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import './composables-Cwqfd6ke.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';

const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const skills = [
      { name: "HTML", icon: "/icons/HTML.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "Vue.js", icon: "/icons/vue.svg" },
      { name: "Tailwind", icon: "/icons/tail.png" },
      { name: "Nuxt.js", icon: "/icons/nuxt.svg" },
      { name: "React", icon: "/icons/react.svg" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-striped text-white" }, _attrs))}><div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><section class="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 py-16"><div class="flex-shrink-0">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/chi.JPG",
        alt: "Chidera, Frontend Developer",
        class: "w-80 sm:w-64 lg:w-[430px] shadow-xl transition-transform duration-300 hover:scale-105"
      }, null, _parent));
      _push(`</div><div class="text-center lg:text-left"><p class="text-sm font-semibold mb-4 text-[#ff6b37] uppercase tracking-widest"> Who am I? </p><h3 class="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-6"> I’m Nwanoroh Chidera, a Frontend Developer </h3><p class="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 max-w-2xl"> I’m a frontend developer who enjoys turning complex problems into <span class="font-semibold text-[#ff6b37]/80">simple, elegant solutions</span>. My focus is on building <span class="font-semibold text-[#ff6b37]/80">responsive</span>, <span class="font-semibold text-[#ff6b37]/80">accessible</span>, and <span class="font-semibold text-[#ff6b37]/80">SEO-friendly</span> websites that perform seamlessly across all devices. </p><p class="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl"> I specialize in <span class="font-semibold text-[#ff6b37]/80">Nuxt.js</span>, <span class="font-semibold text-[#ff6b37]/80">Vue.js</span>, and <span class="font-semibold text-[#ff6b37]/80">Tailwind CSS</span>, leveraging modern practices like component-based architecture and performance optimization to create intuitive and enjoyable digital experiences. </p><div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"><p class="flex items-center gap-2 text-gray-200">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:location-outline",
        class: "w-5 h-5 text-[#ff6b37]"
      }, null, _parent));
      _push(` Lagos, Nigeria </p><p class="flex items-center gap-2 text-gray-200">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ion:mail-outline",
        class: "w-5 h-5 text-[#ff6b37]"
      }, null, _parent));
      _push(` U4s4a@example.com </p></div></div></section><section class="py-16"><h3 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-8"> My Experience </h3><p class="text-base sm:text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12"> From tackling challenges with enthusiasm to creating lasting solutions, my path has been defined by embracing innovation and driving impact. </p><div class="grid md:grid-cols-2 gap-8"><div><h4 class="text-2xl font-semibold text-white mb-6">Education</h4><div class="space-y-6 relative border-l-2 rounded-xl border-[#ff6b37]"><div class="relative bg-[#14151a] backdrop-blur-sm p-6 rounded-xl shadow-lg"><p class="text-sm font-semibold text-[#ff6b37]">2018 - 2023</p><p class="font-semibold text-xl text-white mt-2">Bells University Of Technology</p><p class="text-sm text-gray-400">B.Tech in Computer Science</p><p class="mt-3 text-gray-300 leading-relaxed"> Focused on computer science fundamentals, software engineering, and modern web technologies. </p></div></div></div><div><h4 class="text-2xl font-semibold text-white mb-6">Job Experience</h4><div class="space-y-6 relative border-l-2 rounded-xl border-[#ff6b37]"><div class="relative bg-[#14151a] backdrop-blur-sm p-6 rounded-xl shadow-lg"><p class="text-sm font-semibold text-[#ff6b37]">2024 - Present</p><p class="font-semibold text-xl text-white mt-2">Frontend Developer</p><p class="text-sm text-gray-400">Speedpay Finance Nigeria Limited</p><p class="mt-3 text-gray-300 leading-relaxed"> Built and maintained high-performance web applications, focusing on responsive design, SEO optimization, and modern frontend workflows. </p></div></div></div></div></section><section class="py-16"><h2 class="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Skills</h2><div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-6 justify-center"><!--[-->`);
      ssrRenderList(skills, (skill) => {
        _push(`<div class="flex flex-col items-center group"><div class="bg-gray-800 p-4 rounded-full shadow-md group-hover:bg-gray-800 transition-all duration-300 w-16 h-16 flex items-center justify-center"><img${ssrRenderAttr("src", skill.icon)}${ssrRenderAttr("alt", skill.name)} class="w-8 h-8"></div><span class="text-gray-300 text-sm mt-2 group-hover:text-[#ff6b37]/80 transition-colors duration-300">${ssrInterpolate(skill.name)}</span></div>`);
      });
      _push(`<!--]--></div></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-DC22wfda.mjs.map
