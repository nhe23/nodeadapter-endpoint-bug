<script>
  export let dog;
</script>

{#if dog}
  <img alt="doggo" src={dog.message} />
{/if}

<style>
</style>
