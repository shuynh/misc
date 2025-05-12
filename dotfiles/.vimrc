execute pathogen#infect()
call pathogen#infect()
filetype plugin indent on

set nocompatible              " be iMproved, required
filetype off                  " required

syntax on
syntax enable

set noai
set smartindent
set noautoindent
set expandtab
set tabstop=2
set shiftwidth=4
set number
set backspace=2 " make backspace work like most other apps
set ruler
set nowrap
set nobackup
set noerrorbells                " don't whine
set incsearch                   " highlight as we search
set showmatch                   " show matching brackets
set nobackup
set noswapfile
set laststatus=2
set statusline+=%F

nnoremap ; :
noremap <silent> <c-u> :call smooth_scroll#up(&scroll, 5, 2)<CR>
noremap <silent> <c-d> :call smooth_scroll#down(&scroll, 5, 2)<CR>
noremap <silent> <c-b> :call smooth_scroll#up(&scroll*2, 5, 4)<CR>
noremap <silent> <c-f> :call smooth_scroll#down(&scroll*2, 5, 4)<CR>
nnoremap <Leader>c :set cursorline! cursorcolumn!<CR>
nnoremap <Leader>m :TernDef<CR>
nnoremap <Leader>u :TernRefs<CR>
nnoremap <Leader>r :TernRename<CR>
nnoremap <Leader>gd :call MyDiffToggle()<cr>
nnoremap <Leader>f :Ack --smart-case<space>

function! InsertTabWrapper()
     let col = col('.') - 1 
     if !col || getline('.')[col - 1] !~ '\k'
         return "\<tab>"
     else
         return "\<c-p>"
     endif
endfunction
   
inoremap <tab> <c-r>=InsertTabWrapper()<cr>

map <C-Left> <Esc>:tabprev<CR>
map <C-Right> <Esc>:tabnext<CR>
map <C-n> <Esc>:tabnew

vmap <C-x> :!pbcopy<CR>  
vmap <C-c> :w !pbcopy<CR><CR> 
au BufNewFile,BufRead Jenkinsfile setf groovy

set paste
set mouse=a

" Automatically convert CRLF to LF on file open
autocmd BufWritePre * :silent! %s/\r$//
