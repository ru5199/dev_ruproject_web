a = input('두 수를 입력하세요: ')
b = a.split(' ');

c = b[0];
d = b[1];
c = int(c);
d = int(d);

print('두 수의 합: ', c + d);
print('두 수의 차: ', c - d);
print('두 수의 곱: ', c * d);
print('두 수의 나누기: ', c / d);