var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'This is a great product. The best one in the web.',
        image: './image/vmSocks-green-onWhite.jpg',
        url: 'https://www.netshoes.com.br/',
        inventory: -1,
        onSale: true,
        details: [
            "80% cotton",
            "20% polyester",
            "Gender-neutral"
        ],
        variants: [{
                id: 2234,
                color: 'green',
                image: './image/vmSocks-green-onWhite.jpg'
            },
            {
                id: 2235,
                color: 'blue',
                image: './image/vmSocks-blue-onWhite.jpg'
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
        updateProduct: function(image) {
            this.image = image;
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