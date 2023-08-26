<svelte:head>
   <title>ProjectDDP</title>
</svelte:head>
<script lang="ts">


const mainText = "Connect, Refer, Thrive Together";
    let typedText = "";
  
    function typeText() {
      if (typedText.length < mainText.length) {
        typedText = mainText.slice(0, typedText.length + 1);
        setTimeout(typeText, 50);
      }
    }
  
    typeText();

	 let employeeSection = {
        title: "For Employees",
        text: "Welcome to our Employee Referral Network, your gateway to fostering professional connections and reaping mutual rewards. We recognize the value of a strong professional network, and our platform empowers you to play a pivotal role in shaping careers while enjoying the benefits of referrals.",
        items: [
            "Sign up and create your profile",
            "Find Talent for Open Positions in Your Organization",
            "Send job invitations",
            "Help candidates to crack the interview"
        ]
    };

    let jobSeekerSection = {
        title: "For Job Seekers",
        text: "Welcome to our Job Seekers Platform, where your career aspirations take flight. At our platform, we believe in the power of connections and mutual growth. As a job seeker, you're not just looking for a job; you're searching for an opportunity to thrive and excel.",
        items: [
            "Sign up and create your profile",
            "Add your skills and experience",
            "Receive job invitations and notifications",
            "Accept or Reject job invitations"
        ]
    };
</script>
<div class="center">

  <div class="grid-container" style="height: 100vh; overflow-y: auto;">
    <div class="flex items-center justify-between m-4">
        <div class="flex items-center">
            <span class="fa-solid fa-handshake text-6xl"></span>
            <strong class="text-xl ml-2">ProjectDDP</strong>
        </div>
        <div>
            <a href="/login" class="btn bg-primary-500">Login</a>
            <a href="/register" class="btn bg-surface-500 ml-4">Sign Up</a>
        </div>
    </div>
    
    <!-- Rest of your content -->



  <hr class="m-4">
  <div class="text-4xl font-semibold mb-4 m-5 p-5" id="typingText">{typedText}</div>
  <div class="grid-responsive m-4 p-2">

    <!-- Job Seeker Section -->
    <div class="grid-item m-2 p-8">
      <div class="grid-content">
          <h2 class="mb-4 text-2xl font-bold">
              <strong>{jobSeekerSection.title}</strong>
          </h2>
          <p class="mb-4 text-lg">
              {jobSeekerSection.text}
          </p>
          <div class="flex flex-col space-y-4">
              {#each jobSeekerSection.items as item, i}
                  <div class="flex items-center p-4 bg-white bg-opacity-90 rounded-lg">
                      <div class="w-8 h-8 mr-4 text-2xl font-semibold flex items-center justify-center rounded-full bg-blue-500 text-white">
                          {i + 1}
                      </div>
                      <p class="text-lg font-medium text-black">{item}</p>
                  </div>
              {/each}
          </div>
      </div>
  </div>

      <!-- Employee Section -->
      <div class="grid-item m-4 p-8">
          <div class="grid-content">
              <h2 class="mb-4 text-2xl font-bold">
                  <strong>{employeeSection.title}</strong>
              </h2>
              <p class="mb-4 text-lg">
                  {employeeSection.text}
              </p>
              <div class="flex flex-col space-y-4">
                  {#each employeeSection.items as item, i}
                      <div class="flex items-center p-4 bg-white bg-opacity-90 rounded-lg">
                          <div class="w-8 h-8 mr-4 text-2xl font-semibold flex items-center justify-center rounded-full bg-green-500 text-white">
                              {i + 1}
                          </div>
                          <p class="text-lg font-medium text-black">{item}</p>
                      </div>
                  {/each}
              </div>
          </div>
      </div>
      
      
  </div>
</div>
</div>
<style>
    
  
  .center {
    display: flex;
    flex-direction: column;
    height: 250vh;
    text-align: center;
  }

</style>