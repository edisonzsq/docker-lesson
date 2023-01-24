db.createUser(
    {
        user: "dockeruser",
        pwd: "dockerpass",
        roles: [
            {
                role: "readWrite",
                db: "dockerdb"
            }
        ]
    }
);
db.createCollection("employees");