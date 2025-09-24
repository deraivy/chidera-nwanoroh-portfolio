import __nuxt_component_1 from './index-DcIxWtpx.mjs';
import { _ as _sfc_main$1 } from './contact-BZrrEXj_.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './server.mjs';
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
import 'vue-router';
import './composables-Cwqfd6ke.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'perfect-debounce';

const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        id: 1,
        title: "Speedpay",
        category: "Finance",
        description: "E-learning platform for students built with Vue.js and Tailwind CSS.",
        image: "/images/speedpay.png",
        stack: ["Nuxt.js", "TailwindCSS"],
        link: "https://speedpay.ng/"
      },
      {
        id: 2,
        title: "Speed Academy",
        category: "E-learning",
        description: "E-learning platform for students built with Vue.js and Tailwind CSS.",
        image: "/images/work.png",
        stack: ["Vue.js", "Nuxt.js", "TailwindCSS"],
        link: "https://speedacademyy.netlify.app"
      },
      {
        id: 3,
        title: "Portfolio Project",
        category: "Portfolio",
        description: "A modern personal portfolio website using Vue.js and Tailwind CSS.",
        image: "/images/work3.png",
        stack: ["Bootstrap", "JavaScript"],
        link: "https://silver-nasturtium-5faa8e.netlify.app"
      },
      {
        id: 4,
        title: "Lungu Farm",
        description: "A startup project developed with Vue.js and Nuxt.",
        image: "/images/lungu.png",
        stack: ["Nuxt js", "Tailwind CSS"],
        link: "https://lungufarm.netlify.app/"
      },
      {
        id: 5,
        title: "NextDream",
        category: "Startup",
        description: "A startup project developed with Vue.js and Nuxt.",
        image: "/images/work2.png",
        stack: ["Html", "Css", "Javascript"],
        link: "https://nextdream.onrender.com"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_contact = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-striped"><section class="w-full md:container mx-auto px-5 py-24"><div class="text-center text-white mb-16"><h2 class="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#b1b2b3] to-[#b4b5b6]" data-aos="fade-up" data-aos-duration="800"> Projects </h2><p class="text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"> Explore my projects live! Choose a project below to experience it directly in your browser. </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
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
      _push(`<!--]--></div></section></div>`);
      _push(ssrRenderComponent(_component_contact, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-BOGGjsx8.mjs.map
