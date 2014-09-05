suite('Stamplay Object ', function () {

	test('exists as window property', function () {
		assert.typeOf(window.Stamplay, 'object', 'window.Stamplay exists');
	})

	test('expose Support object', function () {
		assert.typeOf(window.Stamplay.Support, 'object', 'window.Stamplay.Support exists');
	})

	test('expose Cobject constructor', function () {
		assert.typeOf(window.Stamplay.Cobject, 'function', 'window.Stamplay.Cobject constructor exists');
	})

	test('expose User constructor', function () {
		assert.typeOf(window.Stamplay.User, 'function', 'window.Stamplay.User constructor exists');
	})
})