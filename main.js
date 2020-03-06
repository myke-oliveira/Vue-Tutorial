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
		variants: [
			{
				id: 2234,
				color: 'green'
			},
			{
				id: 2235,
				color: 'blue'
			}
		],
		sizes: [
			'P', 'M', 'G'
		]
	}
});

var menuApp = new Vue({
	el: '#menu',
	data: {
        menus: [
            {
                "icon": "",
                "label": "Produtos e assinaturas",
                "url": "",
                "target": "self"
            },
            {
                "icon": "",
                "label": "Alterar minha senha",
                "url": "",
                "target": "self"
            },
            {
                "icon": "",
                "label": "Editar meu perfil",
                "url": "",
                "target": "self"
            },
            {
                "icon": "",
                "label": "Quero me tornar um Afiliado ou Produtor na Monetizze. O que isso quer dizzer?",
                "url": "",
                "target": "blank"
            }
        ]
    }
})
