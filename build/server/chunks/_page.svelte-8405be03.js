import { c as create_ssr_component, a as subscribe, b as add_attribute } from './index2-0c62bf2c.js';
import { p as page } from './stores-0d01bb77.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let newPassword = "";
  let confirmPassword = "";
  $page.params.token;
  $$unsubscribe_page();
  return `

  
  
 

  
<div class="container flex justify-center items-center h-screen"><form class="card p-4 flex flex-col gap-3"><h2>Reset Password</h2>
        ${`<input type="password" class="input" placeholder="New Password"${add_attribute("value", newPassword, 0)}>
          <input type="password" class="input" placeholder="Confirm Password"${add_attribute("value", confirmPassword, 0)}>
          <button type="button" class="btn bg-surface-500">Reset Password</button>
          ${``}`}</form></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8405be03.js.map
