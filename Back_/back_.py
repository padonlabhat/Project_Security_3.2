import numpy as np
import math
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

origins = [
    '*'
]

class items (BaseModel):
    text : str
    num : int
class en_Rsa (BaseModel):
    text : str
class de_Rsa (BaseModel):
    text : str
    d : int
    n : int

text = "abcdefghijklmnopqrstuvwxyz"
text_list = []

for char in text:
    text_list.append(char)
text_list = np.array(text_list)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_methods = ["*"],
    allow_headers = ["*"]
)
def check(num=0):
    if num <2:
        return False
    for i in range(2, num):
        if num % i == 0:
            return False
    return True

def random_p_q(p=0):
    num = []
    ran = p
    for i in range(5,250):
        if check(i):
            num.append(i)
    while p == ran:
        s = np.random.randint(len(num))
        ran = num[s]
    return ran

def random_d(e=0,_n=0):
    d = 2
    for i in range(1,100000):
        if(i * e) % _n == 1 and i > e :
            d=i
            break
    return d

def random_e(_n):
    num = []
    ran = []
    for i in range(1,_n):
        if check(i):
            num.append(i)
    for i in range(1, len(num)):
        if _n % num[i] != 0:
            ran = num[i]
    return ran

@app.post("/api/rsa/encryption")
async def encode(body: en_Rsa):
    p = random_p_q()
    q = random_p_q(p)
    n = p*q
    _n = (p-1) * (q-1)
    e = random_e(n)
    d = random_d(e,_n)
    ascii = []
    for i in range(len(body.text)):
        ascii.append(chr((ord(body.text[i])**e)%n))
    data = {"text" : ''.join(map(str,ascii)),"d":d,"n":n}
    return data

@app.post("/api/rsa/decryption")
async def decode(body: de_Rsa):
    ascii = []
    for i in range(len(body.text)):
        ascii.append(chr((ord(body.text[i]) ** body.d) % body.n))
    data = {"text": ''.join(map(str,ascii))}
    return data


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/Test/{x}")
async def Test(x):
    return x

@app.post("/Test")
async def Test(body: items):
    return body


