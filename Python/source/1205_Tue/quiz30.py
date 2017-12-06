a = input('좋아하는 알파벳을 입력하세요:(띄워쓰기로 구분) ')
b = input('싫어하는 알파벳을 입력하세요:(띄워쓰기로 구분) ')

a = a.split(' ');
b = b.split(' ');

a.sort();
b.sort();

print(a[0] < b[0]);