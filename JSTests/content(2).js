var rec = function(par) {
	console.log(par);
    if(par!==1) {
		par=par-1;
		rec(par);
	}
};
rec(5);