
a = 0

while(True):
    a = input('수를 입력하세요, 단 q를 입력하면 종료: ')
    if a == 'q' :
        print('종료합니다.')
        break

    print(int(a)+10)
