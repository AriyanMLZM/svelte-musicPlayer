<script>
	export let music
	export let selectSong
	export let index
</script>

<button
	on:click={() => selectSong(index)}
	type="button"
	class="flex gap-[20px] items-center text-text py-[10px] px-[30px] hover:bg-slate-400/60 hover:text-white active:bg-slate-400/60 active:text-white"
>
	<div class="w-[80px] h-[80px] flex-center">
		<img
			src={music.cover}
			alt={music.title}
			class="w-full h-full object-cover rounded-[10px]"
		/>
	</div>
	<h2 class="text-[20px]">{music.title}</h2>
</button>
