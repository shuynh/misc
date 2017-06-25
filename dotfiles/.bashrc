export CLICOLOR=1
export LSCOLORS=gxBxhxDxfxhxhxhxhxcxcx

export PGHOST=localhost

alias ..="cd .."


parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

export PS1="\[\033[35m\]\[\033[m\]\[\033[36m\]\u\[\033[35m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\] ~> "
