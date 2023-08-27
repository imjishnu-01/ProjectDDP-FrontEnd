
<script>
    import { modalStore } from "@skeletonlabs/skeleton";
    
    function closeModal(){
        modalStore.close();
    }
</script>
<div class="max-w-3xl mx-auto p-4 bg-surface-600" style="height: 100vh; overflow-y: auto;">
    <div class="p-6 rounded-lg shadow-md">

        <h2 class="text-2xl font-semibold mb-4">Terms of Usage Agreement</h2>

        <h3 class="text-lg font-semibold mt-4">1. Acceptance of Terms</h3>
        <p class="mb-4">
            By accessing and using <a href="https://projectDDP.com" target="_blank" class="text-blue-600">projectDDP.com</a> and <a href="https://dukhdardpeed.com" target="_blank" class="text-blue-600">dukhdardpeed.com</a>,
            you agree to abide by these Terms of Usage and our Privacy Policy.
            If you do not agree with any of these terms, please refrain from using the websites.
        </p>

        <h3 class="text-lg font-semibold mt-4">2. Use of Cookies</h3>
        <p class="mb-4">
            We use cookies to enhance your experience on our websites.
            Cookies are used for user login and to improve our services.
            By using these websites, you consent to the use of cookies in accordance with our Privacy Policy.
        </p>

        <h3 class="text-lg font-semibold mt-4">3. Google Analytics</h3>
        <p class="mb-4">
            We have integrated Google Analytics to collect anonymous usage data that helps us understand user behavior and improve our websites.
            Google Analytics may use cookies to gather information, but it does not collect personally identifiable information.
        </p>

        <!-- Add more sections here -->
        <h3 class="text-lg font-semibold mt-4">4. User Accounts</h3>
        <p class="mb-4">
            You may need to create a user account to access certain features of our websites.
            You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
        </p>

        <h3 class="text-lg font-semibold mt-4">5. Intellectual Property</h3>
        <p class="mb-4">
            All content and materials on the websites, unless otherwise stated, are the property of the Project DDP team and are protected by copyright and other intellectual property laws.
            You may not reproduce, distribute, modify, or otherwise use any content without our prior written consent.
        </p>

        <h3 class="text-lg font-semibold mt-4">6. Disclaimer of Warranties</h3>
        <p class="mb-4">
            The websites are provided on an "as-is" and "as available" basis.
            We do not make any warranties, express or implied, regarding the accuracy, reliability, or availability of the websites or their content.
        </p>

        <h3 class="text-lg font-semibold mt-4">7. Limitation of Liability</h3>
        <p class="mb-4">
            In no event shall the Project DDP team be liable for any indirect, consequential, special, punitive, or incidental damages arising out of or related to your use of the websites.
        </p>

        <h3 class="text-lg font-semibold mt-4">8. Indemnification</h3>
        <p class="mb-4">
            You agree to indemnify and hold harmless the Project DDP team from any claims, losses, liabilities, or expenses arising from your use of the websites, violation of these terms, or infringement of any third-party rights.
        </p>

        <h3 class="text-lg font-semibold mt-4">9. Changes to Terms</h3>
        <p class="mb-4">
            We reserve the right to modify these terms at any time.
            Any changes will be effective immediately upon posting on the websites.
            Your continued use of the websites after such changes constitutes your acceptance of the updated terms.
        </p>
    </div>

    <button class="btn bg-primary-500 m-2" style="float: right;" on:click={closeModal}> Agree </button>
</div>


  
  