<script lang="ts">
  import MdMenu from 'svelte-icons/md/MdMenu.svelte';
  import MdClose from 'svelte-icons/md/MdClose.svelte';
  import { useLocalStorageCartItems } from '$lib/spells/use-local-storage-cart-items.svelte';

  let open = $state(false);

  const cartItems = useLocalStorageCartItems();
  const hasCartItems = $derived(!!cartItems.items?.length);
</script>

{#snippet logo()}
  <div class="flex items-center justify-center p-6 border-2 border-zinc-400">Noiva & Noivo</div>
{/snippet}

{#snippet inlineNavItem({ link, name, classes })}
  <a href={link} class="{classes} rounded px-4 py-2 hover:bg-pink-50 transition-colors">{name}</a>
{/snippet}

{#snippet listNavItem({ link, name })}
  <li>
    <a href={link} class="w-full p-2 rounded bg-pink-50 block text-center">{name}</a>
  </li>
{/snippet}

<div class="container mx-auto p-4 space-y-6">
  <ul class="flex items-center gap-2">
    <li class="mr-auto">
      {@render inlineNavItem({ link: '/', name: 'Início', classes: 'hidden md:block' })}

      <a href="/" class="block md:hidden">
        {@render logo()}
      </a>
    </li>

    <div class="hidden md:contents">
      <li>
        {@render inlineNavItem({ link: '/store', name: 'Loja' })}
      </li>
      <li>
        {@render inlineNavItem({ link: '/info', name: 'Informações' })}
      </li>
    </div>

    <li class="relative">
      <a href="/cart" class="px-4 py-2 bg-pink-100 border-2 border-pink-400 rounded">Carrinho</a>
      {#if hasCartItems}
        <div
          class="size-4 bg-red-500 rounded-full absolute -top-4 -right-2 border-2 border-white box-content"
        ></div>
      {/if}
    </li>

    <li class="flex items-center md:hidden">
      <button class="size-8" onclick={() => (open = true)}>
        <MdMenu />
      </button>
    </li>
  </ul>

  <div class="hidden md:block">
    {@render logo()}
  </div>
</div>

<div
  class="fixed w-dvw h-dvh inset-y-0 flex-col flex p-4 bg-white transition-all md:hidden"
  class:left-full={!open}
  class:left-0={open}
>
  <button class="self-end size-8" onclick={() => (open = false)}>
    <MdClose />
  </button>

  {@render logo()}

  <ul class="mt-8 space-y-2">
    {@render listNavItem({ link: '/', name: 'Início' })}
    {@render listNavItem({ link: '/store', name: 'Loja' })}
    {@render listNavItem({ link: '/info', name: 'Informações' })}
    {@render listNavItem({ link: '/cart', name: 'Carrinho' })}
  </ul>
</div>
