function teste(name) {
  return function() {
	  console.log(name + `teste`);
  };
}


teste(`Nicolas`);
