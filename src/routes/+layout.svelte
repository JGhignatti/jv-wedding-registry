<script lang="ts">
  import '../app.css';

  import LocalStorageProvider from '$lib/components/LocalStorageProvider/LocalStorageProvider.svelte';
  import Nav from '$lib/components/Nav/Nav.svelte';
</script>

<LocalStorageProvider>
  <Nav />
  
  <slot />
</LocalStorageProvider>
