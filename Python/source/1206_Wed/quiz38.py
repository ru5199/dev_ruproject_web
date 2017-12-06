dic= {'one':'하나', 'two': '둘'}
el = input('키와 값을 입력하세요(:로 구분): ')
b = el.split(':')
c = b[0]
d = b[1]
dic[c] = d

#a[c]=d
#el = dict(b)
#dic.update(b)

print(dic)
