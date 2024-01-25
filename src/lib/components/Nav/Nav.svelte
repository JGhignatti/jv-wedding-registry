{#snippet logo()}
  <div class="w-fit">Bride & Groom</div>
{/snippet}

{#snippet navItem({ text, path })}
  <a href={path}>{ text }</a>
{/snippet}

<div class="container mx-auto p-4">
  <div class="flex justify-center items-center md:hidden">
    {@render logo()}
  </div>

  <ul class="flex justify-between items-center gap-4">
    <li>
      {@render navItem({ text: 'Início', path: '/' })}
    </li>
    <li>
      {@render navItem({ text: 'Informações', path: '/about' })}
    </li>
    <li class="hidden md:block mx-auto">
      <a href="/">
        {@render logo()}
      </a>
    </li>
    <li>
      {@render navItem({ text: 'Loja', path: '/store' })}
    </li>
    <li>
      {@render navItem({ text: 'Carrinho', path: '/cart' })}
    </li>
  </ul>
</div>
