import { defineStore } from 'pinia';
import useMessagesStore from '@/stores/messages.js';

export default defineStore('channels', {
    state: () => {
        return {
            channels: [
                { id: 1, name: 'General', messages: null },
                { id: 2, name: 'Emergencias', messages: null },
                { id: 3, name: 'Anuncios', messages: null },
                { id: 4, name: 'Proyecto 1', messages: null },
                { id: 5, name: 'Non-work', messages: null },
                { id: 6, name: 'Atención a clientes', messages: null }
            ],
        }
    },
    getters: {
        getChannels: (state) => {
            const messagesStore = useMessagesStore();
            return (search) => {
                return state.channels
                    .filter((channel) => {
                        return channel.name.toLowerCase().includes(search.toLowerCase());
                    })
                    .map((channel) => {
                        const unreadMessagesCount = messagesStore.countUnreadMessagesByChannelId(channel.id);
                        return {
                            ...channel,
                            messages: unreadMessagesCount,
                        }
                    });
            }
        },
    },
});
