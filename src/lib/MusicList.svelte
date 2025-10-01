<script lang="ts">
	import { Item } from '.'
	import musics from '../data/musics.json'
	export let selectSong: (index: number) => void
	export let active_index: number
</script>

<div class="w-full flex items-center justify-end h-[50px] p-[20px]">
	<i class="fa fa-music text-[25px]"></i>
</div>
<div class="w-full flex flex-col">
	{#each musics as music, index}
		<Item {music} {selectSong} {index} active={active_index === index} />
	{/each}
</div>
