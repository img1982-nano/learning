<script lang="ts">
    import { OGP } from '@jill64/svelte-ogp';
	import '../app.css';
	let { children } = $props();
</script>

<!-- src/+layout.svelte -->
<OGP
  title="Counter 1"
  site_name="Create by azilamo"
  description="文字数をカウントします"
  image=""
/>
<h1 class="font-bold text-6xl flex justify-center">Text conter</h1>
{@render children()}
