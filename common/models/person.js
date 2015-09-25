module.exports = function(Person) {
    /*Person.observe('before save', function teste(ctx, next) {
      console.log(ctx);
      ctx.instance.name = "macaxera";
      ctx.instance.created_at = new Date();
      next();
    });*/
    Person.validatesUniquenessOf('email', {message: 'email is not unique'});

    Person.beforeRemote('create', function(context, unused, next) {
      if(context.args.data.person){
          context.args.data = context.args.data.person;
      }
      context.args.data.created_at = new Date();
      context.args.data.updated_at = new Date();
      next();
    });

    Person.beforeRemote('update', function(context, unused, next) {
      if(context.args.data.person){
          context.args.data = context.args.data.person;
      }
      context.args.data.updated_at = new Date();
      next();
    });
};