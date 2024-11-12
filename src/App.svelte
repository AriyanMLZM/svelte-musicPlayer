<script lang="ts">
  import { MusicList, MusicMain, Player, Header } from './lib/index';

  import musics from './data/musics'

  let index: any = 0
  let selectedMusic: any

  $: selectSong(index)
  
  const selectSong = (index: number) => {console.log(index); selectedMusic = musics[index]}
  const songOperation = (action: number) => {
    switch(action) {
      case 0:
        index = index === 0 ? musics.length - 1 : index - 1
        break
      case 1:
        index = index === musics.length ? 0 : index + 1
        break
    }
  }
</script>

<main class="w-screen h-screen">
  <header class="w-full h-[5%]">
    <Header />
  </header>
  <section class="h-[75%] w-full flex">
    <section class="w-[30%] h-full">
      <MusicList {musics} {selectSong} />
    </section>
    <section class="w-[70%] h-full">
      <MusicMain {selectedMusic} />
    </section>
  </section>
  <section class="w-full h-[20%]">
    <Player {selectedMusic} {songOperation} />
  </section>
</main>