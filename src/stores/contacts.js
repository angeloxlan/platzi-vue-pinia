import { defineStore } from 'pinia';

export default defineStore('contacts', {
    state: () => {
        return {
            contacts: [
                { id: 1, name: 'Tú', avatar: '/avatars/avatar.jpg' },
                { id: 2, name: 'Jason', avatar: '/avatars/avatar-01.jpg' },
                { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' }
            ],
        }
    },
});
