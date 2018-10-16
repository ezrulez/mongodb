//criacao de um usuario de banco

use banco

var u = {
    user: "usuario",
    pwd: "123456",
    roles: [{
        role: 'readWrite',
        db: 'banco'
    }]
}
db.createUser(u)

> use admin

    >
    show users

var user = {
    "user": "sadmin",
    "pwd": "123456",
    roles: [{
        "role": "userAdminAnyDatabase",
        "db": "admin"
    }]
}

db.createUser(user);
db.grantRolesToUser("sadmin", [{
    "role": "dbAdminAnyDatabase",
    "db": "admin"
}]);
db.grantRolesToUser("sadmin", [{
    "role": "clusterAdmin",
    "db": "admin"
}]);
db.grantRolesToUser("sadmin", [{
    "role": "backup",
    "db": "admin"
}]);
db.grantRolesToUser("sadmin", [{
    "role": "restore",
    "db": "admin"
}]);
db.grantRolesToUser("sadmin", [{
    "role": "readWriteAnyDatabase",
    "db": "admin"
}]);
db.grantRolesToUser("sadmin", [{
    "role": "userAdminAnyDatabase",
    "db": "admin"
}]);



/*
Editar as restrições de segurança do MongoDB:

    vim / etc / mongod.conf

#
network interfaces
net:
    port: 27017
bindIp: 0.0 .0 .0

security:
    authorization: 'enabled'

sudo systemctl restart mongodb 
* /

