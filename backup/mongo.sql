db.createUser(
  {
    user: "root",
    pwd: "root1234",
    roles: [ 
    	{ role: "userAdminAnyDatabase", db: "admin" },
    	{ role: "dbAdminAnyDatabase", db: "admin" }
    ]
  }
)

db.createUser(
  {
    user: "test",
    pwd: "test1234",
    roles: [ { role: "dbOwner", db: "blog" }, { role: "dbOwner", db: "blog-log" } ]
  }
)

db.createUser(
  {
    user: "test2",
    pwd: "test1234",
    roles: [ { role: "dbOwner", db: "blog" }, { role: "dbOwner", db: "blog-log" } ]
  }
)