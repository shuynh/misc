export CLICOLOR=1
export LSCOLORS=gxBxhxDxfxhxhxhxhxcxcx
export PATH=~/.local/bin:$PATH
export PGHOST=localhost
alias ls="ls -lSrh"
alias ..="cd ../"

alias whatsmyip="curl ifconfig.me | pbcopy"

parse_git_branch() {
	git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

source ~/.git-completion.bash

export PS1="\[\033[35m\]\[\033[m\]\[\033[36m\]\u\[\033[35m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\] ~> "

export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"

rspecdb() {
  rake db:drop db:setup RAILS_ENV=test
  rspec $@
}

PATH=$PATH:/Applications/Lynxlet.app/Contents/Resources/lynx/bin

export PATH=$PATH:~/.vimpkg/bin

# CASPER OPS

[[ -s $HOME/.nvm/nvm.sh ]] && . $HOME/.nvm/nvm.sh

#[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
#export PYENV_ROOT="$HOME/.pyenv" echo export PATH="$PYENV_ROOT/bin:$PATH" echo eval "$(pyenv init -)" exec /bin/bash -l pyenv install 3.6.1 pyenv global 3.6.1

. $HOME/.asdf/asdf.sh

. $HOME/.asdf/completions/asdf.bash

