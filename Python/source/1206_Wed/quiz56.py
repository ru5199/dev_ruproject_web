while(True):
    def welcome():
        print('\n[만나서 반갑습니다. 계산기의 사용방법은 먼저 두 수를 입력받고 원하는 연산에 대한 번호를 입력하면 됩니다.]')

    welcome()
    a = input('두 수를 입력하세요:(q를 입력하면 종료)(,구분) ')
    if( a == 'q'):
        print('종료합니다')
        break
    else:
        a = a.split(',')
        b = input('원하는 연산을 선택하세요: ')
        b = int(b)
        if(b == 1):
            result = int(a[0]) + int(a[1])
            print('덧셈을 선택하셨습니다. 결과는', result )
        elif(b == 2):
            result = int(a[0]) - int(a[1])
            print('뺄셈을 선택하셨습니다. 결과는', result )
        elif (b == 3):
            result = int(a[0]) * int(a[1])
            print('곱셈을 선택하셨습니다. 결과는', result)
        elif (b == 4):
            result = int(a[0]) / int(a[1])
            print('나눗셈을 선택하셨습니다. 결과는', result)
