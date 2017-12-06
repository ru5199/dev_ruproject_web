list = ['park', 'lee', 'kim']
list2 = [1,2,3]
#ind = list2[1] 얘는 list2의 요소 자체
ind = list.index('lee') #얘는 요소의 위치
list2.insert(ind, 4)

print(list2)

