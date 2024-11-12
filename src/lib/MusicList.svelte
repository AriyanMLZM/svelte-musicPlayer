<script lang="ts">
	import { Item } from './'
	export let musics
	export let selectSong
</script>

<div class="w-full h-full flex flex-col">
	{#each musics as music}
		<Item {music} {selectSong} />
	{/each}
</div>

<style>
	div {
		background: linear-gradient(
			45deg,
			rgba(0, 0, 0, 1) 40%,
			rgba(143, 177, 0, 1) 100%
		);
	}
</style>
