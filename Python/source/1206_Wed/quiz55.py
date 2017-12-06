while(True):
    a = input('\n두 수를 입력하세요:(q를 입력하면 종료)(,구분) ')

    if a == 'q' :
        print('종료합니다.')
        break
    a = a.split(',')
    b = input('원하는 연산을 선택하세요: ')

    if b == '1' :
        print('덧셈을 선택하셨습니다. 결과는 ', int(a[0])+int(a[1]))
    elif b == '2' :
        print('뺄셈을 선택하셨습니다. 결과는 ', int(a[0])-int(a[1]))
    elif b == '3' :
        print('곱셈을 선택하셨습니다. 결과는 ', int(a[0])*int(a[1]))
    elif b == '4' :
        print('나눗셈을 선택하셨습니다. 결과는 ', int(a[0])/int(a[1]))