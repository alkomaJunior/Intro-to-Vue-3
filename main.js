const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            selectVariant: 0,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index){
            this.selectVariant =  index
        },
    },
    computed: {
        title() {
            return this.product + ' ' + this.brand
        },
        image(){
            return this.variants[this.selectVariant].image
        },
        inStock() {
            return this.variants[this.selectVariant].quantity
        },
        isOnSale() {
            if(this.variants[this.selectVariant].quantity != 0) {
                return this.product + ' ' + this.brand + ' is on sale.'
            }
            return this.product + ' ' + this.brand + ' is not on sale.'
        }
    }
})
