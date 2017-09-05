var see = function(par) {
    par++;
    return par;
};
var aj = function(cb) {
    $.ajax({
        type: "POST",
        url: "http://localhost",
        success: cb
    });
};