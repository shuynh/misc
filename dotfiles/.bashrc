# Only run this file if in Bash
[ -n "$BASH_VERSION" ] || return 0

export PATH=/usr/local/bin:$PATH
export CLICOLOR=1
export LSCOLORS=gxBxhxDxfxhxhxhxhxcxcx
export PATH=~/.local/bin:$PATH
export BASH_SILENCE_DEPRECATION_WARNING=1

export PS1="\[\033[35m\]\[\033[m\]\[\033[36m\]\u\[\033[35m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\] ~> "
export PROMPT_COMMAND='history -a; history -c; history -r'

#eval "$(/opt/homebrew/bin/brew shellenv)"
#[ -r ~/.bashrc ] && source ~/.bashrc

# iterm stuff
export HISTSIZE=100000
export HISTFILESIZE=200000
shopt -s histappend
export PROMPT_COMMAND='history -a; history -c; history -r'

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
alias tflockfile="rm -rf .terraform .terraform.lock.hcl && terraform init -upgrade && terraform providers lock -platform=darwin_amd64 -platform=linux_amd64"
alias tfplanout="source .local_setup && tf init && tf plan -out=plan.tfplan"
alias tfplanoutnoinit="source .local_setup && tf plan -out=plan.tfplan"
alias tfapply="source .local_setup && tf init && tf apply"

alias gp='git pull origin $(git rev-parse --abbrev-ref HEAD)'
alias gc='git commit -am'
alias greb='git rebase -i origin/master'
alias gpu='git push origin $(git rev-parse --abbrev-ref HEAD)'
alias gitprune='git branch --merged | egrep -v "(^\*|main|dev|develop|qa)" | xargs git branch -d'
alias k="kubectl"

alias matrix='/Users/steven.huynh/Projects/bash-screensavers/screensaver.sh matrix'
alias dos2plan='dos2unix .local_setup && source .local_setup && tf init && tf plan -out=plan.tfplan'

#alias docker_kill="docker stop $(docker ps -aq)"
alias whatsmyip="curl ifconfig.me | pbcopy"

parse_git_branch() {
  git rev-parse --is-inside-work-tree &>/dev/null || return
  local branch
  branch=$(git symbolic-ref --short HEAD 2>/dev/null || git describe --tags --exact-match 2>/dev/null)
  if [ -n "$branch" ]; then
    echo " ($branch)"
  fi
}

[[ -r "/opt/homebrew/etc/profile.d/bash_completion.sh" ]] && . "/opt/homebrew/etc/profile.d/bash_completion.sh"

if [ -f ~/.git-completion.bash ]; then
  . ~/.git-completion.bash
fi


cursor() {
  if [ -z "$1" ]; then
    open -a "Cursor" .
  else
    open -a "Cursor" "$@"
  fi
}

# Nix
if [ -e '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh' ]; then
  . '/nix/var/nix/profiles/default/etc/profile.d/nix-daemon.sh'
fi

# Open current directory in GitLab
gl() {
    local current_dir=$(pwd)
    local branch="${1:-develop}"  # Default to develop, or use argument
    
    # Check if we're in a welllabs directory
    if [[ ! "$current_dir" =~ welllabs/ ]]; then
        echo "Error: Not in a welllabs project directory"
        return 1
    fi
    
    # Extract path after welllabs/
    local welllabs_path="${current_dir#*welllabs/}"
    
    # Split into project (first 2 parts) and subpath (rest)
    local project=$(echo "$welllabs_path" | cut -d'/' -f1-2)
    local subpath=$(echo "$welllabs_path" | cut -d'/' -f3-)
    
    # Construct URL
    local url="https://gitlab.com/welllabs/${project}/-/tree/${branch}"
    
    # Add subpath if it exists
    if [[ -n "$subpath" && "$subpath" != "$project" ]]; then
        url="${url}/${subpath}"
    fi
    
    echo "opening: $url"
    open -a "Google Chrome" "$url"
}

# Terraform plan destroy extraction
extract-destroys() {
    python3 /Users/steven.huynh/Projects/scripts/extract_timestamp_destroys.py "$@"
}
