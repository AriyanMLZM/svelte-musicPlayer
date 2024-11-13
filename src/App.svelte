<script lang="ts">
	import { MusicList, MusicMain, Player } from './lib/index'

	import musics from './data/musics'

	let index: any = 0
	let selectedMusic: any

	$: selectSong(index)

	const selectSong = (index: number) => {
		selectedMusic = musics[index]
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

<main class="w-screen h-screen bg-background flex">
	<section class="w-[30%] h-full">
		<MusicList {musics} {selectSong} />
	</section>
	<section class="w-[70%] h-full flex-center shadow-lg">
		<div
			class="flex-center w-[400px] h-[500px] flex-col shadow-2xl rounded-[20px] gap-[20px]"
		>
			<MusicMain {selectedMusic} />
			<Player {selectedMusic} {songOperation} />
		</div>
	</section>
</main>
