syntax on
set smartindent
set autoindent
set expandtab
set tabstop=2
set shiftwidth=2
set number
set ruler
set nowrap
set nobackup
set noerrorbells                " don't whine
set incsearch                   " highlight as we search
set showmatch                   " show matching brackets
imap qq <Esc>

   function! InsertTabWrapper()
         let col = col('.') - 1 
         if !col || getline('.')[col - 1] !~ '\k'
             return "\<tab>"
         else
             return "\<c-p>"
         endif
   endfunction
   
   inoremap <tab> <c-r>=InsertTabWrapper()<cr>

if !has("gui_running")
  let g:AutoClosePreservDotReg = 0
  endif

au BufRead,BufNewFile *.json set filetype=json
au! Syntax json source /Users/steven/.vim/ftplugin/json.vim
