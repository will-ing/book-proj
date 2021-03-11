<script>
  export let title;
  import products from "../../stores/defaultProduct"; // this is our store export
  import Product from "./Product.svelte";
</script>

<section class="section">
  <h2 class="section-title">{title}</h2>
  <div class="products-center">
    {#each $products as product}
      <!-- used shortcut for subscribing and unsubscribing -->

      <Product {product} />
    {/each}
  </div>
</section>
