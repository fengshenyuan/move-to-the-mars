# Things to make you live a better world with shell!
## Git 
git alias
```
alias.st=status
alias.br=branch
alias.co=checkout
alias.cm=commit
alias.pl=pull
alias.ps=push
alias.plog=log --graph --pretty='format:%C(red)%d%C(reset) %C(yellow)%h%C(reset) %ar %C(green)%aN%C(reset) %s'
alias.undo=rest --soft HEAD^
alias.pm=pull origin master
alias.brc=!git branch --merged | grep -v '\*\|master\|dev' | xargs -n 1 git branch -d
```
