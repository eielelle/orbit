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
  volume: number;
  muted: boolean;
}

export const usePlayerStore = defineStore("player", {
  state: (): Player => ({
    status: "stopped",
    audio: null,
    station: null,
    volume: 1.0,
    muted: false
  }),
  actions: {
    toggleMute() {
      if (this.audio) {
        this.muted = !this.muted
        this.audio.muted = this.muted
      }
    },
    updateVolume(value: number) {
      this.volume = value / 100;

      if (this.audio != null) {
        this.audio.volume = this.volume;
      }
    },
    togglePlay() {
      if (this.audio) {
        if (this.audio.paused && this.station != null) {
          this.update(this.station);
        } else {
          this.audio.pause();
        }
      }
    },
    update(station: Station) {
      if (this.audio != null && this.station != null) {
        this.status = "buffering";
        this.audio.pause();
        this.audio.src = ""; // Optional: release reference to stream
        this.audio.load(); // Optional: reset playback
        this.audio = null;

        this.station = null;
      }

      this.station = station;
      this.audio = new Audio(station._source.stream);
      this.audio.volume = this.volume;

      this.audio.onwaiting = () => {
        this.status = "buffering";
      };

      this.audio.oncanplay = () => {
        this.status = "ready";

        this.audio?.play().catch(() => {
          this.status = "error";
        });
      };

      this.audio.onerror = () => {
        if (this.audio?.error) {
          this.status = "error";
        }
      };
    },
  },
});
