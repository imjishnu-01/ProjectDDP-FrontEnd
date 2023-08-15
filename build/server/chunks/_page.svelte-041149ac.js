import { c as create_ssr_component, b as add_attribute } from './index2-0c62bf2c.js';
import './ProgressBar.svelte_svelte_type_style_lang-0637068f.js';
import './index-70927e94.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `<div class="container flex justify-center items-center h-screen"><form class="card p-4 flex flex-col gap-3 w-80"><h1 class="text-center text-3xl font-bold">Login</h1>
		<label class="label"><span>Email</span>
			<input class="input w-full" type="email" placeholder="Email"${add_attribute("value", email, 0)}></label>
		<label class="label"><span>Password</span>
			<input class="input w-full" type="password" placeholder="Password"${add_attribute("value", password, 0)}></label>

		${``}
		${`<button type="button" class="btn bg-primary-500 ml-auto" style="width: 10rem">Login
			</button>
			<button class="text-right pe-3 text-blue-600 dark:text-blue-500">Forgo Password</button>`}
		<hr>
		<span>Create new account <a href="/register" class="btn bg-surface-500 m-2">Register</a></span></form></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-041149ac.js.map
