export CLICOLOR=1
export LSCOLORS=gxBxhxDxfxhxhxhxhxcxcx
export PATH=~/.local/bin:$PATH
export BASH_SILENCE_DEPRECATION_WARNING=1

# this will prob cause problems later
export AWS_SHARED_CREDENTIALS_FILE=~/.aws/config

alias ls="ls -lSrh"
alias ..="cd ../"
alias ...="cd ../../"
alias ....="cd ../../../"
alias .....="cd ../../../../"
alias reload="exec bash -l"
alias vim="vim -S ~/.vimrc"
alias vi="vim -S ~/.vimrc"

alias tf="terraform"
alias tfws="terraform workspace"
alias gp='git pull origin $(git rev-parse --abbrev-ref HEAD)'
alias greb='git rebase -i origin/master'
alias gpu='git push origin $(git rev-parse --abbrev-ref HEAD)'
alias gitprune='git branch --merged | egrep -v "(^\*|master|dev|qa)" | xargs git branch -d'
alias k="kubectl"

alias docker_kill="docker stop $(docker ps -aq)"
alias whatsmyip="curl ifconfig.me | pbcopy"

parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

source ~/.git-completion.bash
source ~/.zshrc

export PS1="\[\033[35m\]\[\033[m\]\[\033[36m\]\u\[\033[35m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\] ~> "

eval "$(/opt/homebrew/bin/brew shellenv)"
