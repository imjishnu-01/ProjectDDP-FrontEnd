import { c as create_ssr_component, a as subscribe } from './index2-0c62bf2c.js';
import { p as page } from './stores-0d01bb77.js';
import './ProgressBar.svelte_svelte_type_style_lang-0637068f.js';
import './index-70927e94.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const token = $page.params.token;
  console.log(token);
  $$unsubscribe_page();
  return `<div class="container flex justify-center items-center h-screen"><form class="card p-4 flex flex-col gap-3 w-80"><h1 class="btn text-center text-3xl font-bold">Verifying email...</h1></form></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-29c4ccde.js.map
