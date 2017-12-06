a = input('세 개의 수를 입력하세요(,로 분류): ')

a = a.split(',')


if (a[0] == '1') :
    print(int(a[1]) + int(a[2]))
elif (a[0] == '2') :
    print(int(a[1]) - int(a[2]))
elif (a[0] == '3') :
    print(int(a[1]) * int(a[2]))
elif (a[0] == '4') :
    print(int(a[1]) / int(a[2]))
else :
    print(a)
#print(a)