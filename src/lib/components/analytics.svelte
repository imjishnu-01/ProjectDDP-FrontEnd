<script>
    
    import { page } from "$app/stores";
    
    $:{
        if(typeof gtag !== 'undefined'){
            gtag('config', process.env.PUBLIC_MEASUREMENT_ID,{
                page_title: document.title,
                page_path: $page.url.href,
            })
        }
    }

</script>
<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id={process.env.PUBLIC_MEASUREMENT_ID}">
  </script>
  <script>
    window.dataLayer = window.dataLayer || []

    function gtag() {
      dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', 'MEASUREMENT_ID')
  </script>
</svelte:head>