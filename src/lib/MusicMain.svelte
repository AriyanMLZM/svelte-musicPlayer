<script>
	export let selectedMusic
</script>

<section class="w-full flex-center flex-col">
	<div class="w-[150px] h-[150px] rounded-full border-[5px] border-white overflow-hidden shadow-lg">
		<img
			src={selectedMusic.cover}
			alt={selectedMusic.title}
			class="w-full h-full object-cover"
		/>
	</div>
	<div class="flex-center flex-col gap-[10px] p-[20px]">
		<h1 class="text-text text-[20px] font-bold">{selectedMusic.title}</h1>
		<h2 class="text-text text-[18px]">{selectedMusic.singer}</h2>
	</div>
</section>
