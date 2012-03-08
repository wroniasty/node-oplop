var test = require('tapr').tap.test;
var oplop = require('../src/oplop');

test('Password generation test', function(t) {
	/*
	 * TODO: think of a sensible way to test this :)
	 */
	function randomString() {
		var length = Math.floor(Math.random() * 30) + 1;
		var str = '';
		for (var i=0;i<length;i++) {
			str += String.fromCharCode ( Math.floor(Math.random() * 254) + 1 );
		}
		return str;
	}
	
	for (var cnt=0; cnt < 1000; cnt++) {
		var nickname = randomString();
		var masterPassword = randomString();
		var password = oplop ( nickname, masterPassword );
		t.ok ( password.length === 8, 'length check (=== 8)' );
	}
	
	t.ok ( oplop ('', '').length === 0, 'length check with empty args' )
	t.ok ( oplop ('12345678', '').length === 0, 'length check with empty args' )
	t.ok ( oplop ('', '12345678').length === 0, 'length check with empty args' )

	t.throws ( function() { oplop(null, null); } );
	
	t.end();
});



