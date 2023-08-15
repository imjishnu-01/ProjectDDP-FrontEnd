import { c as create_ssr_component, b as add_attribute } from './index2-0c62bf2c.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  let confirmPassword = "";
  return `



<div class="container flex justify-center items-center h-screen"><form class="card p-4 flex flex-col gap-3 w-80"><h1 class="text-center text-3xl font-bold">Register</h1> 
    ${``}
    <label class="label"><span>First Name</span>
      <input class="input w-full" type="text" placeholder="First Name"${add_attribute("value", firstName, 0)}></label>
    <label class="label"><span>Last Name</span>
      <input class="input w-full" type="text" placeholder="Last Name"${add_attribute("value", lastName, 0)}></label>
    <label class="label"><span>Email</span>
      <input class="input w-full" type="email" placeholder="Email"${add_attribute("value", email, 0)}></label>
    <label class="label"><span>Password</span>
      <input class="input w-full" type="password" placeholder="Password"${add_attribute("value", password, 0)}></label>
    <label class="label"><span>Re-Password</span>
      <input class="input w-full" type="password" placeholder="Confirm Password"${add_attribute("value", confirmPassword, 0)}></label>

    <button class="btn bg-primary-500 ml-auto" style="width: 10rem">Register
    </button>
    <hr>
    <span>Already have a account? <a href="/login" class="btn bg-surface-500 m-2">Login</a></span></form></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f8693a8c.js.map
