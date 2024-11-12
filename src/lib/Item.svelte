<script>
	export let music
	export let selectSong
</script>

<button
	on:click={() => selectSong(music)}
	type="button"
	class="flex gap-[20px] items-center text-white p-[10px] hover:bg-slate-400/30"
>
	<div class="w-[80px] h-[80px] flex-center">
		<img
			src={music.cover}
			alt={music.title}
			class="w-full h-full object-cover rounded-[10px]"
		/>
	</div>
	<h2>{music.title}</h2>
</button>
