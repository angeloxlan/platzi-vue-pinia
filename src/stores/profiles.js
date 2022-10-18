import { defineStore } from 'pinia';

export default defineStore('profiles', {
    state: () => {
        return {
            id: 1,
            username: 'angelo',
            avatar: '/avatars/avatar-02.jpg',
            status: 'active',
        }
    },
});
