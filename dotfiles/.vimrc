execute pathogen#infect()
call pathogen#helptags()

autocmd VimEnter * NERDTree
autocmd VimEnter * wincmd p
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
let NERDTreeShowHidden=1
let NERDTreeIgnore=['\.DS_Store$', '\.vim$', '\.gitignore$']

set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'
Plugin 'editorconfig/editorconfig-vim'

syntax on
syntax enable
set smartindent
set autoindent
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
