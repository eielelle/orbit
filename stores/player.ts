import { defineStore } from "pinia";

interface Station {
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
  status: string;
  audio: HTMLAudioElement | null;
  station: Station | null;
}

export const usePlayerStore = defineStore("player", {
  state: (): Player => ({
    status: "stopped",
    audio: null,
    station: null,
  }),
  actions: {
    update(station: Station) {
      if (this.audio != null && this.station != null) {
        this.audio.pause();
        this.audio.src = ""; // Optional: release reference to stream
        this.audio.load(); // Optional: reset playback
        this.audio = null;

        this.station = null;
      }
      this.station = station;
      this.audio = new Audio(station._source.stream);

      this.audio.onwaiting = () => {
        this.status = "buffering";
      };

      this.audio.oncanplay = () => {
        this.status = "ready";
      };

      this.audio.onerror = () => {
        this.status = "error";
      };
      
      this.audio.play().catch((err) => {
        console.error("Playback failed:", err);
      });
    },
  },
});
