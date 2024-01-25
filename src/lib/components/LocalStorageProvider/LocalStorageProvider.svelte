<script lang="ts">
import { onMount, setContext } from 'svelte';
import { writable } from 'svelte/store';
import { localStorageProviderKey } from './local-storage-provider-key';

const items = writable<string[]>();
setContext(localStorageProviderKey, items);

onMount(() => {
  const lsKey = '__jv-wdr-items';

  if (!localStorage.getItem(lsKey)) {
    localStorage.setItem(lsKey, '[]');
  }

  items.set(JSON.parse(localStorage.getItem(lsKey) as string) as string[]);

  items.subscribe(items => localStorage.setItem(lsKey, JSON.stringify(items)));

  addEventListener('storage', (event: StorageEvent) => {
    if (event.key === lsKey || !event.key) {
      if (!event.newValue) {
      localStorage.setItem(lsKey, '[]');
      items.set([]);

      return;
      }

      items.set(JSON.parse(event.newValue));
    }
  });
});
</script>

<slot />
