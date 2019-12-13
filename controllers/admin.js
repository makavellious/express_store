const Product = require('../models/product');

//GET Products (Admin)
exports.getProducts = (req, res, next) => {
	const products = Product.fetchAll((products) => {
		res.render('admin/products', {
			prods: products,
			pageTitle: 'Admin Products list',
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
			productCSS: true
		});
	});
};

//POST Product (Admin)
exports.postAddProduct = (req, res, next) => {
	const title = req.body.title;
	const imageUrl = req.body.imageUrl;
	const price = req.body.price;
	const description = req.body.description;
	const product = new Product(title, imageUrl, price, description);
	product.save();
	res.redirect('/');
};

exports.getAddProduct = (req, res, next) => {
	res.render('./admin/add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		formsCSS: true,
		productCSS: true
	});
};
