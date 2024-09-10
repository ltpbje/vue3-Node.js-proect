```cmd

> use kerwin_test
switched to db kerwin_test
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> db.createCollection('users')
{ "ok" : 1 }
> show dbs
admin        0.000GB
config       0.000GB
kerwin_test  0.000GB
local        0.000GB
> db.dropDatabase()
{ "dropped" : "kerwin_test", "ok" : 1 }
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> use kerwin_test
switched to db kerwin_test
> db.createCollection('users')
{ "ok" : 1 }
> db.createCollection('news')
{ "ok" : 1 }
> db.createCollection('products')
{ "ok" : 1 }
> db.getCollectionNames()
[ "news", "products", "users" ]
> db.products.drop()
true
> db.getCollectionNames()
[ "news", "users" ]
> db.users.save({username:'kerwin',age:100})
WriteResult({ "nInserted" : 1 })
> db.users.find()
{ "_id" : ObjectId("66e04849d7b4b29c713e03f2"), "username" : "kerwin", "age" : 100 }
> db.user.

```

MongoDB数据库的数据 太过自由