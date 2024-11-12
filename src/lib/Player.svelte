<script lang="ts">
	export let selectedMusic
	export let songOperation

	let currentTime = 0
	let duration: number
	let muted = false
	let volume = 1

	const calcTime = (time: number) => {
		return {
			minute: Math.floor(time / 60),
			second:
				time % 60 < 10 ? '0' + Math.floor(time % 60) : Math.floor(time % 60),
		}
	}

	$: calcDuration = calcTime(duration)
	$: calcCurrentTime = calcTime(currentTime)
</script>

<div class="w-full h-full flex-center bg-[#1a1a1a]">
	<audio
		bind:currentTime
		bind:duration
		bind:muted
		bind:volume
		on:ended={() => songOperation(1)}
		autoplay
		src={selectedMusic.src}
	></audio>
	<h2>{calcCurrentTime.minute}:{calcCurrentTime.second}</h2>
	<input
		bind:value={currentTime}
		type="range"
		step="1"
		min="0"
		max={duration}
		class="w-[400px] hover:accent-black"
	/>
	<input
		bind:value={volume}
		type="range"
		step="0.01"
		min="0"
		max="1"
		class="w-[400px] hover:accent-black"
	/>
	<button on:click={() => songOperation(0)} type="button">change</button>
	<h2>{calcDuration.minute}:{calcDuration.second}</h2>
</div>
