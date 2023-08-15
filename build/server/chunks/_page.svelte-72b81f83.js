import { c as create_ssr_component, f as each, e as escape } from './index2-0c62bf2c.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let invitations = [];
  return `<div class="md:hidden">${invitations.length > 0 ? `<div class="grid-container">
			<div class="grid-item"><h2 class="p-4">Pending Invitations - (Sent)</h2>
				<div class="grid-responsive m-4 p-2">${each(invitations, (invitation) => {
    return `${invitation.response_status === "pending" ? `<div class="grid-subitem m-4"><div class="grid-value">Received By: ${escape(invitation.receiver_firstName)}
									${escape(invitation.receiver_lastName)}</div>

								<div class="grid-value">Role: ${escape(invitation.role)}</div>

								<div class="grid-value">JD Link: ${escape(invitation.jd_link || "No Link")}</div>

								<div class="grid-value">Message: ${escape(invitation.message)}</div>
								<div class="grid-value">Sent At: ${escape(invitation.sent_at)}</div></div>
							<hr>` : ``}`;
  })}</div></div>
			<hr>
			<hr>
			<hr>
			
			<div class="grid-item"><h2 class="p-4">Accepted/Rejected Invitations</h2>
				<div class="grid-responsive m-4 p-2">${each(invitations, (invitation) => {
    return `${invitation.response_status !== "pending" ? `<div class="grid-subitem m-4"><div class="grid-value">Received By: ${escape(invitation.receiver_firstName)}
									${escape(invitation.receiver_lastname)}</div>

								<div class="grid-value">Company Name: ${escape(invitation.company_name)}</div>

								<div class="grid-value">Role: ${escape(invitation.role)}</div>

								<div class="grid-value">Message: ${escape(invitation.message)}</div>

								<div class="grid-value">Sent At: ${escape(invitation.sent_at)}</div>

								<div class="grid-value">Status: ${escape(invitation.response_status)}</div></div>
							<hr>` : ``}`;
  })}</div></div></div>` : ``}
	${invitations.length === 0 ? `<p>No invitations received.</p>` : ``}</div>

<div class="hidden md:block">${invitations.length > 0 ? `
		<div class="table-container"><h2 class="p-4">Pending Invitations - (Sent)</h2>
			<table class="table table-hover"><thead><tr><th>Received By</th>
						<th>Role</th>
						<th>JD Link</th>
						<th>Message</th>
						<th>Sent At</th></tr></thead>
				<tbody>${each(invitations, (invitation) => {
    return `${invitation.response_status === "pending" ? `<tr><td>${escape(invitation.receiver_firstName)} ${escape(invitation.receiver_lastName)}</td>
								<td>${escape(invitation.role)}</td>
								<td>${escape(invitation.jd_link || "No Link")}</td>
								<td>${escape(invitation.message)}</td>
								<td>${escape(invitation.sent_at)}</td>
							</tr>` : ``}`;
  })}</tbody>
				<tfoot></tfoot></table></div>

		<hr>
		<hr>
		<hr>
		
		<div class="table-container"><h2 class="p-4">Accepted/Rejected Invitations</h2>
			<table class="table table-hover"><thead><tr><th>Received By</th>
						<th>Company Name</th>
						<th>Role</th>
						<th>Message</th>
						<th>Sent At</th>
						<th>Status</th></tr></thead>
				<tbody>${each(invitations, (invitation) => {
    return `${invitation.response_status !== "pending" ? `<tr><td>${escape(invitation.receiver_firstName)} ${escape(invitation.receiver_lastname)}</td>
								<td>${escape(invitation.company_name)}</td>
								<td>${escape(invitation.role)}</td>
								<td>${escape(invitation.message)}</td>
								<td>${escape(invitation.sent_at)}</td>
								<td>${escape(invitation.response_status)}</td>
							</tr>` : ``}`;
  })}</tbody>
				<tfoot></tfoot></table></div>` : ``}
	${invitations.length === 0 ? `<p>No invitations received.</p>` : ``}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-72b81f83.js.map
