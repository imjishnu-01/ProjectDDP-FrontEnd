import { c as create_ssr_component, b as add_attribute, f as each, e as escape } from './index2-0c62bf2c.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let skillsInput = "";
  let usersWithSkills = [];
  return `<h1>Search candidates</h1>
<div class="container"><form class="card m-5 p-4 flex flex-col gap-3"><div class="input-group input-group-divider grid-cols-[auto_1fr_auto]"><div class="input-group-shim"></div>
			<input type="search" placeholder="Skills or Postions "${add_attribute("value", skillsInput, 0)}>
			<button class="bg-surface-500"><i class="fa-solid fa-magnifying-glass"></i></button></div></form></div>

<div class="grid grid-cols-1 grid-cols-1 md:grid-cols-2 gap-4">${each(usersWithSkills, (user) => {
    return `<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative flex-shrink-0 flex-grow-0"><div>${escape(user.firstName)} ${escape(user.lastName)}</div>
			
			<div>Experience: ${escape(user.total_years_of_experience || 0)}</div>
			<div class="flex gap-2 flex-wrap"><span>Skills:</span>
				${each(user.user_skills.split(","), (skill) => {
      return `<span class="chip variant-filled">${escape(skill)}</span>`;
    })}</div>
			
			<a href="${"/application/userProfile/" + escape(user.id, true)}" class="btn-icon btn-icon-bg bg-secondary-500 m-4 absolute bottom-0 right-0 -mb-2 -mr-2"><i class="fas fa-chevron-right text-white"></i></a>
			
		</div>`;
  })}</div>

${``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-32b1c9d7.js.map
