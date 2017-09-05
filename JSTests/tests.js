QUnit.module("A");
QUnit.todo("See test A", function (assert) {
    assert.equal(see(2), 3, "Equal!");
    assert.ok(see(1) == 3, "No passed!");
    assert.equal(see(1), 2, "Equal!");
});
QUnit.test("See test A2", function (assert) {
    assert.equal(see(4), 5, "Equal!");
    assert.ok(see(5) == 7, "No passed!");
    assert.equal(see(7), 8, "Equal!");
    assert.equal(see(9), 10, "Equal!")
});
QUnit.module("B");
QUnit.test("See test B", function (assert) {
    assert.equal(see(2), 3, "Rovno!");
    assert.ok(see(1) == 3, "Ne proidesh!");
    assert.equal(see(1), 2, "Rovno!");
});
QUnit.test("See test B2", function (assert) {
    var done = assert.async();
    aj(function () {assert.ok(true, "it's true")});
    setTimeout(function () { 
        done();
    }, 2000);
});