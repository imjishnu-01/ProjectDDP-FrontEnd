import { c as create_ssr_component, a as subscribe } from './index2-0c62bf2c.js';
import { p as page } from './stores-0d01bb77.js';
import './ProgressBar.svelte_svelte_type_style_lang-0637068f.js';
import './index-70927e94.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { id = $page.params.slug } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$unsubscribe_page();
  return `${`<p>Loading user details...</p>`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f625f3e7.js.map
