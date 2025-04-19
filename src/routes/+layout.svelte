<script lang="ts">
	import '../app.css';
	import {OGP} from "@jill64/svelte-ogp"
	let { children } = $props();
</script>

<!-- src/+layout.svelte -->
<OGP
  title="Create by azilamo"
  site_name="Counter app"
  description="文字数をカウントします"
/>
{@render children()}
