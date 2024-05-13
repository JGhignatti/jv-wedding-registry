<script lang="ts">
  // import type { Item } from '$lib/models/item.model';
  // import PreviewItem from '$lib/components/PreviewItem/PreviewItem.svelte';

  // const previewItems = loadPreview();

  // async function loadPreview(): Promise<Item[]> {
  //   try {
  //     const res = await fetch('api/items/preview');
  //     const body = await res.json();

  //     if (!res.ok) {
  //       throw new Error();
  //     }

  //     return body.items;
  //   } catch {
  //     return Promise.reject();
  //   }
  // }
</script>

<!--{#snippet storeBtn(text)}
  <a
    href="/store"
    class="border border-black px-10 py-4 font-semibold uppercase tracking-widest hover:underline"
  >
    {text}
  </a>
{/snippet}-->

<div class="container mx-auto">
  <!-- <div class="flex flex-col items-center">
    {#await previewItems}
      Carregando
    {:then items}
      {#if !items.length}
        <span class="uppercase">Veja os itens na loja</span>
      {:else}
        <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
          {#each items as item}
            <PreviewItem {item} />
          {/each}
        </div>
      {/if}

      {@render storeBtn(!items.length ? 'Ver loja' : 'Ver mais')}
    {:catch}
      <span class="uppercase">Veja os itens na loja</span>

      {@render storeBtn('Ver Loja')}
    {/await}
  </div> -->
</div>
