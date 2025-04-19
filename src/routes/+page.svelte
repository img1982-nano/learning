<script lang="ts">
    let text = $state("")
    let seigen = $state(0)
    let keisan = $derived(seigen-text.length)
</script>
<h1 class="font-bold text-4xl">Text conter</h1>
<input bind:value={text} placeholder="ここにテキストを入力" />
<input bind:value={seigen} placeholder="上限数を設定" />
{#if text.length === 0}
    <p>テキストを入力すると文字数が表示されます</p>
{:else}
    <p>現在の文字数:{text.length}</p>
{/if}
{#if seigen === 0}
    <p class="text-red-500">現在の上限-文字数の結果:上限数を設定していません</p>
{:else}
    <p>現在の上限-文字数の結果:{keisan}</p>
{/if}