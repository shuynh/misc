export PATH=/usr/local/bin:$PATH
export CLICOLOR=1
export LSCOLORS=gxBxhxDxfxhxhxhxhxcxcx
export PATH=~/.local/bin:$PATH
export BASH_SILENCE_DEPRECATION_WARNING=1

# iterm stuff
export HISTSIZE=100000
export HISTFILESIZE=200000
shopt -s histappend
export PROMPT_COMMAND='history -a; history -c; history -r'

# this will prob cause problems later
#export AWS_SHARED_CREDENTIALS_FILE=~/.aws/config

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

#alias docker_kill="docker stop $(docker ps -aq)"
alias whatsmyip="curl ifconfig.me | pbcopy"

#parse_git_branch() {
#  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
#}

parse_git_branch() {
  git rev-parse --is-inside-work-tree &>/dev/null || return
  local branch
  branch=$(git symbolic-ref --short HEAD 2>/dev/null || git describe --tags --exact-match 2>/dev/null)
  if [ -n "$branch" ]; then
    echo " ($branch)"
  fi
}

[[ -r "/opt/homebrew/etc/profile.d/bash_completion.sh" ]] && . "/opt/homebrew/etc/profile.d/bash_completion.sh"

export PS1="\[\033[35m\]\[\033[m\]\[\033[36m\]\u\[\033[35m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\] ~> "

eval "$(/opt/homebrew/bin/brew shellenv)"

if [ -f ~/.git-completion.bash ]; then
  . ~/.git-completion.bash
fi
