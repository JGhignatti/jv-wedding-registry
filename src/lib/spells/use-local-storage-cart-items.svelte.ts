import { browser } from '$app/environment';

const localStorageCartItemsKey = '__jv-wr--cart-items';

const itemsStore = $state<{ items: number[] }>({ items: [] });

export function useLocalStorageCartItems(): { items: number[] } {
  if (browser) {
    const items = localStorage.getItem(localStorageCartItemsKey);

    if (items) {
      itemsStore.items = JSON.parse(items) as number[];
    }

    addEventListener('storage', (event: StorageEvent) => {
      if (event.key === localStorageCartItemsKey || !event.key) {
        if (!event.newValue) {
          localStorage.setItem(localStorageCartItemsKey, JSON.stringify([]));
          itemsStore.items = [];

          return;
        }

        itemsStore.items = JSON.parse(event.newValue) as number[];
      }
    });
  }

  $effect(() => {
    localStorage.setItem(localStorageCartItemsKey, JSON.stringify(itemsStore.items));
  });

  return itemsStore;
}
