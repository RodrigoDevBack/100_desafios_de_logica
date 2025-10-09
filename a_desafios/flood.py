import os

for i in range(1, 101):
    path = f'desafio_{i}'
    os.mkdir(path)
    with open(f'{path}/index.html', 'x') as x:
        x.close()
    with open(f'{path}/main.js', 'x') as x:
        x.close()
