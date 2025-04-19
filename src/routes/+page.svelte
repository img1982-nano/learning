<script lang="ts">
    import "$lib/index.ts"
    import { copytext } from "$lib/index.ts";
    let texts = $state("")
    let seigen = $state(0)
    let keisan = $derived(seigen-texts.length)
</script>
<h1 class="font-bold text-4xl">Text conter</h1>
<input bind:value={texts} placeholder="ここにテキストを入力" />
<input bind:value={seigen} placeholder="上限数を設定" />
<button class="bg-red-400 rounded" onclick={() => copytext(texts)}>こぴー</button>
{#if texts.length === 0}
    <p>テキストを入力すると文字数が表示されます</p>
{:else}
    <p>現在の文字数:{texts.length}</p>
{/if}
{#if seigen === 0}
    <p class="text-red-500">現在の上限-文字数の結果:上限数を設定していません</p>
{:else}
    <p>現在の上限-文字数の結果:{keisan}</p>
{/if}