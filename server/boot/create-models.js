module.exports = function(app) {
  app.dataSources.easyfeira.automigrate('person', function(err) {
    if (err) throw err;
  });
};
