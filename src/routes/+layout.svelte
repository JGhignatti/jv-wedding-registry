<script lang="ts">
  import '../app.css';

  import LocalStorageProvider from '$lib/components/LocalStorageProvider/LocalStorageProvider.svelte';
  import Nav from '$lib/components/Nav/Nav.svelte';
  import Footer from '$lib/components/Footer/Footer.svelte';
</script>

<div class="grid grid-rows-[auto_minmax(0,1fr)_auto] min-h-full overflow-auto">
  <LocalStorageProvider>
    <Nav />

    <slot />

    <Footer />
  </LocalStorageProvider>
</div>
