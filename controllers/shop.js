const Product = require('../models/product');

//GET Product
exports.getProducts = (req, res, next) => {
	const products = Product.fetchAll((products) => {
		res.render('./shop/product-list', {
			prods: products,
			pageTitle: 'All Products',
			path: '/products',
			productCSS: true
		});
	});
};

//GET Product(:productId)
exports.getProduct = (req, res, next) => {
	const prodId = req.params.productId;
	Product.findById(prodId, (product) => {
		res.render('./shop/product-detail', {
			product: product,
			pageTitle: product.title,
			path: '/products',
			productCSS: true
		});
	});
};

//GET Index
exports.getIndex = (req, res, next) => {
	const products = Product.fetchAll((products) => {
		res.render('./shop/index', {
			prods: products,
			pageTitle: 'Shop',
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
			productCSS: true
		});
	});
};

//GET Cart
exports.getCart = (req, res, next) => {
	res.render('./shop/cart', {
		pageTitle: 'Your Cart',
		path: '/cart'
	});
};

exports.postCart = (req, res, next) => {
	const prodId = req.body.productId;
	console.log(prodId);
	res.redirect('/cart');
};

//GET Orders
exports.getOrders = (req, res, next) => {
	res.render('./shop/orders', {
		pageTitle: 'Your Orders',
		path: '/orders'
	});
};

//GET Checkout
exports.getCheckout = (req, res, next) => {
	res.render('./shop/checkout', {
		pageTitle: 'Checkout',
		path: '/checkout'
	});
};
