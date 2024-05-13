<script lang="ts">
  let open = false;
</script>

{#snippet logo()}
  <div class="flex items-center justify-center p-6 border-2 border-zinc-400">Noiva & Noivo</div>
{/snippet}

<div class="container mx-auto p-4 space-y-6">
  <ul class="flex items-center gap-4">
    <li class="mr-auto">
      <a href="/" class="hidden md:block">Início</a>

      <a href="/" class="block md:hidden">
        {@render logo()}
      </a>
    </li>

    <div class="hidden md:contents">
      <li>
        <a href="/store">Loja</a>
      </li>
      <li>
        <a href="/info">Informações</a>
      </li>
    </div>

    <li>
      <a href="/cart">Carrinho</a>
    </li>

    <li class="block md:hidden">
      <button onclick={() => (open = true)}>M</button>
    </li>
  </ul>

  <div class="hidden md:block">
    {@render logo()}
  </div>
</div>

<div
  class="fixed w-full h-full inset-y-0 bg-zinc-200 flex-col flex transition-all md:hidden"
  class:left-full={!open}
  class:left-0={open}
>
  <button class="self-end p-4" onclick={() => (open = false)}>X</button>

  {@render logo()}

  <ul class="p-8">
    <li>
      <a href="/">Início</a>
    </li>
    <li>
      <a href="/store">Loja</a>
    </li>
    <li>
      <a href="/info">Informações</a>
    </li>
    <li>
      <a href="/cart">Carrinho</a>
    </li>
  </ul>
</div>
