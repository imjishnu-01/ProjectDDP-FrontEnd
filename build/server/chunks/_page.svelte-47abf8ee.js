import { c as create_ssr_component, f as each, e as escape } from './index2-0c62bf2c.js';
import './ProgressBar.svelte_svelte_type_style_lang-0637068f.js';
import './index-70927e94.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let userSkills = [];
  let userWorkExperiences = [];
  let firstName = "";
  let lastName = "";
  let email = "";
  let yearsOfExperience = "";
  let city = "";
  let state = "";
  return `<div class="container h-full mx-auto flex gap-8 flex flex-col">
	<div class="flex items-center justify-between"><h2>Skills</h2>
		<button class="btn bg-secondary-500">Add Skill </button></div>
	<hr>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">${each(userSkills, (skill) => {
    return `<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative"><div>${escape(skill.name)}</div>
				<button class="btn-icon btn-icon-sm bg-secondary-500 absolute -top-1.5 -right-1.5">X
				</button>
				
			</div>`;
  })}</div>

	
	<div class="flex items-center justify-between mt-8"><h2>Work Experience</h2>
		<button class="btn bg-secondary-500">Add Work Experience
		</button></div>
	<hr>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">${each(userWorkExperiences, (experience) => {
    return `<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative"><div>${escape(experience.details)}</div>
				<div>Role: ${escape(experience.position)}</div>
				<button class="btn-icon btn-icon-sm bg-secondary-500 absolute -top-1.5 -right-1.5">X
				</button>
			</div>`;
  })}</div>
	<hr>
	

	
	<div class="flex items-center justify-between mt-8"><h2>User details</h2>
		<button class="btn bg-secondary-500">Edit </button></div>
	<hr>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="card p-4 bg-primary-warning flex flex-col gap-10 relative"><div>${escape(firstName)} ${escape(lastName)}</div></div>
		<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative"><div>${escape(email)}</div></div>
		<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative"><div>Total Experience: ${escape(yearsOfExperience)}</div></div>
		<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative">${`${escape(city)}`}</div>
		<div class="card p-4 bg-primary-warning flex flex-col gap-10 relative">${`${escape(state)}`}</div>
		<button class="btn bg-secondary-500">Reset Password </button></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-47abf8ee.js.map
