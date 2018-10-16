import sys

try:
	from pymongo import MongoClient
except:
    print("[!] Por favor, intale a biblioteca mongodb com o comando: sudo apt-get install python3-pymongo' ou 'pip3 install --upgrade pymongo'")


client = MongoClient('mongodb://sadmin:123456@10.172.8.20:27017')
db=client["banco"]

for j in range(10):
    for i in range(1000):
        db.huehue.insert({"chave":i})

    for r in db.huehue.find():
        print(r)
        q = {"chave": "%d" % r["chave"]}
        db.huehue.delete_one(q)










