<script lang="ts">
	import { MusicList, MusicMain, Player } from './lib/index.svelte'

	import musics from './data/musics.svelte'

	let index: number = 0
	let selectedMusic: any

	$: selectSong(index)

	const selectSong = (ind: number) => {
		index = ind
		selectedMusic = musics[ind]
	}
	const songOperation = (action: number) => {
		switch (action) {
			case 0:
				index = index === 0 ? musics.length - 1 : index - 1
				break
			case 1:
				index = index === musics.length - 1 ? 0 : index + 1
				break
		}
	}
</script>

<main class="w-full h-screen md:flex-row-reverse md:flex">
	<section class="md:w-[70%] w-full h-full flex-center shadow-lg">
		<div
			class="flex-center w-[400px] h-[500px] flex-col shadow-2xl rounded-[20px] gap-[20px]"
		>
			<MusicMain {selectedMusic} />
			<Player {selectedMusic} {songOperation} />
		</div>
	</section>
	<section class="md:w-[30%] w-full h-full">
		<MusicList {musics} {selectSong} />
	</section>
</main>
