<script lang="ts">
	import { Item } from './'
	export let musics
	export let selectSong
</script>

<div class="w-full flex items-center justify-end h-[50px] p-[20px]">
	<i class="fa fa-music text-text text-[25px]"></i>
</div>
<div class="w-full flex flex-col">
	{#each musics as music, index}
		<Item {music} {selectSong} {index} />
	{/each}
</div>
