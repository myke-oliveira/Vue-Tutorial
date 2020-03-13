var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        description: 'This is a great product. The best one in the web.',
        selectedVariant: 0,
        url: 'https://www.netshoes.com.br/',
        inventory: 30,
        onSale: false,
        details: [
            "80% cotton",
            "20% polyester",
            "Gender-neutral"
        ],
        variants: [{
                id: 2234,
                color: 'green',
                image: './image/vmSocks-green-onWhite.jpg',
                quantity: 10
            },
            {
                id: 2235,
                color: 'blue',
                image: './image/vmSocks-blue-onWhite.jpg',
                quantity: 0
            }
        ],
        sizes: [
            'P', 'M', 'G'
        ],
        cart: 0,
    },
    methods: {
        addToCart: function() {
            this.cart++;
        },
        removeFromCart: function() {
            this.cart--;
        },
        updateProduct: function(index) {
            this.selectedVariant = index;
            console.log(index);
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        onSale() {
            return this.variant[this.selectedVariant].quantity;
        }
    }
});

var menuApp = new Vue({
    el: '#menu',
    data: {
        menus: null,
    }
});

axios.get('http://localhost:8090/getAsideMenu/')
    .then(response => (menuApp.menus = response.data));