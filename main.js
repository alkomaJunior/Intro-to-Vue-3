const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: [
                {id: 1, length: '4px'},
                {id: 2, length: '14px'},
                {id: 3, length: '24px'},
                {id: 4, length: '34px'}
            ]
        }
    }
})
