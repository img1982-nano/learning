<script lang="ts">
    import { OGP } from '@jill64/svelte-ogp';
	import '../app.css';
	let { children } = $props();
</script>

<!-- src/+layout.svelte -->
<OGP
  title="Create by azilamo"
  site_name="Counter 1"
  description="文字数をカウントします"
  image=""
/>
{@render children()}
