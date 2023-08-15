import { c as create_ssr_component, v as validate_component } from './index2-0c62bf2c.js';
import './ProgressBar.svelte_svelte_type_style_lang-0637068f.js';
import { M as Modal, A as AppShell } from './Modal-9602d955.js';
import './index-70927e94.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Modal, "Modal").$$render($$result, {}, {}, {})}
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"> 


${slots.default ? slots.default({}) : ``}

	
	${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
    default: () => {
      return ` 
		
		
		
		<div class="container p-10 w-full h-full">${slots.default ? slots.default({}) : ``}</div>
		`;
    }
  })}
	


	
	
	
	`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-d811a968.js.map
