<script lang="ts">
    import { runes } from "runes2"
    import "$lib/index.ts"
    import { copytext } from "$lib/index.ts";
    let texts = $state("")
    let seigen = $state(0)
    let keisan = $derived(seigen-texts.length)
</script>
<div class="flex flex-col items-center justify-center space-y-2 p-4">
    <input class="rounded" bind:value={texts} placeholder="ここにテキストを入力" type="text"/>
    <input class="rounded" bind:value={seigen} placeholder="上限数を設定" type="number" min="0" />
    <button class="bg-red-500 rounded px-4 py-2 active:bg-red-400" onclick={() => copytext(texts)}>Copy</button>
    {#if texts.length === 0}
        <p>テキストを入力すると文字数が表示されます</p>
    {:else}
       <p>現在の文字数:{runes(texts).length}</p>
    {/if}
    {#if seigen === 0}
        <p class="text-red-500">現在の上限-文字数の結果:上限数を設定していません</p>
    {:else}
        <p>現在の上限-文字数の結果:{keisan}</p>
    {/if}
    <h1>メモ:UIがまだ未完成</h1>
</div>
<!--
Todo
- Tailwindを修正する
- Uiを作る
-->