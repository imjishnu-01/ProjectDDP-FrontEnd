import { c as create_ssr_component, f as each, e as escape } from './index2-0c62bf2c.js';
import './ProgressBar.svelte_svelte_type_style_lang-0637068f.js';
import './index-70927e94.js';

function getCookie(name) {
}
const baseAPIURL = "http://10.0.0.4:3000";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const token = getCookie();
  let invitations = [];
  async function updateInvitationStatus(invitationID, status) {
    try {
      const response = await fetch(`${baseAPIURL}/api/invite/${invitationID}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status })
      });
      if (response.ok) {
        return true;
      } else {
        const errorResponse = await response.json();
        console.error("Error updating invitation status:", errorResponse.error);
        return false;
      }
    } catch (error) {
      console.error("Error updating invitation status:", error);
      return false;
    }
  }
  if ($$props.updateInvitationStatus === void 0 && $$bindings.updateInvitationStatus && updateInvitationStatus !== void 0)
    $$bindings.updateInvitationStatus(updateInvitationStatus);
  return `<div class="md:hidden">${invitations.length > 0 ? `
		<div class="grid-container"><h2 class="p-4">Pending Invitations - (Received)</h2>
			<div class="grid-responsive m-4 p-2">${each(invitations, (invitation) => {
    return `${invitation.response_status === "pending" ? `<div class="grid-item"><div class="grid-content">Sent By: ${escape(invitation.sender_firstName)}
								${escape(invitation.sender_lastName)}</div>

							<div class="grid-content">Company Name: ${escape(invitation.company_name)}</div>

							<div class="grid-content">Role: ${escape(invitation.role)}</div>

							<div class="grid-content">Message: ${escape(invitation.message)}</div>

							<div class="grid-content">Sent At: ${escape(invitation.sent_at)}</div>

							<div class="grid-action"><button class="btn bg-primary-500 m-4">Accept</button>
								<button class="btn bg-surface-500 m-4">Reject</button>
							</div></div>
						<hr>` : ``}`;
  })}</div></div>` : ``}

	<hr>
	<hr>
	<hr>

	${invitations.length > 0 ? `
		<div class="grid-container"><h2 class="p-4">Accepted/Rejected Invitations</h2>
			<div class="grid-responsive">${each(invitations, (invitation) => {
    return `${invitation.response_status !== "pending" ? `<div class="grid-item m-4"><div class="grid-value">Sendet By:${escape(invitation.sender_firstName)}
								${escape(invitation.sender_lastName)}</div>
							<div class="grid-value">Company Name: ${escape(invitation.company_name)}</div>
							<div class="grid-value">Role: ${escape(invitation.role)}</div>
							<div class="grid-value">Status: ${escape(invitation.response_status)}</div></div>
						<hr>` : ``}`;
  })}</div></div>` : ``}

	${invitations.length === 0 ? `<p>No invitations received.</p>` : ``}</div>

<div class="hidden md:block">${invitations.length > 0 ? `
		<div class="table-container"><h2 class="p-4">Pending Invitations - (Received)</h2>
			<table class="table table-hover"><thead><tr><th>Sender ID</th>
						<th>Company Name</th>
						<th>Role</th>
						<th>Message</th>
						<th>Sent At</th>
						<th>Action</th></tr></thead>
				<tbody>${each(invitations, (invitation) => {
    return `${invitation.response_status === "pending" ? `<tr><td>${escape(invitation.sender_firstName)} ${escape(invitation.sender_lastName)}</td>
								<td>${escape(invitation.company_name)}</td>
								<td>${escape(invitation.role)}</td>
								<td>${escape(invitation.message)}</td>
								<td>${escape(invitation.sent_at)}</td>
								<td><button class="btn bg-primary-500 m-4">Accept</button>
									<button class="btn bg-surface-500 m-4">Reject</button></td>
							</tr>` : ``}`;
  })}</tbody>
				<tfoot></tfoot></table></div>
		<hr>
		<hr>
		<hr>
		
		<div class="table-container"><h2 class="p-4">Accepted/Rejected Invitations</h2>
			<table class="table table-hover"><thead><tr><th>Sender ID</th>
						<th>Company Name</th>
						<th>Role</th>
						<th>Message</th>
						<th>Sent At</th>
						<th>Status</th></tr></thead>
				<tbody>${each(invitations, (invitation) => {
    return `${invitation.response_status !== "pending" ? `<tr><td>${escape(invitation.sender_firstName)} ${escape(invitation.sender_lastName)}</td>
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
//# sourceMappingURL=_page.svelte-4f7d4293.js.map
