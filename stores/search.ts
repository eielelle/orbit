import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    query: ""
  }),
  actions: {
    update(query: string) {
        this.query = query;
    }
  }
})