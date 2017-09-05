QUnit.test("See test A2", function (assert) {
	var str = "Завтрак в 23:59";
	var regexp = /([0-1]?\d|2[0-3]):[0-5]\d/g;
	
	var str2 = "gbmig 1+2 bjb 1*2 vdv vf 2/-1";
	var regexp2 = /\b\-?\d[\+\/\-\*]\-?\d\b/g;
	
	var str3 = "ппп1пои";
	var regexp3 = /ппп\d+пои/g;
	
	console.log( str.match(regexp) );
    console.log( str2.match(regexp2) );
	console.log( str3.match(regexp3) );
	assert.equal(2, 2, "Equal!");
});