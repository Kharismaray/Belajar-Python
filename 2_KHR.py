a = input ('masukan nilai x = ')
b = input ('masukan nilai y = ')
oper = input("Choosxe a math operation (+, -, *, /): ")

a = int(a)
b = int(b)

print("Menghitung...")

jikaTambah = oper == "+"

hasil = -1

if jikaTambah:
    hasil = a + b
elif oper == "-":
    hasil = a - b
elif oper == "*":
    hasil = a * b
elif oper == "/":
    hasil = a / b

if hasil == -1:
    print("Operator tidak diketahui")
else:
    print("Hasil:" + str(hasil))
