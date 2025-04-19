<script lang="ts">
    let text = $state("")
</script>
<h1 class="font-4xl">Text conter</h1>
<input bind:value={text} placeholder="ここにテキストを入力" />
<p>{text.length}</p>