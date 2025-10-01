<script lang="ts">
	import { MusicList, MusicInfo, Player } from './lib'
	import musics from './data/musics.json'

	let index: number = 0
	let selectedMusic: IMusic

	$: selectSong(index)

	const selectSong = (ind: number) => {
		index = ind
		selectedMusic = musics[ind]
		document.documentElement.style.setProperty(
			'--color-primary',
			musics[ind].accent
		)
	}

	const songOperation = (action: 'next' | 'prev') => {
		switch (action) {
			case 'prev':
				index = index === 0 ? musics.length - 1 : index - 1
				break
			case 'next':
				index = index === musics.length - 1 ? 0 : index + 1
				break
		}
	}
</script>

<main class="w-full h-screen md:flex-row-reverse md:flex">
	<section
		style="background-image: url({selectedMusic.cover});"
		class="md:w-[70%] w-full h-full flex-center shadow-lg bg-center bg-cover"
	>
		<div class="w-full h-full flex-center bg-black/60 backdrop-blur-[15px]">
			<div
				class="flex-center w-[400px] h-[500px] flex-col shadow-2xl rounded-[20px] gap-[20px] bg-black/30"
			>
				<MusicInfo {selectedMusic} />
				<Player {selectedMusic} {songOperation} />
			</div>
		</div>
	</section>
	<section class="md:w-[30%] w-full h-full">
		<MusicList {selectSong} active_index={index} />
	</section>
</main>
