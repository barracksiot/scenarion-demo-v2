const linux = (state) => {
  return new Promise((resolve, reject) => {
    console.log("Currently " + state.billing + ". Thank you and goodbye.") 
    state.billing=="free" ? state.price="0" : state.price="2$/h";
    console.log("----------------------------------------------------------------------")
    resolve();
  });
};
module.exports = linux;