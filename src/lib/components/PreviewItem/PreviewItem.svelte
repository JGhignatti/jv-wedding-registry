<script lang="ts">
  import { onMount } from 'svelte';

  import type { Item } from '$lib/models/item.model';
  import { priceToString } from '$lib/utils/price';

  export let item: Item;

  let imageEl: HTMLElement;
  let imageWidth: number;
  let imageHeight: number;

  onMount(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const entry = entries.at(0);

      imageWidth = entry?.target.clientWidth ?? 0;
      imageHeight = entry?.target.clientHeight ?? 0;
    });

    resizeObserver.observe(imageEl);

    return () => resizeObserver.unobserve(imageEl);
  });
</script>

<a href={`/item/${item.id}`} class="flex flex-col justify-center p-2 group hover:bg-black/10">
  <div
    class="preview-item flex h-full max-h-[380px] w-full max-w-[480px] items-center justify-center overflow-hidden border-2 border-black"
  >
    <img
      src={item.imageLink}
      alt={`Imagem do produto ${item.name}`}
      bind:this={imageEl}
      class={`${imageWidth / imageHeight > 1 ? 'wide h-full' : 'w-full'}`}
    />
  </div>
  <h1 class="text-center mt-4 text-2xl italic tracking-wider font-semibold group-hover:underline">
    {item.name}
  </h1>
  <p class="text-center uppercase tracking-widest">{priceToString(item.price)}</p>
</a>

<style>
  .preview-item {
    aspect-ratio: 24 / 19;
  }

  .preview-item > img.wide {
    max-width: initial;
  }
</style>
