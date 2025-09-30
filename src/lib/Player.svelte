<script lang="ts">
	export let selectedMusic: IMusic
	export let songOperation: (action: 'next' | 'prev') => void

	let currentTime = 0
	let duration: number
	let muted = false
	let volume = 1
	let paused = true

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

<div class="w-full flex-center flex-col px-[20px] gap-[20px]">
	<audio
		bind:paused
		bind:currentTime
		bind:duration
		bind:muted
		bind:volume
		on:ended={() => songOperation('next')}
		autoplay
		src={selectedMusic.src}
	></audio>
	<input
		bind:value={currentTime}
		type="range"
		step="1"
		min="0"
		max={duration}
		class="w-full in-range-player"
	/>
	<div class="flex items-center justify-between w-full px-[10px] select-none">
		<h2 class="text-text">{calcCurrentTime.minute}:{calcCurrentTime.second}</h2>
		<div class="flex-center w-full gap-[10px]">
			<button
				aria-label="prev"
				class="btn-player"
				on:click={() => songOperation('prev')}
				type="button"
			>
				<i class="fa fa-step-backward"></i>
			</button>
			<button
				aria-label="play-pause"
				class="btn-player"
				on:click={() => (paused = !paused)}
				type="button"
			>
				{#if paused}
					<i class="fa fa-play"></i>
				{:else}
					<i class="fa fa-pause"></i>
				{/if}
			</button>
			<button
				aria-label="next"
				class="btn-player"
				on:click={() => songOperation('next')}
				type="button"
			>
				<i class="fa fa-step-forward"></i>
			</button>
		</div>
		<h2 class="text">{calcDuration.minute}:{calcDuration.second}</h2>
	</div>
	<div class="mt-[10px] w-full flex-center gap-[10px]">
		<input
			bind:value={volume}
			on:change={() => (muted = false)}
			type="range"
			step="0.01"
			min="0"
			max="1"
			class="w-[100px] in-range-player"
		/>
		<button
			aria-label="next"
			class="btn-player"
			on:click={() => (muted = !muted)}
			type="button"
		>
			{#if muted}
				<i class="fa fa-volume-mute"></i>
			{:else}
				<i class="fa fa-volume-up"></i>
			{/if}
		</button>
	</div>
</div>
