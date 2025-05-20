import { defineStore } from "pinia";

interface Channel {
  _id: string;
  _source: {
    code: string;
    stream: string;
    title: string;
    subtitle: string;
    type: string;
  };
}

interface Player {
  isPlaying: boolean;
  audio: HTMLAudioElement | null;
  channel: Channel | null;
}

export const usePlayerStore = defineStore("player", {
  state: (): Player => ({
    isPlaying: false,
    audio: null,
    channel: null,
  }),
  actions: {
    update(channel: Channel) {
      if (this.audio != null && this.channel != null) {
        this.audio.pause();
        this.audio.src = ""; // Optional: release reference to stream
        this.audio.load(); // Optional: reset playback
        this.audio = null;

        this.channel = null;
      }
      this.channel = channel;
      this.audio = new Audio(channel._source.stream);
      this.audio.play().catch((err) => {
        console.error("Playback failed:", err);
      });
    },
  },
});
